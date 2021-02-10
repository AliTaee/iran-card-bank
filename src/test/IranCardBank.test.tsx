import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import IranCardBank from '../components/IranCardBank'

describe('Iran card number test', () => {
  describe('Test props related to inline styles', () => {
    it('Should have custom background image', () => {
      render(<IranCardBank cardNumber={5555_1111_2222_3333} background="#212121" />)

      const rootElement = screen.getByTestId('icb-card-bank')
      expect(rootElement).toHaveStyle('background: #212121')
    })
  })
})
