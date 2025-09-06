import Confetti from 'react-confetti'
import { useState, useEffect } from 'react'

const Poopers = ({ setRun, run }) => {
  function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
      const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
  }
  const { width, height } = useWindowSize()

  useEffect(() => {
    const handler = setTimeout(() => {
      setRun(false);
    }, 8000);
    return () => {
      clearTimeout(handler);
    }
  })

  return (
    <div className=" fixed pointer-events-none z-20 w-screen h-screen top-0 left-0 " >
      <Confetti
        width={width}
        height={height}
        run={run}
        recycle={false}
        numberOfPieces={500}
      />
    </div>
  )
}
export default Poopers
