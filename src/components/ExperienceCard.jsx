const ExperienceCard = ({ companyName, position, workingPeriod }) => {
  return (
    <>
      <h2>Experience</h2>
      <h3>{companyName}</h3>
      <h4>{position}</h4>
      <h5>{workingPeriod}</h5>
    </>
  );
};
export default ExperienceCard;
