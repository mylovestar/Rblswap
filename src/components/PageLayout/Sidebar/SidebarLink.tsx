import React from 'react'
// import { useLocation } from 'react-router'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Flex, Text, Tag, TagLabel } from '@chakra-ui/react'
import colors from 'config/chakra/styles/colors'

interface ISidebarLinkProps {
  children: React.ReactNode
  pathname: string
  isToBeReleased: boolean
  isExternal: boolean
  [x: string]: any
}

const SidebarLink: React.FC<ISidebarLinkProps> = ({ children, pathname, isToBeReleased, isExternal, ...props }) => {
  const location = useRouter()

  // I know it's redundant
  if (isToBeReleased) {
    return (
      <Flex
        px={2}
        py={4}
        color={colors.default}
        pos="relative"
        justify="space-between"
        fontSize={{ base: 'md', md: 'lg' }}
        cursor="not-allowed"
        transition="all .1s ease-in-out"
      >
        <Text>{children}</Text>
        {isToBeReleased && (
          <Tag colorScheme="blue">
            <TagLabel>TBA</TagLabel>
          </Tag>
        )}
      </Flex>
    )
  }

  return (
    <Link href={{ pathname }} style={{ flex: 1 }} target={isExternal ? '_blank' : ''} {...props}>
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
        _hover={{ bg: colors.default, color: colors.primary }}
        _after={{
          display: location.pathname === pathname ? 'block' : 'none',
          content: "''",
          pos: 'absolute',
          width: '2px',
          height: '100%',
          bgColor: colors.secondary,
          top: 0,
          left: 0,
        }}
      >
        <Text>{children}</Text>
      </Flex>
    </Link>
  )
}

export default SidebarLink
