import React from 'react'
import { Layout, Section, SectionContent } from 'components/layout'
import { graphql } from 'gatsby'
import { Heading1 } from 'components/typography'
import { Project } from 'generated/graphql-types'
import * as S from './styles'
import AboutProject from './components/about'
import ProjectCard from './components/project-card'
import Contribute from './components/about/contribute'
import { NAVIGATION_KEY as PROJECT_PAGE_NAVIGATION_KEY } from 'page-components/projects'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { mapVolunteers } from 'utils/map-volunteers'

interface ProjectPageProps {
  data: {
    project: Project
  }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
  const { t } = useTranslation()
  const {
    lang,
    name,
    url,
    trelloUrl,
    githubUrl,
    projectRoles,
    lead,
    progress,
    description,
    slackChannelUrl,
    slackChannelName,
    contributionText,
  } = data.project
  return (
    <Layout
      crumbs={[
        { path: '/projects', label: t(PROJECT_PAGE_NAVIGATION_KEY) },
        { label: name },
      ]}
    >
      <Section>
        <SectionContent>
          <Heading1>
            Hello, I am {name} in {lang === 'en' ? '🇺🇸' : '🇨🇿'}
          </Heading1>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <S.AboutSectionWrapper>
            <S.DescriptionWrapper>
              <AboutProject
                volunteers={mapVolunteers(projectRoles)}
                description={description}
              />
            </S.DescriptionWrapper>
            <S.ProjectCardWrapper>
              <ProjectCard
                githubUrl={githubUrl}
                name={name}
                url={url}
                progress={progress}
                projectLead={lead}
                slackChannelName={slackChannelName}
                slackChannelUrl={slackChannelUrl}
                trelloUrl={trelloUrl}
              />
            </S.ProjectCardWrapper>
          </S.AboutSectionWrapper>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <Contribute contributionText={contributionText} />
        </SectionContent>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    project(id: { eq: $id }) {
      name
      lang
      description
      projectRoles {
        name
        volunteer {
          name
          profilePictureUrl
        }
      }
      lead {
        name
        company
        profilePictureUrl
      }
      slackChannelName
      slackChannelUrl
      progress
      githubUrl
      trelloUrl
      url
      contributionText
    }
  }
`

export default ProjectPage
