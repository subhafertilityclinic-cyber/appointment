import Wave from 'react-wavify'

const Footer = () => {
  return <footer className="relative flex flex-col justify-center items-center h-30 " >
    <Wave fill='#044343' className='absolute -z-10 inset-x-0 bottom-0 h-30'
      paused={false}
      style={{ display: 'flex' }}
      options={{
        amplitude: 20,
        speed: 0.15,
        points: 3
      }}
    />
    <p className='font-heading font-semibold text-main-gray text-xl ' >contact us:</p>
    <div className='flex gap-2'>
      <a href="https://facebook.com/sumitpdl" target='_blank' rel="noopener noreferrer" ><img className='h-6 w-6' src="/facebook.svg" alt="" /></a>
      <a href="https://instagram.com/goku_chann_" target='_blank' rel="noopener noreferrer"><img className='h-6 w-6' src="/instagram.svg" alt="" /></a>
    </div>
  </footer>
}
export default Footer;
