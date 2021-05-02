import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch} from "react-redux";
import {saveNews} from "../../../actions/questions";

const useStyles = makeStyles({
    root: {
        minHeight: 345,
        maxHeight: 345,
    },
    media: {
        height: 140,
    },
    content: {
        minHeight: 345,
        maxHeight: 345,
    }
});
export default function ImgMediaCard(props) {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))._id;
    const handleSaveNews = () => {
        dispatch(saveNews(props.item, user))
    }
    const classes = useStyles();
    return (
        <div style={{paddingLeft: '10px', width: "300px"}}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.item.title}
                        height="140"
                        image={props.item.image}
                        title={props.item.title}
                    />
                    <CardContent
                        className={classes.content}
                    >
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.item.source}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.item.subtitle}
                        </Typography>
                        <Typography variant="strong" color="black" component="p"
                                    style={{
                                        position: "absolute", bottom: 5,
                                        right: 5
                                    }}>
                            {props.item.time}
                        </Typography>
                        <div
                            style={{
                                position: "absolute", bottom: 0,
                                left: 5
                            }}>
                            <Button size="small" color="primary" onClick={handleSaveNews}>
                                Save
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    );
}
