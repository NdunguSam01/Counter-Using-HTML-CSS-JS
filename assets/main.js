const button5 = document.querySelector("#plusFive")
const button10 = document.querySelector("#plusTen")
const button15= document.querySelector("#plusFifteen")
const button20= document.querySelector("#plusTwenty")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => 
{
  disp.textContent = "Added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})

button10.addEventListener('click', () =>
{
disp.textContent = "Added 10"
indicator.textContent = (parseInt(indicator.textContent)+10).toString()
})

button15.addEventListener('click', () =>
{
  disp.textContent = "Added 15"
  indicator.textContent = (parseInt(indicator.textContent)+ 15).toString()
})

button20.addEventListener('click', () =>
{
  disp.textContent = "Added 20"
  indicator.textContent = (parseInt(indicator.textContent)+ 20).toString()
})