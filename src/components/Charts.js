import React, { Component}  from 'react';
import * as d3 from "d3";

class Charts extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

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
