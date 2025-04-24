import React from 'react'
import './Building3D.css'
import { Link } from "react-router-dom"

const Building3D = ({ building }) => {
    return (
        <div className="building-3d-card">
            <div className="building-3d-viewer">
                {/* Placeholder for your 3D viewer - could be iframe or Three.js component */}
                <iframe
                    title={building.title || "3D Model"}
                    src={`https://sketchfab.com/models/${building.modelId}/embed`}
                    className="model-iframe"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                ></iframe>

                {/* Fallback image */}
                <img src={building.thumbnail} alt={building.name} className="model-fallback" />
            </div>
            <div className="building-details">
                <h3>{building.name}</h3>
                <div className="building-meta">
                    <span className="price">{building.price} ETH</span>
                    <span className="size">{building.size} sqft</span>
                </div>
                <div className="building-actions">
                    <Link to={`/building/${building.id}`}>
                        <button className="view-button">
                            View Details
                        </button>
                    </Link>
                    <button className="invest-button">
                        Invest
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Building3D;