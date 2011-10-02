function limit(callsPerSecond, callback) {
    var callPeriod = 1000/callsPerSecond;
    var intStartTime = new Date().getTime();
	var counter = 0;
    return function() {
        var currentTime = new Date().getTime();  
		if (currentTime - intStartTime >= callPeriod){
			intStartTime = currentTime;
			counter = 0;
		}
		counter++;
        if (counter <= callsPerSecond) {   
			intStartTime = currentTime;    
			callback.apply(null, arguments);
        }
    };
};