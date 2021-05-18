import React, {useCallback, useEffect, useMemo, useState} from "react";
import isHotkey from "is-hotkey";
import {Editable, withReact, Slate, useSlate} from "slate-react";
import {createEditor, Editor, Transforms} from "slate";
import {withHistory} from "slate-history";
import {Popup} from 'semantic-ui-react'

import Box from "@material-ui/core/Box";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import CodeIcon from "@material-ui/icons/Code";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Divider from "@material-ui/core/Divider";
import './RichEditor.css';
import Button from "./Button";
import {connect, useDispatch} from "react-redux";
import {getBlock} from "../../../actions/questions";

const HOTKEYS = {
    "mod+b": "bold",
    "mod+i": "italic",
    "mod+u": "underline",
    "mod+`": "code"
};

const AnswerEditor = ({value, setValue, Qid, getBlock, question: {block}}) => {
    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    const [descriptionerror, setDescriptionserror] = useState(false);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))._id;

    useEffect(() => {
        getBlock(user)
    }, [dispatch]);
    return (
        <Box m={0} borderRadius={8} style={{overflow: "hidden", border: 'solid 1px #3d4953'}}>
            <Slate
                editor={editor}
                value={value}
                onChange={value => {
                    setValue(value);
                    const content = JSON.stringify(value)
                    if (content !== '[{"type": "paragraph", "children": [{"text": ""}]}]') {
                        setDescriptionserror(false)
                    }
                    localStorage.setItem('answer', content)
                }}
            >
                <Toolbar>
                    <MarkButton format="bold">
                        <FormatBoldIcon/>
                    </MarkButton>
                    <MarkButton format="italic">
                        <FormatItalicIcon/>
                    </MarkButton>
                    <MarkButton format="underline">
                        <FormatUnderlinedIcon/>
                    </MarkButton>
                    <MarkButton format="code">
                        <CodeIcon/>
                    </MarkButton>
                    <BlockButton format="heading-one">
                        <LooksOneIcon/>
                    </BlockButton>
                    <BlockButton format="heading-two">
                        <LooksTwoIcon/>
                    </BlockButton>
                    <BlockButton format="block-quote">
                        <FormatQuoteIcon/>
                    </BlockButton>
                    <BlockButton format="numbered-list">
                        <FormatListNumberedIcon/>
                    </BlockButton>
                    <BlockButton format="bulleted-list">
                        <FormatListBulletedIcon/>
                    </BlockButton>
                </Toolbar>
                <Box pl={1}>
                    <Editable
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        placeholder="Enter some rich text…"
                        spellCheck
                        autoFocus
                        onKeyDown={event => {
                            for (const hotkey in HOTKEYS) {
                                if (isHotkey(hotkey, event)) {
                                    event.preventDefault();
                                    const mark = HOTKEYS[hotkey];
                                    toggleMark(editor, mark);
                                }
                            }
                        }}
                    />
                </Box>
            </Slate>
            <div className="panel" style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="comment_as">
                    Answer
                    <a href="" className="username">
                    </a>
                </div>
                <Button id={Qid} block={block.answer} descriptionerror={descriptionerror} style={{fontSize: '14px', marginLeft: 'auto'}}>ADD
                    ANSWER</Button>
            </div>
        </Box>

    );
};

export const Element = ({attributes, children, element}) => {
    switch (element.type) {
        case "block-quote":
            return <blockquote {...attributes}>{children}</blockquote>;
        case "bulleted-list":
            return <ul className="ul" {...attributes}>{children}</ul>;
        case "heading-one":
            return <h1 className="h1" {...attributes}>{children}</h1>;
        case "heading-two":
            return <h2 className="h2" {...attributes}>{children}</h2>;
        case "list-item":
            return <li className="li" {...attributes}>{children}</li>;
        case "numbered-list":
            return <ol className="ol" {...attributes}>{children}</ol>;
        default:
            return <p {...attributes}>{children}</p>;
    }
};


export const Leaf = ({attributes, children, leaf}) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }

    if (leaf.code) {
        children = <code>{children}</code>;
    }

    if (leaf.italic) {
        children = <em>{children}</em>;
    }

    if (leaf.underline) {
        children = <u>{children}</u>;
    }

    return <span {...attributes}>{children}</span>;
};

const BlockButton = ({format, children}) => {
    const editor = useSlate();
    return (
        <Box ml={1} mt={1}>
            <ToggleButton
                size="small"
                value={format}
                selected={isBlockActive(editor, format)}
                onMouseDown={event => {
                    event.preventDefault();
                    toggleBlock(editor, format);
                }}
                style={{lineHeight: 1}}
            >
                {children}
            </ToggleButton>
        </Box>
    );
};

const MarkButton = ({format, children}) => {
    const editor = useSlate();
    return (
        <Box ml={1} mt={1}>
            <ToggleButton
                size="small"
                value={format}
                selected={isMarkActive(editor, format)}
                onMouseDown={event => {
                    event.preventDefault();
                    toggleMark(editor, format);
                }}
                style={{lineHeight: 1}}
            >
                {children}
            </ToggleButton>
        </Box>
    );
};

const Menu = React.forwardRef(({children, ...props}, ref) => (
    <>
        <Box
            display="flex"
            direction="row"
            justify="flex-start"
            alignItems="center"
            flexWrap="wrap"
        >
            {children}
        </Box>
        <Box pt={2}>
            <Divider variant="middle"/>
        </Box>
    </>
));

const Toolbar = React.forwardRef(({className, ...props}, ref) => (
    <Menu {...props} ref={ref}/>
));

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === format
    });
    return !!match;
};

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: n => LIST_TYPES.includes(n.type),
        split: true
    });

    Transforms.setNodes(editor, {
        type: isActive ? "paragraph" : isList ? "list-item" : format
    });

    if (!isActive && isList) {
        const block = {type: format, children: []};
        Transforms.wrapNodes(editor, block);
    }
};

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

const mapStateToProps = (state) => ({
    question: state.question,
});

export default connect(mapStateToProps, {getBlock})(AnswerEditor);
