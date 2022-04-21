import styled from 'styled-components';
import { ContainerProps,IconProps } from './types';


export const Container = styled.div<ContainerProps>`
background-color:${({showBackGround})=> showBackGround ? '#1550FF': '#E2E3E3'} ;
display:flex ;
align-items: center;
justify-content:center ;
cursor: ${({count})=> count === 2 ? 'not-allowed':'pointer'} ;
opacity: 1 ;
transition: all ease-in 0.3s ;
border-radius: 8px;

@media only screen and (max-width: 768px){
    height:60px;
}



`;

export const Icon = styled.img<IconProps>`
width:2rem;
opacity: ${({opacity})=> opacity && opacity};

`;