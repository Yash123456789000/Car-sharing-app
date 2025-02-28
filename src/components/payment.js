"use client"
import CheckoutForm from '../components/Home/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation'
import React, { useContext } from 'react'
import { FareUpdateContext } from '../context/FareUpdateContext';
import { Toaster } from "../components/ui/sonner"

const Payment = () => {
    const searchParams=useSearchParams();
    const amount=searchParams.get('amount');
    const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
    const options={
        mode: 'payment',
        amount: Math.round(amount*100),
        currency: 'usd',
    }
    const {fareUpdated, setFareUpdated} = useContext(FareUpdateContext)
  return (
    <Elements stripe={stripePromise} options={options}>
        {fareUpdated?<><CheckoutForm amount={amount}/><Toaster /></>:<CheckoutForm amount={amount}/>}
    </Elements>
  )
}

export default Payment