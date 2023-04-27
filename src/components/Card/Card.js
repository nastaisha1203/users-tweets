export const Card = ({ avatar, tweets, followers }) => {
  return (
    <>
      <img src={avatar} alt="avatar" width={80} height={80} />
      <p>{tweets}</p>
      <p>{followers}</p>
    </>
  );
};
