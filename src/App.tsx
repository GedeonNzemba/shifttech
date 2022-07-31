import Header from './components/header/Header'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #ffffff;
  padding: 1.6rem;
`

export const App = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}
