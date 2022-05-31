import React from 'react'

function Button(props) {
  return (
    <button type={props.type} onClick={props.click} >
        {props.text}

    </button>
  )
}

export default Button