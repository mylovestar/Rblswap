import React from 'react'
// import { useLocation } from 'react-router'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Flex, Text, Tag, TagLabel } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
        pos="relative"
        justify="space-between"
        fontSize={{ base: 'md', md: 'lg' }}
        cursor="not-allowed"
        transition="all .1s ease-in-out"
      >
        <Text>{children}</Text>
        {isToBeReleased && (
          <Tag colorScheme="yellow">
            <TagLabel>TBR</TagLabel>
          </Tag>
        )}
      </Flex>
    )
  }

  return (
    <Link href={{ pathname }} style={{ flex: 1 }} target={isExternal ? '_blank' : ''} {...props}>
      <Flex
        px={location.pathname === pathname ? 2 : 1}
        py={4}
        mx={{ base: "2px", md: 4}}
        pos="relative"
        justify="center"
        align="center"
        fontSize="18px"
        fontWeight="500"
        textTransform="uppercase"
        color=" #F9F9FB"
        cursor="pointer"
        transition="all .1s ease-in-out"
        _hover={{ color: colors.primary }}
        _after={{
          display: location.pathname === pathname ? 'block' : 'none',
          content: "''",
          pos: 'absolute',
          width: '2px',
          height: '100%',
          top: 0,
          left: 0,
        }}
      >
        <Text _hover={{ color: colors.default }} color="gray.400">
          {children}
        </Text>
        {isExternal && <ExternalLinkIcon color="gray.200" />}
      </Flex>
    </Link>
  )
}

export default SidebarLink
