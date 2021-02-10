import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CardNumber from '../components/CardNumber'

describe('Renders card number correctly', () => {
  beforeEach(() => {
    render(<CardNumber cardNumber={5555_1111_2222_3333} />)
  })

  it('Should have 5555', () => {
    const firstCardNumber = screen.getByText(/5555/i)
    expect(firstCardNumber).toBeInTheDocument()
  })

  it('Should have 1111', () => {
    const secondCardNumber = screen.getByText(/1111/i)
    expect(secondCardNumber).toBeInTheDocument()
  })

  it('Should have 2222', () => {
    const thirdCardNumber = screen.getByText(/2222/i)
    expect(thirdCardNumber).toBeInTheDocument()
  })

  it('Should have 3333', () => {
    const fourthCardNumber = screen.getByText(/3333/i)
    expect(fourthCardNumber).toBeInTheDocument()
  })
})
