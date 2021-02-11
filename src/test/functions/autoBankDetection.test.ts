import '@testing-library/jest-dom/extend-expect'
import { autoBankDetection } from '../../functions/autoBankDetection'

// Add more unit test for all banks
describe('Test auto bank detection', () => {
  it('Should return بانک اقتصاد نوین', () => {
    expect(autoBankDetection(6274_1215_2541_8445)).toEqual('بانک اقتصاد نوین')
  })

  it('Should return بانک انصار', () => {
    expect(autoBankDetection(6273_8115_2541_8445)).toEqual('بانک انصار')
  })

  it('Should return بانک ایران زمین', () => {
    expect(autoBankDetection(5057_8566_5412_9475)).toEqual('بانک ایران زمین')
  })

  it('Should return پارسیان', () => {
    expect(autoBankDetection(6221_0666_6666_6666)).toEqual('پارسیان')
  })

  it('Should return پارسیان', () => {
    expect(autoBankDetection(6278_8466_6666_6666)).toEqual('پارسیان')
  })

  it('Should return پارسیان', () => {
    expect(autoBankDetection(6391_9466_6666_6666)).toEqual('پارسیان')
  })

  it('Should return بانک', () => {
    expect(autoBankDetection(6666_6666_6666_6666)).toEqual('بانک')
  })
})
