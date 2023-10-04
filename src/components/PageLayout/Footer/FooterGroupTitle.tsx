import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface ISidebarGroupTitle {
  children: React.ReactNode
}

const SidebarGroupTitle: React.FC<ISidebarGroupTitle> = ({ children }) => {
  return (
    <Box mb={2} px={2}>
      <Text fontSize={{ base: 'md', md: '2xl' }} color="gray.200">
        {children}
      </Text>
    </Box>
  )
}

export default SidebarGroupTitle
