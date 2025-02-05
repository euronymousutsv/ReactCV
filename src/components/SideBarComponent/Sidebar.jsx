//rafce for export  at the end rafc for exporting individual component
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

  return (
    <>
      <div className="sidebar">
        <SkillsCard Skills={skillObj} />
      </div>
    </>
  );
};

export default Sidebar;
