import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import DescriptionCard from '@components/DescriptionCard'
import Image from '@components/Image'
import './HomePage.css'

function HomePageContainer() {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { name: { eq: "image-home-page" }, sourceInstanceName: { eq: "images"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 780) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  return (
    <div className="home-container">
      <div className="item1">
        <DescriptionCard />
      </div>
      <div className="item2">
        <Image withFrame fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
      </div>
    </div>
  )
}

function test(){
    var videoStorage = [ 
    'https://player.vimeo.com/video/549818890?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549816752?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549813918?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549823739?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549814093?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549820978?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549823212?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549820321?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549814301?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549812135?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549822114?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549826325?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549823704?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549823040?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549823097?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549822379?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963',
	'https://player.vimeo.com/video/549821794?muted=1&autoplay=1&autopause=0&controls=0&app_id=122963'
    ],
    video = document.querySelector('iframe'),
    // choose one random url from our storage as the active video
    activeVideoUrl = videoStorage[Math.round(Math.random() * (videoStorage.length - 1))];        
    video.setAttribute('src', activeVideoUrl);
}

export default HomePageContainer