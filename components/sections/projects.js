import { SectionTitle } from "../atoms/section-title";
import { ProjectCard } from "../atoms/project-card";

export function Projects() {
  return (
    <div className="projects-section section">
      <div className="projects-section__content content">
        <SectionTitle title="FEATURED PROJECTS" />
        <div className="projects-section__projects">
          <ProjectCard
            title="Drupal 8 Profile"
            description="Will be used to upgrade the ny.gov and governor.ny.gov sites."
            projectUrl="comming-soon"
          />
          <ProjectCard
            title="Ny.gov"
            description="Official Website of New York State."
            projectUrl="https://www.ny.gov/"
          />
          <ProjectCard
            title="Governor.ny.gov"
            description="Official Website of New York State's Governor"
            projectUrl="https://www.governor.ny.gov/"
          />
          <ProjectCard
            title="Local Events"
            description="React Application in Drupal 7."
            projectUrl="https://www.ny.gov/local"
          />
        </div>
      </div>

      <style jsx>{`
        .projects-section__projects{
          display: flex;
          flex-flow: row wrap;
        }
      `}</style>
    </div>
  );
}
