export const parseThousand = (amount: number) => {
  return amount ? amount.toLocaleString('de-DE') : amount
}

export const parseThousandENG = (amount: number) => {
  return amount ? amount.toLocaleString('en-US') : amount
}

export const isEven = (number: number) => {
  return number % 2 === 0
}

export const format = (value: string | number, type: string) => {
  switch (type) {
    case 'money':
      return `IDR ${parseThousandENG(value as number)}`
    case 'number':
      return parseThousandENG(parseFloat(value as string))
    case 'percentage':
      return `${parseThousandENG(parseFloat(value as string))} %`
    default:
      return value
  }
}
