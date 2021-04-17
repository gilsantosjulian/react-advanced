import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue 
    } catch (error) { 
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      setStoreValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error);
    }
  }

  return [storedValue, setLocalStorage]
}
