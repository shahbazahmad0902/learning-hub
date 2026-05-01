import { dsaTopics } from "../data/dsa";

const DSA = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🧠 DSA Practice</h1>

      {dsaTopics.map((topic) => (
        <div key={topic.id} style={{ marginBottom: "20px" }}>
          <h2>{topic.title}</h2>

          <ul>
            {topic.problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DSA;sdfsdfsdfgdfgdfgdfgdfgfgd