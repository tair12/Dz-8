import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";



function PostPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setUsers(data.slice(0, 10)))
    }, [])

    return (
        <div>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.title} <Link to={`/post/${user.id}`}>show</Link></li>)
                }
            </ul>
        </div>
    );
}

export default PostPage;