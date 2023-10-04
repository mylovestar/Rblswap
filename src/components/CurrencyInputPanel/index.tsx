/* eslint-disable @typescript-eslint/no-unused-vars */
import { Currency, Pair } from '@pancakeswap/sdk'
import { Button, ChevronDownIcon, useModal } from '@pancakeswap/uikit'
import styled, { css } from 'styled-components'
import { Flex, Text, Box } from '@chakra-ui/react'
import { isAddress } from 'utils'
import { useTranslation } from '@pancakeswap/localization'
import { WrappedTokenInfo } from '@pancakeswap/tokens'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { StablePair } from 'views/AddLiquidity/AddStableLiquidity/hooks/useStableLPDerivedMintInfo'

import { useBUSDCurrencyAmount } from 'hooks/useBUSDPrice'
import { formatNumber } from 'utils/formatBalance'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'

import { Input as NumericalInput } from './NumericalInput'
import { CopyButton } from '../CopyButton'
import AddToWalletButton from '../AddToWallet/AddToWalletButton'

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`
const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })<{ zapStyle?: ZapStyle }>`
  padding: 0 0.5rem;
  background: #12161c;
  width: 192px;
  height: 30px;
  opacity: 0.66;
  border: 1px solid rgba(255, 255, 255, 0.25);
  filter: drop-shadow(0px 4px 56px rgba(0, 0, 0, 0.07));
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 4px;

  ${({ zapStyle, theme }) =>
    zapStyle &&
    css`
      padding: 8px;
      border: 1px solid ${theme.colors.cardBorder};
      border-radius: ${zapStyle === 'zap' ? '0px' : '8px'} 8px 0px 0px;
      height: auto;
    `};
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
`
const InputPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`
const Container = styled.div<{ zapStyle?: ZapStyle; error?: boolean }>`
  width: 192px;
  height: 40px;
  opacity: 0.66;
  border: 1px solid rgba(255, 255, 255, 0.25);
  filter: drop-shadow(0px 4px 56px rgba(0, 0, 0, 0.07));
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 4px;
  box-shadow: ${({ theme, error }) => theme.shadows[error ? 'warning' : 'inset']};
  ${({ zapStyle }) =>
    !!zapStyle &&
    css`
      border-radius: 0px 16px 16px 16px;
    `};
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.6;
  // background-color: ${({ theme }) => theme.colors.backgroundAlt};
`

const ContainerInput = styled(Box)`
  width: 232px;
  height: 296px;
  background: #12161c;
  /* White Opacity / 16% */

  border: 1px solid #292D34;
  box-shadow: 0px 30px 31px rgba(0, 0, 0, 0.11);
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 12px;
  // transform: matrix(-1, 0, 0, 1, 0, 0);

`

type ZapStyle = 'noZap' | 'zap'

interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onInputBlur?: () => void
  onPercentInput?: (percent: number) => void
  onMax?: () => void
  showQuickInputButton?: boolean
  showMaxButton: boolean
  label?: string
  onCurrencySelect?: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | StablePair | null
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
  commonBasesType?: string
  zapStyle?: ZapStyle
  beforeButton?: React.ReactNode
  disabled?: boolean
  error?: boolean
  showBUSD?: boolean
  InputLabel?: string
  style?: any
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onInputBlur,
  onPercentInput,
  onMax,
  showQuickInputButton = false,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  zapStyle,
  beforeButton,
  pair = null, // used for double token logo
  otherCurrency,
  id,
  showCommonBases,
  commonBasesType,
  disabled,
  error,
  showBUSD,
  InputLabel,
  style
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()

  const token = pair ? pair.liquidityToken : currency?.isToken ? currency : null
  const tokenAddress = token ? isAddress(token.address) : null

  const amountInDollar = useBUSDCurrencyAmount(
    showBUSD ? currency : undefined,
    Number.isFinite(+value) ? +value : undefined,
  )

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
      commonBasesType={commonBasesType}
    />,
  )

  return (
    <ContainerInput w={{base: "100%", md: "232px"}} style={style} position="relative" id={id}>
      <Flex flexDirection="column" alignItems="center" justifyContent="space-between" mb={9}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={4} pt={2}>
          {pair ? (
            <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} />
          ) : currency ? (
            <CurrencyLogo currency={currency} size="24px" />
          ) : null}
          {pair ? (
            <Text textAlign="left" id="pair" fontWeight="bold">
              {pair?.token0.symbol}:{pair?.token1.symbol}
            </Text>
          ) : (
            <Text textAlign="left" id="pair" fontWeight="bold" mt="6px" color="#fff">
              {(currency && currency.symbol && currency.symbol.length > 20
                ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                    currency.symbol.length - 5,
                    currency.symbol.length,
                  )}`
                : currency?.symbol) || t('Select a currency')}
            </Text>
          )}
        </Box>
        <Flex flexDirection="column">
          <Flex mb={2} alignItems="center">
            <Text color="#34D399" textTransform="uppercase" fontSize="10px" textAlign="left"  mr="auto">
              {t('Select Tokens')}
            </Text>
            {account && (
              <Text
                onClick={!disabled && onMax}
                color="#fff"
                style={{ display: 'inline', cursor: 'pointer' }}
                textTransform="uppercase" 
                fontSize="10px"
              >
                {!hideBalance && !!currency
                  ? t('Balance: %balance%', { balance: selectedCurrencyBalance?.toSignificant(6) ?? t('Loading') })
                  : ' -'}
              </Text>
            )}
          </Flex>
          {beforeButton}
          <CurrencySelectButton
            zapStyle={zapStyle}
            className="open-currency-select-button"
            selected={!!currency}
            onClick={() => {
              if (!disableCurrencySelect) {
                onPresentCurrencyModal()
              }
            }}
          >
            <Flex w="192px" h="30px" alignItems="center">
              <Text mr="auto" textTransform="uppercase">{t('Swap Tokens')}</Text> {!disableCurrencySelect && <ChevronDownIcon />}
            </Flex>
          </CurrencySelectButton>
          {/* {token && tokenAddress ? (
            <Flex style={{ gap: '4px' }} ml="4px" alignItems="center">
              <CopyButton
                width="16px"
                buttonColor="#fff"
                text={tokenAddress}
                tooltipMessage={t('Token address copied')}
                tooltipTop={-20}
                tooltipRight={40}
                tooltipFontSize={12}
              />
              <AddToWalletButton
                variant="text"
                p="0"
                height="auto"
                width="fit-content"
                tokenAddress={tokenAddress}
                tokenSymbol={token.symbol}
                tokenDecimals={token.decimals}
                tokenLogo={token instanceof WrappedTokenInfo ? token.logoURI : undefined}
              />
            </Flex>
          ) : null} */}
        </Flex>
      </Flex>

      <Box display="flex" flexDirection="column" m={1}>
        <Text textAlign="left" ml={{base: "40px", md: 3}} color="#599BF9" textTransform="uppercase" fontWeight="600" fontSize="10px" mb={2}>
          {InputLabel}
        </Text>
        <InputPanel>
          <Container as="label" zapStyle={zapStyle} error={error}>
            <LabelRow>
              <NumericalInput
                error={error}
                disabled={disabled}
                className="token-amount-input"
                value={value}
                onBlur={onInputBlur}
                onUserInput={(val) => {
                  onUserInput(val)
                }}
              />
            </LabelRow>
            <InputRow selected={disableCurrencySelect}>
              {!!currency && showBUSD && Number.isFinite(amountInDollar) && (
                <Text fontSize="12px" color="#fff" mr="12px">
                  ~{formatNumber(amountInDollar)} USD
                </Text>
              )}
              {account && currency && selectedCurrencyBalance?.greaterThan(0) && !disabled && label !== 'To' && (
                <Flex alignItems="center" justifyContent="center" width="100%" mt={2}>
                  {showQuickInputButton &&
                    onPercentInput &&
                    [25, 50, 75].map((percent) => (
                      <Button
                        key={`btn_quickCurrency${percent}`}
                        onClick={() => {
                          onPercentInput(percent)
                        }}
                        scale="xs"
                        mr="5px"
                        variant="secondary"
                        style={{ textTransform: 'uppercase' }}
                      >
                        {percent}%
                      </Button>
                    ))}
                  {showMaxButton && (
                    <Button onClick={onMax} scale="xs" variant="secondary" style={{ textTransform: 'uppercase' }}>
                      {t('Max')}
                    </Button>
                  )}
                </Flex>
              )}
            </InputRow>
          </Container>
          {disabled && <Overlay />}
        </InputPanel>
      </Box>
    </ContainerInput>
  )
}
