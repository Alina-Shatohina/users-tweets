
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TfiArrowLeft } from 'react-icons/tfi';
import { fetchUsers } from '../../service/fetch';
import { Card } from '../Card/Card';
import { BoxList, List, ButtonLoadMore, LinkButton, GoBackButton, Span } from './CardList.styled';

export default function CardList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
// const [loadMoreBtnShown, setLoadMoreBtnShown] = useState(true);


  const onLoadMoreBtn = () => {
    // setPage(page => page + 1);
     setPage(page + 1);
    // setLoading(true);
  };

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUsers(page);

        if (data.length === 0) {
          // setLoading(false);

          return alert("No results")

        }

        if (page === 1) {
          setUsers(data);
        } else {
          setUsers(prevState => [...prevState, ...data]);
          // setLoading(false);
        }

      } catch (error) {
        ;
      }
    })();
  }, [page]);


  return (
    <BoxList>
      <LinkButton to={backLinkLocationRef.current}>
        <GoBackButton type="button">
          <TfiArrowLeft></TfiArrowLeft>
          <Span>Go back</Span>
        </GoBackButton>
      </LinkButton>

      <List>
        {users.map(user => (
          <Card key={user.id} users={user} />
        ))}

      </List>

      <ButtonLoadMore type="button" onClick={onLoadMoreBtn}>Load More</ButtonLoadMore>
    </BoxList>
  );
}
