import React, {useEffect} from "react";
import UserQuestion from "../UserQuestion";
import {useDispatch, useSelector} from "react-redux";
import {getQuestion} from "../../../actions/questions";
import {Container, Header} from 'semantic-ui-react'

const Domain = ({domain}) => {
    const dispatchQuestion = useDispatch();

    useEffect(() => {
        dispatchQuestion(getQuestion());
    }, [dispatchQuestion]);

    const Questions = useSelector((state) => state.question.questions);

    var filteresQuestions = []
    for (var i in Questions) {
        if (Questions[i].category === domain) {
            filteresQuestions.push(Questions[i]);
        }
    }

    return (
        <div>
            <div className="ui segments" style={{border: '0px'}}>
                {filteresQuestions.length === 0 ? (
                    <Container text>
                        <Header as='h1'>No Questions In this Domain yet</Header>
                    </Container>
                ) : (
                    <div>
                        {filteresQuestions.map(question => {
                            var UpVotes = [];
                            for (var i in question.upVotes)
                                UpVotes.push(question.upVotes[i].user);

                            var DownVotes = [];
                            for (var j in question.downVotes)
                                DownVotes.push(question.downVotes[j].user);
                            return (
                                <div>
                                    <UserQuestion details={question} upVotes={question.upVotes}
                                                  downVotes={question.downVotes}
                                                  segment="ui segment"/>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>

    );
}

export default Domain;
