import "./App.css";

import NameCard from "./components/NameCard";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import { Col, Container, Row } from "react-bootstrap";
const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <NameCard
              Name={"Utsav"}
              Profession={"IT Consultant"}
              Location={"Sydney NSW"}
            />
            <ExperienceCard
              CompanyName={"Woolworths"}
              WorkingPeriod={"November 2023 - Present"}
              Position={"Team Member"}
            />
          </Col>
          <Col>
            {" "}
            <EducationCard
              Course={"Bachelor's degree, Mobile Application Development"}
              InstituteName={"Academy of Interactive Technology"}
              StudyPeriod={"February 2021 - May 2025"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
