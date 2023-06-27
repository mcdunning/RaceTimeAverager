function generateTimeEntryFields(numTimes) {
	// The div location where all race time entries are inerted in the DOM
	let raceTimesElement = document.getElementById('race-times')
	
	// Clean up any existing race time entry fields
	var childElement = raceTimesElement.lastElementChild
	while(childElement) {
		raceTimesElement.removeChild(childElement)
		childElement = raceTimesElement.lastElementChild
	}
	
	/**
	 *	Create the new race time entry fields
	 *		Time *:  input field
	 */
	for ( let i = 1; i <= numTimes; i++) {
		// TODO add styling attribute
		var currentRaceTimeLabel = document.createElement('label')
		currentRaceTimeLabel.innerHTML = "Time &nbsp" + i + ":&nbsp&nbsp"
		
		// TODO add styling attriburte and formatting for time input mm:ss,kk
		var currentRaceTimeInput = document.createElement('input')
		
		var raceTimeInput = document.createElement('p')
		raceTimeInput.appendChild(currentRaceTimeLabel)
		raceTimeInput.appendChild(currentRaceTimeInput)
		
		raceTimesElement.appendChild(raceTimeInput)
	}
}

function averageRaceTimes() {
	
}

window.addEventListener("load", function() {
	document.querySelector("#race-time-form").addEventListener("submit", averageRaceTimes);
});

document.addEventListener("DOMContentLoaded", (event) => {
	// When the drop down box for number of race times is changed regenerate the race time input fields
	document.getElementById('num-race-times').addEventListener('change', function handleChange(event) {
		let numTimes = event.target.value
		generateTimeEntryFields(numTimes)
	});

	// When the DOM is ready setup the default number of race times to be entered
	generateTimeEntryFields(document.getElementById('num-race-times').value)
	
});


