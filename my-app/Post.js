import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";




function Post() {

    const navigate = useNavigate();

    const gotToBack = () => {
        navigate(-1)
    }

    const [user, setUser] = useState({})

    const params = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <button onClick={gotToBack}>Back</button>
            <h1>{user.title}</h1>
            <div>{user.body}</div>
        </div>
    );
}

export default Post;