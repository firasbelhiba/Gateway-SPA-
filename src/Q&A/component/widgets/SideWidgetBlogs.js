import React, {useEffect} from "react";
import {Header, Image} from 'semantic-ui-react'
import {connect, useDispatch, useSelector} from "react-redux";
import {blogRec} from "../../../actions/questions";

const SideWidgetBlogs = ({search, blogRec, blogs: {loading}}) => {
    const dispatch = useDispatch();

    var tags = [];
    for (var i in search)
        tags.push(search[i]);

    var Search = tags.join(',');

    useEffect(() => {
        blogRec(Search);
        console.log(search)
    }, [dispatch]);

    const Blogs = useSelector((state) => state.question.blogs.blogs);
    const renderedBlogs = Blogs.map((blog) => {
        if (blog.title !== '' && !blog.title.match(/[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u)) {
            return (
                <div className="ui segment">
                    <a href={blog.article}>{blog.title}</a>
                </div>
            );
        }
    });
    return loading ? (
        <>
            <div className="ui raised segment">
                <div>
                    <Header as='h6'>Recommended Blogs</Header>
                </div>
            </div>
            <div className="ui segments">
                <div className="ui active inverted dimmer">
                    <div className="ui indeterminate text loader">Loading Blogs</div>
                </div>
                <div className="ui segment">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="line"/>
                            <div className="line"/>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="line"/>
                            <div className="line"/>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="line"/>
                            <div className="line"/>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="line"/>
                            <div className="line"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="ui raised segment"
                 style={{display: 'flex', marginBottom: '10px', justifyContent: 'space-between'}}>
                <div>
                    <Header as='h6'>Recommended Blogs</Header>
                </div>
            </div>
            <div className="ui raised segments" style={{marginTop: '0px'}}>
                {renderedBlogs}
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    blogs: state.question.blogs
});
export default connect(mapStateToProps, {blogRec})(SideWidgetBlogs);
