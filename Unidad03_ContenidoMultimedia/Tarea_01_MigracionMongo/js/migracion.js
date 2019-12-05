/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/

function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}


async function nextStep(ev){
    let nextIt = parseInt(ev.target.dataset.step)+1;
    let nextElement = document.querySelector(`[data-step="${nextIt}"]`);

    if (nextElement.tagName === "PROGRESS"){

	nextElement.classList.add("estabaEscondido");
	
	for (let i=0;i<=100;i++){
	    await sleep(30);
	    nextElement.value=i;
	    nextElement.querySelector("span").textContent=i;
	    console.log(nextElement.querySelector("span"));
	}

	// Simulate event to use always the same
	nextElement.addEventListener("click",nextStep);
	nextElement.click();
	
    }else{
        nextElement.addEventListener("transitionend",nextStep);
	nextElement.classList.add("estabaEscondido");
    }
    
}

function startMigration(){

    let steps=document.querySelector("steps");
    console.log(steps);
    steps.childNodes.forEach(step => {
	if (step.dataset !== undefined && step.dataset.step < 2){
	    console.log(step.dataset.step);
	    console.log(step);
	    step.addEventListener("transitionend",nextStep);
	    step.classList.add("estabaEscondido");
	}
    });
}



function init(){
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click",startMigration);
}

// Init the environment when all is ready
window.onload=init;
