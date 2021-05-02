import React from "react";
import {Item} from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {cancelSaveNews} from "../../../actions/questions";

const SavedItem = ({item, user}) => {
    const dispatch = useDispatch();

    const handleCancelSaved = () => {
        dispatch(cancelSaveNews(user, item._id))
    }

    return (
        <Item>
            <Item.Image src={item.image}/>

            <Item.Content>
                <Item.Header as='a'>{item.title}</Item.Header>
                <Item.Meta>
                    <span className='cinema'>{item.source}</span>
                </Item.Meta>
                <Item.Description>{item.subtitle}</Item.Description>
                <Item.Extra>
                    <Button size="huge" color="primary" onClick={handleCancelSaved}>
                        cancel save
                    </Button>
                    <Button size="huge" color="primary">
                        Learn More
                    </Button>
                    <Typography variant="strong" color="black" component="p"
                                style={{
                                    position: "absolute", bottom: 5,
                                    right: 5
                                }}>
                        {item.time}
                    </Typography>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default SavedItem;
