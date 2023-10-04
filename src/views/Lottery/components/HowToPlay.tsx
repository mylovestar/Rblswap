/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components'
import { Flex, Link, useMatchBreakpoints } from '@pancakeswap/uikit'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { BallWithNumber, MatchExampleA, MatchExampleB, PoolAllocationChart } from '../svgs'

const Divider = styled.div`
  background-color: transparent;
  height: 1px;
  margin: 40px 0;
  width: 100%;
`

const BulletList = styled.ul`
  list-style-type: none;
  margin-left: 8px;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
  }
  li::before {
    content: '•';
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
  li::marker {
    font-size: 12px;
  }
`

const StepContainer = styled(Flex)`
  margin-bottom: 44px;
  gap: 24px;
  width: 100%;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const StyledStepCard = styled(Box)`
  display: flex;
  align-self: baseline;
  position: relative;
  background: ${({ theme }) => theme.colors.cardBorder};
  padding: 1px 1px 3px 1px;
  border-radius: ${({ theme }) => theme.radii.card};
`

const StepCardInner = styled(Box)`
  width: 100%;
  padding: 24px;
  background: ${({ theme }) => theme.card.background};
  border-radius: ${({ theme }) => theme.radii.card};
`

type Step = { title: string; subtitle: string; label: string }

const StepCard: React.FC<React.PropsWithChildren<{ step: Step }>> = ({ step }) => {
  return (
    <StyledStepCard width="100%">
      <StepCardInner height={['200px', '180px', null, '200px']}>
        <Text mb="16px" fontSize="12px" fontWeight="bold" textAlign="right" textTransform="uppercase">
          {step.label}
        </Text>
        <Heading textTransform="uppercase" mb="16px" scale="lg" color="secondary">
          {step.title}
        </Heading>
        <Text color="textSubtle">{step.subtitle}</Text>
      </StepCardInner>
    </StyledStepCard>
  )
}

const BallsContainer = styled(Flex)`
  padding-left: 28px;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xs} {
    gap: 7px;
    padding-left: 36px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    gap: 15px;
    padding-left: 40px;
  }
`

const InlineLink = styled(Link)`
  display: inline;
`

const ExampleBalls = () => {
  const { isDesktop } = useMatchBreakpoints()
  const ballSize = isDesktop ? '24px' : '32px'
  const fontSize = isDesktop ? '14px' : '16px'
  return (
    <BallsContainer>
      <BallWithNumber size={ballSize} fontSize={fontSize} color="yellow" number="9" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="green" number="1" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="aqua" number="3" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="teal" number="6" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="lilac" number="6" />
      <BallWithNumber size={ballSize} fontSize={fontSize} color="pink" number="2" />
    </BallsContainer>
  )
}

const MatchExampleContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
`

const MatchExampleCard = () => {
  const { isDark } = useTheme()
  const { isXs } = useMatchBreakpoints()
  const { t } = useTranslation()
  const exampleWidth = isXs ? '210px' : '258px'
  return (
    <StyledStepCard width={['280px', '330px', '330px']}>
      <StepCardInner height="210px">
        <MatchExampleContainer>
          <ExampleBalls />
          <Flex>
            <Text lineHeight="72px" textAlign="right" color="secondary" fontWeight="bold" mr="20px">
              {t('A')}
            </Text>
            <MatchExampleA width={exampleWidth} height="46px" isDark={isDark} />
          </Flex>
          <Flex>
            <Text lineHeight="72px" textAlign="right" color="secondary" fontWeight="bold" mr="20px">
              {t('B')}
            </Text>
            <MatchExampleB width={exampleWidth} height="46px" isDark={isDark} />
          </Flex>
        </MatchExampleContainer>
      </StepCardInner>
    </StyledStepCard>
  )
}

const AllocationGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-auto-rows: max-content;
  row-gap: 4px;
`

const AllocationColorCircle = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`

const AllocationMatch: React.FC<React.PropsWithChildren<{ color: string; text: string }>> = ({ color, text }) => {
  return (
    <Flex alignItems="center">
      <AllocationColorCircle color={color} />
      <Text color="textSubtle">{text}</Text>
    </Flex>
  )
}

const PoolAllocations = () => {
  const { t } = useTranslation()
  return (
    <StyledStepCard width={['280px', '330px', '380px']}>
      <StepCardInner height="auto">
        <Flex mb="32px" justifyContent="center">
          <PoolAllocationChart width="100px" height="100px" />
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="12px" color="secondary" fontWeight="bold" textTransform="uppercase">
            {t('Digits matched')}
          </Text>
          <Text fontSize="12px" color="secondary" fontWeight="bold" textAlign="right" textTransform="uppercase">
            {t('Prize pool allocation')}
          </Text>
        </Flex>
        <AllocationGrid>
          <AllocationMatch color="#FFE362" text={t('Matches first %digits%', { digits: 1 })} />
          <Text textAlign="right" fontWeight="bold">
            2%
          </Text>
          <AllocationMatch color="#85C54E" text={t('Matches first %digits%', { digits: 2 })} />
          <Text textAlign="right" fontWeight="bold">
            3%
          </Text>
          <AllocationMatch color="#028E75" text={t('Matches first %digits%', { digits: 3 })} />
          <Text textAlign="right" fontWeight="bold">
            5%
          </Text>
          <AllocationMatch color="#36E8F5" text={t('Matches first %digits%', { digits: 4 })} />
          <Text textAlign="right" fontWeight="bold">
            10%
          </Text>
          <AllocationMatch color="#A881FC" text={t('Matches first %digits%', { digits: 5 })} />
          <Text textAlign="right" fontWeight="bold">
            20%
          </Text>
          <AllocationMatch color="#D750B2" text={t('Matches all 6')} />
          <Text textAlign="right" fontWeight="bold">
            40%
          </Text>
          <AllocationMatch color="#BDC2C4" text={t('Burn Pool')} />
          <Text textAlign="right" fontWeight="bold">
            20%
          </Text>
        </AllocationGrid>
      </StepCardInner>
    </StyledStepCard>
  )
}

const GappedFlex = styled(Flex)`
  gap: 24px;
`

const HowToPlay: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  const steps: Step[] = [
    {
      label: t('Step %number%', { number: 1 }),
      title: t('Buy Tickets'),
      subtitle: t('Prices are set when the round starts, equal to 5 USD in CAKE per ticket.'),
    },
    {
      label: t('Step %number%', { number: 2 }),
      title: t('Wait for the Draw'),
      subtitle: t('There is one draw every day alternating between 0 AM UTC and 12 PM UTC.'),
    },
    {
      label: t('Step %number%', { number: 3 }),
      title: t('Check for Prizes'),
      subtitle: t('Once the round’s over, come back to the page and check to see if you’ve won!'),
    },
  ]

  return (
    <Box width={{ base: "340px", sm: "450px", md: "100%"}}>
      <Flex mb="40px" alignItems="center" flexDirection="column">
        <Heading textTransform="uppercase" fontWeight="900" fontSize={{ base: "24px", md: "48px"}} mb="24px" color="#fff">
          {t('How to Play')}
        </Heading>
        <Text fontSize="18px" color="#fff" textAlign={{base: "left", md: "center"}}>
          {t(
            `If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool. Simple!`,
          )}
        </Text> 
      </Flex>
      <StepContainer>
        <Image h="auto" w={{ base: "300px", md: "1024px"}} src="/images/how2.png" alt="how to win" />
      </StepContainer>
      <Divider />
      <GappedFlex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex flex="2" flexDirection="column">
          <Heading textTransform="uppercase" fontWeight="900" fontSize={{ base: "24px", md: "48px"}} lineHeight="60px" color="#fff">
            {t('Winning Criteria')}
          </Heading>
          <Text fontSize="20px" fontWeight="800" lineHeight="22px" color="#3ddcc8" mb={2} textAlign="left">
            {t(`The digits on your ticket must match in the correct order to win.`)}
          </Text>
          <Text mb="16px" color="#fff">
            {t('Here’s an example lottery draw, with two tickets, A and B.')}
          </Text>
          <BulletList>
            <li>
              <Text display="inline" color="#fff">
                {t(
                  'Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.',
                )}
              </Text>
            </li>
            <li>
              <Text display="inline" color="#fff">
                {t(
                  'Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.',
                )}
              </Text>
            </li>
          </BulletList>
          <Text mt="16px" color="#fff">
            {t(
              'Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.',
            )}
          </Text>
        </Flex>
        <Flex flex="1" justifyContent="center">
          <Image  h="auto" w={{ base: "300px", md: "1024px"}} src="/images/win-c.png" alt="win-c" />
        </Flex>
      </GappedFlex>
      <Divider />
      <GappedFlex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex justifyContent="center">
          <Image  h="auto" w={{ base: "300px", md: "1024px"}} src="/images/bg-win.png" alt="win-c" />
        </Flex>
        <Flex flexDirection="column">
          <Heading textTransform="uppercase" mb="24px" fontWeight="900" fontSize={{ base: "24px", md: "48px"}} lineHeight="60px" color="#fff">
            {t('Prize Funds')}
          </Heading>
          <Text color="#fff">{t('The prizes for each lottery round come from three sources:')}</Text>
          <Heading
            textTransform="uppercase"
            my="16px"
            color="#3ddcc8"
            fontSize="20px"
            lineHeight="24px"
            fontWeight="800"
          >
            {t('Ticket Purchases')}
          </Heading>
          <Box>
            <Box>
              <Text display="inline" color="#fff">
                {t('100% of the RBL paid by people buying tickets that round goes back into the prize pools.')}
              </Text>
            </Box>
          </Box>
          <Heading
            textTransform="uppercase"
            my="16px"
            color="#3ddcc8"
            fontSize="20px"
            lineHeight="24px"
            fontWeight="800"
          >
            {t('Rollover Prizes')}
          </Heading>
          <Box>
            <Box>
              <Text display="inline" color="#fff">
                {t(
                  'After every round, if nobody wins in one of the prize brackets, the unclaimed RBL for that bracket rolls over into the next round and are redistributed among the prize pools.',
                )}
              </Text>
            </Box>
          </Box>
          <Heading
            textTransform="uppercase"
            my="16px"
            color="#3ddcc8"
            fontSize="20px"
            lineHeight="24px"
            fontWeight="800"
          >
            {t('RBL Injections')}
          </Heading>
          <Box>
            <Box>
              <Text display="inline" color="#fff">
                {t(
                  'An average total of 35,000 RBL from the treasury is added to lottery rounds over the course of a week. This RBL is of course also included in rollovers! Read more in our guide to RBL Tokenomics',
                )}
                {/* <InlineLink href="https://docs.pancakeswap.finance/tokenomics/cake/cake-tokenomics">
                  {t('CAKE Tokenomics')}
                </InlineLink> */}
              </Text>
            </Box>
          </Box>
        </Flex>
      </GappedFlex>
      {/* <Divider />
      <Flex justifyContent="center" alignItems="center" flexDirection={['column', 'column', 'row']}>
        <Image width={240} height={172} src="/images/lottery/tombola.png" alt="tombola bunny" mr="8px" mb="16px" />
        <Flex maxWidth="300px" flexDirection="column">
          <Heading textTransform="uppercase" mb="16px" scale="md">
            {t('Still got questions?')}
          </Heading>
          <Text>
            {t('Check our in-depth guide on')}{' '}
            <InlineLink href="https://docs.pancakeswap.finance/products/lottery/lottery-guide">
              {t('how to play the PancakeSwap lottery!')}
            </InlineLink>
          </Text>
        </Flex>
      </Flex> */}
    </Box>
  )
}

export default HowToPlay
