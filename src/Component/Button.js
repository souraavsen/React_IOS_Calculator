import React from 'react'

const Button = ({ name, action, onclick }) => {
  return <div className="btn" onClick={()=>onclick(name)}>{name}</div>;
};

export default Button
