import React, { useState } from 'react'
import CommentComponent from './component/CommentComponent'


function CommentContainer(props) {
    const [showHandleComment,setShowHandleComment]=useState(false);
    const [commentInput,setCommentInput]=useState(props.comment.content);

    return (
        <CommentComponent showHandleComment={showHandleComment} setShowHandleComment={setShowHandleComment} idCard={props.idCard}
                          commentInput={commentInput} setCommentInput={setCommentInput} dataComment={props.comment}
                          send={props.send} setContentComment={props.setContentComment} idUser={props.idUser} deleteComment={props.deleteComment}/>
    )
}

export default CommentContainer
