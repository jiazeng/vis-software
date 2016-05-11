// Main JavasCRIPT fiLE

// After page loads
$(function() {
	// Read in data. On success, run the rest of code
	d3.csv('data/Seattle_Crime_Distribution.csv', function(error, data) {
		
		// Create instance of the TreeMap, setting the defults
		var treeMap = TreeMap().weidth(960 - margin.left - margin.right).height(500 - margin.top - margin.bottom);
		
		// Select the container dive, bind the data to it,
		// then calls the instantiation of the TreeMap function
		var chartWrapper = d3.select('#my-div')
			.datum(data)
			.call(treeMap);
			
		// Assign event handler to form
		$('from').submit(function(event) {
			// Get the color and font sizes from the form
			
			// Reset the color and fontSize of the chart function
			
			// Re-call the chart function on the chartWrapper
			
			// return false; // don't reload the page
		})			
	})
})