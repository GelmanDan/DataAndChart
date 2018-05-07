import React, { Component}  from 'react';
import * as d3 from "d3";

class Charts extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var svg = d3.select(".charts")
            .select("svg")
            .attr('viewBox', '0 0 960 500')
            .attr('preserveAspectRatio', 'xMidYMid')
            .style('width', '100%')

    }
    componentDidUpdate() {

        let data = Object.assign([], this.props.data);
        var svg = d3.select(".charts")
                .select("svg")
                .attr('viewBox', '0 0 960 500')
                .attr('preserveAspectRatio', 'xMidYMid')
                .style('width', '100%'),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var x = d3.scaleTime().rangeRound([0, width]);
        var y = d3.scaleLinear().rangeRound([height, 0]);

        var div = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        var line = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.text); });

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain(d3.extent(data, function(d) { return d.text; }));

        svg.select("path")
            .attr("d", line(data))
            .attr("stroke", "blue")
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("class", "line");

        svg.selectAll("text").remove();


        svg.selectAll("text")
            .data(data)
            .enter().append("text")
            .attr("x", function(d) { return x(d.date); })
            .attr("y", function(d) { return (y(d.text)+14); })
            .text(function(d) { return d.text; });

        svg.append("g")
            .call(d3.axisLeft(y))

    }

    render() {


        return (
            <div className="charts">
                <svg id="svg"  width="900" height="500"></svg>
            </div>
        )
    }
}


export default Charts
