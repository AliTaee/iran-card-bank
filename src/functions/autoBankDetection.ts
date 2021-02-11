import { cardNumber } from '../model/model'

export const autoBankDetection = (cardNumber: cardNumber): string => {
  const firstSixDigits = Number(cardNumber.toString().substring(0, 6))

  switch (firstSixDigits) {
    case 6274_12:
      return 'بانک اقتصاد نوین'

    case 6273_81:
      return 'بانک انصار'

    case 5057_85:
      return 'بانک ایران زمین'

    case 6221_06:
    case 6278_84:
    case 6391_94:
      return 'پارسیان'

    case 5022_29:
    case 6393_47:
      return 'بانک پاسارگاد'

    case 6362_14:
      return 'بانک تات'

    case 6273_53:
      return 'بانک تجارت'

    case 5029_08:
      return 'بانک توسعه تعاون'

    case 6276_48:
    case 2071_77:
      return 'بانک توسعه صادرات ایران'

    case 6369_49:
      return 'بانک حکمت ایرانیان'

    case 5029_38:
      return 'بانک دی'

    case 5894_63:
      return 'بانک رفاه کارگران'

    case 6219_86:
      return 'بانک سامان'

    case 5892_10:
      return 'بانک سپه'

    case 6396_07:
      return 'بانک سرمایه'

    case 6393_46:
      return 'بانک سینا'

    case 5028_06:
      return 'بانک شهر'

    case 6037_69:
      return 'بانک صادرات ایران'

    case 6279_61:
      return 'بانک صنعت و معدن'

    case 6063_73:
      return 'بانک قرض الحسنه مهر ایران'

    case 6395_99:
      return 'بانک قوامین'

    case 6274_88:
    case 5029_10:
      return 'بانک کارآفرین'

    case 6037_70:
    case 6392_17:
      return 'بانک کشاورزی'

    case 6367_95:
      return 'بانک مرکزی'

    case 6280_23:
      return 'بانک مسکن'

    case 6104_33:
    case 9919_75:
      return 'بانک ملت'

    case 6037_99:
      return 'بانک ملی ایران'

    case 6393_70:
      return 'بانک مهر اقتصاد'

    case 6277_60:
      return 'پست بانک ایران'

    case 6281_57:
      return 'موسسه اعتباری توسعه'

    case 5058_01:
      return 'موسسه اعتباری کوثر'

    default:
      return 'بانک'
  }
}
