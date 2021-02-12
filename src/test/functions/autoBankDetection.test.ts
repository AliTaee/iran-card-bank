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

  it('Should return بانک پاسارگاد', () => {
    expect(autoBankDetection(5022_2968_4517_6819)).toEqual('بانک پاسارگاد')
  })

  it('Should return بانک پاسارگاد', () => {
    expect(autoBankDetection(6393_4704_6417_1628)).toEqual('بانک پاسارگاد')
  })

  it('Should return بانک تات', () => {
    expect(autoBankDetection(6362_1425_5419_0945)).toEqual('بانک تات')
  })

  it('Should return بانک تجارت', () => {
    expect(autoBankDetection(6273_5364_0547_9631)).toEqual('بانک تجارت')
  })

  it('Should return بانک توسعه تعاون', () => {
    expect(autoBankDetection(5029_0854_6235_3487)).toEqual('بانک توسعه تعاون')
  })

  it('Should return بانک توسعه صادرات ایران', () => {
    expect(autoBankDetection(6276_4809_5414_6412)).toEqual('بانک توسعه صادرات ایران')
  })

  it('Should return بانک توسعه صادرات ایران', () => {
    expect(autoBankDetection(2071_7766_6666_6666)).toEqual('بانک توسعه صادرات ایران')
  })

  it('Should return بانک حکمت ایرانیان', () => {
    expect(autoBankDetection(6369_4954_9415_3148)).toEqual('بانک حکمت ایرانیان')
  })

  it('Should return بانک دی', () => {
    expect(autoBankDetection(5029_3866_6666_6666)).toEqual('بانک دی')
  })

  it('Should return بانک رفاه کارگران', () => {
    expect(autoBankDetection(5894_6366_6666_6666)).toEqual('بانک رفاه کارگران')
  })

  it('Should return بانک سامان', () => {
    expect(autoBankDetection(6219_8624_6666_6666)).toEqual('بانک سامان')
  })

  it('Should return بانک سپه', () => {
    expect(autoBankDetection(5892_1066_6666_6666)).toEqual('بانک سپه')
  })

  it('Should return بانک سینا', () => {
    expect(autoBankDetection(6393_4698_6666_6666)).toEqual('بانک سینا')
  })

  it('Should return بانک شهر', () => {
    expect(autoBankDetection(5028_0666_6666_6666)).toEqual('بانک شهر')
  })

  it('Should return بانک صادرات ایران', () => {
    expect(autoBankDetection(6037_6966_6666_6666)).toEqual('بانک صادرات ایران')
  })

  it('Should return بانک صنعت و معدن', () => {
    expect(autoBankDetection(6279_6166_6666_6666)).toEqual('بانک صنعت و معدن')
  })

  it('Should return بانک قرض الحسنه مهر ایران', () => {
    expect(autoBankDetection(6063_7366_6666_6666)).toEqual(
      'بانک قرض الحسنه مهر ایران',
    )
  })

  it('Should return بانک قوامین', () => {
    expect(autoBankDetection(6395_9966_6666_6666)).toEqual('بانک قوامین')
  })

  it('Should return بانک کارآفرین', () => {
    expect(autoBankDetection(6274_8866_6666_6666)).toEqual('بانک کارآفرین')
  })

  it('Should return بانک کارآفرین', () => {
    expect(autoBankDetection(5029_1066_6666_6666)).toEqual('بانک کارآفرین')
  })

  it('Should return بانک کشاورزی', () => {
    expect(autoBankDetection(6037_7066_6666_6666)).toEqual('بانک کشاورزی')
  })

  it('Should return بانک کشاورزی', () => {
    expect(autoBankDetection(6392_1766_6666_6666)).toEqual('بانک کشاورزی')
  })

  it('Should return بانک مرکزی', () => {
    expect(autoBankDetection(6367_9566_6666_6666)).toEqual('بانک مرکزی')
  })

  it('Should return بانک ملی ایران', () => {
    expect(autoBankDetection(6037_9966_6666_6666)).toEqual('بانک ملی ایران')
  })

  it('Should return بانک مهر اقتصاد', () => {
    expect(autoBankDetection(6393_7066_6666_6666)).toEqual('بانک مهر اقتصاد')
  })

  it('Should return پست بانک ایران', () => {
    expect(autoBankDetection(6277_6066_6666_6666)).toEqual('پست بانک ایران')
  })

  it('Should return موسسه اعتباری توسعه', () => {
    expect(autoBankDetection(6281_5766_6666_6666)).toEqual('موسسه اعتباری توسعه')
  })

  it('Should return موسسه اعتباری کوثر', () => {
    expect(autoBankDetection(5058_0166_6666_6666)).toEqual('موسسه اعتباری کوثر')
  })

  it('Should return بانک مسکن', () => {
    expect(autoBankDetection(6280_2366_6666_6666)).toEqual('بانک مسکن')
  })

  it('Should return بانک گردشگری', () => {
    expect(autoBankDetection(5054_1666_6666_6666)).toEqual('بانک گردشگری')
  })

  it('Should return بانک ملت', () => {
    expect(autoBankDetection(6104_3366_6666_6666)).toEqual('بانک ملت')
  })

  it('Should return بانک ملت', () => {
    expect(autoBankDetection(9919_7566_6666_6666)).toEqual('بانک ملت')
  })

  it('Should return بانک', () => {
    expect(autoBankDetection(6666_6666_6666_6666)).toEqual('بانک')
  })
})
