
var margin = {top: 100, right: 40, bottom: 50, left: 100},

    width = 800,

    height = 400;

var x = d3.scale.ordinal()

    .rangeRoundBands([0, width],.4, .3);

var y = d3.scale.linear()

    .range([height, 0]);

var xAxis = d3.svg.axis()

    .scale(x)

    .orient("bottom");

var yAxis = d3.svg.axis()

    .scale(y)

    .orient("left")

var svg = d3.select("body").append("svg")

    .attr("width", width + margin.left + margin.right)

    .attr("height", height + margin.top + margin.bottom)

  .append("g")

    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("total.json", function(error, data) {

  var avgData=d3.nest()

  .key(function(d){ return d.CountryName})

  .rollup(function(leaves){

    var sum=0;

    leaves.forEach(function(d){

      sum+=parseFloat(d.Value);

    })

    return (sum/leaves.length)

  }).entries(data);

  avgData=avgData.sort(function(a, b){

      return b.values-a.values;

    });

    avgData=avgData.slice(0,5);

  console.log(avgData);
  x.domain(avgData.map(function(d) { return d.key; }));

  y.domain([d3.min(avgData, function(d) { return d.values; })-1, d3.max(avgData, function(d) { return d.values; })]);

  svg.append("g")

      .attr("class", "x axis")

      .attr("transform", "translate(0," + height + ")")

      .call(xAxis)

      .attr("width", width)

      .append("text")

        .attr("transform", 0)

        .attr("x", width/2)

        .attr("y", 45)

        .attr("dx", ".10em")

        .style("text-anchor", "middle")

        .attr("class","labels")

        .text("Country");

  svg.append("g")

      .attr("class", "y axis")

      .call(yAxis)

    .append("text")

      .attr("transform", "rotate(-90)")

      .attr("x",-200)

      .attr("y", -50)

      .attr("dy", ".71em")

      .style("text-anchor", "middle")

      .attr("class","labels")

      .text("Value");

  svg.selectAll(".bar")

      .data(avgData)

    .enter().append("rect")

      .attr("class", "bar")

      .attr("x", function(d) { return x(d.key); })

      .attr("width", x.rangeBand())

      .attr("y", function(d) { return y(d.values); })

      .attr("height", function(d) { return height - y(d.values); });



});
