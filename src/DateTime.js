import React from 'react';

function DateTime() {

  const date = new Date()
  const hours = date.getHours()
  let timeofDay

  if (hours < 12){
    timeofDay = "morning"
  }else if (hours >= 12 && hours < 17){
    timeofDay = "afternoon"
  }else {
    timeofDay = "night"
  }
    return (
      <h1>Good {timeofDay}!</h1>
     
    )
}
export default DateTime