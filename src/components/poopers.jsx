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
    <Confetti
      width={width}
      height={height}
      run={run}
      recycle={false}
      numberOfPieces={500}
    />
  )
}
export default Poopers
