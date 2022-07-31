import Header from './components/header/Header'
import styled from 'styled-components'
import CreditCard from './components/card/CreditCard'
import List from './components/listing/Lists'

const Container = styled.div`
  background-color: #ffffff;
`
const Wrap = styled.div`
  padding: 1.6rem;
`
const ListContainer = styled.div`
  background-color: #c0cbc0;
  border-radius: 1rem 1rem 0 0;
  padding: 1.6rem;
`

export const App = () => {
  return (
    <Container>
      <Wrap>
        <Header />
        <CreditCard />
      </Wrap>

      <ListContainer>
        <List />
      </ListContainer>
    </Container>
  )
}
