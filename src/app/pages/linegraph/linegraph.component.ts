import { Component, OnInit } from '@angular/core';
import * as tf from 'd3-time-format'
import * as d3 from 'd3'

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.css']
})
export class LinegraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 100, left: 50},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
.x(function(d) { return x(d.date); })
.y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

var datarows = `date,close
1-May-13,58.13
30-Apr-12,53.98
27-Apr-12,67.00
26-Apr-12,89.70
25-Apr-12,99.00
24-Apr-12,130.28
23-Apr-12,166.70
20-Apr-12,234.98
19-Apr-12,345.44
18-Apr-12,443.34
17-Apr-12,543.70
16-Apr-12,580.13
13-Apr-12,605.23
12-Apr-12,622.77
11-Apr-12,626.20
10-Apr-12,628.44
9-Apr-12,636.23
5-Apr-12,633.68
4-Apr-12,624.31
3-Apr-12,629.32
2-Apr-12,618.63
30-Mar-12,599.55
29-Mar-12,609.86
28-Mar-12,617.62
27-Mar-12,614.48
26-Mar-12,606.98`;

// Get the data
var data = d3.csvParse(datarows);

// format the data
data.forEach(function(d) {
d.date = parseTime(d.date);
d.close = +d.close;
});

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.date; }));
y.domain([0, d3.max(data, function(d) { return d.close; })]);

// Add the valueline path.
svg.append("path")
.data([data])
.attr("class", "line")
.attr("d", valueline);

// Add the X Axis
svg.append("g")
.attr("class", "axis")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x)
    .tickFormat(d3.timeFormat("%b %y")))
.selectAll("text")
.style("text-anchor", "end")
.attr("dx", "-.8em")
.attr("dy", ".15em")
.attr("transform", "rotate(-65)");

// Add the Y Axis
svg.append("g")
.attr("class", "axis")
.call(d3.axisLeft(y));


  }

}
