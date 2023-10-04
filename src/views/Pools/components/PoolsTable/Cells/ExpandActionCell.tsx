import styled from 'styled-components'
import { Text } from '@pancakeswap/uikit'
import { TriangleDownIcon } from '@chakra-ui/icons'
import { useTranslation } from '@pancakeswap/localization'
import BaseCell from './BaseCell'

interface ExpandActionCellProps {
  expanded: boolean
  isFullLayout: boolean
}

const StyledCell = styled(BaseCell)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding-right: 12px;
  padding-left: 0px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
    padding-right: 32px;
    padding-left: 8px;
  }
`

const ArrowIcon = styled(TriangleDownIcon)<{ toggled: boolean }>`
  transform: ${({ toggled }) => (toggled ? 'rotate(180deg)' : 'rotate(0)')};
  height: 24px;
`

const ExpandActionCell: React.FC<React.PropsWithChildren<ExpandActionCellProps>> = ({ expanded, isFullLayout }) => {
  const { t } = useTranslation()
  return (
    <StyledCell role="cell">
      {isFullLayout && (
        <Text color="#3ddcc8" bold>
          {expanded ? t('Hide') : t('Details')}
        </Text>
      )}
      <ArrowIcon color="#3ddcc8" toggled={expanded} />
    </StyledCell>
  )
}

export default ExpandActionCell
