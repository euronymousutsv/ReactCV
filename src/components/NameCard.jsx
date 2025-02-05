const NameCard = ({ name, profession, location }) => {
  return (
    <>
      <h1 className="title">{name}</h1>
      <h2>{profession}</h2>
      <h3>{location}</h3>
    </>
  );
};
export default NameCard;
