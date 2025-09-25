'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import theme from '../styles/theme'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
