// Card.js
import React, { useState, useEffect } from 'react';
import { useCart } from './CartProvider'; // Update the import path based on your project structure

export default function Card(props) {
    console.log('Card component is rendering');
    const { addItemToCart } = useCart();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState(Object.keys(props.options)[0]);
    const [finalPrice, setFinalPrice] = useState(props.options[selectedOption]);

    useEffect(() => {
        // Update final price whenever selected quantity or option changes
        const newFinalPrice = props.options[selectedOption] * selectedQuantity;
        setFinalPrice(newFinalPrice);
    }, [selectedQuantity, selectedOption, props.options]);

    const handleAddToCart = () => {
        const item = {
            name: props.foodName,
            quantity: selectedQuantity,
            option: selectedOption,
            price: finalPrice,
        };

        addItemToCart(item);
        console.log('Added to Cart:', item);
    };

    return (
        <div>
            <div className="card" style={{ width: '18rem', maxHeight: '360px' }}>
                <img src={props.imgSrc} className="card-img-top" alt={props.foodName} style={{ height: '150px', objectFit: 'fill' }} />
                <div className="card-body">
                    <h5 className="card-title fst-italic">{props.foodName}</h5>

                    <div className="container w-100">
                        <select
                            className="m-2 h-100  bg-success rounded"
                            value={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                        >
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <select
                            className="m-2 h-100  bg-success rounded"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            {Object.keys(props.options).map((data) => (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                        <button className="btn btn-primary" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <div className='d-inline h-100 fs-5'>
                          RS {finalPrice}.00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
