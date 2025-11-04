require('dotenv').config();

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const nodemailer = require('nodemailer');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (req.method === 'POST' && parsedUrl.pathname === '/contact') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = JSON.parse(body);
            const { name, email, subject, message } = formData;

            // Configurar Nodemailer
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'wazasoftsolutions@gmail.com', // email
                    pass: process.env.GMAIL_APP_PASSWORD // App password de Gmail
                }
            });

            const mailOptions = {
                from: email,
                to: 'wazasoftsolutions@gmail.com',
                subject: `Nuevo mensaje de contacto: ${subject}`,
                text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: 'Error al enviar el email' }));
                } else {
                    console.log('Email sent: ' + info.response);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, message: 'Email enviado exitosamente' }));
                }
            });
        });
    } else {
        let filePath;
        if (parsedUrl.pathname === '/') {
            filePath = path.join(__dirname, '../../index.html');
        } else {
            let url = parsedUrl.pathname.startsWith('/') ? parsedUrl.pathname.slice(1) : parsedUrl.pathname;
            if (url.startsWith('assets/')) {
                filePath = path.join(__dirname, '../', url);
            } else if (url.startsWith('public/assets/')) {
                filePath = path.join(__dirname, '../', url.slice(7));
            } else {
                filePath = path.join(__dirname, '../../', url);
            }
        }

        // Obtener la extensión del archivo
        const ext = path.extname(filePath);

        // Mapear extensiones a tipos MIME
        const mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.ico': 'image/x-icon',
            '.svg': 'image/svg+xml'
        };

        const contentType = mimeTypes[ext] || 'text/plain';

        fs.readFile(filePath, (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(404);
                    res.end('Not found');
                } else {
                    res.writeHead(500);
                    res.end('Server error');
                }
            } else {
                res.writeHead(200, {'Content-Type': contentType});
                res.end(data);
            }
        });
    }
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
