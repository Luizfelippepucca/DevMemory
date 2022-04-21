import { useEffect,useState } from 'react';
import {Container,Info,GridArea,LogoLink,InfoArea,Grid} from './App.styles';
import logo from './assets/devmemory_logo.png';
import  RestartIcon from './svgs/restart.svg';
import Button from './components/Button';
import InfoItem from './components/InfoItem';
import { GridItems } from './types/GridItem';
import { items} from './data/items';
import GridItem from './components/GridItem';
import { formatTimer } from './utils';

const  App = ()=> {
  const [playing,setPlaying] = useState<boolean>(false);
  const [timeElapsed,setTimeElapsed] = useState<number>(0);
  const [movecount,setMoveCount] = useState<number>(0);
  const [shownCount,setShowCount] = useState<number>(0);
  const [gridItems,setGridItems] = useState<GridItems[]>([]);

  const handleResetAndCreateGrid = ()=>{
      setTimeElapsed(0);
      setMoveCount(0);
      setShowCount(0);
      setGridItems([]);

      let tempGrid:GridItems[] = [];
      for( let i = 0; i < (items.length * 2);i++){
        tempGrid.push({
          item:null,
          permanentShown:false,
          shown:false
        });
      }

      for(let w = 0; w<2; w++){
        for(let i = 0; i<items.length;i++){
          let pos = -1;
          while( pos < 0 || tempGrid[pos].item !== null){
           pos = Math.floor(Math.random() * (items.length * 2));
          }
         
          tempGrid[pos].item = i;

        }
      }

      setGridItems(tempGrid);  
    
  };

 

  const handleCardClick = (index:number)=>{
   
      if(playing && index !== null && shownCount < 2){
           let tempGrid = [...gridItems];
            if(!tempGrid[index].permanentShown && !tempGrid[index].shown){
                tempGrid[index].shown = true;
                setShowCount( shownCount + 1);
            }

           setGridItems(tempGrid);
      }
  }

  const handleInitGame = ()=>{
    setPlaying(true);
    if(playing){
      handleResetAndCreateGrid();
      setPlaying(false);
    }
   
  }

  useEffect(()=>{
    handleResetAndCreateGrid()
  },[]);

  useEffect(()=>{
    const timer = setInterval(()=>{
      if(playing){
        setTimeElapsed(timeElapsed+1);
      }
      
    },1000);

    return ()=> clearInterval(timer);
  },[timeElapsed,playing]);

  
  useEffect(()=>{
      // verify equal cards and moveCount
     if(shownCount === 2){
      let opened = gridItems.filter((item)=> item.shown && item);
       if(opened.length === 2){
        let tempGrid = [...gridItems];
          if(opened[0].item === opened[1].item){
               for(let i in tempGrid){
                  if(tempGrid[i].shown){
                      tempGrid[i].permanentShown = true;
                      tempGrid[i].shown = false;
                  }
                }
                setGridItems(tempGrid);
                setShowCount(0);
               
          }else{
            setTimeout(()=>{
                for(let i in tempGrid){
                  tempGrid[i].shown = false;
                }
                setGridItems(tempGrid);
                setShowCount(0);
              },1000)
               
          }
        
          setMoveCount( movecount => movecount + 1);
       }
     }

     return ()=>clearTimeout();
  },[shownCount,gridItems])

  useEffect(()=>{
  //game over
  if(movecount > 0 && gridItems.every(item=>item.permanentShown)){
    setPlaying(false);
    setTimeout(()=>{
      handleResetAndCreateGrid();
    },3000)
     
     return ()=> clearTimeout();

  }
  },[movecount,gridItems])

 
  return (
    <Container>
      <Info>
        <LogoLink href="">
          <img src={logo} width="200" alt="logo"/>
        </LogoLink>
        <InfoArea>
          <InfoItem label="Tempo" value={formatTimer(timeElapsed)}/>
          <InfoItem label="Movimentos" value={movecount.toString()}/>
        </InfoArea>
        <Button label={playing?'Reniciar': 'Iniciar'} icon={RestartIcon} onClick={handleInitGame}/>
      </Info>
      <GridArea>
        <Grid>
          {gridItems.map((item,index)=>(
            <GridItem key={index} item={item} onClick={()=> handleCardClick(index)} countItem={shownCount}/>
          ))}
        </Grid>
      </GridArea>
    </Container>
  );
}

export default App;
