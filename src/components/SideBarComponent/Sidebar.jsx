//rafce for export  at the end rafc for exporting individual component
import { Row } from "react-bootstrap";
import ContactCard from "./ContactCard";
import { SkillsCard } from "./SkillsCard";
const Sidebar = () => {
  const skillsArray = [
    "Stock Management",
    "Android Development",
    "Web Development",
  ];

  const skillObj = skillsArray.map((skill, i) => ({
    id: i,
    title: skill,
  }));

  // const skillObj = [{ id: 1, title: "javascript" }];

  return (
    <>
      <div className="sidebar">
        <Row>
          <ContactCard phoneNumber="0450181410" email="utsavnpn7@gmail.com" />
          <SkillsCard Skills={skillObj} />
        </Row>
      </div>
    </>
  );
};

export default Sidebar;
