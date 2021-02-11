export type cardNumber = number

export interface IranCardBankProps {
  cardNumber: cardNumber
  fullSize?: boolean
  background?: string
  backgroundImage?: 'initial' | string
  borderRadius?: string
}

export interface CardNumberProps {
  cardNumber: cardNumber
}

export interface BankNameProps {
  cardNumber: cardNumber
}
