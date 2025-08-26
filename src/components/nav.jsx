const Nav = () => {
  return <nav className="border-y-2 border-main-gray pl-2  py-7 flex flex-col w-full max-w-maxi min-w-[300px] " >
    <img src="/doc.jpeg" className="w-30 h-30 rounded-full border-2 border-main-green " alt="fertility expert" />
    <p className="font-heading text-lg text-main-black tracking-wide " >Fertility Expert</p>
    <h2 className="font-heading font-bold text-main-black text-3xl tracking-wider " >Dr.Subha Shrestha</h2>
    <ul className="font-heading text-lg " >
      <li>MBBS NMC no:6395</li>
      <li>MD Obstetrics &amp; Gynecology</li>
      <li>ART &amp; IVF Fellowship</li>
    </ul>
  </nav>
}
export default Nav;

