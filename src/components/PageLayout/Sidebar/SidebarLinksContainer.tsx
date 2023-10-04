import React from 'react'
import { Flex } from '@chakra-ui/react'

interface ISidebarLinksContainer {
  children: React.ReactNode
}

const SidebarLinksContainer: React.FC<ISidebarLinksContainer> = ({ children }) => {
  return <Flex direction="column">{children}</Flex>
}

export default SidebarLinksContainer
