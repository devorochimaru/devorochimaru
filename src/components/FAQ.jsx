import React from 'react';

function FAQ() {
    return (
        <section className="mb-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
                {/* FAQ Item 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            Are these panels safe to use?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Absolutely. Safety is our number one priority, and every product in our lineup is developed to be secure and reliable. Each panel undergoes rigorous testing to ensure it remains undetectable, providing robust protection for you and your accounts. We integrate advanced security measures like Anti-Debug and Anti-Crack systems, so you can operate with complete peace of mind.
                        </div>
                    </div>
                </div>
                {/* FAQ Item 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            How does the 'Lifetime' license work?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            A lifetime license is a single, one-time purchase that grants you permanent access to the product. You will receive all future updates, new features, and dedicated support for the entire lifespan of the software, with no hidden fees or subscriptions.
                        </div>
                    </div>
                </div>
                {/* FAQ Item 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                           What payment methods do you accept?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           We accept all major UPI platforms, including PhonePe and Google Pay, for fast and easy transactions. For your security, please contact us directly on WhatsApp or Discord, and we will provide a secure payment link to finalize your order.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;