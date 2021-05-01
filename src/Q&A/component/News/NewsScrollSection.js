import HorizontalScroll from 'react-scroll-horizontal'
import React from "react";
import ImgMediaCard from "./ImgMediaCard"

const cards = [...new Array(10)].map((x, i) => ({
    name: `card ${i}`,
    img: "https://source.unsplash.com/random"
}));

function NewsScrollSection() {
    return (
        <HorizontalScroll
            pageLock={true}
            reverseScroll={true}
            style={{height: `290px`}}
            //config        = {{ stiffness: int, damping: int }}
            //className     = { "ui segment" }
            //animValues    = { int }
        >
            {cards.map(card => (
                <ImgMediaCard/>
            ))}
        </HorizontalScroll>
    );

}

export default NewsScrollSection;
