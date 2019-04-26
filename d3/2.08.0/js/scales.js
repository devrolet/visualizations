// SCALES

// Linear Scales
let y = d3.scaleLinear()
    .domain([0, 828])
    .range([0, 400])

console.log(y(100));
console.log(y(414));
console.log(y(700));

console.log(y.invert(48.3));
console.log(y.invert(200));
console.log(y.invert(338.2));

// Logarithmic Scales
let x = d3.scaleLog()
    .domain([300, 150000])
    .range([0, 400])
    .base(10);

console.log(x(500));
console.log(x(5000));
console.log(x(50000));

console.log(x.invert(32.9));
console.log(x.invert(181.1));
console.log(x.invert(329.3));

// Time Scales - Uses the Date Object to track time
let t = d3.scaleLinear()
    .domain([new Date(2000, 0, 1), new Date(2001, 0, 1)])
    .range([0, 400]);

console.log(x(new Date(2000, 7, 1)));
console.log(x(new Date(2000, 2, 1)));
console.log(x(new Date(2000, 10, 25)));

console.log(x.invert(232.8));
console.log(x.invert(66.5));
console.log(x.invert(360));

// Ordinal Scales - Used to associate categories to Colors (No invert scale)
var color = d3.scaleOrdinal()
    .domain(["AFRICA", 
            "N. AMERICA", "EUROPE", 
            "S. AMERICA", "ASIA", 
            "AUSTRAILIA"])
    // .range(["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "INDIGO", "GREY"]); // SET OWN COLORS
    .range(d3.schemeCategory10); // Uses D3 Color Schemes

console.log("AFRICA");
console.log("ASIA");
console.log("ANTARCTICA");
console.log("PANGAEA");

// Band Scales - Used to space out different categories on a bar chart
var z = d3.scaleBand()
    .domain(["AFRICA", 
        "N. AMERICA", "EUROPE", 
        "S. AMERICA", "ASIA", 
        "AUSTRAILIA"])
    .range([0, 400])
    .paddingInner(0.3)
    .paddingOuter(0.2);

console.log("S. AMERICA");
console.log("AUSTRAILIA");
console.log("AFRICA");

console.log(x.bandwidth());
