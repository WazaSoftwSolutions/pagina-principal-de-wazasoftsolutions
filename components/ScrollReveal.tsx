'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ScrollRevealProps = {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | string;
    delay?: number;
    className?: string;
    id?: string;
    onClick?: () => void;
};

export default function ScrollReveal({
    children,
    animation = 'fade-up',
    delay = 0,
    className = '',
    id,
    onClick
}: ScrollRevealProps) {
    let y = 0;
    let x = 0;
    let scale = 1;

    if (animation === 'fade-up') y = 10;
    else if (animation === 'fade-down') y = -10;
    else if (animation === 'fade-left') x = 10;
    else if (animation === 'fade-right') x = -10;
    else if (animation === 'zoom-in') scale = 0.8;

    return (
        <motion.div
            id={id}
            className={className}
            onClick={onClick}
            initial={{ opacity: 1, y, x, scale }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 0.8,
                delay: delay / 1000,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
