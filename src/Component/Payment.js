import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const plans = [
    
    {title: ' 3 Post per Day', amount: '$5/month', planId: '$5 (3 post/day)' },
    { title: '5 Posts per Day', amount: '$10/month', planId: '$10 (5 post/day)' },
    { title: '10 Posts per Day', amount: '$15/month', planId: '$15 (10 post/day)' }
  ];

  const handlePayment = (planId) => {
   
    localStorage.setItem('selectedPlan', planId);
    alert('Payment successful! You selected: ' + planId);
  };

  return (
    <div className="payment-container">
      <div className="payment-details">
      
        <p>Why being Limited to 1 post/day. Get unlimited access to everything </p>
        <p>Plans starting at less than $1/week. Explore </p>
      </div>
      <div className='card-pay'>
        {plans.map((plan, index) => (
          <div className="payment-card" key={index}>
            <h2 className="payment-card-title">{plan.title}</h2>
            <p className="payment-amount">{plan.amount}</p>
            <button className="pay-button" onClick={() => handlePayment(plan.planId)}>Pay Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;

