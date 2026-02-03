import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 320px;
    border-radius: 20px; 
    padding: 1.5rem;
    border: 1px solid #f1f5f9; 

    background-color: #ffffff;
    box-shadow: 0 10px 40px -10px rgba(79, 70, 229, 0.15);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    transition: all 0.3s ease-in-out;

    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px -12px rgba(79, 70, 229, 0.25);
    border-color: rgba(79, 70, 229, 0.1);
    }

    @media (max-width: 1024px) {
    max-width: 300px;
    }

    @media (max-width: 768px) {
    max-width: 100%;
    height: auto; 
    }

    @media (max-width: 480px) {
    padding: 1.25rem;
    }
`;

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
        line-height: 2;
        color: var(--bg-primary);
        font-weight: 500;
    }

    p {
        margin: 0;
        font-size: clamp(0.875rem, 2vw, 1rem);
        line-height: 1.5;
        flex: 1;
        color: var(--bg-primary);
        font-weight: 400;
    }
`