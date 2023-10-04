/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components'
import {
  ChartIcon,
  HistoryIcon,
  IconButton,
  NotificationDot,
  Text,
  useModal,
  ChartDisableIcon,
} from '@pancakeswap/uikit'
import { Box, Heading,Flex, } from '@chakra-ui/react'
import { FaToiletPaper } from 'react-icons/fa'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import { useExpertModeManager } from 'state/user/hooks'
import RefreshIcon from 'components/Svg/RefreshIcon'
import { ReactElement, useCallback } from 'react'
import { SettingsMode } from '../../../components/Menu/GlobalSettings/types'

interface Props {
  title: string | ReactElement
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
  hasAmount: boolean
  onRefreshPrice: () => void
}

const CurrencyInputContainer = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  padding: 0 18px 44px 18px;
  width: 100%;
`

const CurrencyIcons = styled(Box)`
  width: 52px;
  height: 52px;
  margin: 0 4px;
  padding: 10px;

  background: rgba(255, 255, 255, 0.05);
  /* White Opacity / 16% */

  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColoredIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CurrencyInputHeader: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  subtitle,
  setIsChartDisplayed = true,
  isChartDisplayed,
  hasAmount,
  onRefreshPrice,
}) => {
  const [expertMode] = useExpertModeManager()
  // const toggleChartDisplayed = () => {
  //   setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  // }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)
  const handleOnClick = useCallback(() => onRefreshPrice?.(), [onRefreshPrice])

  return (
    <CurrencyInputContainer>
      <Flex flexDirection={{ base: "column", sm: "column", md: "row" }} width="100%" alignItems="center" justifyContent="space-between">
        {/* {setIsChartDisplayed && (
          <ColoredIconButton onClick={toggleChartDisplayed} variant="text" scale="sm">
            {isChartDisplayed ? <ChartDisableIcon color="textSubtle" /> : <ChartIcon width="24px" color="textSubtle" />}
          </ColoredIconButton>
        )} */}
        <Flex flexDirection="column" alignItems={{ base: "center", md: "flex-start"}} width="100%" mr={18} mb={{ base: "10px", md: "0"}}>
          <Heading textTransform="uppercase" fontSize="26px" color="#fff">
            {title}
          </Heading>
          <Text color="#63767e" fontSize="14px">
            {subtitle}
          </Text>
        </Flex>
        <Flex justifyContent="flex-end">
          <CurrencyIcons>
            <NotificationDot show={expertMode}>
              <GlobalSettings color="#fff" mr="0" mode={SettingsMode.SWAP_LIQUIDITY} />
            </NotificationDot>
          </CurrencyIcons>
          <CurrencyIcons>
            <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
              <FaToiletPaper color="#fff" width="24px" />
            </IconButton>
          </CurrencyIcons>
          <CurrencyIcons>
            <IconButton variant="text" scale="sm" onClick={handleOnClick}>
              <RefreshIcon disabled={!hasAmount} color="#fff" width="27px" />
            </IconButton>
          </CurrencyIcons>
        </Flex>
      </Flex>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader
