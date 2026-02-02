import styled from "styled-components";

export const HeroSection = styled.section`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100vh;
    width: 75vw;
    margin: 0 auto;

    @media(max-width: 768px) {
        display:flex;
        flex-direction: column-reverse;
    }
    
`

export const HeroContent = styled.div`
    padding:20px
`

export const HeroTitle = styled.h1`
    font-size: 56px;
    line-height: 48px;
    font-weight: 400;
    padding: 0;
    margin-bottom: 12px;
`

export const HeroSubTitle = styled.h3`
    font-size: 14px;
    line-height: 26px;
    font-weight: 200;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.02rem;
    
`

export const HeroImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
`