import Header from "./components/header.jsx"
import Form from "./components/form.jsx"
import Map from "./components/map.jsx"
import Footer from "./components/footer.jsx"
import Experts from "./components/experts.jsx"
import Nav from "./components/nav.jsx"

const App = () => {
  return <>
    <Header>
      <Nav/>
    </Header>
    <main className="flex items-center flex-col " >
      <Form />
      <Map />
      <Experts />
    </main>
    <Footer />
  </>
}
export default App;
