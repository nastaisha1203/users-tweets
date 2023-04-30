import { Button } from './LoadMore.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
};
