// const hour = document.querySelector(".hrs");
// const minute = document.querySelector(".min");
// const second = document.querySelector(".seconds");

// setInterval(runClock, 1000);

// function runClock() {
//   const time = new Date();
//   const seconds = time.getSeconds() / 60;
//   const minutes = (seconds + time.getMinutes()) / 60;
//   const hours = (minutes + time.getHours()) / 12;

//   console.log("hr:", hours, "min:", minutes, "sec:", seconds);
//   hour.style.setProperty("--rotation", hours * 360);
//   minute.style.setProperty("--rotation", minutes * 360);
//   second.style.setProperty("--rotation", seconds * 360);
// }
// runClock();

const copyParagraph = document.querySelector(".para");
const tooltip = document.querySelector(".tooltip")

function showToolTip(event){
  const X= event.clientX;
  const Y= event.clientXY;

  tooltip.style.X = X+"px";
  tooltip.style.Y = Y+"px";
  tooltip.innerHTML = "click and copy text" ;
  tooltip.style.display = "block";
}

function hideToolTip(){
  tooltip.style.display = "none";
}

function ClickTooltip(){
  console.log('para clicked');
  tooltip.innerHTML="copied";
  const textToCopy = copyParagraph.innerText ;
  navigator.clipboard.writeText(textToCopy)
  .then(()=>{
    console.log("text copied to clipboard",textToCopy);
  })
  .catch(()=>{
    console.error("error",error);
  })
}

copyParagraph.addEventListener('mouseover',showToolTip);
copyParagraph.addEventListener('mouseout',hideToolTip);
copyParagraph.addEventListener('click',ClickTooltip);


const label = document.createElement("label");
label.textContent  = "Your company's image is of the utmost importance to us - we'll stand on our heads if that's what it takes to come with the best solutions for your business. We'll analyze your brief and develop a strategy to shape the real image of your business."
label.style.cursor = "pointer";

document.body.appendChild(label);
label.addEventListener("click",labelClick);

function labelClick(){
  console.log("clicked the text:",label.textContent);

}