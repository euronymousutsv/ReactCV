const EducationCard = ({ instituteName, course, studyPeriod }) => {
  return (
    <>
      <h2>Education</h2>
      <h3>{instituteName}</h3>
      <h4>{course}</h4>
      <h5>{studyPeriod}</h5>
    </>
  );
};
export default EducationCard;
