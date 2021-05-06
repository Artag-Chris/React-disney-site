import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function imgSlider() {
    let settings={
        dots: true,
        infinite:true,
        speed: 500,
        slideToShow:1,
        slideToScroll:1,
        autoplay:true,

    }
    return (
        <Carousel {...settings}>
            <Wrap>
            <img src="/images/slider-badging.jpg" alt=""  / >
            </Wrap>
            <Wrap>
            <img src="/images/slider-badag.jpg" alt=""  / >
            </Wrap>
        </Carousel>
    )
}

export default imgSlider;
const Carousel = styled(Slider)`
margin: 20px;
.slick-list{
    overflow: visible;
}
ul li button{
    &:before{
        font-size:10px;
        color:white;
        
    }
}
button{
    z-index:1;
}
`
const Wrap = styled.div`
cursor: pointer;
img{
    border:4px solid transparent;
    width:100%;
    height:100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover{
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
}
`

