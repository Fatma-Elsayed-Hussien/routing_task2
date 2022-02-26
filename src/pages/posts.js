import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function Posts(){
    return(
        <>
            <div>
                <h5 style = {{margin: "10px"}}>Posts Details</h5>
                <Button variant="success" style = {{margin: "10px"}}>
                    <Link to = {"1"} className= "link-post">Post Details {1}</Link>
                </Button>
                <Button variant="success" style = {{margin: "10px"}}>
                    <Link to = {"2"} className= "link-post">Post Details {2}</Link>
                </Button>
                <Button variant="success" style = {{margin: "10px"}}>
                    <Link to = {"3"} className= "link-post">Post Details {3}</Link>
                </Button>
                <Button variant="success" style = {{margin: "10px"}}>
                    <Link to = {"4"} className= "link-post">Post Details {4}</Link>
                </Button>

            </div>
        </>
    )
}