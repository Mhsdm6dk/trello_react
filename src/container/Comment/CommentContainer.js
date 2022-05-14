import React, { useState } from 'react'
import CommentComponent from './component/CommentComponent'

function CommentContainer(props) {
    const [showHandleComment,setShowHandleComment]=useState(false);
    const [commentInput,setCommentInput]=useState('Đây là comment');
    return (
        <CommentComponent showHandleComment={showHandleComment} setShowHandleComment={setShowHandleComment} commentInput={commentInput} setCommentInput={setCommentInput}/>
    )
}

export default CommentContainer
