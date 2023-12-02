export function setLocalStorage(array) {
  array.forEach(element => {
    const key = JSON.stringify(Object.keys(element))
    const value = JSON.stringify(Object.values(element))
    window.localStorage.setItem(key, value)
  });
}

export function remove(array) {
  array.forEach(element => window.localStorage.removeItem(`${element}`))
}