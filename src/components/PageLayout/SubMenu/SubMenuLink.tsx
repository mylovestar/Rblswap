import React from 'react'
// import { useLocation } from 'react-router'
import { useRouter } from 'next/router'

import Link from 'next/link'
import { Flex, Text } from '@chakra-ui/react'
import colors from 'config/chakra/styles/colors'

interface ISubMenuLinkProps {
  children: React.ReactNode
  pathname: string
  isToBeReleased: boolean
  isExternal: boolean
  [x: string]: any
}

const SubMenuLink: React.FC<ISubMenuLinkProps> = ({ children, pathname, isToBeReleased, isExternal, ...props }) => {
  const location = useRouter()

  // I know it's redundant
  if (isToBeReleased) {
    return (
      <Flex
        px={2}
        py={4}
        color={colors.tertiary}
        pos="relative"
        justify="space-between"
        fontSize={{ base: 'md', md: 'lg' }}
        cursor="not-allowed"
        transition="all .1s ease-in-out"
      >
        <Text>{children}</Text>
      </Flex>
    )
  }

  return (
    <Link href={{ pathname }} style={{ padding: '0 8px' }} target={isExternal ? '_blank' : ''} {...props}>
      <Flex
        px={location.pathname === pathname ? 4 : 2}
        py={4}
        pos="relative"
        color={colors.default}
        justify="space-between"
        align="center"
        fontSize={{ base: 'md', md: 'lg' }}
        cursor="pointer"
        transition="all .1s ease-in-out"
        _hover={{ color: colors.default }}
        _after={{
          display: location.pathname === pathname ? 'block' : 'none',
          content: "''",
          pos: 'absolute',
          width: '100%',
          height: '100%',
          borderBottom: `4px solid ${colors.default}`,
          top: 0,
          left: 0,
        }}
      >
        <Text>{children}</Text>
      </Flex>
    </Link>
  )
}

export default SubMenuLink
