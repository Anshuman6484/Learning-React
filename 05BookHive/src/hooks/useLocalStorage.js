import { useState, useEffect } from 'react'

export function useLocalStorage(initialValue, key) {
  const [value, setValue] = useState(function () {
    const val = localStorage.getItem(key)
    return val ? JSON.parse(val) : initialValue
  })

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value))
    },
    [value, key]
  )
  return [value, setValue]
}
