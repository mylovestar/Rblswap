/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import styled from 'styled-components'
import { Box, Skeleton } from '@pancakeswap/uikit'
import { Flex, Heading } from '@chakra-ui/react'
import { LotteryStatus } from 'config/constants/types'
import PageSection from 'components/PageSection'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { useFetchLottery, useLottery } from 'state/lottery/hooks'
import {
  TITLE_BG,
  GET_TICKETS_BG,
  FINISHED_ROUNDS_BG,
  FINISHED_ROUNDS_BG_DARK,
  CHECK_PRIZES_BG,
} from './pageSectionStyles'
import useGetNextLotteryEvent from './hooks/useGetNextLotteryEvent'
import useStatusTransitions from './hooks/useStatusTransitions'
import Hero from './components/Hero'
import NextDrawCard from './components/NextDrawCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import AllHistoryCard from './components/AllHistoryCard'
import CheckPrizesSection from './components/CheckPrizesSection'
import HowToPlay from './components/HowToPlay'
import useShowMoreUserHistory from './hooks/useShowMoreUserRounds'
import { PageMeta } from '../../components/Layout/Page'

const LotteryPage = styled.div`
  min-height: calc(100vh - 64px);
  width: 100vw;
`

const Lottery = () => {
  useFetchLottery()
  useStatusTransitions()
  const { t } = useTranslation()
  const { isDark, theme } = useTheme()
  const {
    currentRound: { status, endTime },
  } = useLottery()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, status)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()

  return (
    <>
      <PageMeta />
      <LotteryPage style={{backgroundImage: `url(/images/background1.png) repeat 100% 100%`}}>
        <PageSection background={TITLE_BG} index={1} hasCurvedDivider={false}>
          <Hero />
        </PageSection>
        <PageSection
          containerProps={{ style: { marginTop: '-30px' } }}
          background={GET_TICKETS_BG}
          concaveDivider
          clipFill={{ light: '#7645D9' }}
          dividerPosition="top"
          index={2}
        >
          <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="24px">
            {status === LotteryStatus.OPEN && (
              <Heading
                textTransform="uppercase"
                fontWeight="900"
                fontSize={{base: "38px", md: "48px"}}
                mb="24px"
                lineHeight="60px"
                color="#fff"
              >
                {t('Get your tickets now!')}
              </Heading>
            )}
            <Flex alignItems="center" justifyContent="center" mb="48px">
              {nextEventTime && (postCountdownText || preCountdownText) ? (
                <Countdown
                  nextEventTime={nextEventTime}
                  postCountdownText={postCountdownText}
                  preCountdownText={preCountdownText}
                />
              ) : (
                <Skeleton height="41px" width="250px" />
              )}
            </Flex>
            <NextDrawCard />
          </Flex>
        </PageSection>
        <Flex
          justifyContent="center"
          h="400px"
          bgImage="/images/bg-lottery.png"
          bgSize="cover"
          bgAttachment="cover"
          bgRepeat="no-repeat"
          w="100%"
        >
          <CheckPrizesSection />
        </Flex>
        <PageSection
          // innerProps={{ style: { margin: '0', width: '100%' } }}
          background="transparent"
          hasCurvedDivider={false}
          index={0}
        >
          <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading
              textTransform="uppercase"
              fontWeight="900"
              fontSize={{base: "38px", md: "48px"}}
              mb="24px"
              lineHeight="60px"
              color="#fff"
            >
              {t('Get your tickets now!')}
            </Heading>
            <Box mb="24px">
              <HistoryTabMenu
                activeIndex={historyTabMenuIndex}
                setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
              />
            </Box>
            {historyTabMenuIndex === 0 ? (
              <AllHistoryCard />
            ) : (
              <YourHistoryCard
                handleShowMoreClick={handleShowMoreUserRounds}
                numUserRoundsRequested={numUserRoundsRequested}
              />
            )}
          </Flex>
        </PageSection>
        <PageSection
          dividerPosition="top"
          dividerFill={{ light: theme.colors.background }}
          clipFill={{ light: '#9A9FD0', dark: '#66578D' }}
          index={2}
        >
          <HowToPlay />
        </PageSection>
      </LotteryPage>
    </>
  )
}

export default Lottery
