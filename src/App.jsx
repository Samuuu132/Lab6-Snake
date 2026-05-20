import { useState, useEffect } from 'react'
import Board from './components/Board'
import Score from './components/Score'

const GRID_SIZE = 20
const SPEED = 150

const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9,  y: 10 },
  { x: 8,  y: 10 },
]

function App() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [direction, setDirection] = useState({ x: 1, y: 0 })
  const [score, setScore] = useState(0)

  // Mover la serpiente cada 150ms
  useEffect(() => {
    const interval = setInterval(() => {
      setSnake(prev => {
        const newHead = {
          x: prev[0].x + direction.x,
          y: prev[0].y + direction.y,
        }
        return [newHead, ...prev.slice(0, -1)]
      })
    }, SPEED)

    return () => clearInterval(interval)
  }, [direction])

  // Escuchar teclado
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowUp')    setDirection({ x: 0, y: -1 })
      if (e.key === 'ArrowDown')  setDirection({ x: 0, y: 1 })
      if (e.key === 'ArrowLeft')  setDirection({ x: -1, y: 0 })
      if (e.key === 'ArrowRight') setDirection({ x: 1, y: 0 })
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Score score={score} />
      <Board snake={snake} />
    </div>
  )
}

export default App