// Credit to INFO 474 in-class work

var TreeMap = function() {
    // Create variables within the function scope to track 
    var margin, measure, color, fontSize, column;
    console.log("created variables");
    
    // setting default
    margin = {top: 40, right: 10, bottom: 10, left: 10},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;
            
    // variable to visualize
    measure = 'Address';
    fontSize = 9;
    color = d3.scale.category10();
    
    console.log("set the defualts")
    
    // The mytree function that will be returned by TreeMap function 
    function mytree(selection) {
        console.log("initializing mytree function");
        
        // loop throught the selections using foreach method
        selection.each(function(data) {            
        
        // Select `this` as the element in which you want to render your chart
        var div = d3.select(this);
        
        console.log("var div = " + div);
                
        // Function to arrange divs (will be called seperately for entering and updating)
        var position = function() {
            // Set the position of each div using the properties computed from the treemap function
            this.style("left", function(d,i) {return d.x + "px"; })
                    .style("top", function(d) { return d.y + "px"; })
                    .style('width', function(d){return d.dx + 'px'})
                    .style("height", function(d) { return d.dy + "px"; })
                    // .style("background", function(d) {return !d.values ? color(d.Type) : null; })
        }
        
        // Construct a nest function using `d3.nest`, and create a variable with the nested data
        var nestedData = d3.nest() // function that returns a function...
                                .key(function(d){return d.Type;})
                                .entries(data);
                                    
        // Construct a treemap function that sizes elements based on the current `measure`, and
        // Make sure to specify how to retrieve the `children` from each element
        var treemap = d3.layout.treemap() // function that returns a function!
            .size([width, height]) // set size: scaling will be done internally
            .sticky(true) // If data changes, keep elements in the same position
            .value(function(d) {return d[measure];}) // Assert value to be used to
            .children(function(d){return d.values;}); // Determine how the function will find the children of each node             
        console.log("treemap size = " + treemap.size);
            
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
                    .text(function(d){return d.Call}) // Set text: a big advantage of using divs over rects
                .call(position); // This prevents a strange transition on enter()

            // Update the nodes
            nodes.transition().duration(500).call(position);
                
                
            }

            // Call your draw function
            draw();  
            console.log("calling draw function");                              
                                                    
                
            // Select all of the p elements inside of your div and bind your data
            var strings = div.selectAll('p').data(data);

            // Enter new p elements
            strings.enter()
                    .append("p")
                    .text(function(d){return d.text});

            // Exit elements
            strings.exit().remove();

            // Update elements
            strings.transition()
                    .duration(1000)
                    .style('color', color)
                    .style('font-size', fontSize + 'px');
        })
    }
    
    
    // };
    
    // Customizable setter methods to update or to get treemap
    // Method to update the color
    mytree.color = function(value) {
        if(!arguments.length) return this.color; // return the current color if not provided
        color = value; // set the color
        return this; // return the object to allow method chaining
    };
    
    // Method to update the font-size
    mytree.fontSize = function(value) {
        if(!arguments.length) return this.fontSize; // return the current font-szie if not provided
        fontSize = value;
        return this;
    };
    
    // Method to update the width of svg
    mytree.width = function(value) {
        if(!arguments.length) return this.width; // return the current font-szie if not provided
        fontSize = value;
        return this;
    };
    
   // Method to update the height of svg
    mytree.height = function(value) {
        if(!arguments.length) return this.height; // return the current font-szie if not provided
        fontSize = value;
        return this;
    };
     
      
    // return the node object when the function is excuted
    return mytree;    
  }  
    
    
    /** Variables to be considered for treemaps
     * 
     *      parent - the parent node, or null for the root.
            children - the array of child nodes, or null for leaf nodes.
            value - the node value, as returned by the value accessor.
            depth - the depth of the node, starting at 0 for the root.
            area - the computed pixel area of this node. (TODO: remove?)
            x - the minimum x-coordinate of the node position.
            y - the minimum y-coordinate of the node position.
            z - the orientation of this cell’s subdivision, if any. (TODO: remove?)
            dx - the x-extent of the node position.
            dy - the y-extent of the node position.
     */
    

    