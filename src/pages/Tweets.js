import BackLink from 'components/BackLink/BackLink';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'services/api';
import { Main } from './Pages.styled';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { Loader } from 'components/Loader/Loader';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const location = useLocation();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const results = await fetchUsers();
        setUsers(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  const backLinkHref = location.state?.from ?? '/';

  const showMoreItems = () => {
    setPerPage(prevState => prevState + 3);
    setCurrentPage(prevPage => prevPage + 1);
  };

  const totalPages = Math.ceil(users.length / 3);

  return (
    <Main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Try again.</p>}
      {users.length > 0 && <TweetsList users={users.slice(0, perPage)} />}
      {users.length > 0 && totalPages > currentPage && (
        <LoadMore onClick={showMoreItems} />
      )}
    </Main>
  );
};
export default Tweets;
