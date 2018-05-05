import React, { Component}  from 'react';
import * as d3 from "d3";

class Charts extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

        var svg = d3.select("svg"),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var x = d3.scaleTime()
                .rangeRound([0, width]);
        var y = d3.scaleLinear()
            .rangeRound([height, 0]);
        var line = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.text); });


        var parseTime = d3.timeParse("%H:%M:%S");
        var data = [ { "date": "12:23:14",   "text": 5},  { "date": "12:23:30",  "text": 20},  { "date": "12:24:30",  "text": 10}];

        data.forEach(function(item, i, data) {
            data[i].date = parseTime(item.date);
            data[i].text = +item.text;
        });

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain(d3.extent(data, function(d) { return d.text; }));

        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .select(".domain")
            .remove();

        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Price ($)");

        g.append("path")
            .data([data])
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);



        /*
        var data = [ { "date": "12:23:14",   "text": 5},  { "date": "12:23:30",  "text": 20},  { "date": "12:24:30",  "text": 10}];
        // Set the dimensions of the canvas / graph
        var margin = {top: 30, right: 20, bottom: 30, left: 50},
            width = 600 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

// Parse the date / time
        var parseTime = d3.timeParse("%H:%M:%S");

// Set the ranges
        var x = d3.scaleTime()
            .rangeRound([0, width]);
        var y = d3.scaleLinear()
            .rangeRound([height, 0]);
        var line = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.text); });

// Adds the svg canvas
        var svg = d3.select("div")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Get the data

        data.forEach(function(item, i, data) {
            data[i].date = parseTime(item.date);
            data[i].text = +item.text;
        });
        console.log(data);
            // Scale the range of the data

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain(d3.extent(data, function(d) { return d.text; }));

            // Add the valueline path.
            svg.append("path")
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);
*/

    }
    componentDidUpdate() {

        var data = this.props.data;
        var svg = d3.select("svg"),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var parseTime = d3.timeParse("%H:%M:%S");
        var x = d3.scaleTime().rangeRound([0, width]);
        var y = d3.scaleLinear().rangeRound([height, 0]);


        data[data.length-1].date = parseTime(data[data.length-1].date);
        data[data.length-1].text = +data[data.length-1].text;



        var line = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.text); });

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain(d3.extent(data, function(d) { return d.text; }));

        svg.select("path")
            .attr("d", line(data))
            .attr("stroke", "blue")
            .attr("stroke-width", 2)
            .attr("fill", "none");

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .select(".domain")
            .remove();

        svg.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Price ($)");


        /*
        var svg = d3.select("svg"),
            width = 960,
            height = 500;


        var x = d3.scaleTime()
            .rangeRound([0, width]);
        var y = d3.scaleLinear()
            .rangeRound([height, 0]);
        var line = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.text); });

        let data = this.props.data;

        var parseTime = d3.timeParse("%H:%M:%S");

        var path = svg.selectAll("path")
            .data([data]);

        data.forEach(function(item, i, data) {
            data[i].date = parseTime(item.date);
            data[i].text = +item.text;
        });


       // d3.selectAll('g').data(data).exit().remove();

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain(d3.extent(data, function(d) { return d.text; }));

        path
        .append("path")
            .merge(path)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);
        /*
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .select(".domain")
            .remove();

        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Price ($)");
*/
        /*
        g.append("path")
            .data([data])
            .enter()
            .append("path")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);

        /*
          let data = this.props.data;

        var parseTime = d3.timeParse("%H:%M:%S");

        data.forEach(function(item, i, data) {
            data[i].date = parseTime(item.date);
            data[i].text = +item.text;
        });

        var canvas = d3.select("charts").append("svg");

        var group = canvas.append("g")
            .attr("transform");

        var line = d3.svg.line()
            .x(function(d){return d.x})
            .y(function(d){return d.y});

        group.selectAll("path")
            .data([data])
            .enter()
            .append("path")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 5);

            */
    }
    render() {


        return (
            <div id="chart">
                <p>Chart</p>
                <svg id="svg" width="960" height="500"></svg>
            </div>
        )
    }
}


export default Charts
