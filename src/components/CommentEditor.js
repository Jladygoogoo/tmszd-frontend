import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';
// import { withRouter } from 'react-router-dom';


class CommentEditor extends Component {

    handleSubmit() {
        const postData = {
            'title': this.commentTitle,
            'content': this.commentContent,
            'commentTags': this.commentTags,
        }
        axios.post('http://127.0.0.1:8000/comments-api/', postData)
            .then(res => {
                console.log(res);
            })
    }

    handleSelectChange(target) {
        // 这样直接设置总觉得怪怪的
        this.commentTags = target.value;
    }

    render() {
        const presetTags = [{ label: 'issue', value: 'issue' }, { label: 'support', value: 'support' }];
        return (
            < div class="col-md-3 col-md-offset-1 comment-editor" >
                <div class="sidebar-module sidebar-module-inset">
                    <h4>编辑留言</h4>
                    <p className="notes">
                        本站留言区实施<strong>匿名制</strong>，
                        <br />
                        希望大家遵纪守法温柔理智。
                        <br />
                        感谢你们的每一段文字💗
                    </p>
                    <hr />
                </div>
                <div className="sidebar-module">
                    <form onSubmit={this.handleSubmit}>
                        <li>
                            <h6>标题</h6>
                            <input type="text" class="inputbox search" ref={value => { this.commentTitle = value; }} />
                        </li>
                        <li>
                            <h6>内容</h6>
                            <textarea className="search" ref={value => { this.commentContent = value; }}></textarea>
                        </li>
                        <li>
                            <h6>标签</h6>
                            <p className="notes">
                                报告错误请使用<strong>issue</strong>标签
                                <br />
                                提供帮助请使用<strong>support</strong>标签
                            </p>
                            <CreatableSelect
                                isMulti
                                id="commentTags"
                                // name="commentTags"
                                options={presetTags}
                                onChange={(target) => this.handleSelectChange(target)}
                            />
                        </li>
                        <li>
                            <input type="submit" className="submit-btn" value="提交"></input>
                        </li>

                    </form>
                </div>
            </div >
        );
    }
}

export default CommentEditor;