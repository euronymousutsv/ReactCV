import React from "react";

export const SkillsCard = ({ Skills }) => {
  console.log(Skills);
  return (
    <>
      <p>
        <h3>Top Skills</h3>
        <ul>
          {Skills.map((skill) => (
            <li
              key={skill.id}
              style={{ listStyleType: "none", listStylePosition: "initial" }}
            >
              {skill.title}
            </li>
          ))}
        </ul>
      </p>
    </>
  );
};
