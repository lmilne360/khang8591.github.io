import Banner from "../sections/banner";
import Skills from "../sections/skills";
import { Projects } from "../sections/projects";
import Footer from "../sections/footer";

const Content = () => (
    <div className="content">
        <Banner />
        <Skills />
        <Projects />
        <Footer />
    </div>
);

export default Content;