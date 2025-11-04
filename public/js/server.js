const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath;
    if (req.url === '/') {
        filePath = path.join(__dirname, '../../index.html');
    } else {
        let url = req.url.startsWith('/') ? req.url.slice(1) : req.url;
        if (url.startsWith('assets/')) {
            filePath = path.join(__dirname, '../', url);
        } else if (url.startsWith('public/assets/')) {
            filePath = path.join(__dirname, '../', url.slice(7)); // remove 'public/'
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
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
