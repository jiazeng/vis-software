// Main JavasCRIPT fiLE

// After page loads
$(function() {
	// // Read in data. On success, run the rest of code
	// d3.csv('data/Seattle_Crime_Distribution.csv', function(error, data) {
	// 	system.out.println("Successfully loaded the data");
        
	// 	// Create instance of the TreeMap, setting the defults
	// 	var myChart = TreeMap().weidth(960 - margin.left - margin.right).height(500 - margin.top - margin.bottom);            
    //     }
    
    
         var data = [
             {call: 'Medic Response', address: '25'},
             {call: 'Auto Fire Alarm', address: '10'},
             {call: 'Trans to AMR', address: '20'}
         ];
		
		// Select the container div, bind the data to it,
		// then calls the instantiation of the TreeMap function
        var chartWrapper = d3.select('#my-div')
            .datum(data)
            .call(myChart);
                    
		// Assign event handler to form
		$('form').submit(function(event) {
            System.out.println("submitted the form");
            
			// Get the color and font sizes from the form
			var color = $('#color').val();
            var fontSize = $('#font-size').val();
            
			// Reset the color and fontSize of the chart function
			myChart.color(color)
            .fontSize(fontSize);
			// Re-call the chart function on the chartWrapper
			chartWrapper.call(myChart);

			return false; // don't reload the page
		})			
	});

