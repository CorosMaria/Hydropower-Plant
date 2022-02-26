import React from 'react'

export const useDate = () => {
  const locale = 'en'
  const [today, setDate] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 60 * 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const day = today.toLocaleDateString(locale, { weekday: 'long' })
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'long',
  })}\n\n`

  const hour = today.getHours()
  const wish = `Good ${
    (hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'
  }! `

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  })

  return {
    date,
    time,
    wish,
  }
}

const DateTime: React.FC = () => {
  const { date, time, wish } = useDate()

  return (
    <div style={{ color: 'white', fontSize: 'large' }}>
      <h3>{wish}</h3>
      <div>
        <h3>
          {date}
          <br />
          {time}
        </h3>
      </div>
    </div>
  )
}

export default DateTime
