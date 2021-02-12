import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import IranCardBank from '../../IranCardBank'

const TEST_ID_ELEMENT = 'icb-card-bank'
const MOCK_CARD_NUMBER = 5555_1111_2222_3333

describe('Iran card number test', () => {
  describe('Test props related to inline styles', () => {
    it('Should have custom background color', () => {
      render(
        <IranCardBank
          cardNumber={MOCK_CARD_NUMBER}
          theme={{ backgroundColor: '#212121' }}
        />,
      )

      const rootElement = screen.getByTestId(TEST_ID_ELEMENT)
      expect(rootElement).toHaveStyle('background: #212121')
    })

    it('Should have custom gradient color', () => {
      render(
        <IranCardBank
          cardNumber={MOCK_CARD_NUMBER}
          theme={{ gradient: 'to right, #8f94fb, #4e54c8' }}
        />,
      )

      const rootElement = screen.getByTestId(TEST_ID_ELEMENT)
      expect(rootElement).toHaveStyle(
        'background: linear-gradient(to right, #8f94fb, #4e54c8)',
      )
    })

    it('Should have custom border radius', () => {
      render(
        <IranCardBank
          cardNumber={MOCK_CARD_NUMBER}
          theme={{ borderRadius: '15px' }}
        />,
      )

      const rootElement = screen.getByTestId(TEST_ID_ELEMENT)
      expect(rootElement).toHaveStyle('border-radius: 15px')
    })

    it('Should have full size className', () => {
      render(
        <IranCardBank cardNumber={MOCK_CARD_NUMBER} theme={{ fullSize: true }} />,
      )

      const rootElement = screen.getByTestId(TEST_ID_ELEMENT)
      expect(rootElement).toHaveClass('icb-card-bank--full-size')
    })

    it('Should have custom background image', () => {
      render(
        <IranCardBank
          cardNumber={MOCK_CARD_NUMBER}
          theme={{ backgroundImage: 'fakeImage.jps' }}
        />,
      )

      const rootElement = screen.getByTestId(TEST_ID_ELEMENT)
      expect(rootElement).toHaveStyle(
        'background-image: url(fakeImage.jps) center center/cover no-repeat',
      )
    })
  })
})
