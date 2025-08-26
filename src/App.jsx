import Header from "./components/header.jsx"
import Form from "./components/form.jsx"
import Map from "./components/map.jsx"
import Footer from "./components/footer.jsx"

const App = () => {
  return <>
    <Header />
    <main className="flex items-center flex-col " >
      <Form />
      <Map />
    </main>
    <Footer />
  </>
}
export default App;
