import HorizontalScroll from 'react-scroll-horizontal'
import React, {useEffect} from "react";
import ImgMediaCard from "./ImgMediaCard"
import {newsRec} from "../../../actions/questions";
import {connect, useDispatch, useSelector} from "react-redux";
import {Loading_spinner} from "../../../Shared/layouts/Loading_spinner";

const cards = [...new Array(10)].map((x, i) => ({
    name: `card ${i}`,
    img: "https://source.unsplash.com/random"
}));

function NewsScrollSection({search, newsRec, news: {loading}}) {
    const dispatch = useDispatch();

    useEffect(() => {
        newsRec(search);
    }, [dispatch]);

    const news = useSelector((state) => state.question.news.news);
    console.log(news);
    const News = []
    for (let i in news) {
        News.push(news[i]);
    }
    return loading ? (
        <div
        >
            <h3 className="ui block header" style={{marginTop: 15}}>
                <i className="fa-newspaper-o icon"/>
                {search}
            </h3>
            <div className="ui segment" style={{height: 345}}>
                <div className="ui active inverted dimmer">
                    <div className="ui indeterminate text loader">Loading News Feed</div>
                </div>
                <div className="ui placeholder" style={{paddingLeft: '10px', width: "300px", height:300}}>
                    <div className="header">
                        <div className="image"/>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <h3 className="ui block header" style={{marginTop: 15}}>
                <i className="fa-newspaper-o icon"/>
                {search}
            </h3>
            <HorizontalScroll
                pageLock={true}
                reverseScroll={true}
                style={{height: 350}}
                //config        = {{ stiffness: int, damping: int }}
                //className     = { "ui segment" }
                //animValues    = { int }
            >
                {News.map(item => (
                    <ImgMediaCard item={item}/>
                ))}
            </HorizontalScroll>
        </div>

    );

}

const mapStateToProps = (state) => ({
    news: state.question.news
});

export default connect(mapStateToProps, {newsRec})(NewsScrollSection);
