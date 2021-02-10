import React from 'react'

interface CardNumberProps {
  cardNumber: number
}

const CardNumber: React.FC<CardNumberProps> = (props: CardNumberProps) => {
  const { cardNumber } = props

  return (
    <>
      {cardNumber.toString().length < 16 ? (
        <p className="icb-card-bank__error">The number is less than 16 digit</p>
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
