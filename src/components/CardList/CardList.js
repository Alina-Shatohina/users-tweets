import { Card } from '../Card/Card';

import { useState, useEffect } from 'react';
import { List } from './CardList.styled';
import { fetchUsers } from '../../service/fetch';

export default function CardList() {
  const [users, setUsers] = useState([]);
console.log(users);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUsers();
            console.log(data)
        if (data.length === 0) {
          return alert("No results")
        }

        setUsers(data);
      } catch (error) {
        ;
      }
    })();
  }, []);
    
  return (
    <div>
      <List>
        {users.map(user => (
          <Card key={user.id} users={user} />
        ))}
      </List>
    </div>
  );
}