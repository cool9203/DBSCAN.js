# DBSCAN.js  
use js implement DBSCAN algorithm with https://en.wikipedia.org/wiki/DBSCAN  

# How to use  
<script type="text/javascript" src="DBSCAN.js"></script>

```js
// 1, use function to set params
const dbscan = new DBSCAN().eps(10)
                           .min_point(10)
                           .distance("Euclidean")
                           .data({1:{x:1, y:2}, 2:{x:999, y:999}, 3:{x:1, y:2}});
let result = dbscan.fit();

// 2, use constructor pass params
const dbscan = new DBSCAN(eps, min_point, distance, data);
let result = dbscan.fit();

// 3, fit and pass data
const dbscan = new DBSCAN(eps, min_point, distance);
let result = dbscan.fit(data);

// 4, distance default is "Euclidean"
const dbscan = new DBSCAN(eps, min_point);
dbscan.data({1:{x:1, y:2}, 2:{x:999, y:999}, 3:{x:1, y:2}});
let result = dbscan.fit();

// 5, use your distance function
const dbscan = new DBSCAN(eps, min_point);
dbscan.set_distance_function((v1, v2) => {...})
dbscan.data({1:{x:1, y:2}, 2:{x:999, y:999}, 3:{x:1, y:2}});
let result = dbscan.fit();

// distance function example
distance_function(v1, v2){
    for (let i in v1){
        let e1 = v1[i];
        let e2 = v2[i];

        // start calc your distance
    }
    return reuslt;
}
```