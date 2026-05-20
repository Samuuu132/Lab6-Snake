function StartScreen({ onStart, isGameOver, score }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
      <h1 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '40px' }}>
        SNAKE
      </h1>

      {isGameOver && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#ff3860', fontFamily: 'monospace', fontSize: '24px' }}>
            GAME OVER
          </p>
          <p style={{ color: '#ffdd57', fontFamily: 'monospace', fontSize: '18px' }}>
            Score: {score}
          </p>
        </div>
      )}

      <button
        onClick={onStart}
        style={{
          backgroundColor: 'transparent',
          border: '2px solid #00ff88',
          color: '#00ff88',
          fontFamily: 'monospace',
          fontSize: '16px',
          padding: '10px 30px',
          cursor: 'pointer',
        }}
      >
        {isGameOver ? 'JUGAR DE NUEVO' : 'JUGAR'}
      </button>

      <p style={{ color: '#5a7a6a', fontFamily: 'monospace', fontSize: '12px' }}>
        Usa las flechas para moverte
      </p>
    </div>
  )
}

export default StartScreen