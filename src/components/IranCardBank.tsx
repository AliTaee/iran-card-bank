import React from 'react'
import CardNumber from './CardNumber'

interface IranCardBankProps {
  cardNumber: number
  size?: 'default' | 'full'
  background?: string
  borderRadio?: string
}

const IranCardBank: React.FC<IranCardBankProps> = (props: IranCardBankProps) => {
  const { cardNumber } = props

  return (
    <div className="icb-card-bank">
      <span className="icb-card-bank__number">
        <CardNumber cardNumber={cardNumber} />
      </span>
    </div>
  )
}

export default IranCardBank
