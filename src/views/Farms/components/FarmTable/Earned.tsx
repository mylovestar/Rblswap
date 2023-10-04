import styled from 'styled-components'
import { Skeleton } from '@pancakeswap/uikit'

export interface EarnedProps {
  earnings: number
  pid: number
}

interface EarnedPropsWithLoading extends EarnedProps {
  userDataReady: boolean
}

const Amount = styled.span<{ earned: number }>`
  align-items: center;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 127.2%;
  /* or 25px */

  text-align: center;
  text-transform: capitalize;
  opacity: 0.5;
`

const Earned: React.FunctionComponent<React.PropsWithChildren<EarnedPropsWithLoading>> = ({
  earnings,
  userDataReady,
}) => {
  if (userDataReady) {
    return <Amount earned={earnings}>{earnings.toLocaleString()}</Amount>
  }
  return (
    <Amount earned={0}>
      <Skeleton width={60} />
    </Amount>
  )
}

export default Earned
