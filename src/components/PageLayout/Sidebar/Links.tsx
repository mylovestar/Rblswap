/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Box } from '@chakra-ui/react'
import { useTranslation } from '@pancakeswap/localization'

import colors from 'config/chakra/styles/colors'
import SidebarLinksContainer from './SidebarLinksContainer'
import SidebarLink from './SidebarLink'

import { groups } from '../SubMenu/Links'

const Links: React.FC<{ [x: string]: any }> = ({ ...props }) => {
  const { t } = useTranslation()

  return (
    <Box
      flex={1}
      mt={4}
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
      <Box p={4} w="100%" mx="auto" color="white" {...props}>
        {groups.map((group) => (
          <SidebarLinksContainer>
            {group.links.map((link) => (
              <SidebarLink
                isExternal={link.isExternal}
                pathname={link.path}
                isToBeReleased={link.toBeReleased}
                key={link.name}
              >
                {/* {link.name} */}
                {t(link.name)}
              </SidebarLink>
            ))}
          </SidebarLinksContainer>
        ))}
      </Box>
    </Box>
  )
}

export default Links
