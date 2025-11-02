import React, { useEffect, useRef } from 'react';

function ParticleBackground() {
    // useRef is a hook that lets us get a reference to an element on the page, like the canvas.
    const canvasRef = useRef(null);

    // useEffect runs the code inside it after the component has been rendered to the screen.
    // This is the correct place for code that directly manipulates the DOM, like canvas drawing.
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
            particles = []; // Reset particles on resize to fill the new space
            for (let i = 0; i < 150; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2.5 + 1,
                    speed: Math.random() * 1 + 0.3
                });
            }
        };

        const drawParticles = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255, 26, 26, 0.5)";
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
                p.y += p.speed;
                if (p.y > canvas.height) {
                    p.y = -p.radius;
                    p.x = Math.random() * canvas.width;
                }
            });
            animationFrameId = requestAnimationFrame(drawParticles);
        };
        
        resizeCanvas();
        drawParticles();
        window.addEventListener("resize", resizeCanvas);

        // This is a cleanup function. It runs when the component is removed to prevent memory leaks.
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // The empty array [] means this effect runs only once when the component first mounts.

    return <canvas ref={canvasRef} id="particles"></canvas>;
}

export default ParticleBackground;