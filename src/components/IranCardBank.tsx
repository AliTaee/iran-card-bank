import React from 'react'
import CardNumber from './CardNumber'

interface IranCardBankProps {
  cardNumber: number
  fullSize?: boolean
  background?: string
  borderRadius?: string
}

const IranCardBank: React.FC<IranCardBankProps> = (props: IranCardBankProps) => {
  const { fullSize, cardNumber, background, borderRadius } = props

  return (
    <div
      className={`icb-card-bank ${fullSize && 'icb-card-bank--full-size'}`}
      style={{ background, borderRadius }}
    >
      <span className="icb-card-bank__number">
        <CardNumber cardNumber={cardNumber} />
      </span>
    </div>
  )
}

export default IranCardBank
