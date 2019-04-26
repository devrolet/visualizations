/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var svg = d3.select("#chart-area").append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("../data/buildings.json").then((data) => {
    console.log(data);

    data.forEach(d => {
        d.height = +d.height;
        // console.log(d);
    });

    var x = d3.scaleBand()
        // Use Map method to loop thru the names
        .domain(data.map((d) => {
            return d.name;
        }))
        .range([0, 400])
        .paddingInner(0.3)
        .paddingOuter(0.3);
    
    console.log(x("Burg Khalifa"))

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => {
            return d.height;
        })])
        .range([0, 400]);

    var rects = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", 20)
        .attr("x", (d, i) => {
            return x(d.name);
        })
        .attr("width", x.bandwidth)
        .attr("height", (d) => {
            return y(d.height);
        })
        .attr("fill", (d) => {
            return "blue";
        });
})