import Snake from './Snake'
import Food from './Food'

function Board({ snake, food }) {
  return (
    <div style={{
      width: '400px',
      height: '400px',
      backgroundColor: '#12121f',
      border: '2px solid rgba(0, 255, 136, 0.3)',
      position: 'relative',
    }}>
      <Snake segments={snake} />
      <Food position={food} />
    </div>
  )
}

export default Board