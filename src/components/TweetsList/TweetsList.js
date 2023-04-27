import { Card } from 'components/Card/Card';

export const TweetsList = ({ users }) => {
  return (
    <>
      <ul>
        {users.map(({ id, avatar, tweets, followers }) => (
          <li key={id}>
            <Card avatar={avatar} tweets={tweets} followers={followers}></Card>
          </li>
        ))}
      </ul>
    </>
  );
};
