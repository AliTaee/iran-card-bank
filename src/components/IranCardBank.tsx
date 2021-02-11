import React from 'react'
import { IranCardBankProps } from '../model/model'

// Components
import BankName from './‌BankName'
import CardNumber from './CardNumber'

const IranCardBank: React.FC<IranCardBankProps> = (props: IranCardBankProps) => {
  const { fullSize, cardNumber, background, backgroundImage, borderRadius } = props
  const customizeCardStyles = {
    background,
    borderRadius,
    backgroundImage,
  }

  if (backgroundImage) {
    customizeCardStyles.backgroundImage = `url(${backgroundImage})`
  }

  return (
    <div
      className={`icb-card-bank ${fullSize ? 'icb-card-bank--full-size' : ''}`}
      data-testid="icb-card-bank"
      style={customizeCardStyles}
    >
      <span className="icb-card-bank__number">
        <CardNumber cardNumber={cardNumber} />
      </span>
      <BankName />
    </div>
  )
}

export default IranCardBank
