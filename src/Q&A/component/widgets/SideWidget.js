import React, {useEffect, useState} from "react";
import TopUser from "../TopUser"
import {Dropdown, Header, Icon} from 'semantic-ui-react'
import {connect, useDispatch} from "react-redux";
import {getALLDomains, getScores} from "../../../actions/questions";

const SideWidget = ({getALLDomains, getScores, question: {alldomains, scores}}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getALLDomains()
        getScores()
    }, [dispatch]);
    const [Value, setValue] = useState('Programming')

    var Options = []
    for (var i in alldomains) {
        Options.push({
            key: alldomains[i].name,
            value: alldomains[i].name,
            text: alldomains[i].name,
            content: alldomains[i].name,
        })
    }

    var Scores = []
    for (var i in scores) {
        var domains = []
        var total = 0
        var tags = []
        for (var j in scores[i].score) {
            domains.push(scores[i].score[j].domain.name)
        }
        if (domains.includes(Value)) {
            for (var j in scores[i].score) {
                if (scores[i].score[j].domain.name === Value) {
                    const user = scores[i].user
                    const domain = scores[i].score[j].domain.name
                    for (var k in scores[i].score[j].domain.categories) {

                        const score = scores[i].score[j].domain.categories[k].score
                        const type = scores[i].score[j].domain.categories[k].type

                        total = total + score
                        tags.push({type, score})
                    }
                    Scores.push({user, domain, tags, total})
                }
            }
        }
    }

    console.log(Value)
    return (
        <>
            <div className="ui raised segment"
                 style={{display: 'flex', marginBottom: '10px', justifyContent: 'space-between'}}>
                <div>
                    <Header as='h6'>Top Problem Solvers</Header>

                </div>
                <div>
                    <Header as='h6'>
                        <Header.Content>
                            {' '}
                            <Dropdown
                                inline
                                header='Domain'
                                onChange={(e, {value}) => {
                                    setValue(value)
                                    console.log(value)
                                }}
                                options={Options}
                                defaultValue={'Programming'}
                            />
                        </Header.Content>
                    </Header>
                </div>
            </div>
            {Scores.length > 0 ? (
                <div className="ui raised segments" style={{marginTop: '0px'}}>
                    {Scores.sort((a, b) => parseInt(b.total) - parseInt(a.total)).slice(0, 5).map(score => (
                        <TopUser score={score}/>
                    ))}
                </div>
            ) : (
                <div className="ui raised segments" style={{marginTop: '0px'}}>

                </div>
            )}

        </>
    );
}

const mapStateToProps = (state) => ({
    question: state.question,
});

export default connect(mapStateToProps, {getALLDomains, getScores})(SideWidget);
