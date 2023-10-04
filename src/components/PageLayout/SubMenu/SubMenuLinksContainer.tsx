import React from 'react'
import { Flex } from '@chakra-ui/react'

interface ISubMenuLinksContainer {
  children: React.ReactNode
}

const SubMenuLinksContainer: React.FC<ISubMenuLinksContainer> = ({ children }) => {
  return (
    <Flex direction="row" justifyContent="center">
      {children}
    </Flex>
  )
}

export default SubMenuLinksContainer
