export function ProjectCard({
  title,
  description,
  projectUrl
}) {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <div className="project-card__text">
          <div className="project-card__title">{title}</div>
          <div className="project-card__description">{description}</div>
        </div>
        <a
          className="project-card__btn-link btn btn-dark"
          href={projectUrl}
          role="button"
        >
          Visit Site
        </a>
      </div>
      <style jsx>{`

      .project-card__content{
        display: flex;
        flex-flow: column;
        height: 100%;
        justify-content: space-between;
      }
        .project-card {
          margin-top: 32px;
          margin-left: 20px;
          margin-right: 20px;
          padding: 0px 20px 20px 20px;
          width: 250px;
          font-size: 18px;
          background-color: #fafafa;
        }

        .project-card__btn-link {
          margin-top: 20px;
        }

        .project-card__title {
          font-weight: bold;
          font-color: #292929;
          margin-top: 10px;
          font-size: 20px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
