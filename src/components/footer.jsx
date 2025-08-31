import { NavLink } from 'react-router';
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
          <a href="https://instagram.com/goku_chann_" target='_blank' rel="noopener noreferrer"><img className='h-6 w-6' src="/tiktok.svg" alt="" /></a>
        </div>
      </div>
    </div>

    <div className='flex justify-center bg-main-primary ' >
      <p class="text-base tracking-wide lg:text-xl md:text-xl text-main-background flex">Made with <svg width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="https://www.w3.org/2000/svg" class="mx-1 mt-1 heart"><path _ngcontent-dpj-c17="" d="M21.4355 4.2008C21.0952 3.41277 20.6045 2.69866 19.9908 2.09846C19.3767 1.49646 18.6526 1.01806 17.858 0.689276C17.034 0.346993 16.1503 0.171792 15.258 0.173846C14.0063 0.173846 12.785 0.516619 11.7236 1.16408C11.4697 1.31896 11.2285 1.48908 11 1.67443C10.7715 1.48908 10.5303 1.31896 10.2764 1.16408C9.21504 0.516619 7.99375 0.173846 6.74199 0.173846C5.84062 0.173846 4.96719 0.346502 4.14199 0.689276C3.34473 1.01935 2.62617 1.49416 2.00918 2.09846C1.39472 2.69798 0.90387 3.41226 0.564453 4.2008C0.211523 5.02092 0.03125 5.89182 0.03125 6.7881C0.03125 7.63361 0.203906 8.51467 0.54668 9.41096C0.833594 10.16 1.24492 10.9369 1.77051 11.7215C2.60332 12.9631 3.74844 14.258 5.17031 15.5707C7.52656 17.7467 9.85996 19.2498 9.95898 19.3108L10.5607 19.6967C10.8273 19.8668 11.1701 19.8668 11.4367 19.6967L12.0385 19.3108C12.1375 19.2473 14.4684 17.7467 16.8271 15.5707C18.249 14.258 19.3941 12.9631 20.227 11.7215C20.7525 10.9369 21.1664 10.16 21.4508 9.41096C21.7936 8.51467 21.9662 7.63361 21.9662 6.7881C21.9688 5.89182 21.7885 5.02092 21.4355 4.2008V4.2008Z" fill="#FF0000"></path></svg> by <strong> Sumit &amp; Sudip</strong></p>
    </div>
  </footer>
}
export default Footer;
