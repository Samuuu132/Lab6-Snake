function Food({ position }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: position.x * 20,
        top: position.y * 20,
        width: 20,
        height: 20,
        backgroundColor: '#ff3860',
        borderRadius: '50%',
        animation: 'pulse 1s ease-in-out infinite',
      }}
    />
  )
}

export default Food