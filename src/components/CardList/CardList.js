import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TfiArrowLeft } from 'react-icons/tfi';
import { fetchUsers, fetchFollowing} from '../../service/fetch';
import { Card } from '../Card/Card';
// import  Filter  from '../Filter/Filter';
import { BoxList, List, ButtonLoadMore, LinkButton, GoBackButton, Span } from './CardList.styled';

export default function CardList({ filter }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);



  const onLoadMoreBtn = () => {
    setPage(page => page + 1);
  };

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (filter.value ==='all'){
        (async () => {
          try {
            const data = await fetchUsers(page);

            if (data.length === 0) {
              return alert("No results")
            }

            if (page === 1) {
              setUsers(data);
            } else {
              setUsers(prevState => [...prevState, ...data]);
            }

          } catch(e) {
            // return alert(e.message)
          }
        })()
    } else if (filter.value === 'follow') {
        (async () => {
            try {
              const dataFollow = await fetchFollowing(false);
                console.log(dataFollow);
              if (dataFollow.length === 0) {
                return alert("No results")
              }
              setUsers(dataFollow);


            } catch(e) {
              // return alert(e.message)
            }
          })()
    } else if (filter.value === 'following') {
            (async () => {
                try {
                  const dataFollowing = await fetchFollowing(true);
                  console.log(dataFollowing);
                  if (dataFollowing.length === 0) {
                    return alert("No results")
                  }
                  setUsers(dataFollowing);


                } catch(e) {
                  // return alert(e.message)
                }
              })()
     }

  }, [page,filter.value]);




  return (
    <BoxList>
      <LinkButton to={backLinkLocationRef.current}>
        <GoBackButton type="button">
          <TfiArrowLeft></TfiArrowLeft>
          <Span>Go back</Span>
        </GoBackButton>
      </LinkButton>
      {/* <Filter /> */}


      <List>
        {users.map(user => (
          <Card key={user.id} users={user} />
        ))}

      </List>

      <ButtonLoadMore type="button" onClick={onLoadMoreBtn}>Load More</ButtonLoadMore>
    </BoxList>
  );
}
