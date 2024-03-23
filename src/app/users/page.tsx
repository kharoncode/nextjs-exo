import React from 'react';

type User = {
   id: number;
   name: string;
};

const UsersPage = async () => {
   const users = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'no-store',
   })
      .then((res) => res.json())
      .then((data) => {
         return data;
      });
   return (
      <div>
         <h1>UsersPage</h1>
         <p>{new Date().toLocaleTimeString()}</p>
         <ul>
            {users.map((user: User) => (
               <li key={user.id}>{user.name}</li>
            ))}
         </ul>
      </div>
   );
};

export default UsersPage;
