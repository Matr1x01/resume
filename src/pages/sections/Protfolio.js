import React from "react";
import CategorySelector from "../../components/CategorySelector";
import ProjectBox from "../../components/ProjectBox";

const Protfolio = ({ projects, categories }) => {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const onCategorySelect = (category) => {
    if (category === "ALL") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };
  return (
    <div className="h-auto w-full bg-white p-4 flex flex-col">
      <div className="flex flex-col w-full max-w-5xl self-center">
        <div className="flex flex-col">
          <span className="text-3xl font-semibold text-blue-900">
            Portfolio
          </span>
          <div className="line-1 bg-blue-300" />
        </div>
        <div className="flex flex-col mt-4 ">
          <CategorySelector
            categories={categories}
            onSelect={onCategorySelect}
          />
          <div className="flex">
            <div className="flex flex-col md:flex-row md:flex-wrap  mt-4 py-8 mx-auto">
              {filteredProjects.map((project, i) => {
                return (
                  <div key={i} className="mx-auto md:mx-0">
                    <ProjectBox
                      image={project.image}
                      link={project.link}
                      title={project.title}
                      description={project.description}
                      github={project.github}
                      category={project.category}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="px-8 py-2 m-auto rounded-lg bg-blue-600 hover:bg-blue-500">
            <span className="text-xl text-white">Download CV</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
