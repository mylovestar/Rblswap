import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box)<{
  $isDark: boolean
  $isExpanded: boolean
  $isFullWidthContainer?: boolean
}>`
  border: none;
  border-radius: 32px;
  width: 100%;
  padding-top: 36px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 8px;
    background: #12161c;
    border: 1px solid #292D34;
    box-shadow: 0px 30px 31px rgba(0, 0, 0, 0.11);
    backdrop-filter: blur(7.5px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 12px;
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '775px')};
    height: ${({ $isExpanded }) => ($isExpanded ? 'calc(100vh - 100px)' : '516px')};
  }
`

StyledPriceChart.defaultProps = {
  height: '70%',
}
