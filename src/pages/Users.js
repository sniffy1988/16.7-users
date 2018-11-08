import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';


// class UsersList extends Component {
//
//     async componentDidUpdate() {
//         const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setUser(users);
//     }
//
//     render() {
//         const [users, setUser] = useState([]);
//         return (
//             <ul>
//                 {users.map(item => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         );
//     }
// }

export default function UsersList() {
    const [users, setUsers] = useState([]);

    function setUserChange(data) {
        setUsers(data);
    }

    useEffect(async ()=> {
        const {data, status} = await axios.get('https://jsonplaceholder.typicode.com/users');
        if(status === 200) {
            setUserChange(data);
        }
    }, []);


    return (
        <ul>
            {users.map(item => (
                <li key={item.id}>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}
