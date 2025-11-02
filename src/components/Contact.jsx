import React from 'react';

function Contact() {
    return (
        <div className="payment-section text-center mt-5">
            <h2>Ready to Purchase?</h2>
            <p>Contact us directly for a secure payment link and to finalize your order.</p>
            <p>UPI ID for reference: <strong>6381867251@fam</strong></p>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
                <a href="https://wa.me/+916381867251" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <i className="fab fa-whatsapp me-2"></i><strong>Contact on WhatsApp</strong>
                </a>
                <a href="https://discord.com/users/981769019638030366" target="_blank" rel="noopener noreferrer" className="btn btn-discord">
                    <i className="fab fa-discord me-2"></i><strong>Contact on Discord</strong>
                </a>
            </div>
        </div>
    );
}

export default Contact;