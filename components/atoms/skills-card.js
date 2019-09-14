export function SkillCard({ icons, title, description }) {
  return (
    <div className="skill-card">
      <div className="skill-card__icons">
        {icons.map((icon, index) => (
          <i
            key={index.toString()}
            className={`fab ${icon} skill-card__icon`}
          ></i>
        ))}
      </div>
      <div className="skill-card__title">{title}</div>
      <div className="skill-card__desc">{description}</div>
      <style jsx>{`
        .skill-card {
          width: 250px;
          padding: 0 20px;
          font-size: 18px;
          margin-top: 32px;
          margin-left: 20px;
          margin-right: 20px;
        }

        @media only screen and (min-width: 769px) {
          div.skill-card {
            width: 350px;
          }
        }

        .skill-card__icon:not(:first-child) {
          margin-left: 15px;
        }

        .skill-card__icons {
          display: flex;
          font-size: 30px;
        }

        .fa-drupal {
          color: #0077c0;
        }
        .fa-react {
          color: #61dbfb;
        }
        .fa-js-square {
          color: #f0db4f;
        }

        .fa-css3-alt {
          color: #264de4;
        }
        .fa-html5 {
          color: #e44d26;
        }
        .fa-sass {
          color: #cd6799;
        }
        .fa-php {
          color: #787cb5;
        }
        .fa-yarn {
          color: #2188b6;
        }
        .fa-git-alt {
          color: #f1502f;
        }
        .skill-card__title {
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
