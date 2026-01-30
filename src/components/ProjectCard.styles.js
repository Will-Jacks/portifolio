import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 320px;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    /* Responsividade para tablets e acima */
    @media (max-width: 1024px) {
        max-width: 280px;
    }

    /* Responsividade para dispositivos móveis */
    @media (max-width: 768px) {
        max-width: 100%;
        min-height: 420px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 0.875rem;
    }
`

export const CardContent = styled.div`
    padding: 0.875rem 0;
    width: 100%;
    text-align: start;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    h3 {
        margin: 0;
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        line-height: 1.3;
    }

    p {
        margin: 0;
        font-size: clamp(0.875rem, 2vw, 1rem);
        line-height: 1.5;
        flex: 1;
    }
`