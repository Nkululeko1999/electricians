import React from 'react'

function Input(props) {

    const { type, name, placeholder, value, handleChange } = props;

  return (
    <input
          type={type}       
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
  )
}

export default Input
