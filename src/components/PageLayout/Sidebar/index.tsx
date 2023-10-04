/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
  Flex,
  Drawer,
  Image,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
// import Link from 'next/link';
import colors from 'config/chakra/styles/colors'
import { FaTwitter, FaTelegram, FaMedium, FaDiscord } from 'react-icons/fa'

import Links from './Links'

interface ISidebarProps {
  isMobileSidebarOpen: boolean
  onMobileSidebarClose: () => void
}

// const SocialMedia: React.FC = () => {
//   return (
//     <Flex justify="center" my={4} position='fixed' bottom='0' left='1rem'>
//     <Link to="/" mr='2'>
//       <FaTwitter color={colors.default} fontSize="32px" />
//     </Link>
//     {' '}
//     <Link to="/" mr='2'>
//       <FaTelegram color={colors.default} fontSize="32px" />
//     </Link>
//     {' '}
//     <Link to="/" mr='2'>
//       <FaMedium color={colors.default} fontSize="32px" />
//     </Link>
//     <Link to="/" mr='2'>
//       <FaDiscord color={colors.default} fontSize="32px" />
//     </Link>
//   </Flex>
//   )
// }

const Sidebar: React.FC<ISidebarProps> = ({ isMobileSidebarOpen, onMobileSidebarClose }) => {
  return (
    <>
      <Drawer onClose={onMobileSidebarClose} isOpen={isMobileSidebarOpen} placement="left" size="xs">
        <DrawerOverlay />
        <DrawerContent bg={colors.primary} maxWidth="250px">
          <DrawerHeader>
            <Image p={0} mx="auto" src="/images/logo.png" alt=" Logo" h="52px" />
          </DrawerHeader>
          <DrawerCloseButton color="white" />
          <DrawerBody display="flex" flexDirection="column">
            <Links flex={1} />
            <DrawerFooter>{/* <SocialMedia /> */}</DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar
