const Header = ({ children }) => {
  return <header className="" >
    <div className="flex flex-col justify-center items-center " >
      <div className="flex bg-linear-to-bl py-1 bg-blend-soft-light from-purple-100/60 via-fuchsia-50 to-pink-100/60 w-full md:pl-10 items-center " >
        <img src="/logo.png" className="w-15 h-15" alt="logo" />
        <h1 className="font-logo font-semibold text-2xl text-fuchsia-800 " >Subha fertility clinic</h1>
      </div>
      {children ? children : null}
    </div>
  </header>
}
export default Header
