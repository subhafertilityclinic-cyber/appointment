import { NavLink } from 'react-router';
import Wave from 'react-wavify'

const Footer = () => {
  return <footer className="relative h-50 pt-15 " >
    <Wave fill='#FF90BB' className='absolute -z-10 inset-x-0 bottom-0 h-50'
      paused={false}
      style={{ display: 'flex' }}
      options={{
        amplitude: 20,
        speed: 0.15,
        points: 3
      }}
    />
    <div className='flex justify-center gap-6 items-start h-30 ' >
      <div className='flex flex-col justify-center items-center gap-2'>
        <p className='font-heading font-semibold text-main-background text-xl ' >Contact us:</p>
        <div className='flex gap-2 flex-col ' >
          <a href="mailto:subhafertilityclinic@gmail.com" target='_blank' className='font-heading text-main-background font-semibold ' >Mail</a>
          <p className='font-heading font-semibold text-main-background' >9829234584</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-2' >
        <p className='font-heading font-semibold text-main-background text-xl ' >Quick links:</p>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-heading font-extrabold text-white"
              : "font-heading font-semibold text-main-background"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-heading font-extrabold text-white"
              : "font-heading font-semibold text-main-background"
          }
        >
          About
        </NavLink>

      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <p className='font-heading font-semibold text-main-background text-xl ' >Social:</p>
        <div className='flex gap-2' >
          <a href="https://facebook.com/sumitpdl" target='_blank' rel="noopener noreferrer" ><img className='h-6 w-6' src="/facebook.svg" alt="" /></a>
          <a href="https://instagram.com/goku_chann_" target='_blank' rel="noopener noreferrer"><img className='h-6 w-6' src="/instagram.svg" alt="" /></a>
        </div>
      </div>

    </div>
  </footer>
}
export default Footer;
