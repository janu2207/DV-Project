/**
 * Created by Ashok prakash
 */
import {OnInit, NgZone, Component, OnDestroy, ViewChild, ElementRef, AfterViewInit} from "@angular/core";
import {RestService} from '../../shared';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";
import {geoPath} from "d3-geo";
import {geoAitoff} from "d3-geo-projection";

import * as d3 from 'd3'
import * as cloud from 'd3-cloud';
import {schemeCategory10} from 'd3-scale-chromatic'
import {ellipseForce} from 'd3-ellipse-force'
import * as $ from 'jquery'
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit{

    public predictions: any;
    public diseaseList;
    constructor(public restService: RestService, public router: Router, private ngZone: NgZone) { }
    selected_part:any;
    ang_answers : any;

    @ViewChild('#bubbleDiv') bubbleDiv: ElementRef;

    ngOnDestroy() {
      window.my.namespace.publicFunc = null;
    }


    ngAfterViewInit() {

    }


    ngOnInit() {
      window.my = window.my || {};
      window.my.namespace = window.my.namespace || {};
      window.my.namespace.publicFunc = this.publicFunc.bind(this);
    }

    publicFunc(data) {
      this.ngZone.run(() => this.privateFunc(data));
    }

    privateFunc(data) {
      this.ang_answers = JSON.parse(data);
    }

    zoom_bubble_info(data){

      var part_selected = this.selected_part;
      if(document.getElementById("#bubbleDiv") != null) {
        document.getElementById("#bubbleDiv").innerHTML = "";
      }

      if(document.getElementById("#network_content") != null) {
        document.getElementById("#network_content").innerHTML = "";
      }

      if(document.getElementById("#word_cloud_content") != null) {
        console.log("Getting cleared");
        document.getElementById("#word_cloud_content").innerHTML = "";
      }
      var svg = d3.select("#bubble"),
        margin = 20,
        diameter = +svg.attr("width"),
        g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
      var color = d3.scaleLinear()
        .domain([-1, 5])
        .range(["hsl(267, 25%, 82%)", "hsl(266, 97%, 52%)"])
        .interpolate(d3.interpolateHcl);
      var pack = d3.pack()
        .size([diameter - margin, diameter - margin])
        .padding(2);
      var root = d3.hierarchy(data).sum(function(d) { return d.size; })
          .sort(function(a, b) { return b.value - a.value; });

      var focus = root,
          nodes = pack(root).descendants(),
          view;

      var circle = g.selectAll("circle")
          .data(nodes)
          .enter().append("circle")
          .attr("class", function(d) { return d.parent ? (d.children ? "node" : "node node--leaf" ) : "node node--root"; })
          .style("fill", function(d) {
            if(d.parent && !d.children){
              return "rgb(252, 253, 255)";
            }else if(d.data.name == 'Disease'){
              return "rgb(252, 226, 60)"
            }else if(d.data.name == 'General'){
              return "rgb(126, 255, 117)"
            }
            return "rgb(252, 255, 253)";
          })
          .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

      var text = g.selectAll("text")
          .data(nodes)
          .enter().append("text")
          .attr("class", "label")
          .style("font-size", function(d) {
            var font = "13px";
            if(d.parent === root ){
              font = "25px";
            }else if(d.children){
              font = "20px";
            }
            return font;
          })
          .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
          .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
          .text(function(d) { return d.data.name; });


      var node = g.selectAll("circle, text");
      svg.style("background", "rgb(250, 250, 250)").on("click", function() {zoom(root);});
      zoomTo([root.x, root.y, root.r * 2 + margin]);

      console.log(this.bubbleDiv);
      this.bubbleDiv.nativeElement.scrollIntoView();

      function tree_info_graph(data){
        var graph = JSON.parse(data);
        var svg = d3.select("#network"),
          width = +svg.attr("width"),
          height = +svg.attr("height");

        var color = d3.scaleOrdinal(schemeCategory10);

        var nd;
        for (var i=0; i<graph.nodes.length; i++) {
          nd = graph.nodes[i];
          nd.rx = nd.id.length * 4.5;
          nd.ry = 12;
        }

        var simulation = d3.forceSimulation()
          .force("link", d3.forceLink().id(function(d) { return d.id; }))
          .force("collide", ellipseForce(6, 0.5, 5))
          .force("center", d3.forceCenter(width / 2, height / 2));

        var link = svg.append("g")
          .attr("class", "link")
          .selectAll("line")
          .data(graph.links)
          .enter().append("line")
          .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.append("g")
          .attr("class", "node")
          .selectAll("ellipse")
          .data(graph.nodes)
          .enter().append("ellipse")
          .attr("rx", function(d) { return d.rx; })
          .attr("ry", function(d) { return d.ry; })
          .attr("fill", function(d) { return color(d.group); })
          .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

        var text = svg.append("g")
          .attr("class", "labels")
          .selectAll("text")
          .data(graph.nodes)
          .enter().append("text")
          .attr("dy", 2)
          .attr("text-anchor", "middle")
          .text(function(d) {return d.id})
          .attr("fill", "white");


        simulation
          .nodes(graph.nodes)
          .on("tick", ticked);

        simulation.force("link")
          .links(graph.links);

        function ticked() {
          link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

          node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
          text
            .attr("x", function(d) { return d.x; })
            .attr("y", function(d) { return d.y; });

        }
        // });

        function dragstarted(d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        }

        function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
      }

      function word_cloud_info_graph(data){
        var test = JSON.parse(data);
        var words = {};
        for(var key in test){
          if(test[key] > 3)
            words[key] = test[key];
        }

        var svg_location = "#word_cloud";
        var width = 600;
        var height = 300;

        var fill = schemeCategory10;

        var word_entries = d3.entries(words);
        var xScale = d3.scaleLinear()
          .domain([0, d3.max(word_entries, function(d) {
            return d.value*0.5;
          })
          ])
        .range([10,100]);
        var layout = cloud()
          .timeInterval(20)
          .words(word_entries)
          .fontSize(function(d) { return xScale(+d.value); })
          .text(function(d) { return d.key; })
          .rotate(function() { return ~~(Math.random() * 4) * 45; })
          .font("Impact")
          .on("end", draw);

        layout.start();

        function draw(words) {
          d3.select(svg_location)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return xScale(d.value) + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill[i]; })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.key; })
            .on("mouseover", function(d, i){
            });
        }
      }


      function zoom(d) {
          var focus0 = focus; focus = d;
          console.log(d);
          if(d.data.children == null){
            // network
            $.ajax({
              url: 'http://localhost:5000/get_network?key='+d.data.name,
              type: "GET",
              success: function(data){
                tree_info_graph(data);
              },
              error: function(error){
              }
            });
            // word_cloud
            $.ajax({
              url: 'http://localhost:5000/get_word_cloud?key='+d.data.name,
              type: "GET",
              success: function(data){
                word_cloud_info_graph(data);
              },
              error: function(error){
              }
            });

            // get_answer
            $.ajax({
              url: 'http://localhost:5000/get_content?part='+part_selected+'&type='+d.parent.data.name.toLowerCase()+'&topic='+d.data.topicId,
              type: "GET",
              success: function(data){
                window.my.namespace.publicFunc(data);
              },
              error: function(error){
              }
            });
            return;
          }
          var transition = d3.transition()
            .duration(d3.event.altKey ? 7500 : 750)
            .tween("zoom", function(d) {
              var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
              return function(t) { zoomTo(i(t)); };
            });
          transition.selectAll("text")
            .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
            .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
            .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        function zoomTo(v) {
          var k = diameter / v[2]; view = v;
          node.attr("transform", function(d) {
            return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
          });
          circle.attr("r", function(d) { return d.r * k; });
        }
    }

    map_info_graph(){
        //map

        //Width and height
        var w = 960;
        var h = 500;



        // var projection = geoAitoff().translate([w/2, h/2]).scale([1000]);;
        // var path = geoPath(projection);


        //Projection
        var projection = d3.geoAlbersUsa()
          .translate([w/2, h/2])    // translate to center of screen
          .scale([1000]);

        //Define default path generator
        var path = d3.geoPath()
          .projection(projection);

        // var path = geoPath();

        // var projection = geoAitoff();

        //Define legend labels
        var legend_labels = ["0-50", "50-300", "300-500", "500-1000", "1000-2000",">2000"]

        //Define scale to sort data values into buckets of color
        var color_domain = [0, 50, 300,500,1000, 2000,2001];
        var colorMap = d3.scaleThreshold()
          .domain(color_domain)
          .range(['rgb(117, 69, 102)','rgb(234, 136, 223)','rgb(215,181,216)','rgb(223,101,176)','rgb(221,28,119)','rgb(152,10,67)','rgb(234, 135, 180)']);
        //Colors taken from http://colorbrewer2.org/

        //Create SVG element
        var svg = d3.select(".map")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

        //Load in Maryland County data


        //Load in GeoJSON data
        var json;
        this.restService.get_map(this.selected_part,"none","none").subscribe((data)=>{
          json = data;
          //Bind data and create one path per GeoJSON feature
          svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", function(d) {
              return colorMap(d.properties.value);
            })
            .append("title")
            .text(function(d) {
              return d.properties.text;
            });

          //Adding legend
          var legend = svg.selectAll("g.legend")
            .data([50, 300, 500, 1000, 2000,2001])
            .enter().append("g")
            .attr("class", "legend");

          var ls_w = 20, ls_h = 20;

          legend.append("rect")
            .attr("x", 20)
            .attr("y", function(d, i){ return h - (i*ls_h) - 2*ls_h;})
            .attr("width", ls_w)
            .attr("height", ls_h)
            .style("fill", function(d, i) {console.log(d); return colorMap(d); })
            .style("opacity", 0.8);

          legend.append("text")
            .attr("x", 50)
            .attr("y", function(d, i){ return h - (i*ls_h) - ls_h - 4;})
            .text(function(d, i){ return legend_labels[i]; });
        });
    }

      getDisease(part){
        this.selected_part = part;
        this.restService.get_diseases(part, '', '')
          .pipe(first())
          .subscribe(
            data => {
              console.log(data);
              this.map_info_graph();
              this.zoom_bubble_info(data);
            },
            error => {
            });
      }

}
