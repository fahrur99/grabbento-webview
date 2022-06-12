import { camelCase, snakeCase, capitalize } from 'helpers/lodash'

export function toCamelCase<T>(obj: any): T {
  if (typeof obj !== 'object' || typeof obj === 'undefined' || obj === null || obj === '') {
    return obj
  }
  if (Array.isArray(obj)) {
    const arr = obj as Array<any>
    return arr.map((item: any) => toCamelCase(item)) as any
  }
  const newObj: any = {}
  Object.keys(obj).forEach((key) => {
    const newKey = camelCase(key)
    const newVal = toCamelCase(obj[key])
    newObj[newKey] = newVal
  })
  return newObj
}

export function toSnakeCase<T>(obj: any, unSeparateNumber?: boolean): T {
  if (typeof obj !== 'object' || typeof obj === 'undefined' || obj === null || obj === '') {
    return obj
  }
  if (Array.isArray(obj)) {
    const arr = obj as Array<any>
    return arr.map((item: any) => toSnakeCase(item)) as any
  }
  const newObj: any = {}
  Object.keys(obj).forEach((key) => {
    const newKey = unSeparateNumber
      ? key
          .split(/(?=[A-Z])/)
          .join('_')
          .toLowerCase()
      : snakeCase(key)
    const newVal = obj[key] ? toSnakeCase(obj[key]) : obj[key]
    newObj[newKey] = newVal
  })
  return newObj
}

export function toCapitalize(text: string, separator = '_') {
  return text
    ?.split(separator)
    .map((word) => capitalize(word))
    .join(' ')
}
