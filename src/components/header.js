import React from 'react'
import styled from "styled-components"
import {selectUserName, selectUserPhoto, setUserLogin, setSignOut} from "../features/user/userSlice"
import { useSelector, useDispatch } from "react-redux"
import { auth, provider} from "../firebase"
import { useHistory } from 'react-router-dom';
import { useEffect } from "react"



function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userName = useSelector(selectUserName);
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const userPhoto = useSelector(selectUserPhoto);
   
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch()
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const history = useHistory()

   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
        if(user){
             dispatch(setUserLogin({
               name: user.displayName,
               email: user.email,
               photo: user.photoURL

           }))
           history.push("/")
        }
    })
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])


   const signIn = ()=>{
       auth.signInWithPopup(provider)
       .then((result)=>{
           let user = result.user
           dispatch(setUserLogin({
               name: user.displayName,
               email: user.email,
               photo: user.photoURL

           }))
           history.push("/")
       })
   }

   const signOut = ()=>{
     auth.signOut()
     .then(()=>{
         dispatch(setSignOut())
         history.push("/login")
     })
   }

    return (

        <Nav>
            <Logo src="/images/logo.svg" />
            { !userName ? (<LoginContainer>
                <Login onClick={signIn}>Login</Login>

            </LoginContainer> ) :
            
            <> 
             <NavMenu>
                <a href="header">
                    <img src="/images/home-icon.svg" alt="" />
                    <Span>HOME</Span>
                </a>
                <a href="header">
                    <img src="/images/search-icon.svg" alt="" />
                    <Span>SEARCH</Span>
                </a><a href="header">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <Span>WATCHLIST</Span>
                </a><a href="header">
                    <img src="/images/original-icon.svg" alt="" />
                    <Span>ORIGINALS</Span>
                </a><a href="header">
                    <img src="/images/movie-icon.svg" alt="" />
                    <Span>MOVIES</Span>
                </a><a href="header">
                    <img src="/images/series-icon.svg" alt="" />
                    <Span>SERIES</Span>
                </a>
            </NavMenu>
            <UserImg onClick={signOut} src="./images/Chris.png" />
            </>}
           

        </Nav>
    )
}

export default header
const Nav = styled.div`
height: 70px;
background: #090b13;
display:flex;
align-items: center;
padding: 0 36px;
overflow-x:hidden;
`
const Logo = styled.img`
width: 80px;
`
const NavMenu =styled.div`
display:flex;
flex: 1;
margin-left: 25px;
align-items: center;
a{
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    img{
        height:20px;
    }
}
`
const Span = styled.span`
color: white;
font-size: 1em;
position: relative;
&:after{
    content:"";
    height:2px;
    background:white;
    position: absolute;
    opacity: 0;
    left:0;
    right:0;
    bottom:-6px;
    transform-origin: left center;
    transform: scaleX(0);
}
&:hover{
    Span::after{
        transform: scaleX(1);
        opacity: 1;
    }
}
`


const UserImg = styled.img`
width: 40px;
height: 40px;
border-radius:50%;
cursor: pointer;
`
const Login = styled.div`
border: 1px solid #f9f9f9;
padding: 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0,0,0,0.6);
transition: all 0.2s ease-in-out;
cursor: pointer;
&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color: transparent;
}
`
const LoginContainer = styled.div`
flex:1;
display:flex;
justify-content: flex-end;
`
