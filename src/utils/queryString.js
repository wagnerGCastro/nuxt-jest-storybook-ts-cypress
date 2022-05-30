const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new TypeError('Please check yout params')
  }
  return `${key}=${value}`
}

export function queryString(obj) {
  return Object.entries(obj).map(keyValueToString).join('&')
}

export function parse(string) {
  return Object.fromEntries(
    string.split('&').map((item) => {
      /* eslint-disable */
      let [key, value] = item.split('=')

      if (value?.indexOf(',') > -1) {
        value = value.split(',')
      }

      return [key, value]
      /* eslint-enable */
    })
  )
}
