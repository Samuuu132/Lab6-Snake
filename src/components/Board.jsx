import Snake from './Snake'
import Food from './Food'

const FOOD_POSITION = { x: 15, y: 10 }

function Board({ snake }) {
  return (
    <div style={{
      width: '400px',
      height: '400px',
      backgroundColor: '#12121f',
      border: '2px solid rgba(0, 255, 136, 0.3)',
      position: 'relative',
    }}>
      <Snake segments={snake} />
      <Food position={FOOD_POSITION} />
    </div>
  )
}

export default Board