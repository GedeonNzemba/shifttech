import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill } from 'react-icons/bs'
import { MdAddToPhotos } from 'react-icons/md'

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #10152b;
  border-radius: 2rem;
  margin: 0 auto;
  width: 30%;
  padding: 1.2rem 2.5rem;
  bottom: 0.5rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
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
const Item = styled.div`
  display: block;
  cursor: pointer;
`

const Floater = () => {
  return (
    <Container>
      <Item>
        <BsFillGridFill color="#ffffff" size={20} />
      </Item>
      <Item>
        <MdAddToPhotos color="#ffffff" size={25} />
      </Item>
    </Container>
  )
}

export default Floater
