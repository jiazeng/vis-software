// After page load
$(function() {
    
    // Select the container div, bind the data (datum) to it,
    // then call your instantiation of the treemap function
	// d3.csv("data/test.csv", function(data) {
	// 	d3.select("#vis")
	// 		.datum(data)
	// 		.call(mytree);
	// });	
    
    var data = [
        {Call: 'Medic Response', Type: 'Emgergency', Address: 83700},
        {Call: 'Auto Fire Alarm', Type: 'Non-Emergency', Address: 27936},
        {Call: 'Car Fire', Type: 'Emergency', Address: 1860}
    ];
    // Create an instance of the TreeMap, setting the color to blue
    var mytree = TreeMap().color('yellow');
    
    // Select the container div, bind the data (datum) to it,
    // then call your instantiation of the ParagraphChart function
    var chartWrapper = d3.select('#vis')
        .datum(data)
        .call(mytree);
})