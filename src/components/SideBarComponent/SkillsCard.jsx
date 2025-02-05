import React from "react";

export const SkillsCard = ({ Skills }) => {
  console.log(Skills);
  return (
    <>
      <div>
        <h3>Top Skills</h3>
        <ul>
          {Skills.map((skill) => (
            <li key={skill.id} style={{ listStyleType: "none" }}>
              {skill.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
