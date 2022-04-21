import { ButtonContainer,Icon,IconArea,Label } from "./styles";
import { ButtonProps } from "./types";

 const Button = ({label,icon,onClick}:ButtonProps)=>{
    return(
     
    <ButtonContainer onClick={onClick}>
        {icon&& 
            <IconArea>
                <Icon src={icon} alt="icon-button"/>
            </IconArea>
        }
        <Label>{label}</Label>
    </ButtonContainer>
    )
}

export default Button;

