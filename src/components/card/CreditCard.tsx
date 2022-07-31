import React from 'react'
import styled from 'styled-components'
import Card from 'react-credit-cards'

const Container = styled.div`
  display: block;
  margin: 1.6rem 0;
`

interface IProps {
  list?: boolean
  name?: string
  number?: number
  expiryMonth?: number
  expiryYear?: number
  cvc?: number
}

const CreditCard = ({
  list,
  name,
  number,
  expiryMonth,
  expiryYear,
  cvc,
}: IProps) => {
  return (
    <Container>
      {list && (
        <Card
          name={name}
          number={number}
          expiry={`${expiryMonth}/${expiryYear}`}
          cvc={cvc}
        />
      )}

      {!list && (
        <Card
          name="Enter Name"
          number="**** **** **** 7048"
          expiry="10/20"
          cvc="737"
          preview={true}
          issuer="visa"
        />
      )}
    </Container>
  )
}

export default CreditCard
