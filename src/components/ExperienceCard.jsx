const ExperienceCard = ({ companyName, position, workingPeriod }) => {
  return (
    <>
      <h4>{companyName}</h4>
      <h4>{position}</h4>
      <h5>{workingPeriod}</h5>
    </>
  );
};
export default ExperienceCard;
