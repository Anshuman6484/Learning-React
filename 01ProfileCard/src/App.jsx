import PropTypes from "prop-types";
import "./App.css";

function App() {
  return (
    <>
      <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6'>
        <Avatar />
        <div className='p-6'>
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function Avatar() {
  return (
    <img
      className='w-20 h-20 rounded-full border-2 border-gray-300 object-cover'
      src='img.avif'
      alt='avatar'
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Web Developer</h1>
      <p>
        I design, build, and maintain responsive websites and web applications
        using modern frameworks and best practices to ensure seamless user
        experiences.
      </p>
    </div>
  );
}
function SkillList() {
  const skillSet = [
    { id: 1, skill: "HTML + CSS", emoji: "🎨", bg: "pink", level: "advanced" },
    {
      id: 2,
      skill: "JavaScript",
      emoji: "⚡",
      bg: "yellow",
      level: "advanced",
    },
    { id: 3, skill: "React", emoji: "⚛️", bg: "cyan", level: "beginner" },
    {
      id: 4,
      skill: "Node.js",
      emoji: "🌿",
      bg: "green",
      level: "intermediate",
    },
    {
      id: 5,
      skill: "Git & GitHub",
      emoji: "🔗",
      bg: "gray",
      level: "intermediate",
    },
  ];
  return (
    <>
      {skillSet.map((obj) => (
        <Skill key={obj.id} skillobj={obj} />
      ))}
    </>
  );
}
function Skill(props) {
  const { skill, level } = props.skillobj;
  const levelMap = {
    beginner: { bg: "bg-green-600", emoji: "👎" },
    intermediate: { bg: "bg-yellow-300", emoji: "👍" },
    advanced: { bg: "bg-red-600", emoji: "💪" },
  };
  const bg = levelMap[level].bg,
    emoji = levelMap[level].emoji;
  return (
    <>
      <span
        className={`inline-block ${bg} rounded px-2 py-2 text-sm font-semibold  m-2`}
      >
        {skill} {emoji}
      </span>
    </>
  );
}

Skill.propTypes = {
  skillobj: PropTypes.shape({
    bg: PropTypes.string,
    skill: PropTypes.string,
    emoji: PropTypes.string,
    level: PropTypes.string,
  }).isRequired,
};

export default App;
