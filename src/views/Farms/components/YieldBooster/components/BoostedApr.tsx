import { Box } from '@chakra-ui/react'
import { useTranslation } from '@pancakeswap/localization'
import { RocketIcon, Text } from '@pancakeswap/uikit'
import isUndefinedOrNull from '@pancakeswap/utils/isUndefinedOrNull'
import BigNumber from 'bignumber.js'
import _toNumber from 'lodash/toNumber'
import { memo, useContext } from 'react'
import { formatNumber } from 'utils/formatBalance'
import useBoostMultiplier from '../hooks/useBoostMultiplier'
import useGetBoostedAPR from '../hooks/useGetBoostedAPR'
import { YieldBoosterState } from '../hooks/useYieldBoosterState'
import { YieldBoosterStateContext } from './ProxyFarmContainer'

interface BoostedAprPropsType {
  apr: number
  lpRewardsApr: number
  pid: number
  mr?: string
  userBalanceInFarm: BigNumber
  lpTotalSupply: BigNumber
}

function BoostedApr(props: BoostedAprPropsType) {
  const { lpRewardsApr, apr, pid, userBalanceInFarm, lpTotalSupply, ...rest } = props
  const { boosterState, proxyAddress } = useContext(YieldBoosterStateContext)
  const { t } = useTranslation()

  const boostedAprFromFE = useGetBoostedAPR(userBalanceInFarm, lpTotalSupply, apr, lpRewardsApr)

  const multiplier = useBoostMultiplier({ pid, boosterState, proxyAddress })

  const boostedAprFromSC =
    (!isUndefinedOrNull(multiplier) &&
      !isUndefinedOrNull(apr) &&
      formatNumber(
        _toNumber(apr) * Number(multiplier) + (!isUndefinedOrNull(lpRewardsApr) ? _toNumber(lpRewardsApr) : 0),
      )) ||
    '0'

  const msg =
    boosterState === YieldBoosterState.ACTIVE ? (
      `${boostedAprFromSC}%`
    ) : (
      <>
        <Text bold color="#3ddcc8" {...rest} fontSize={14} display="inline-block" mr="3px">
          {t('Up to')}
        </Text>
        {`${userBalanceInFarm.eq(0) ? boostedAprFromSC : boostedAprFromFE}%`}
      </>
    )
  // if (boostedAPR === '0') {
  //   return null
  // }

  return (
    <Box display="flex" border="1px solid #3ddcc8" borderRadius="3xl" ml={2} py={1} px={2}>
      <RocketIcon m="4px" color="#3ddcc8" />
      <Text bold color="#3ddcc8" {...rest} fontSize={16}>
        {msg}
      </Text>
    </Box>
  )
}

export default memo(BoostedApr)
