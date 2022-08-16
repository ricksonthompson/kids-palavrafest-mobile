export function getKeyByValue(object: any, value: any) {
  for (const prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value)
        return prop
      }
  }
}