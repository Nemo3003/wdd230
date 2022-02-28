let temp= 35;
let wSpeed= 15;
let windChills= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
if(temp < 10 && wSpeed > 4.8){
	let windChill= Math.round(windChills);
	let new_wind = `Wind Chill: ${windChill} km/h`
	document.getElementById("windChill").innerHTML= new_wind;
}
else{
	let windChillsy = "N/A";
	let new_wind = `Wind Chill: ${windChillsy}`
	document.getElementById("windChill").innerHTML= new_wind;
}
