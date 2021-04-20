import { useState, useEffect, useRef } from 'react'

export const useNearScreen = () => {

  const element = useRef(null) // propiedad especial de React, que nos permite capturar el elemento del DOM
  const [show, setShow] = useState(false)

  useEffect(() => {
    // console.log(element.current);
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer') // import dinámico que devuelve una promesa
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting  } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]

}

