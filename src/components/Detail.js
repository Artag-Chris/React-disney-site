import React,{ useEffect, useState } from 'react'
import styled from "styled-components"
import { useParams } from "react-router-dom"
import db from "../firebase"
//import { useHistory } from 'react-router-dom';
/*aqui aprendi mucho del useEffect y como se usa con los id y coloca 
diferentes datos por cada diferente child fue sin duda la parte mas dura de este proyecto me demore 2 dias buscando soluciones a mis problemas pero al final lo logre nota mental practicar mas sobre hooks y reducers*/ 

function Detail() {
    const { id } = useParams();
    console.log( id);
    const [ detailData, setDetailData] = useState({});
   // const history = useHistory();
    

     useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("error 404 movie not found");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
   

    return (
        <Container>
            {detailData && (
            <>
            <Background>
               <img src={detailData.backgroundImg} alt="" />
           </Background>
           <ImageTitle>
               <img src={detailData.titleImg} alt="" />
           </ImageTitle>
           <Controls>
               <PlayButton>
                   <img src="/images/play-icon-black.png" alt="" />
                   <span>Play</span>

               </PlayButton>
               <TrailerButton>
                   <img src="/images/play-icon-white.png" alt="" />
                   <span>Trailer</span>

               </TrailerButton>
               <AddButton>
                   <span>+</span>

               </AddButton>
               <GroupWatchButton>
                   <img src="/images/group-icon.png" alt="" />
               </GroupWatchButton>
           </Controls>
           <SubTitle>
               {detailData.SubTitle}
           </SubTitle>
           <Description>
               {detailData.description}
           </Description>
           </>
            )}
           

        </Container>
    )
}




export default Detail

const Container = styled.div`
min-height: calc(100vh -70px);
padding: 0 calc(3.5vw +5px);
position: relative;
margin-left: 20px;
`
const Background = styled.div`
position: fixed;
top:0;
right:0;
left:0;
bottom:0;
z-index:-1;
opacity: 0.8;
img{
    width:100%;
    height:100%;
    object-fit: cover;
}
`
const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;
margin-top: 60px;

img{
    width:100%;
    height:100%;
    object-fit: contain;
}
`
const Controls = styled.div`
display: flex;
align-items:center;


`
const PlayButton =  styled.button`
border-radius:4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249,249,249);
border: none;
padding: 0px 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;
&:hover{
    background: rgb(198,198,198);
}
`
const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
text-transform: uppercase;
`
const AddButton = styled.button`
margin-right: 16px;
width:44px;
height:44px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba( 0,0,0,0.6);
cursor: pointer;
span{
    font-size:30px;
    color: white;
}
`
const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0);
`
const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`
const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top:16px;
color:  rgb(249,249,249);
max-width: 700px;
`