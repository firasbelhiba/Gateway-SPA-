import React, {useEffect} from "react";
import NewsScrollSection from "./NewsScrollSection";
import NewsScrollSkillsSection from "./NewsScrollSkillsSection";
import {connect, useDispatch, useSelector} from "react-redux";
import {newsRec, newsRecSkills} from "../../../actions/questions";

const News = ({newsSkills: {loading, news}}) => {
    const search = JSON.parse(localStorage.getItem('profile')).status;
    const skills = JSON.parse(localStorage.getItem('profile')).skills;
    const dispatch = useDispatch();
    const Domains = useSelector((state) => state.question.domains);
    var domains = []
    for (var i in Domains){
        domains.push(Domains[i].category)
    }

    console.log(domains)
    useEffect(() => {
        dispatch(newsRecSkills('tech'));
    }, [dispatch]);

    return (
        <div style={{marginTop: "10px"}}>
            <NewsScrollSection search={search}/>
            {domains.map(skill => (
                <NewsScrollSkillsSection search={skill} loading={loading} news={news}/>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    newsSkills: state.question.newsSkills
});

export default connect(mapStateToProps, {newsRec})(News);
