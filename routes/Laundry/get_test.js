function Machine(name, type, status, time){
	this.name = name;
	this.type = type;
	this.status = status;
	this.time = time;
};

module.exports = function(req, res){
	var numberOfWashers = Math.floor((Math.random() * 15) + 5);
	var numberOfDryers  = Math.floor((Math.random() * 15) + 5);
	var machines = [];
	for (i=0; i<numberOfWashers; i++){
		machines.push(createNewMachines(i, "Washer"));
	}
	for ( i=0; i<numberOfDryers; i++){
		machines.push(createNewMachines(i, "Dryer"));
	}
	res.json(machines);
}

function createNewMachines(number, type){
	var name = type + " " + number;
	var type = type;
	var time = getMachineTime();
	var status = getMachineStatus(time);
	return new Machine(name, type, status, time);
}

function getMachineTime(){
	var time = Math.floor((Math.random() * 60) + 1);
	if ( time > 50 ){
		return " ";
	} else if ( time > 40 ){
		return "0 minutes left";
	} else {
		return time + " minutes left";
	}
}

function getMachineStatus(time){
	if ( time == " " ){
		return "Available"
	} else if ( time < 5 ){
		return "Almost Done"
	} else if ( time == " " ){
		return "Available";
	} else if ( time == "0 minutes left"){
		return "End of cycle"
	} else {
		return "In use";
	}
}