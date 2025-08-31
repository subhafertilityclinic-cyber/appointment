const Nav = () => {
  return <nav className="bg-[url(/navBG.jpg)] h-40 md:h-fit flex justify-center items-center bg-center bg-cover md:bg-bottom lg:bg-center bg-no-repeat w-full
    " >
    <div className=" hidden md:flex w-[70vw] gap-4 mt-4 flex-col  " >
      <div className="bg-main-primary w-fit p-2 rounded-2xl " >
        <h1 className=" text-5xl tracking-wide text-main-background " >Popular<br /> fertility clinic <br /> in town <br />Bharatpur, chitwan </h1>
        <button onClick={() => {
          window.scrollTo({
            left: 0,
            top: 400,
            behavior: "smooth"
          })
        }} className=" hover:brightness-105 active:brightness-90 hover:shadow-lg p-2 px-3 border-2 mt-4 rounded-lg hover:cursor-pointer font-bold border-main-background text-main-background " >Book Appointment Now</button>
      </div>
      <div className="flex gap-2 " >
        <h1 className="p-4 bg-main-secondary text-main-primary rounded-t-md md:text-2xl lg:text-4xl text-center " >IVF<br />Specialist</h1>
        <h1 className="p-4 bg-main-secondary text-main-primary rounded-t-md md:text-2xl lg:text-4xl text-center " >Friendly Specialist<br />Consultation</h1>
        <h1 className="p-4 bg-main-secondary text-main-primary rounded-t-md md:text-2xl lg:text-4xl text-center " >10 Years+<br />Work Experience</h1>
      </div>
    </div>
    <div className="flex md:hidden w-full justify-center " >
      <h1 className=" p-2 text-main-primary text-md text-center border-r-2 border-main-primary " >IVF<br />Specialist</h1>
      <h1 className=" p-2 text-main-primary text-md text-center border-r-2 border-main-primary " >Friendly Specialist<br />Consultation</h1>
      <h1 className=" p-2 text-main-primary text-md text-center " >10 Years+<br />Work Experience</h1>
    </div>

  </nav>
}
export default Nav;
