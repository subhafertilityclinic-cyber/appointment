import Nav from "./nav.jsx"
const Header = () => {
  return <header className="pt-2" >
    <div className="flex flex-col justify-center items-center " >
      <div className="flex bg-main-background w-full md:pl-10 items-center " >
        <img src="/logo.png" className="w-15 h-15 md:h-20 md:w-20 " alt="logo" />
        <h1 className="font-logo font-bold text-3xl text-main-primary md:text-5xl " >Subha fertility clinic</h1>
      </div>
      <Nav />
    </div>
  </header>
}
export default Header
