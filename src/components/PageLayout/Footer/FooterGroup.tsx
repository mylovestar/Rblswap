/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Flex, Box, useDisclosure } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import SidebarGroupTitle from './FooterGroupTitle'

interface ISidebarGroup {
  children: React.ReactNode
  title: string
}

const MotionBox = motion(Box)

const variants = {
  open: { height: 'auto' },
  closed: { height: 0 },
}

const SidebarGroup: React.FC<ISidebarGroup> = ({ children, title }) => {
  const { isOpen } = useDisclosure({ defaultIsOpen: true })

  return (
    <Box mb={4} px={{ base: 2, lg: 20 }}>
      <Flex flex={2} justify="space-between" cursor="pointer">
        <SidebarGroupTitle>{title}</SidebarGroupTitle>
      </Flex>
      <MotionBox animate={isOpen ? 'open' : 'closed'} variants={variants} overflow="hidden">
        {children}
      </MotionBox>
    </Box>
  )
}

export default SidebarGroup
