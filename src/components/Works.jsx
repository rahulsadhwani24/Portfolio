import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Works({ visibility }) {
  const [projectShowCase, setProjectShowCase] = useState(false);

  const [projects, setProject] = useState([
    {
      name: "Theme Park",
      type: "Javascript",
      link: "https://rahulsadhwani24.github.io/Themepark/",
      logo: "../assets/Menu.gif",
    },
    {
      name: "Marketing Arcc",
      type: "Javascript",
      link: "https://rahulsadhwani24.github.io/MarketingArc/",
      logo: "../assets/search-context.gif",
    },
    {
      name: "Max Medical",
      type: "Javascript",
      link: "https://rahulsadhwani24.github.io/MaxMedical/",
      logo: "../assets/callMemoji.png",
    },
    {
      name: "Two Good Co.",
      type: "Javascript",
      link: "https://rahulsadhwani24.github.io/TwoGoodCo/",
      logo: "../assets/helloMemoji.png",
    },
  ]);

  return (
    <section className={`sectionWorks ${visibility && "noInteraction"}`}>
      <div className="worksContainer">
        <div className="listOfWorks">
          <div className="title">
            <h1 className="titleHeading">Works</h1>
            <span className="titleCount">0{projects.length}</span>
          </div>

          {projects.map((project, index) => {
            return (
              <Link to={project.link} target="_blank" key={index}>
                <div
                  className="project"
                  onMouseLeave={() => {
                    setProjectShowCase(false);
                  }}
                  onMouseEnter={() => {
                    setProjectShowCase(true);
                  }}
                >
                  <h1 className="projectHeading">
                    <span className="showOnHover">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.8248 0.30185L1.99111 2.0358C1.79715 2.07 1.61181 2.14207 1.4457 2.2479C1.27958 2.35373 1.13594 2.49124 1.02297 2.65258C0.909997 2.81392 0.829909 2.99593 0.787279 3.18822C0.74465 3.38051 0.740313 3.57932 0.774514 3.77328C0.808716 3.96725 0.880787 4.15258 0.986613 4.3187C1.09244 4.48481 1.22995 4.62846 1.39129 4.74143C1.55263 4.8544 1.73464 4.93449 1.92693 4.97712C2.11922 5.01975 2.31803 5.02409 2.512 4.98988L7.30246 4.1452L0.775499 13.4667C0.547307 13.7926 0.457922 14.1957 0.527006 14.5875C0.59609 14.9793 0.817984 15.3276 1.14387 15.5558C1.46977 15.784 1.87296 15.8734 2.26475 15.8043C2.65655 15.7352 3.00485 15.5133 3.23304 15.1875L9.76001 5.86599L10.6047 10.6565C10.6384 10.8507 10.7101 11.0363 10.8158 11.2027C10.9215 11.3691 11.059 11.513 11.2205 11.6261C11.3819 11.7391 11.5642 11.8191 11.7567 11.8615C11.9492 11.9039 12.1482 11.9078 12.3422 11.8731C12.7339 11.8039 13.0821 11.582 13.3102 11.2562C13.5384 10.9304 13.6278 10.5273 13.5588 10.1356L11.8248 0.30185Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    {project.name}
                  </h1>
                  <span className="projectType">{project.type}</span>
                  <div
                    className={`projectShowCase`}
                    onMouseEnter={() => {
                      setProjectShowCase(false);
                    }}
                    style={{
                      pointerEvents: projectShowCase ? "auto" : "none",
                    }}
                  >
                    <img src={project.logo} alt={project.name} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Works;
