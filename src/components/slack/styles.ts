import { ButtonAsLink } from 'components/links'
import styled from 'styled-components'

export const ButtonLabel = styled.span`
  display: inline-flex;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.darkGrey};
`

export const Link = styled(ButtonAsLink)`
  max-width: 277px;
`
