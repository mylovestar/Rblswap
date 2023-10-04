/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { FaTwitter, FaInstagram, FaMedium, FaDiscord, FaReddit } from 'react-icons/fa'
import { RiTelegramLine } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { useTranslation } from '@pancakeswap/localization'

import colors from 'config/chakra/styles/colors'
// import Link from 'next/link';

import SidebarGroup from './FooterGroup'
import SidebarLinksContainer from './FooterLinksContainer'
import SidebarLink from './FooterLink'

const groups = [
  {
    isExternal: false,
    path: '/swap',
    name: 'Swap',
    toBeReleased: false,
  },
  {
    isExternal: false,
    path: '/farms',
    name: 'Farms',
    toBeReleased: false,
  },
  {
    isExternal: false,
    path: '/pools',
    name: 'Pools',
    toBeReleased: false,
  },
  {
    isExternal: false,
    path: '/lottery',
    name: 'Lottery',
    toBeReleased: false,
  },
]

const SocialMedia: React.FC = () => {
  return (
    <Flex justify="flex-start" my={4} h="100%">
      <Link href="https://twitter.com/rublex_io" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="#161a1e"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <FaTwitter color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>{' '}
      <Link href="https://t.me/Rublex_RU" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="#161a1e"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <RiTelegramLine color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>{' '}
      <Link href="https://www.instagram.com/rublex_io/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="#161a1e"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <AiFillInstagram color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>
      <Link href="https://www.youtube.com/@rublexio-vl1id" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="#161a1e"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <BsYoutube color={colors.secondary} fontSize="20px" />
        </Box>
      </Link>
      {/* <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="#161a1e"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <FaReddit color={colors.secondary} fontSize="20px" />
        </Box>
      </Link> */}
      {/* <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="#161a1e"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <BsMedium color={colors.secondary} fontSize="20px" />
        </Box>
      </Link> */}
      {/* <Link href="/" style={{ marginRight: '6px', marginLeft: '6px' }}>
        <Box
          bg="#161a1e"
          border="1px solid rgba(255, 255, 255, 0.16)"
          boxShadow="0px 7px 8px rgba(0, 0, 0, 0.16)"
          backdropFilter=" blur(7.5px)"
          borderRadius="8px"
          p={2}
        >
          <FaDiscord color={colors.secondary} fontSize="20px" />
        </Box>
      </Link> */}
    </Flex>
  )
}

const Links: React.FC<{ [x: string]: any }> = ({ ...props }) => {
  const { t } = useTranslation()

  return (
    <Flex flex={1} mt={4}>
      <Flex
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        p={4}
        w="100%"
        mx="auto"
        color="white"
        justifyContent="center"
        {...props}
      >
        <Flex justifyContent="center">
          <Flex flexDirection="column" alignItems="center">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Image
                p={2}
                display={{ base: 'block', lg: 'block' }}
                src="/images/logo.png"
                alt="footer Logo"
                h={{ base: '65px', lg: '65px' }}
              />
            </Link>
            <SidebarLinksContainer>
              {groups.map((link) => (
                <SidebarLink
                  isExternal={link.isExternal}
                  pathname={link.path}
                  isToBeReleased={link.toBeReleased}
                  key={link.name}
                >
                  {t(link.name)}
                </SidebarLink>
              ))}
            </SidebarLinksContainer>
            <Box className="mt-4">
              <SocialMedia />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Links
