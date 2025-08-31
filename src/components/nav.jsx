const Nav = () => {
  return <nav className=" justify-start gap-4 items-center bg-[url(/navBG.jpg)]  bg-cover bg-position-[center_bottom_-5rem] bg-no-repeat pt-7 flex flex-col w-full
    " >
    <div className="bg-main-primary w-fit p-2 rounded-2xl " >
      <h1 className=" text-5xl tracking-wide text-main-background " >Popular<br /> fertility chain <br /> in town <br />bharatpur, chitwan </h1>
      <button onClick={()=>{ window.scrollTo({
      left: 0,
       top: 400,
       behavior: "smooth"
        }) }} className=" hover:brightness-105 active:brightness-90 hover:shadow-lg p-2 px-3 border-2 mt-4 rounded-lg hover:cursor-pointer font-bold border-main-background text-main-background " >Book Now</button>
    </div>
    <div className="flex" >
   <h1 className="p-4 bg-main-secondary text-4xl " >sumit</h1>
   <h1 className="p-4 bg-main-secondary text-4xl " >sumit</h1>
   <h1 className="p-4 bg-main-secondary text-4xl " >sumit</h1>
    </div>
  </nav>
}
export default Nav;
