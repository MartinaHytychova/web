import * as React from 'react'
import ButtonAsLink from 'components/links/button-as-link'
import { SlackIcon } from 'components/icons'

import * as S from './styles'

interface Props {
  slackLink: string
  slackText: string
}

const Slack: React.FC<Props> = ({ slackLink, slackText }) => {
  return (
    <ButtonAsLink inverted to={slackLink}>
      <>
        <SlackIcon /> <S.ButtonLabel>{slackText}</S.ButtonLabel>
      </>
    </ButtonAsLink>
  )
}

export default Slack
