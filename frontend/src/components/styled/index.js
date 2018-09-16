import styled, { keyframes } from 'styled-components'

export const OnlineContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
`

export const LoadingContainer = styled.div`
    height: 50vh;
    max-height: 500px;
    width: 90vw;
    max-width: 600px;
    background: #fdfdfd;
    border-radius: 6px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #ddd;
`

export const LoadingText = styled.div`
    font-size: 2.5rem;
    text-align: center;
    font-style: italic;
    color: #2d3436;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
      transform: rotate(180deg) scale(1.3);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
`

export const LoadingImage = styled.div`
    font-size: 5rem;
    animation: ${spin} 1.2s linear infinite;
`

const grow = keyframes`
  0% {
      transform: rotate(-30deg) scale(0.3);
      opacity: 0;
  }

  80% {
      transform: rotate(5deg) scale(1.10);
      opacity: 1;
  }

  100% {
      transform: rotate(0deg) scale(1);
      opacity: 1;
  }
`

export const IconAppear = styled.div`
  animation: ${grow} 0.4s forwards;
`

export const ContentContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  font-size: 2rem;
  color: #2d3436;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 800;
  margin: 0.5rem 0px;
  text-align: center;
`

export const Subtitle = styled.div`
  font-size: 1.25rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #2d3436;
  opacity: 0.8;
  font-style: italic;
  margin-bottom: 1rem;
  text-align: center;
`

export const Footer = styled.div`
  font-size: 1.5rem;
  color: #2d3436;
  text-align: center;
  margin: 1rem 0px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`

export const Divider = styled.div`
  height: 1px;
  background: #cbcbcb;
  width: 100%;
  max-width: 800px;
`

export const ArticleContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: ${({ expanded }) => expanded ? 'auto' : '25vh'};
  overflow: hidden;
  margin: 1rem 0;
  background: #fdfdfd;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
`

export const Frost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(255,255,255,0) 50%, rgba(255,255,255,1) 95%);
`

export const ReadMore = styled.div`
  position: absolute;
  width: 15%;
  min-width: 110px;
  left: 50%;
  top: 98%;
  font-size: 1rem;
  color: #fdfdfd;
  background: #2d3436;
  transform: translate(-50%, 0%);
  opacity: 0;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: all 0.3s;
  text-align: center;

  ${ArticleContainer}:hover & {
    transform: translate(-50%, -120%);
    opacity: 1;
  }
`

export const ArticleTitle = styled.div`
  color: #2d3436;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

export const ArticleAuthor = styled.div`
  color: #2d3436;
  font-size: 1.1rem;
  font-style: italic;
  opacity: 0.8;
  margin-bottom: 1rem;
`

export const ArticleContent = styled.div`
  color: #2d3436;
  font-size: 1rem;
`