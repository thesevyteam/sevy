const SkillsSection = () => {
  const skills = ['Skill 1', 'Skill 2', 'Skill 3'];

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="border-t border-gray-300 py-2">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
