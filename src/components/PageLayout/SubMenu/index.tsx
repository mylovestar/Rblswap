import React from 'react'
import { Flex } from '@chakra-ui/react'
import colors from 'config/chakra/styles/colors'
import Links from './Links'

const Sidebars: React.FC = () => {
  return (
    <>
      <Flex display={{ base: 'none', lg: 'flex' }} bg={colors.primary} color={colors.default} direction="row">
        <Links />
      </Flex>
    </>
  )
}

export default Sidebars
