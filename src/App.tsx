import Header from './components/header/Header'
import styled from 'styled-components'
import CreditCard from './components/card/CreditCard'

const Container = styled.div`
  background-color: #ffffff;
  padding: 1.6rem;
`

export const App = () => {
  return (
    <Container>
      <Header />
      <CreditCard />
    </Container>
  )
}
