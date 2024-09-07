import React from 'react'
import Button from 'react-bootstrap/Button';

function Bootstrap3() {
  return (
    <>
      <br/>
      <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
      <Button as="input" type="button" value="Input" />{' '}
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />
      <br/>
    </>
  )
}

export default Bootstrap3
