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

// parent - the parent node, or null for the root.
// children - the array of child nodes, or null for leaf nodes.
// value - the node value, as returned by the value accessor.
// depth - the depth of the node, starting at 0 for the root.
// area - the computed pixel area of this node. (TODO: remove?)
// x - the minimum x-coordinate of the node position.
// y - the minimum y-coordinate of the node position.
// z - the orientation of this cell’s subdivision, if any. (TODO: remove?)
// dx - the x-extent of the node position.
// dy - the y-extent of the node position.