import Footer from "./components/footer";
import Header from "./components/header";
import Experts from "./components/experts";
import { Experts2 } from "./components/experts";

const About = () => {
  return <>
    <Header />
    <main className="flex flex-col justify-center items-center" >
      <Experts />
      <Experts2/>
    </main>
    <Footer />
  </>
}
export default About;
