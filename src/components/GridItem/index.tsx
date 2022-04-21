
import { GridItems } from "../../types/GridItem";
import { Container, Icon } from "./styles";
import IconB7 from '../../svgs/b7.svg'
import { items} from '../../data/items';

interface Props{
    item:GridItems;
    onClick:()=> void;
    countItem:number;
}

 const GridItem = ({item,onClick,countItem}:Props)=>{
    return(
        <Container  showBackGround={item.permanentShown || item.shown} onClick={onClick} count={countItem}>
            {!item.permanentShown && !item.shown &&
            <Icon src={IconB7} alt="icon-b7" opacity={0.1} />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
            <Icon src={items[item.item].icon} alt={items[item.item].name}/>
            }
        </Container>
    )
}

export default GridItem;