import React from "react";
import "../../styles/Github.scss";
import MacWindow from "./MacWindow.jsx";
import githubData from "../../../src/assets/github.json";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    desc: "",
    tags: "",
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
      <div className="tags">
        {data.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Repo</a>
        <a href={data.demoLink}>Demo</a>
      </div>
    </div>
  );
};

const Github = ({windowName, setWindowState}) => {
  return (
    <MacWindow height="620" x='0' y='25' windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {githubData.map((project) => {
          return <GitCard key={project.id} data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
