import React from 'react'
import { Flex } from '@chakra-ui/react'

interface ISidebarLinksContainer {
  children: React.ReactNode
}

const SidebarLinksContainer: React.FC<ISidebarLinksContainer> = ({ children }) => {
  return (
    <Flex direction="row" my={8}>
      {children}
    </Flex>
  )
}

export default SidebarLinksContainer
