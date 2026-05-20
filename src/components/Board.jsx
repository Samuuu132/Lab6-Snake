import Snake from './Snake'
import Food from './Food'

const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9,  y: 10 },
  { x: 8,  y: 10 },
]

const FOOD_POSITION = { x: 15, y: 10 }

function Board() {
  return (
    <div style={{
      width: '400px',
      height: '400px',
      backgroundColor: '#12121f',
      border: '2px solid rgba(0, 255, 136, 0.3)',
      position: 'relative',
    }}>
      <Snake segments={INITIAL_SNAKE} />
      <Food position={FOOD_POSITION} />
    </div>
  )
}

export default Board