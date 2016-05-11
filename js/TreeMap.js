var TreeMap = function() {
    // Create variables within the function scope to track 
    var measure; // the node value
    var color;
    var fontSize;
    var x; // the x-coordinate of the node position
    var y; // the y-coordinate of the node position
    
    // setting default
    var margin = {top: 40, right: 10, bottom: 10, left: 10},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;
            
    // variable to visualize
    measure = 'crime_response';
    fontSize = 9;
    color = d3.scale.category10();
    
    // The mytree function that will be returned by TreeMap function 
    var mytree = function(selection) {
        // loop throught the selections using foreach method
        selection.each(function(data) {
        // Select `this` as the element in which you want to render your chart
        var div = d3.select(this);
            
        // Function to arrange divs (will be called seperately for entering and updating)
        var position = function() {
            // Set the position of each div using the properties computed from the treemap function
            this.style("left", function(d,i) {return d.x + "px"; })
                    .style("top", function(d) { return d.y + "px"; })
                    .style('width', function(d){return d.dx + 'px'})
                    .style("height", function(d) { return d.dy + "px"; })
                    .style("background", function(d) {return !d.values ? color(d.region) : null; })
        }
        
		// Construct a nest function using `d3.nest`, and create a variable with the nested data
		var nestedData = d3.nest() // function that returns a function...
								 .key(function(d){return d.region;})
								 .entries(data);
                                 
        // Construct a treemap function that sizes elements based on the current `measure`, and
        // Make sure to specify how to retrieve the `children` from each element
        var treemap = d3.layout.treemap() // function that returns a function!
            .size([width, height]) // set size: scaling will be done internally
            .sticky(true) // If data changes, keep elements in the same position
            .value(function(d) {return d[measure];}) // Assert value to be used to
            .children(function(d){return d.values;}); // Determine how the function will find the children of each node             
            
		// Write your `draw` function to bind data, and position elements
		var draw = function() {
			// Set the `value` property of your `treemap` fucntion, as it may have changed
			treemap.value(function(d) {return d[measure];});

			// Bind your data to a selection of node elements
			var nodes = div.selectAll(".node").data(treemap.nodes({values:nestedData}));

			// Enter and append elements, then position them by using `.call`
			nodes.enter()
					 .append("div")
					 .attr('class', 'node')
					 .text(function(d){return d.country_code}) // Set text: a big advantage of using divs over rects
				   .call(position); // This prevents a strange transition on enter()

			// Update the nodes
			nodes.transition().duration(500).call(position);
		}

		// Call your draw function
		draw();                                
                                 
                                 
                                 
            
        // // Select all of the p elements inside of your div and bind your data
        // var strings = div.selectAll('p').data(data);

        // // Enter new p elements
        // strings.enter()
        //         .append("p")
        //         .text(function(d){return d.text});

        // // Exit elements
        // strings.exit().remove();

        // // Update elements
        // strings.transition()
        //         .duration(1000)
        //         .style('color', color)
        //         .style('font-size', fontSize + 'px');

        })
    };
    
    
    // };
    
    // Customizable setter methods to update or to get treemap
    // Method to update the color
    mytree.color = function(value) {
        if(!arguments.length) return color; // return the current color if not provided
        color = value; // set the color
        return this; // return the object to allow method chaining
    };
    
    // Method to update the font-size
    mytree.fontSize = function(value) {
        if(!arguments.length) return fontSize; // return the current font-szie if not provided
        fontSize = value;
        return this;
    };
    
    // return the node object when the function is excuted
    return mytree;    
  }  
    
    