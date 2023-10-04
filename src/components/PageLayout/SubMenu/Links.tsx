/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Link from 'next/link'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import colors from 'config/chakra/styles/colors'

import SubMenuLinksContainer from './SubMenuLinksContainer'
import SubMenuLink from './SubMenuLink'

export const groups = [
  {
    links: [
      {
        isExternal: false,
        path: '/swap',
        name: 'Swap',
        toBeReleased: false,
      },
      // {
      //   isExternal: false,
      //   path: '/add/0xBec66D59BC256300Bc51CE4d076b80c7889F98A6/BNB',
      //   name: 'Liquidity',
      //   toBeReleased: false,
      // },
      {
        isExternal: false,
        path: '/pools',
        name: 'Pools',
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
        path: '/lottery',
        name: 'Lottery',
        toBeReleased: false,
      },
      // {
      //   isExternal: false,
      //   path: '/info',
      //   name: 'Info',
      //   toBeReleased: false,
      // },
    ],
  },
]

export const groupsX = [
  {
    title: 'Trade',
    id: 0,
    links: [
      {
        isExternal: false,
        path: '/swap',
        name: 'Swap',
        toBeReleased: false,
      },
      {
        isExternal: false,
        path: '/add/0xBec66D59BC256300Bc51CE4d076b80c7889F98A6/BNB',
        name: 'Liquidity',
        toBeReleased: false,
      },
    ],
  },
  {
    title: 'Earn',
    id: 1,
    links: [
      {
        isExternal: false,
        path: '/pools',
        name: 'Pools',
        toBeReleased: false,
      },
      {
        isExternal: false,
        path: '/farms',
        name: 'Farms',
        toBeReleased: false,
      },
    ],
  },
  {
    title: 'NFT Marketplace',
    id: 2,
    links: [
      {
        isExternal: false,
        path: '/nft-marketplace',
        name: 'NFT Marketplace',
        toBeReleased: false,
      },
    ],
  },
  {
    title: 'More',
    id: 3,
    links: [],
  },
]

const Links: React.FC<{ [x: string]: any }> = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      flex={1}
      overflow="auto"
      // css={{
      //   '&::-webkit-scrollbar': {
      //     width: '4px',
      //   },
      //   '&::-webkit-scrollbar-track': {
      //     width: '6px',
      //   },
      //   '&::-webkit-scrollbar-thumb': {
      //     backgroundColor: '#fd774e',
      //     borderRadius: '24px',
      //   },
      // }}
    >
      <Box w="100%" mx="auto" color="white" {...props}>
        {/* {groupsX.map((group, i) => (
          <Menu isOpen={isOpen} onClose={onClose} key={group.id}>
            <MenuButton
             onMouseOver={onOpen}
              px={10}
              py={0}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              outline="transparent"
              _hover={{ bg: 'transparent' }}
              _expanded={{ bg: 'transparent' }}
              // _focus={{ boxShadow: 'outline' }}
              as={Button}
              bg="transparent"
              border={0}
              
            >
              {group.title}
            </MenuButton>
            <MenuList  mx={10} mt={3}  bg={colors.primary} display={group.id === i ? "block" : 'none'} >
              {group.links.map((link) => (
                <MenuItem display={group.id === i ? "block" : 'none'}  key={link.name}>
                  {link.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))} */}

        <nav className="menu-desktop__nav flex-grow flex-shrink" data-v-4754eb8b>
          <ul className="menu-desktop__list" data-v-4754eb8b>
            <li className="menu-desktop__item" data-v-4754eb8b>
              <div className="menu-desktop-sub" data-v-f0c40470 data-v-4754eb8b>
                <span className="menu-desktop-sub__title-btn" data-v-f0c40470>
                  News
                </span>
                <div className="menu-desktop-sub__list-wrp" data-v-f0c40470>
                  <ul className="menu-desktop-sub__list" data-v-f0c40470>
                    <li title="Bitcoin News" className="menu-desktop-sub__item" data-v-f0c40470>
                      <Link href="/category/news/bitcoin" className="menu-desktop-sub__link" data-v-f0c40470>
                        Bitcoin News
                      </Link>
                    </li>
                    <li title="Ethereum News" className="menu-desktop-sub__item" data-v-f0c40470>
                      <Link href="/category/news/ethereum" className="menu-desktop-sub__link" data-v-f0c40470>
                        Ethereum News
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-desktop__item" data-v-4754eb8b>
              <div className="menu-desktop-sub" data-v-f0c40470 data-v-4754eb8b>
                <span className="menu-desktop-sub__title-btn" data-v-f0c40470>
                  Guide
                </span>
                <div className="menu-desktop-sub__list-wrp" data-v-f0c40470>
                  <ul className="menu-desktop-sub__list" data-v-f0c40470>
                    <li title="Bitcoin" className="menu-desktop-sub__item" data-v-f0c40470>
                      <Link href="/guide/bitcoin" className="menu-desktop-sub__link" data-v-f0c40470>
                        Bitcoin
                      </Link>
                    </li>
                    <li title="Ethereum" className="menu-desktop-sub__item" data-v-f0c40470>
                      <Link href="/guide/ethereum" className="menu-desktop-sub__link" data-v-f0c40470>
                        Ethereum
                      </Link>
                    </li>
                    <li title="Altcoins" className="menu-desktop-sub__item" data-v-f0c40470>
                      <Link href="/guide/alts" className="menu-desktop-sub__link" data-v-f0c40470>
                        Altcoins
                      </Link>
                    </li>
                  </ul>
                  <ul className="menu-desktop-sub__list" data-v-f0c40470>
                    <li title="ICOs" className="menu-desktop-sub__item" data-v-f0c40470>
                      <Link href="/guide/ico" className="menu-desktop-sub__link" data-v-f0c40470>
                        ICOs
                      </Link>
                    </li>
                    <li title="Markets" className="menu-desktop-sub__item" data-v-f0c40470>
                      <Link href="/guide/markets" className="menu-desktop-sub__link" data-v-f0c40470>
                        Markets
                      </Link>
                    </li>
                    <li title="Glossary" className="menu-desktop-sub__item" data-v-f0c40470>
                      <Link href="/guide/glossary" className="menu-desktop-sub__link" data-v-f0c40470>
                        Glossary
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-desktop__item" data-v-4754eb8b>
              <Link href="/press_release" className="menu-desktop__link" data-v-4754eb8b>
                NFT Marketplace
              </Link>
            </li>

            <li className="menu-desktop__item" data-v-4754eb8b>
              <div className="menu-desktop-sub" data-v-f0c40470 data-v-4754eb8b>
                <span className="menu-desktop-sub__title-btn" data-v-f0c40470>
                  More
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </Box>
    </Box>
  )
}

export default Links
