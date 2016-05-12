# TreeMap.js API Reference
This is a reusable library for creating simple TreeMaps

## Usage
You can use proper dataset format such as csv or json files that can be interpreted by D3, 
or you can choose to hard code your small dataset:
```javascript
var data = {Call: 'Medic Response', Type: 'Emgergency',Address: 83700};
```
To start this library
- To create an instance of the TreeMap:
```javascript
var mytree = TreeMap();
```

- To bind the data to the div and call the instantiation of the TreeMap function:
```javascript
var chartWrapper = d3.select('#vis')
    .datum(data)
    .call(mytree);
```

There are several attributes(method) that can be changed:
- color()
This method allows user to adjust the color of the tree node, the default is set to ***d3.scale.category10()***. User can set the nodes to one color as well as to a color catetory such as the default.

- fontSize()
This method allows user to adjust the font size for the labling text on the graph. The default is set to 9;

- width() & height()
These two method allows user to adjust the width and height of the div size. 

To adjust/update the attributes (methods) of the TreeMap:
    treemap.[method name](newValue)
};


