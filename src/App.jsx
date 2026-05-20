import { useState, useEffect } from 'react'
import Board from './components/Board'
import Score from './components/Score'
import StartScreen from './components/StartScreen'

const GRID_SIZE = 20
const SPEED = 150

const DIRECTIONS = {
  ArrowUp:    { x: 0,  y: -1 },
  ArrowDown:  { x: 0,  y: 1  },
  ArrowLeft:  { x: -1, y: 0  },
  ArrowRight: { x: 1,  y: 0  },
}

const getInitialSnake = () => [
  { x: 10, y: 10 },
  { x: 9,  y: 10 },
  { x: 8,  y: 10 },
]

const generateFood = (snake) => {
  let pos
  do {
    pos = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  } while (snake.some(seg => seg.x === pos.x && seg.y === pos.y))
  return pos
}

function App() {
  const [gameState, setGameState] = useState('start') // 'start' | 'playing' | 'gameover'
  const [snake, setSnake] = useState(getInitialSnake())
  const [direction, setDirection] = useState({ x: 1, y: 0 })
  const [dirKey, setDirKey] = useState('ArrowRight')
  const [food, setFood] = useState({ x: 15, y: 10 })
  const [score, setScore] = useState(0)

  const startGame = () => {
    const initialSnake = getInitialSnake()
    setSnake(initialSnake)
    setFood(generateFood(initialSnake))
    setDirection({ x: 1, y: 0 })
    setDirKey('ArrowRight')
    setScore(0)
    setGameState('playing')
  }

  useEffect(() => {
    if (gameState !== 'playing') return

    const interval = setInterval(() => {
      setSnake(prev => {
        const newHead = {
          x: prev[0].x + direction.x,
          y: prev[0].y + direction.y,
        }

        if (
          newHead.x < 0 || newHead.x >= GRID_SIZE ||
          newHead.y < 0 || newHead.y >= GRID_SIZE
        ) {
          setGameState('gameover')
          return prev
        }

        if (prev.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
          setGameState('gameover')
          return prev
        }

        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10)
          setFood(generateFood([newHead, ...prev]))
          return [newHead, ...prev]
        }

        return [newHead, ...prev.slice(0, -1)]
      })
    }, SPEED)

    return () => clearInterval(interval)
  }, [direction, food, gameState])

  useEffect(() => {
    const handleKey = (e) => {
      if (gameState !== 'playing') return
      if (!DIRECTIONS[e.key]) return

      const opposites = {
        ArrowUp: 'ArrowDown', ArrowDown: 'ArrowUp',
        ArrowLeft: 'ArrowRight', ArrowRight: 'ArrowLeft',
      }
      if (opposites[dirKey] === e.key) return

      setDirKey(e.key)
      setDirection(DIRECTIONS[e.key])
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [dirKey, gameState])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {gameState === 'playing' && (
        <>
          <Score score={score} />
          <Board snake={snake} food={food} />
        </>
      )}

      {(gameState === 'start' || gameState === 'gameover') && (
        <StartScreen
          onStart={startGame}
          isGameOver={gameState === 'gameover'}
          score={score}
        />
      )}
    </div>
  )
}

export default App