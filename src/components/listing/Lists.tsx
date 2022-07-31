import styled from 'styled-components'
import CreditCard from '../card/CreditCard'

const Container = styled.div`
  display: block;
`
const ListHeading = styled.h3`
  color: #101010;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-block: 0;
  margin-top: 1.2rem;
`
const ListWrapper = styled.div`
  display: block;
  margin-top: 3rem;
`
const Item = styled.div`
  display: block;
`

const List = () => {
  const lists = [
    {
      name: 'John Smith',
      number: '5555 4444 3333 1111',
      expiry: '10/20',
      cvc: '737',
    },
    {
      name: 'John Smith',
      number: '4111 1111 1111 1111',
      expiry: '10/20',
      cvc: '737',
    },
    {
      name: 'John Smith',
      number: '3700 0000 0000 002',
      expiry: '10/20',
      cvc: '737',
    },
    {
      name: 'John Smith',
      number: '3600 666633 3344',
      expiry: '10/20',
      cvc: '737',
    },
    {
      name: 'John Smith',
      number: '6011 6011 6011 6611',
      expiry: '10/20',
      cvc: '737',
    },
    {
      name: 'John Smith',
      number: '5066 9911 1111 1118',
      expiry: '10/20',
      cvc: '737',
    },
    {
      name: 'John Smith',
      number: '6250 9460 0000 0016',
      expiry: '10/20',
      cvc: '737',
    },
    {
      name: 'John Smith',
      number: '6062 8288 8866 6688',
      expiry: '10/20',
      cvc: '737',
    },
  ]

  return (
    <Container>
      <ListHeading>resent cards</ListHeading>

      <ListWrapper>
        {lists.map((item, index) => {
          return (
            <Item key={index}>
              <CreditCard
                list={true}
                name={item.name}
                number={item.number}
                expiry={item.expiry}
                cvc={item.cvc}
              />
            </Item>
          )
        })}
      </ListWrapper>
    </Container>
  )
}

export default List
