import React from 'react'
import { BankNameProps } from '../model/model'
import { autoBankDetection } from '../functions/autoBankDetection'

const BankName: React.FC<BankNameProps> = (props: BankNameProps) => {
  const { cardNumber } = props
  return (
    <span className="icb-card-bank__bank-name">{autoBankDetection(cardNumber)}</span>
  )
}

export default BankName
