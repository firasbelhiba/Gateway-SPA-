import React, {useEffect} from "react";
import NewsScrollSection from "./NewsScrollSection";
import NewsScrollSkillsSection from "./NewsScrollSkillsSection";
import {connect, useDispatch} from "react-redux";
import {newsRec, newsRecSkills} from "../../../actions/questions";

const News = ({newsSkills: {loading, news}}) => {
    const search = JSON.parse(localStorage.getItem('profile')).status;
    const skills = JSON.parse(localStorage.getItem('profile')).skills;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsRecSkills(skills));
    }, [dispatch]);

    return (
        <div style={{marginTop: "10px"}}>
            <NewsScrollSection search={search}/>
            {skills.map(skill => (
                <NewsScrollSkillsSection search={skill} loading={loading} news={news}/>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    newsSkills: state.question.newsSkills
});

export default connect(mapStateToProps, {newsRec})(News);
