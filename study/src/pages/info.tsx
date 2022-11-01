import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Text from '../components/Text'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
      <Link to="/">To Info</Link>
    </div>
  )
}

export default InfoPage


//Gatsby에서는 기본적으로 pages 폴더 내부의 파일과 Gatsby API를 통해 생성해주는 페이지의 템플릿 파일에서만 Query 정의가 가능합니다.
//아래와같이 변수에 Query를 담아주고, 이를 Export 해주면 Gatsby 내부적으로 요청을 보냅니다.
export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

