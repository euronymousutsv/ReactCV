import "./App.css";

import NameCard from "./components/NameCard";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/SideBarComponent/Sidebar";

const App = () => {
  return (
    <>
      <Container fluid className="bg-primary" style={{ height: "100vh" }}>
        <Row>
          <Col sm={8} md={4} lg={2} className="bg-danger">
            <Sidebar />
          </Col>
          <Col>
            <NameCard
              name={"Utsav"}
              profession={"IT Consultant"}
              location={"Sydney NSW"}
            />
            <ExperienceCard
              companyName={"Woolworths"}
              workingPeriod={"November 2023 - Present"}
              position={"Team Member"}
            />
            <EducationCard
              course={"Bachelor's degree, Mobile Application Development"}
              instituteName={"Academy of Interactive Technology"}
              studyPeriod={"February 2021 - May 2025"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
