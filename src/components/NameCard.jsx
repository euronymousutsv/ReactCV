const NameCard = ({ name, profession, location }) => {
  return (
    <>
      <h1 className="title">{name}</h1>
      <h4>{profession}</h4>
      <h5>{location}</h5>
    </>
  );
};
export default NameCard;
