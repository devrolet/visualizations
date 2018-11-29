// D3 Select - grab hold of elements on the screen
// D3 Append - add SVGs onto your selection
// D3 Attr - set attributes of SVGs to make them appear on the screen

let svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

let circle = svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 250)
    .attr("r", 70)
    .attr("fill", "black");