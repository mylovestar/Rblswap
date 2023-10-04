import { extendTheme } from '@chakra-ui/react'
import { Button, Modal } from './components'
import colors from './styles/colors'
import styles from './styles'

const config = {
  // initialColorMode: 'light',
  // useSystemColorMode: false,
}

const overrides = extendTheme({
  fonts: {
    heading: 'Opensans, sans-serif',
    body: 'Open sans, sans-serif',
  },
  config,
  colors,
  styles,
  components: { Button, Modal },
})

export default overrides
