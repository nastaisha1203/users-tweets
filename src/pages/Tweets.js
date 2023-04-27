import BackLink from 'components/BackLink/BackLink';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'services/api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Try again.</p>}
      {users.length > 0 && <TweetsList users={users} />}
    </>
  );
};
export default Tweets;
