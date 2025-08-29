const Nav = () => {
  return <nav className="border-y-5 rounded-2xl sm:rounded-3xl md:rounded-4xl border-main-accent justify-center  py-7 flex flex-col w-full pl-2 sm:pl-30 md:flex-row md:justify-around md:items-center
    " >
    <img src="/doc.jpeg" className="w-32 h-32 rounded-full object-cover border-2 border-main-accent md:w-70 md:h-72 md:rounded-3xl " alt="fertility expert" />
    <div>
      <p className="font-heading text-lg text-main-black tracking-wide md:text-3xl " >Fertility Expert</p>
      <h2 className="font-heading font-bold text-main-accent text-3xl tracking-wider md:text-5xl " >Dr.Subha Shrestha</h2>
    </div>
    <ul className="font-heading text-main-black text-lg md:text-2xl " >
      <li>MBBS NMC no:6395</li>
      <li>MD Obstetrics &amp; Gynecology</li>
      <li>ART &amp; IVF Fellowship</li>
    </ul>
  </nav>
}
export default Nav;

