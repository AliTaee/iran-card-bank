export type cardNumber = number

export interface IranCardBankProps {
  cardNumber: cardNumber
  theme?: {
    gradient?: string
    fullSize?: boolean
    borderRadius?: string
    backgroundColor?: string
    backgroundImage?: 'initial' | string
  }
}

export interface CardNumberProps {
  cardNumber: cardNumber
}

export interface BankNameProps {
  cardNumber: cardNumber
}
