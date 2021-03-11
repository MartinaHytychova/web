import * as React from 'react'
import { SlackIcon } from 'components/icons'

import * as S from './styles'

interface Props {
  slackLink: string
  slackText: string
}

const Slack: React.FC<Props> = ({ slackLink, slackText }) => {
  return (
    <S.Link inverted to={slackLink}>
      <>
        <SlackIcon /> <S.ButtonLabel>{slackText}</S.ButtonLabel>
      </>
    </S.Link>
  )
}

export default Slack
