import React from 'react';
import {
  CardWrapper,
  Logo,
  Line,
  Img,
  Border,
  Text,
  Button,
} from './Card.styled';
import logo from 'img/Logo.svg';
import { useLocalStorage } from 'components/hooks/hooks';

export const Card = ({ id, avatar, tweets, followers }) => {
  const [following, setFollowing] = useLocalStorage(`following-${id}`, false);
  const [count, setCount] = useLocalStorage(`count-${id}`, followers);

  function handleClick() {
    if (following) {
      setFollowing(false);
      setCount(count - 1);
    } else {
      setFollowing(true);
      setCount(count + 1);
    }
  }

  const formattedFollowers = count.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
  });

  return (
    <CardWrapper>
      <Logo src={logo} alt="logo" width={76} height={22} />
      <Line>
        <Border>
          <Img src={avatar} alt="avatar" width={62} height={62} />
        </Border>
      </Line>
      <Text tweets>{tweets} tweets</Text>
      <Text>{formattedFollowers} followers</Text>
      <Button type="button" following={following} onClick={handleClick}>
        {following ? 'Following' : 'Follow'}
      </Button>
    </CardWrapper>
  );
};
