import { SectionTitle } from "./section-title";
import { SkillCard } from "./skills-card";

const Skills = props => (
  <div className="skills-section">
    <div className="skills-section__content">
      <SectionTitle title="WHAT I DO" />
      <div className="skills-section__tech">
        <SkillCard
          icons={["fa-drupal", "fa-php"]}
          title="Drupal, PHP"
          description="Sitebuilding, Theming, and Module Development for both Drupal 7 & 8."
        />
        <SkillCard
          icons={["fa-react", "fa-js-square"]}
          title="React, Vanilla JS"
          description="Integrate React Applications with Drupal 8 and Graphql."
        />
        <SkillCard
          icons={["fa-html5", "fa-css3-alt"]}
          title="HTML5, CSS3"
          description="Wouldn't be a front-end developer without these would I?"
        />
      </div>
    </div>
    <style jsx>
      {`
        .skills-section {
          padding: 0 2em;
          margin-bottom: 2em;
        }
        .skills-section__tech {
          display: flex;
          flex-flow: row wrap;
        }
        .skills-section__content {
          margin: 0 auto;
          max-width: 1280px;
          padding: 0 15px;
        }
      `}
    </style>
  </div>
);

export default Skills;
