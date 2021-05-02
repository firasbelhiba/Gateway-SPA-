import React, {useEffect} from 'react'
import {Segment, Image, Item} from 'semantic-ui-react'
import {connect, useDispatch} from "react-redux";
import {getNewsSaved} from "../../../actions/questions";

import SavedItem from "./SavedItem";

const paragraph = <Image src='/images/wireframe/short-paragraph.png'/>

const Saved = ({getNewsSaved, savedNews: {loading, news}}) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))._id;
    useEffect(() => {
        getNewsSaved(user);
    }, [dispatch]);
    var News = []
    for (var i in news)
        News.push(news[i]);

    return loading ? (
        <Segment style={{paddingTop: '25px'}}>
            <div className="ui fluid placeholder">
                <div className="image header">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="paragraph">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </Segment>
    ) : (
        <Segment style={{paddingTop: '25px'}}>
            <Item.Group divided>
                {News.map(item => (
                    <SavedItem item={item} user={user}/>
                ))}
            </Item.Group>
        </Segment>
    )
}

const mapStateToProps = (state) => ({
    savedNews: state.question.savedNews
});

export default connect(mapStateToProps, {getNewsSaved})(Saved);
