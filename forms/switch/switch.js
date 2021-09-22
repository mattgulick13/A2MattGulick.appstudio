//The code below asks the user the prompts below and then defines each variable
let firstName1 = prompt("Enter your first name: ")
let state1 = prompt("Enter your state of residence in its two letter abreviation: NE or FL")
let temp1 = prompt("Enter the current temperature in degrees Farenheit: ")
let messages1 = [
  `Hi ${firstName1}, because the temperature is currently ${temp1} degrees you should wear a warm coat, hat, scarf and gloves.`, 
  `Hi ${firstName1}, because the temperature is currently ${temp1} degrees you should wear a warm coat but you won't need a hat, scarf or gloves.`, 
  `Hi ${firstName1}, because the temperature is currently ${temp1} degrees you should wear your warmest coat, a warm hat, a scarf, and warm gloves.`, 
  `Hi ${firstName1}, because the temperature is currently ${temp1} degrees you should wear a warm coat, hat and gloves. Maybe a scarf too.`, 
  `Please input relevant data.`

  ]
  
  //The code below then sorts the inputs made by the user and determines which answer will pop up based on the requirements below.
   switch(state) {
  case state == 'NE' && temp < 32:
    console.log(messages[0])
    break;
  case state == 'NE' && temp >= 32 && temp < 50:
    console.log(messages[1])
    break;
  case state == 'FL' && temp >= 32 && temp < 50:
    console.log(messages[2])
    break;
  case state == 'FL' && temp >= 50 && temp < 70:
    console.log(messages[3]) 
    break;
  default:
    console.log(messages[4])
  }