import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { useEffect } from 'react'

const Poopers = ({ setRun, run }) => {
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
