import React from 'react';
import { useCart } from '../components/CartProvider';
import { Badge } from 'react-bootstrap'; // Adjust the import path based on your project structure

export default function Cart() {
    const { cart, removeItemFromCart } = useCart();

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Function to handle checkout
    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem('userEmail');
    
        try {
            let response = await fetch('http://localhost:5000/api/orderData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userEmail,
                    order_data: cart,
                    order_date: new Date().toDateString()
                })
            });
    
            // Handle the response, e.g., check for success or failure
            if (response.ok) {
                console.log('Order placed successfully');
                
                // Display alert message
                alert('Your order is stored!');
    
                // Redirect to the home page
                window.location.href = '/';
            } else {
                console.error('Error placing order');
                
                // Display alert for error
                alert('Error placing order. Please try again.');
    
                // Implement error handling logic
            }
        } catch (error) {
            console.error('Error:', error);
            
            // Display alert for network or other errors
            alert('Error: Unable to connect. Please check your network.');
    
            // Handle network or other errors
        }
    };
    

    // Function to handle item removal
    const handleRemoveItem = (index) => {
        // Pass the item index to removeItemFromCart
        removeItemFromCart(index);
    };

    return (
        <div>
            <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md'>
                <table className='table table-hover'>
                    <thead className=' text-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.option}</td>
                                <td>RS {item.price}.00</td>
                                <td>
                                    {/* Add a button to remove the item */}
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleRemoveItem(index)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <h1 className='fs-2'>Total Price: RS {totalPrice}.00</h1>
                </div>
                <div>
                    <button className='btn bg-success mt-5' onClick={handleCheckOut}>
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
}
