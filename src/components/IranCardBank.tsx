import React from 'react'
import CardNumber from './CardNumber'

interface IranCardBankProps {
  cardNumber: number
  fullSize?: boolean
  background?: string
  backgroundImage?: 'initial' | string
  borderRadius?: string
}

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
    </div>
  )
}

export default IranCardBank
