import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Data() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        axios.get(apiUrl)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); 
    return (
        <div>
            <h1>Data</h1>
            <ul>
                {users.map((user) => (
                    <li>
                        <strong>id:</strong> {user.id}<br />
                        <strong>Name:</strong> {user.name}<br />
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Street:</strong> {user.address.street}<br /> 
                        <strong>Suite:</strong> {user.address.suite}<br />
                        <strong>City:</strong> {user.address.city}<br />
                        <strong>Zipcode:</strong> {user.address.zipcode}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Data;
