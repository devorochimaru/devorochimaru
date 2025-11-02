import React from 'react';

function PriceModal({ data }) {
    // If no panel has been clicked yet, the 'data' will be null.
    // We'll show a placeholder title in that case.
    if (!data) {
        return (
            <div className="modal fade" id="priceModal" tabIndex="-1" aria-labelledby="priceModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="priceModalLabel">Details</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Please select a panel to view details.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // When a panel IS clicked, we'll show its specific details.
    return (
        <div className="modal fade" id="priceModal" tabIndex="-1" aria-labelledby="priceModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="priceModalLabel">{data.name}</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {data.prices.map((price, index) => (
                            // dangerouslySetInnerHTML is used here to allow the <strong> tag from your data.
                            <p key={index} dangerouslySetInnerHTML={{ __html: price }}></p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceModal;