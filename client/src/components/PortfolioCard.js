import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioCard = ({ item }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
