import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const listValues = ["All","Music","Videos", "Cricket", "Songs", "Gaming", "Lives", "Soccer", "News"]
  return (
    <div className='flex'>
      {/* <Button name="All"></Button>
      <Button name="Music"></Button>
      <Button name="Videos"></Button>
      <Button name="Cricket"></Button>
      <Button name="Gaming"></Button>
      <Button name="Soccer"></Button>
      <Button name="Lives"></Button>
      <Button name="News"></Button> */}
      {listValues.map( (btn, index) => <Button key={index} name={btn}/>)}
    </div>
  )
}

export default ButtonList
