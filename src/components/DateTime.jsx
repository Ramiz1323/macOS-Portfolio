import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const formatDateTime = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dayName = days[date.getDay()]
    const monthName = months[date.getMonth()]
    const dayNum = date.getDate()

    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    if (hours === 0) hours = 12
    const hh = hours < 10 ? `0${hours}` : `${hours}`
    const mm = minutes < 10 ? `0${minutes}` : `${minutes}`

    return `${dayName} ${monthName} ${dayNum} ${hh}:${mm} ${ampm}`
  }

  return (
    <div>
      {formatDateTime(now)}
    </div>
  )
}

export default DateTime
