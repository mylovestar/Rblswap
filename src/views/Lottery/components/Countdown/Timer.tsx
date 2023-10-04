/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components'
import { Heading } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { Flex } from '@chakra-ui/react'

export interface TimerProps {
  seconds?: number
  minutes?: number
  hours?: number
  days?: number
  wrapperClassName?: string
}

const StyledTimerFlex = styled(Flex)<{ showTooltip?: boolean }>`
  ${({ theme, showTooltip }) => (showTooltip ? ` border-bottom: 1px dashed ${theme.colors.textSubtle};` : ``)}
  div:last-of-type {
    margin-right: 0;
  }
`

const StyledTimerText = styled(Heading)`
  color: #fff;
  font-weight: 900;
`

const Wrapper: React.FC<React.PropsWithChildren<TimerProps>> = ({
  minutes,
  hours,
  days,
  seconds,
  wrapperClassName,
}) => {
  const { t } = useTranslation()

  return (
    <StyledTimerFlex alignItems="flex-end" className={wrapperClassName}>
      {Boolean(days) && (
        <Flex
          bg="#3ddcc8"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          w="129px"
          h="70px"
          color="#fff"
          p={4}
          mx={2}
        >
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {days}D
          </StyledTimerText>
        </Flex>
      )}
      {Boolean(hours) && (
        <Flex
          bg="#3ddcc8"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          w="129px"
          h="70px"
          color="#fff"
          p={4}
          mx={2}
        >
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {hours}H
          </StyledTimerText>
        </Flex>
      )}
      {Boolean(minutes) && (
        <Flex
          bg="#3ddcc8"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          w="129px"
          h="70px"
          color="#fff"
          p={4}
          mx={2}
        >
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {minutes}M
          </StyledTimerText>
        </Flex>
      )}
      {Boolean(seconds) && (
        <Flex
          bg="#3ddcc8"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          w="129px"
          h="70px"
          color="#fff"
          p={4}
          mx={2}
        >
          <StyledTimerText mb="-4px" scale="xl" mr="4px">
            {seconds}S
          </StyledTimerText>
        </Flex>
      )}
    </StyledTimerFlex>
  )
}

export default Wrapper
