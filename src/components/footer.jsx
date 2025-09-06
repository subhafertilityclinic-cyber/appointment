import Wave from 'react-wavify'

const Footer = () => {
  return <footer className="relative h-50 pt-15 " >
    <Wave fill='#ec4899' className='absolute -z-10 inset-x-0 bottom-0 h-50'
      paused={false}
      style={{ display: 'flex' }}
      options={{
        amplitude: 20,
        speed: 0.15,
        points: 3
      }}
    />
    <div className='flex justify-center gap-6 items-start h-30  md:justify-around ' >
      <div className='flex flex-col justify-center items-center gap-2'>
        <p className='font-heading font-semibold text-main-background text-xl ' >Contact us:</p>
        <div className='flex gap-2 flex-col ' >
          <a href="mailto:subhafertilityclinic@gmail.com" target='_blank' className='font-heading text-main-background font-semibold ' >Mail</a>
          <p className='font-heading font-semibold text-main-background' >9855074117</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-2' >
        <p className='font-heading font-semibold text-main-background text-xl ' >Quick links:</p>
        <a className="font-heading font-extrabold text-white" href="/">Home</a>
        <a className="font-heading font-extrabold text-white" href="/about">About</a>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <p className='font-heading font-semibold text-main-background text-xl ' >Social:</p>
        <div className='flex gap-2' >
          <a href="https://facebook.com/sumitpdl" target='_blank' rel="noopener noreferrer" ><img className='h-6 w-6' src="/facebook.svg" alt="" /></a>
          <a href="https://instagram.com/goku_chann_" target='_blank' rel="noopener noreferrer"><img className='h-6 w-6' src="/instagram.svg" alt="" /></a>
          <a href="https://instagram.com/goku_chann_" target='_blank' rel="noopener noreferrer"><img className='h-6 w-6' src="/tiktok.svg" alt="" /></a>
        </div>
      </div>
    </div>

    <div className='flex justify-center bg-main-primary ' >
      <p className="text-base tracking-wide lg:text-xl md:text-xl text-main-background flex items-center ">Made with
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 heart px-0.5 ">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        by <strong> Sumit &amp; Sudip</strong></p>
    </div>
  </footer>
}
export default Footer;
