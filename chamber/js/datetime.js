var datetime = "Last Sync: " + d.getDate() + "/"
	+ (d.getMonth()+1)  + "/"
	+ d.getFullYear() + " || "
	+ d.getHours() + ":"
	+ d.getMinutes() + ":"
	+ d.getSeconds();
console.log(datetime)
document.getElementById("date").value = datetime