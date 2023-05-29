import React, { useEffect, useState } from 'react';
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
  const [following, setFollowing] = useState(() => {
    const storage = JSON.parse(localStorage.getItem('tweets'));
    if (storage === null) {
      return false;
    }
    const user = storage.find(item => item.id === id);
    return user ? user.following : false;
  });

  const [count, setCount] = useState(() => {
    const storage = JSON.parse(localStorage.getItem('tweets'));
    if (storage === null) {
      return followers;
    }
    const user = storage.find(item => item.id === id);
    return user ? user.count : followers;
  });

  const handleClick = () => {
    if (following) {
      setFollowing(false);
      setCount(count - 1);
    } else {
      setFollowing(true);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('tweets'));
    if (storage === null) {
      localStorage.setItem(
        `tweets`,
        JSON.stringify([{ id, following, count }])
      );
    } else {
      const index = storage.findIndex(item => item.id === id);
      if (index === -1) {
        storage.push({ id, following, count });
      } else {
        storage.splice(index, 1, {
          id,
          following,
          count,
        });
      }

      localStorage.setItem(`tweets`, JSON.stringify(storage));
    }
  }, [count, following, id]);

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
