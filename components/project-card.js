export function ProjectCard({ title, description, imgSrc, altTxt, projectUrl }) {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <div className="project-card__img">
          <img src={imgSrc} alt={altTxt} />
        </div>
        <div className="project-card__title">{title}</div>
        <div className="project-card__description">{description}</div>
      </div>
    </div>
  );
}
