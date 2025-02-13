import "./App.css";

import NameCard from "./components/NameCard";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/SideBarComponent/Sidebar";

const App = () => {
  return (
    <>
      <div className="profile-container">
        <Sidebar />
        <div className="main-info gap-4">
          <NameCard
            name={"Utsav"}
            profession={"IT Enthusiast"}
            location={"Sydney"}
          />
          <hr style={{ borderWidth: "3px" }} />
          <br />
          <h3>Experience</h3>
          <ExperienceCard
            companyName={"Woolworths"}
            position={"Team Member"}
            workingPeriod={"November 2023- Present(1 year 4 months)"}
          />
          <hr style={{ borderWidth: "3px" }} />
          <br />
          <h3>Education</h3>
          <EducationCard
            instituteName={"Academy of Interactive Technology"}
            course={"Bachelor's degree, Mobile Application Development"}
            studyPeriod={"February 2021 - May 2025"}
          />
          <EducationCard
            instituteName={"Saipal Academy"}
            course={"A Level, Computer Science"}
            studyPeriod={"February 2017 - December 2020"}
          />

          <EducationCard
            instituteName={"Dented Code Academy"}
            course={"Full Stack Development"}
            studyPeriod={"January 2025"}
          />
        </div>
      </div>
    </>
  );
};

export default App;
