import React from 'react'
import { useDate } from '../../helpers/helpers'

const DateTime: React.FC = () => {
  const { date, time, wish } = useDate()

  return (
    <div style={{ color: 'white', fontSize: 'large', padding: "0.3em" }}>
      <h3>{wish}</h3>
      <div>
        <h3>
          {date}
          {time}
        </h3>
      </div>
    </div>
  )
}

export default DateTime
