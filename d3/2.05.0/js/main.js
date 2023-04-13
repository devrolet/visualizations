
// Load data using csv, tsv, json
d3.json('data/ages.json').then((data) => {
    // Convert data to usable format
    data.forEach((d) => {
        d.age = +d.age;
    });

    const svg = d3.select("#chart-area")
        .append("svg")
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
                if(d.name === "Cassie"){
                    return "red";
                } else {
                    return "blue";
                }
            })
            .attr('fill', (d) => {
                if(d.age >= 40) {
                    return "grey";
                } else {
                    return "blue";
                }
            });

    // let rectangles = svg.select('rect').append('rect');

    // rectangles.enter()
    //     .append('rect')
    //         .attr()

}).catch((error) => {
    console.log(error);
});