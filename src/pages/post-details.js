import React from "react";
import {useParams} from "react-router-dom";
export default function PostDetails(){
    const IdsParams = useParams();
    return(
        <div>
            <h5 style = {{margin: "10px"}}>
                Post Details {IdsParams.postId}
            </h5>
        </div>
    )
}