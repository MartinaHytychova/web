import styled from 'styled-components'
import { Body } from 'components/typography'
import { Link } from 'components/links'

export const Wrapper = styled.div`
  > ${Body} {
    margin-top: 12px;
  }
`

export const Description = styled(Body)`
  margin-bottom: 72px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 48px;
  }
`

export const Note = styled.span`
  color: ${({ theme }) => theme.colors.asphalt};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  text-align: center;
  line-height: 22px;
`

export const LinkHome = styled(Link)`
  color: ${({ theme }) => theme.colors.asphalt};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  margin-left: 2px;
`
