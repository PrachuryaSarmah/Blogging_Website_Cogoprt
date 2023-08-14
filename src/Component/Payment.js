// import React, { useState } from 'react';
// import './Payment.css';

// const Payment = () => {
//   const plans = [
    
//     {title: ' 3 Post per Day', amount: '$5/month', planId: '$5 (3 post/day)' },
//     { title: '5 Posts per Day', amount: '$10/month', planId: '$10 (5 post/day)' },
//     { title: '10 Posts per Day', amount: '$15/month', planId: '$15 (10 post/day)' }
//   ];

//   const handlePayment = (planId) => {
   
//     localStorage.setItem('selectedPlan', planId);
//     alert('Payment successful! You selected: ' + planId);
//   };

//   return (
//     <div className="payment-container">
//       <div className="payment-details">
      
//         <p>Why being Limited to 1 post/day. Get unlimited access to everything </p>
//         <p>Plans starting at less than $1/week. Explore </p>
//       </div>
//       <div className='card-pay'>
//         {plans.map((plan, index) => (
//           <div className="payment-card" key={index}>
//             <h2 className="payment-card-title">{plan.title}</h2>
//             <p className="payment-amount">{plan.amount}</p>
//             <button className="pay-button" onClick={() => handlePayment(plan.planId)}>Pay Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Payment;




import React from 'react';
import './Payment.css';


const loadScript = (src) =>{

  return new Promise( (resolve) =>{
    const script = document.createElement('script')
    script.src = src
    script.onload = () =>{
      resolve(true)
    }
    
    script.onerror = ()=>{
      resolve(false)
    }
    document.body.appendChild(script)
 
  } )
}




const Payment = () => {
  const initializeRazorpay = async (planAmount) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Failed to load Razorpay. Please check your internet connection.');
      return;
    }
    
    const options = {
      key: 'rzp_test_TyMlIksISvdnnn', 
      amount: planAmount * 100,
      currency: 'USD',
      name: 'BLOGGING_PAYMENT',
      description: 'Payment for subscription',
      prefill: {
        name: 'Prachurya Sarmah',
        email: 'prachuryasarmah15@gmail.com',
        contact: '9101261044'
      },
      notes: {
        address: 'Razorpay Corporate office'
      },
      theme: {
        color: '#3399cc'
      }
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const plans = [
    { title: 'Starter! 3 posts per day for $3', amount: 3 },
    { title: 'Silver! 5 posts per day for $5', amount: 5 },
    { title: 'Gold! 10 posts per for $10', amount: 10 }
  ];

  return (
    <div className="payment-container">
      {plans.map((plan, index) => (
        <div className="payment-card" key={index}>
          <h2 className="payment-card-title">{plan.title}</h2>
          <p className="payment-amount">${plan.amount}</p>
          <button className="pay-button" onClick={() => initializeRazorpay(plan.amount)}>
            Pay Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Payment;