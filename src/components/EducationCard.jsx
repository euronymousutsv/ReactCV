const EducationCard = ({ instituteName, course, studyPeriod }) => {
  return (
    <>
      <br />
      <h4>{instituteName}</h4>
      <h5>{course}</h5>
      <h5>{studyPeriod}</h5>
    </>
  );
};
export default EducationCard;
