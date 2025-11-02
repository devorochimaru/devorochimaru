import React from 'react';
// Go up one folder ('../') to find the data folder
import { panelInfo } from '../data/panelData'; 

function PanelsList() {
    return (
        <section className="text-center mb-5">
            <h2 className="mb-4">Available Panels & Courses</h2>
            <div className="row g-4 justify-content-center">
                {/* This maps over your panel data and creates a card for each one */}
                {panelInfo.map((panel) => (
                    <div className="col-md-6 col-lg-4" key={panel.id}>
                        <div className="card p-3 h-100">
                            <h5>{panel.title}</h5>
                            <p className="mt-2 mb-3">{panel.description}</p>
                            <button
                                className={`btn ${panel.buttonClass || 'btn-red'} mt-auto`}
                                data-bs-toggle="modal"
                                data-bs-target="#priceModal"
                                // This will trigger the modal using Bootstrap's JavaScript
                            >
                                {panel.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PanelsList;