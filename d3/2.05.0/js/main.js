
// Load data using csv, tsv, json
d3.json('data/ages.json').then((data) => {
    // Convert data to usable format
    data.forEach((d) => {
        d.age = +d.age;
    });

    let svg = d3.select("#chart-area").append("svg")
        .attr("width", 1200)
        .attr("height", 1200);

    var circles = svg.selectAll('circle')
        .data(data);

    circles.enter()
        .append('circle')
            .attr('cx', (d, i) => {
                return (i * 100) + 25;
            })
            .attr('cy', 25)
            .attr('r', (d) => {
                return d.age;
            })
            .attr('fill', (d) => {
                if(d.name === "Chet"){
                    return "red";
                } else {
                    return "blue";
                }
            });

}).catch((error) => {
    console.log(error);
});