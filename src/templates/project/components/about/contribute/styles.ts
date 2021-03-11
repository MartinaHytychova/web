import styled from 'styled-components'
import { Body } from 'components/typography'
import Link from 'components/links/link'

export const Wrapper = styled.div`
  > ${Body} {
    margin-top: 10px;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 277px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`

export const Description = styled(Body)`
  margin: 6px 0 24px;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 10px 0 20px;
  }
`

export const Note = styled.span`
  color: ${({ theme }) => theme.colors.asphalt};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  text-align: center;
  line-height: 22px;
  display: flex;
  flex-wrap: wrap;
  width: 277px;
  margin: 10px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 32px;
  }
`

export const LinkHome = styled(Link)`
  color: ${({ theme }) => theme.colors.asphalt};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
`
