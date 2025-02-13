import React from "react";

export const SkillsCard = ({ Skills }) => {
  console.log(Skills);
  return (
    <>
      <div>
        <h4>Top Skills</h4>
        <ul style={{ paddingLeft: "0px" }}>
          {Skills.map((skill) => (
            <li
              key={skill.id}
              style={{ listStyleType: "none", listStylePosition: "initial" }}
            >
              {skill.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
