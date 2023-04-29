import { Card } from 'components/Card/Card';
import { List } from './TweetsList.styled';

export const TweetsList = ({ users }) => {
  return (
    <>
      <List>
        {users.map(({ id, avatar, tweets, followers }) => (
          <li key={id}>
            <Card
              id={id}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
            ></Card>
          </li>
        ))}
      </List>
    </>
  );
};
