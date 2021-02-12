import React from 'react'
import { IranCardBankProps } from './model/model'

// Components
import BankName from './components/‌BankName'
import CardNumber from './components/CardNumber'

const IranCardBank: React.FC<IranCardBankProps> = (props: IranCardBankProps) => {
  const { theme, cardNumber } = props

  return (
    <div
      data-testid="icb-card-bank"
      className={`icb-card-bank ${
        theme?.fullSize ? 'icb-card-bank--full-size' : ''
      }`}
      style={{
        background: theme?.backgroundImage
          ? `url(${theme?.backgroundImage}) center center/cover no-repeat`
          : theme?.gradient
          ? `linear-gradient(${theme?.gradient})`
          : theme?.backgroundColor,
        borderRadius: theme?.borderRadius,
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
