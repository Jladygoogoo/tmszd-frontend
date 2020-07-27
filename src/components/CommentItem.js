import React, { Component } from 'react';

const CommentItem = (props) => {
    console.log("commentItem: " + props.data)
    return (
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <div class="media text-muted pt-3">
                <div class="media-body pb-3 mb-0 border-bottom border-gray">
                    <div className="item-hearder-left">
                        <div className="header-info-item">
                            <strong class="text-gray-dark">#{props.index}</strong>
                        </div>
                        <div className="header-info-item">
                            <strong>{props.title}</strong>
                        </div>
                    </div>
                    <div className="item-hearder-right">
                        <div className="header-info-item">
                            {props.releaseTime.slice(0, 10)}
                        </div>
                    </div>
                    <div class="small">{props.commentTags}</div>
                </div>
            </div>

            <div class="media text-muted pt-3">
                <div class="media-body pb-3 mb-0 small lh-125">
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CommentItem;