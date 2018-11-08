import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

const User = ({match}) => {
    const [user, userUpdate] = useState({});

    function handleUserUpdate(data) {
        userUpdate(data);
    }

    useEffect(async ()=>{
        let {data, status} = await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
        if(status === 200) {
            handleUserUpdate(data);
        }
    }, []);

    return (
        <div>
            {user.name ?
                <div>
                    {user.name}
                </div> :
                <div>Loading...</div>
            }
            <Link to={'/users'}>Back to users list</Link>
        </div>
    )
};

export default withRouter(User);