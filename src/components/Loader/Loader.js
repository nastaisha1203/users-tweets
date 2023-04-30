import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
      wrapperClass="comment-wrapper"
      color="rgb(103 63 197)"
    />
  );
};
