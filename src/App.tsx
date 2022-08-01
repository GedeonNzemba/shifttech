import Header from './components/header/Header'
import styled from 'styled-components'
import CreditCard from './components/card/CreditCard'
import List from './components/listing/Lists'
import Floater from './components/float/Floater'

const Container = styled.div`
  background-color: #ffffff;
  position: relative;
`
const Wrap = styled.div`
  padding: 1.6rem;
`
const ListContainer = styled.div`
  position: relative;
  background-color: #c0cbc0;
  border-radius: 1rem 1rem 0 0;
  padding: 1.6rem;
`
const Handler = styled.div`
  position: absolute;
  top: 0.8%;
  width: 5rem;
  height: 0.4rem;
  border-radius: 2rem;
  background-color: #ffffff;
  cursor: pointer;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  /* Firefox */
  -ms-transform: translate(-50%, -50%);
  /* IE 9 */
  -webkit-transform: translate(-50%, -50%);
  /* Safari and Chrome*/
  -o-transform: translate(-50%, -50%);
  /* Opera */
  transform: translate(-50%, -50%);
`

export const App = () => {
  return (
    <Container>
      <Wrap>
        <Header />
        <CreditCard />
      </Wrap>

      <ListContainer>
        <Handler />
        <List />
      </ListContainer>

      <Floater />
    </Container>
  )
}

// Add credit card component
// resent cards component must switch when add card button is clicked
// when add card button is clicked,
// # header must be pushed up
// # Name and Welcome component must be removed
// # add smooth transition when it does remove

// After adding, everything should revert back to normal

// TODO: how to lift up the lid
// TODO: CREATE MONGONDB DATBASE
// TODO: ADD APOLLO CLIENT
