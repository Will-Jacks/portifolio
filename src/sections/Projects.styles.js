import styled from "styled-components"

export const ProjectSection = styled.section`
    background-color: #FFF;
    color: var(--bg-primary);
    margin: 20px 0;
`

export const SectionHeader = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-itens: center;
        gap: 10px;

        padding: 4rem 2rem;
        text-align: center;
        color: var(--bg-primary);
        
        h2{
            color: var(--bg-primary);
            font-size: 36px;
            font-weight: 500;
        }
        p{
            font-size: 12px;
            line-height: 1.5rem;    
        }
`

export const ProjectContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    justify-items: center;

    width:75vw;
    margin: 0px auto;
`

