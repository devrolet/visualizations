// var data = [25, 20, 10, 12, 15];

// console.log("Is this thing on?");

// var svg = d3.select("#chart-area").append("svg")
//     .attr("width", 400)
//     .attr("height", 400);

// var circles = svg.selectAll("circle")
//    .data(data); 

// circles.enter()
//     .append("circle")
//         .attr("cx", function(d, i) {
//             console.log("Item: " + d, "Index: " + i);
//             return (i * 50) + 25;
//         })
//         .attr("cy", 25)
//         .attr("r", function(d) {
//             console.log("Item: " + d);
//             return 25;
//         })
//         .attr("fill", "black");

// var data = [25, 20, 10, 12, 15];

// Load data using csv, tsv, json
d3.json('data/ages.json').then((data) => {
    // Convert data to usable format
    data.forEach((d) => {
        d.age = +d.age;
    });
})

let svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

// let circle = svg.append("circle")
// .attr("cx", 100)
// .attr("cy", 250)
// .attr("r", 70)
// .attr("fill", "green");

var circles = svg.selectAll('circle')
    .data(data);

circles.enter()
    .append('circle')
        .attr('cx', (d, i) => {
            // console.log(`Item: ${d}, Index: ${i}`);
            return (i * 50) + 25;
        })
        .attr('cy', 25)
        .attr('r', (d) => {
            // console.log(`Item: ${d}`);
            return d.age * 2;
        })
        .attr('fill', 'red');

// LOADING DATA

// BEFORE ES6 (CALLBACKS)
// d3.json('data/ages.json', function(data) {
//     // Code goes here
// });

// // AFTER ES6 (PROMISES)
// d3.json('data/ages.json').then((data) => {
//     // Code goes here
// });