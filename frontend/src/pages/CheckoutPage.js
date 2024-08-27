import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
    const [checkoutUrl, setCheckoutUrl] = useState('');

    useEffect(() => {
        // Fetch PayPal checkout URL from the backend
        const fetchCheckoutUrl = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/checkout');
                setCheckoutUrl(response.data.url);
            } catch (error) {
                console.error('Error creating PayPal checkout session:', error);
            }
        };

        fetchCheckoutUrl();
    }, []);

    const handleCheckout = () => {
        if (checkoutUrl) {
            window.location.href = checkoutUrl; // Redirect to PayPal checkout page
        }
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <p>Review your order and proceed to payment.</p>
            <button onClick={handleCheckout} disabled={!checkoutUrl}>
                Proceed to PayPal
            </button>
        </div>
    );
};

export default CheckoutPage;
