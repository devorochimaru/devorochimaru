import React from 'react';

function Testimonials() {
    return (
        <section className="text-center mb-5">
            <h2 className="mb-4">What Our Clients Say</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card p-4">
                        <p className="fst-italic">"The Internal Max+ panel is insane. The performance is top tier and the support from Orochimaru is fantastic developer. Highly recommended..."</p>
                        <h5 className="mt-2">Ayush_72</h5>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-4">
                        <p className="fst-italic">"As a streamer, the Streamer Panel was a game changer. It's completely undetectable and runs perfectly on my PC without any lag. 10/10."</p>
                        <h5 className="mt-2">Warrior_yt11</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;