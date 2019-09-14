import Banner from "../sections/banner";
import Skills from "../sections/skills";
import { Projects } from "../sections/projects";
import Contact from "../sections/contact";

const Content = () => (
    <div className="content">
        <Banner />
        <Skills />
        <Projects />
        <Contact />
    </div>
);

export default Content;