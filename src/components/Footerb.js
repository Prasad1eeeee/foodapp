import React from 'react';

const Footerb = () => {
    const footerStyle = {
        background: '#333',
        color: '#fff',
        padding: '0.0rem', // Adjust the padding to reduce the height
        display: 'flex',
        justifyContent: 'space-around',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
    };

    return (
        <footer style={footerStyle}>
            <div>
                <p>Contact Us</p>
                <p>Email: contact@example.com</p>
                
            </div>

            <div>
                <p>Follow Us</p>
                <p>Facebook</p>
                

            </div>

            <div>
                <p>Address</p>
                <p>123 Main Street</p>
                
            </div>
        </footer>
    );
};

export default Footerb;
