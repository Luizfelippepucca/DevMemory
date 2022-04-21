import styled from 'styled-components';

export const ButtonContainer = styled.div`
display: flex;
width:200px;
height:50px;
background-color:#1550Ff ;
border-radius: 10px ;
cursor: pointer;
opacity: 1 ;
transition: all ease 0.3s ;

&:hover{
    opacity: 0.8 ;
}
`

export const IconArea = styled.div`
 height: inherit ;
 display: flex ;
 align-items:center ;
 justify-content:center ;
 border-right: 1px solid rgba(255,255,255, 0.2);
 
 padding: 0 15px ;
 
`;

export const Icon = styled.img`
width: 20px ;
height: 20px ;

`;
export const Label = styled.div`
height: inherit ;
color: #fff ;
display: flex ;
align-items: center ;
justify-content: center ;
flex:1;
padding: 0 20px ;
` ;