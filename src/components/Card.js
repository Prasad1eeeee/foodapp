
import React from 'react';

export default function Card(props) {
    let option = props.options;
    let priceOption = Object.keys(option);
    
    return (
        <div>
            <div className="card" style={{ width: '18rem', maxHeight: '360px' }}>
                <img src={props.imgSrc} className="card-img-top" alt={props.foodName} />
                <div className="card-body">
                    <h5 className="card-title fst-italic">{props.foodName}</h5>

                    <div className="container w-100">
                        <select className="m-2 h-100  bg-success rounded">
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <select className="m-2 h-100  bg-success rounded">
                            {priceOption.map((data) => (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            ))}
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
