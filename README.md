# vis-software

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
    color, fontSize, width, height
To adjust/update the attributes of the TreeMap:
    treemap.[method name](newValue)
};


