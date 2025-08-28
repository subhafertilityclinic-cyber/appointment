import Nav from "./nav.jsx"
const Header = () => {
  return <header>
    <div className="flex flex-col justify-center items-center mt-2 " >
      <div className="flex " >
        <img src="/logo.png" className="w-15 h-15" alt="logo" />
        <h1 className="font-logo font-bold text-3xl text-main-primary " >Subha fertility clinic</h1>
      </div>
      <Nav />
    </div>
  </header>
}
export default Header
