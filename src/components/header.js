import React from 'react'
import styled from "styled-components"


function header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
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
            <UserImg src="./images/Chris.png" />

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