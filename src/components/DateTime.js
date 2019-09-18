import React from 'react';

function dateTime() {

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
      <h1 align="center">Good {timeofDay}!</h1>
     
    )
}
export default dateTime