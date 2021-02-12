export type cardNumber = number

export interface IranCardBankProps {
  gradient?: string
  fullSize?: boolean
  borderRadius?: string
  cardNumber: cardNumber
  backgroundColor?: string
  backgroundImage?: 'initial' | string
}

export interface CardNumberProps {
  cardNumber: cardNumber
}

export interface BankNameProps {
  cardNumber: cardNumber
}
