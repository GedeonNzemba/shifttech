import React from 'react'
import styled from 'styled-components'
import Card from 'react-credit-cards'

const Container = styled.div`
  display: block;
  margin: 1.6rem 0;
`

const CreditCard = () => {
  return (
    <Container>
      <Card
        name="John Smith"
        number="5555 4444 3333 1111"
        expiry="10/20"
        cvc="737"
      />
    </Container>
  )
}

export default CreditCard
