import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Transfer = () => {
  return (
    <section className='payment-transfer'>
      <HeaderBox title="Payment Transfer" subtext="Please provide any additional details pertaining to the transfer" />
      <section className='size-full pt-5'>
        <PaymentTransferForm />
      </section>
    </section>
  )
}

export default Transfer