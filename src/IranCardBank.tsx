import React from 'react'
import { IranCardBankProps } from './model/model'

// Components
import BankName from './components/‌BankName'
import CardNumber from './components/CardNumber'

const IranCardBank: React.FC<IranCardBankProps> = (props: IranCardBankProps) => {
  const {
    fullSize,
    gradient,
    cardNumber,
    borderRadius,
    backgroundColor,
    backgroundImage,
  } = props

  return (
    <div
      className={`icb-card-bank ${fullSize ? 'icb-card-bank--full-size' : ''}`}
      data-testid="icb-card-bank"
      style={{
        background: backgroundImage
          ? `url(${backgroundImage}) center center/cover no-repeat`
          : gradient
          ? `linear-gradient(${gradient})`
          : backgroundColor,
        borderRadius,
      }}
    >
      <span className="icb-card-bank__number">
        <CardNumber cardNumber={cardNumber} />
      </span>
      <BankName cardNumber={cardNumber} />
    </div>
  )
}

export default IranCardBank
