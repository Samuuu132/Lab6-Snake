function Snake({ segments }) {
  return (
    <>
      {segments.map((segment, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: segment.x * 20,
            top: segment.y * 20,
            width: 20,
            height: 20,
            backgroundColor: index === 0 ? '#00ff88' : '#00cc6a',
            borderRadius: index === 0 ? '4px' : '2px',
          }}
        />
      ))}
    </>
  )
}

export default Snake