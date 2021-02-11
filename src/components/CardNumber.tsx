import React from 'react'
import { CardNumberProps } from '../model/model'

const CardNumber: React.FC<CardNumberProps> = (props: CardNumberProps) => {
  const { cardNumber } = props

  return (
    <>
      {cardNumber.toString().length !== 16 ? (
        <p className="icb-card-bank__error">The number must be 16 digit</p>
      ) : (
        cardNumber
          .toString()
          .match(/.{1,4}/g)
          ?.map((fourNumber, index) => <span key={index}>{fourNumber}</span>)
      )}
    </>
  )
}

export default CardNumber
