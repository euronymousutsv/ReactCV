//rafce for export  at the end rafc for exporting individual component
import { Row } from "react-bootstrap";
import ContactCard from "./ContactCard";
import { SkillsCard } from "./SkillsCard";
import useCustomHooks from "../../hooks/customhooks";
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

  // const [var1, setvar1, var2, setvar2] = useCustomHooks(initialState);
  // console.log(1000, useCustomHooks(initialState));
  // // const skillObj = [{ id: 1, title: "javascript" }];

  return (
    <>
      <div className="sidebar">
        <Row className="justify-content-md-center gap-4">
          <ContactCard phoneNumber="0450181410" email="utsavnpn7@gmail.com" />
          <SkillsCard Skills={skillObj} />
        </Row>
      </div>
    </>
  );
};

export default Sidebar;
