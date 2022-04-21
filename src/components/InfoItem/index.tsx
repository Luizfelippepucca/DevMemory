import{Container,Label,Value} from './styles';
import { InfoItemProps } from './types';
const InfoItem = ({label,value}:InfoItemProps)=>{
    return(
        <Container>
         <Label>{label}</Label>
         <Value>{value}</Value>
        </Container>
    )
}

export default InfoItem;