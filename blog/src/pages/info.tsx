import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'


const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`
const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`
const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

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
        <Global styles={globalStyle} />
        <div css={TextStyle}>{title}</div>
        <Text1  disable={true}>{description}</Text1>
        <Text2  disable={true}>{author}</Text2>
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

