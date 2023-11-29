import React from 'react';

export default function Card3() {
    return (
        <div>
            <div className="card" style={{ width: '18rem', maxHeight: '360px' }}>
                <img src="https://source.unsplash.com/random/900x700/?drinks" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fst-italic">Cool Drinks</h5>
                    <p className="card-text fst-italic" >
                        enjoy meal with us
                    </p>
                    <div className="container w-100">
                        <select className="m-2 h-100  bg-success rounded">
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <select className="m-2 h-100  bg-success rounded">
                            <option value="half">half</option>
                            <option value="full">full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            total price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
