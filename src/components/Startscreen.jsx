function StartScreen({ onStart, isGameOver, score }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      animation: 'fadeIn 0.5s ease-out',
    }}>
      <h1 style={{ color: '#00ff88', fontFamily: 'monospace', fontSize: '40px' }}>
        SNAKE
      </h1>

      {isGameOver && (
        <div style={{ textAlign: 'center', animation: 'fadeIn 0.3s ease-out' }}>
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
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => e.target.style.backgroundColor = 'rgba(0,255,136,0.1)'}
        onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
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