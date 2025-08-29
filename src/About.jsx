import Footer from "./components/footer";
import Header from "./components/header";
import Experts from "./components/experts";

const About = () => {
  return <>
    <Header /> 
     <main className="flex justify-center items-center" >
      <Experts />
    </main>
    <Footer />
  </>
}
export default About;
