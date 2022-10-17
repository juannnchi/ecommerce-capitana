import React from 'react'

export const ItemDetail = ({ data }) => {
  return (
    <div>
      <img src={data.img} alt="" />
      <h1>{data.nombre}</h1>
      <span>{data.precio}</span>
    </div>
  )
}
