import React from 'react'
const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-2 m-2 rounded-lg bg-gray-200 hover:bg-slate-700 hover:text-slate-200'>{name}</button>
    </div>
  )
}

export default Button
