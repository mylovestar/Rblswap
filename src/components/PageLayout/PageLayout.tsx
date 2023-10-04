/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Flex, Link, useDisclosure } from '@chakra-ui/react'
import { FaTwitter, FaTelegram, FaMedium, FaDiscord } from 'react-icons/fa'
import Menu from './Menu'
import Sidebar from './Sidebar'
import Footer from './Footer/index'

// const SocialMedia: React.FC = () => {
//   return (
//     <Flex justify="center" my={4} display={{ base: 'none', lg: 'flex' }} position='fixed' bottom='0' left='1rem'>
//       <Link to="/" mr='2'>
//         <FaTwitter color={colors.secondary} fontSize="32px" />
//       </Link>
//       {' '}
//       <Link to="/" mr='2'>
//         <FaTelegram color={colors.secondary} fontSize="32px" />
//       </Link>
//       {' '}
//       <Link to="/" mr='2'>
//         <FaMedium color={colors.secondary} fontSize="32px" />
//       </Link>
//       <Link to="/" mr='2'>
//         <FaDiscord color={colors.secondary} fontSize="32px" />
//       </Link>
//     </Flex>

//   )
// }

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [menuHeight, setMenuHeight] = useState(92)

  return (
    <Flex direction="column" minHeight="100vh">
      <Menu onUpdateMenuHeight={setMenuHeight} onMobileSidebarOpen={onOpen} />
      <Sidebar isMobileSidebarOpen={isOpen} onMobileSidebarClose={onClose} />
      <Flex flex={1}>
        <Flex
          direction="column"
          flex={1}
          bg="#12161c"
          overflowY="hidden"
          // h={`calc(100vh - ${menuHeight}px)`}
          // bgImage="/images/Lottery.png"
          bgSize="cover"
          bgAttachment="cover"
          bgPosition="bottom"
          bgRepeat="no-repeat"
          position="relative"
        >
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}

export default PageLayout
