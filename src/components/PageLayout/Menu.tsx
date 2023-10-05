/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useCallback, useEffect, SetStateAction, Dispatch } from 'react'
// import Link from 'next/link';
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { AiOutlineLogout } from 'react-icons/ai'
import { Flex, Button, IconButton, Image, Box, Link } from '@chakra-ui/react'
import { TriangleDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useTranslation, languageList } from '@pancakeswap/localization'
import LangSelector from '@pancakeswap/uikit/src/components/LangSelector/LangSelector'
import GlobalSettings from 'components/Menu/GlobalSettings'

// import { FaSun, FaMoon } from 'react-icons/fa'

import ConnectWalletButton from 'components/ConnectWalletButton'

import useAuth from 'hooks/useAuth'
import truncateHash from 'utils/truncateHash'
import colors from 'config/chakra/styles/colors'
import SubMenu from './SubMenu'
import { NetworkSwitcher } from 'components/NetworkSwitcher'

interface IMenuProps {
  onUpdateMenuHeight: Dispatch<SetStateAction<number>>
  onMobileSidebarOpen: () => void
}

const Menu: React.FC<IMenuProps> = ({ onUpdateMenuHeight, onMobileSidebarOpen }) => {
  const menuRef = useRef(null)
  // const { colorMode, toggleColorMode } = useColorMode()
  const { currentLanguage, setLanguage, t } = useTranslation()

  const { account, chainId } = useActiveWeb3React()
  const { logout } = useAuth()

  const onResize = useCallback(() => {
    if (menuRef && menuRef.current && menuRef.current.clientHeight > 0) {
      onUpdateMenuHeight(menuRef.current.clientHeight)
    }
  }, [menuRef, onUpdateMenuHeight])

  useEffect(() => {
    onResize()
  }, [onResize])

  useEffect(() => {
    // A little hack to grab the menu height
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [onResize])

  return (
    <Flex
      w="100%"
      bg="#12161c"
      justify="flex-start"
      align="center"
      // borderBottom="1.5px solid rgba(255, 255, 255, 0.16)"
      boxShadow=" 0px 7px 8px rgba(0, 0, 0, 0.16)"
      // backdropFilter="blur(7.5px)"
      ref={menuRef}
    >
      <Flex
        w={{ base: 'auto', lg: '300px' }}
        py={4}
        px={{ base: 2, lg: 8 }}
        justify={{ base: 'flex-start', lg: 'flex-start' }}
        align="center"
        flex={1}
      >
        <IconButton
          onClick={onMobileSidebarOpen}
          icon={<HamburgerIcon color="white" fontSize="xl" />}
          variant="ghost"
          aria-label="Drawer Icon"
          display={{ base: 'block', lg: 'none' }}
        />
        <Image
          p={0}
          display={{ base: 'none', lg: 'block' }}
          src="/images/logo.png"
          alt="Logo"
          h={{ base: '52px', lg: '52px' }}
          w={{ base: '47px', lg: '47px' }}
          style={{ maxWidth: 'initial'}}
        />
      </Flex>
      <Box
        className="menu-desktop__nav"
        display={{ base: 'none', md: 'none', lg: 'block' }}
        w={{ md: '700px', lg: '700px' }}
      >
        <ul className="menu-desktop__list" data-v-4754eb8b>
          <li className="menu-desktop__item" data-v-4754eb8b>
            <Link style={{ textDecoration: 'none', textTransform: "uppercase" }} href="/swap" className="menu-desktop__link" data-v-4754eb8b>
            {t('Swap')}
            </Link>
          </li>

          <li className="menu-desktop__item" data-v-4754eb8b>
            <div className="menu-desktop-sub" data-v-f0c40470 data-v-4754eb8b>
              <span className="menu-desktop-sub__title-btn" data-v-f0c40470>
              {t('Earn')}{' '}
                <i style={{ padding: '0 10px' }}>
                  <TriangleDownIcon />
                </i>
              </span>
              <div className="menu-desktop-sub__list-wrp" data-v-f0c40470>
                <ul className="menu-desktop-sub__list" data-v-f0c40470>
                  <li title="Pools" className="menu-desktop-sub__item" data-v-f0c40470>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="/pools"
                      className="menu-desktop-sub__link"
                      data-v-f0c40470
                    >
                     {t('Pools')}
                    </Link>
                  </li>
                  <li title="Farms" className="menu-desktop-sub__item" data-v-f0c40470>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="/farms"
                      className="menu-desktop-sub__link"
                      data-v-f0c40470
                    >
                       {t('Farms')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="menu-desktop__item" data-v-4754eb8b>
            <Link style={{ textDecoration: 'none', textTransform: "uppercase" }} href="/lottery" className="menu-desktop__link" data-v-4754eb8b>
            {t('Lottery')}
            </Link>
          </li>

          <li className="menu-desktop__item" >
            <div className="menu-desktop-sub" data-v-f0c40470 data-v-4754eb8b>
              <span className="menu-desktop-sub__title-btn" data-v-f0c40470>
                Other projects
                <i style={{ padding: '0 10px' }}>
                  <TriangleDownIcon />
                </i>
              </span>
              <div className="menu-desktop-sub__list-wrp" data-v-f0c40470>
                <ul className="menu-desktop-sub__list" data-v-f0c40470>
                    <div style={{display: 'flex', padding: 16, gap: 24, width: 300}}>
                      <div style={{display: 'flex', flex: 1, flexDirection: 'column', gap: 8}}>
                        <a href='https://trade.rublex.io/' style={{fontSize: 15}} target='_blank'>Rublex Exchange</a>
                        <a href='https://wallet.rublex.io/' style={{fontSize: 15}} target='_blank'>Rublex Wallet</a>
                        <a href='https://news.rublex.io/' style={{fontSize: 15}} target='_blank'>Rublex News</a>
                        <a href='https://pay.rublex.io/ ' style={{fontSize: 15}} target='_blank'>Rublex Pay</a>
                      </div>
                      <div style={{display: 'flex', flex: 1, flexDirection: 'column', gap: 8}}>
                        <a href='https://token.rublex.io/' style={{fontSize: 15}} target='_blank'>Rublex Token</a>
                        <a href='https://lock.rublex.io/' style={{fontSize: 15}} target='_blank'>Rublex Locker</a>
                        <a href='https://academy.rublex.io/' style={{fontSize: 15}} target='_blank'>Rublex Academy</a>
                      </div>
                    </div>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </Box>
      <Flex flex={1} justify="flex-end" align="center" px={{ base: 2, lg: 8 }}>
        <NetworkSwitcher />
        <Box mt={2}>
          <LangSelector
            currentLang={currentLanguage.code}
            langs={languageList}
            setLang={setLanguage}
            buttonScale="xs"
            color="text"
            hideLanguage
          />
        </Box>
        {account ? (
          <Button
            size="md"
            rounded="full"
            leftIcon={<AiOutlineLogout />}
            onClick={logout}
            variant="solid"
            color={colors.default}
            bg={colors.secondary}
            _hover={{ bgColor: colors.default, opacity: 0.6 }}
            style={{minWidth: 100}}
          >
            {truncateHash(account)}
          </Button>
        ) : (
          <ConnectWalletButton scale="md" />
        )}
      </Flex>
    </Flex>
  )
}

export default Menu
