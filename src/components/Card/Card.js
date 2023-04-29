import React, { useState, useEffect } from 'react';
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

export const Card = ({ id, avatar, tweets, followers }) => {
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem(`following-${id}`)) || false
  );
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem(`count-${id}`)) || followers
  );

  function handleClick() {
    if (following) {
      setFollowing(false);
      setCount(count - 1);
    } else {
      setFollowing(true);
      setCount(count + 1);
    }
  }

  useEffect(() => {
    localStorage.setItem(`following-${id}`, JSON.stringify(following));
    localStorage.setItem(`count-${id}`, JSON.stringify(count));
  }, [following, count, id]);

  return (
    <CardWrapper>
      <Logo src={logo} alt="logo" />
      <Line>
        <Border>
          <Img src={avatar} alt="avatar" />
        </Border>
      </Line>
      <Text tweets>{tweets} tweets</Text>
      <Text>{count} followers</Text>
      <Button type="button" following={following} onClick={handleClick}>
        {following ? 'Following' : 'Follow'}
      </Button>
    </CardWrapper>
  );
};
