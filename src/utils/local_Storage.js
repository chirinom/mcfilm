export function setLocalStorage(name, value) {
  localStorage.setItem(name, value)
}
  
export function setLocalStorageArray(name, value) {
  const string_value = JSON.stringify(value).slice(1, -1)
  localStorage.setItem(name, string_value)
}
  
export function setLocalStorageArrayObjs(name, value) {
  const arrayOfObjs = JSON.stringify(value)
  localStorage.setItem(name, arrayOfObjs)
}
  
export function getLocalStorage(name, default_ = '') {
  if (name) {
    const value = localStorage.getItem(name)
    return value || default_
  }
}

export function eraseLocalStorage(name) {
  localStorage.removeItem(name)
}

export function getLocalStorageInt(name, default_ = '') {
  const storageInt = getLocalStorage(name, default_)
  return parseFloat(storageInt)
}
  