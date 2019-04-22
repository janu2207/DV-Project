/**
 * Created by prachi sharma
 */
import {OnInit, Component} from "@angular/core";
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
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

    public predictions: any;
    public diseaseList;
    constructor(public restService: RestService, public router: Router) { }
    simulation:any


    ngOnInit() {

        this.word_cloud_info_graph();
        this.tree_info_graph();
        this.map_info_graph();
        this.disease_info_graph();

  }

    getDisease(part){
        this.restService.get_diseases(part, '', '')
          .pipe(first())
          .subscribe(
            data => {
              this.predictions = data;
            },
            error => {
            });
    }


    disease_info_graph(){
      //disease
      var w = 960;
      var h = 500;
      var svgCircle = d3.select(".disease").append("svg").attr("width", w)
        .attr("height", 1000)

      var margin = 20,
        diameter = +svgCircle.attr("width"),
        g = svgCircle.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

      var color = d3.scaleLinear()
        .domain([-1, 5])
        .range(["hsl(15,80%,77%)", "hsl(228,30%,40%)"])
        .interpolate(d3.interpolateHcl);

      var pack = d3.pack()
        .size([diameter - margin, diameter - margin])
        .padding(10);

      d3.json("assets/data/arms.json").then(function(root,error){
        var root = d3.hierarchy(root)
          .sum(function(d) { return d.size; })
          .sort(function(a, b) { return b.value - a.value; });

        var focus = root,
          nodes = pack(root).descendants(),
          view;

        var circle = g.selectAll("circle")
          .data(nodes)
          .enter().append("circle")
          .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
          .style("fill", function(d) { return d.children ? color(d.depth) : "white"; })
          .on("click",function(d){
            // document.getElementById("disease").innerHTML = d.data.name;
            //   $("#div1").load(" #div1 > *");
            //   $("#div2").load(" #div2 > *");


            // window.location="#visualizations";
          })
        //   .on("hover", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

        var text = g.selectAll("text")
          .data(nodes)
          .enter().append("text")
          .attr("class", "label")
          .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
          .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
          .text(function(d) { return d.data.name; });

        var node = g.selectAll("circle,text");

        svgCircle
          .style("background", color(-1))
          .on("click", function() { zoom(root); });

        zoomTo([root.x, root.y, root.r * 2 + margin]);

        function zoom(d) {
          var focus0 = focus; focus = d;

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
          node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
          circle.attr("r", function(d) { return d.r * k; });
        }

      });
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
        this.restService.get_map("brain","none","none").subscribe((data)=>{
          json = data;
          console.log(json)
          //Bind data and create one path per GeoJSON feature
          svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", function(d) {
              console.log(d.properties.value)
              return colorMap(d.properties.value);
            })
            .append("title")
            .text(function(d) {
              return d.properties.name + ": " + d.properties.value;
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

    tree_info_graph(){
      var  data = {"Drug": {"nodes": [], "links":[]}}
      var  graph = data["Drug"];
      var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

      var color = d3.scaleOrdinal(schemeCategory10);

      var nd;
      for (var i=0; i<graph.nodes.length; i++) {
        nd = graph.nodes[i];
        nd.rx = nd.id.length * 4.5;
        nd.ry = 12;
      }

      this.simulation = d3.forceSimulation()
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


      this.simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

      this.simulation.force("link")
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
        if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active)this. simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
    }

    word_cloud_info_graph(){
      var word_count = {};
      var data1 = {"Drug": {"alphagan": 1, "interact": 33, "medications": 452, "drug": 367, "amitriptyline": 3, "atenolol": 9, "carbamazepine": 1, "chlorpromazine": 1, "clonidine": 4, "codeine": 8, "cyclobenzaprine": 1, "diazepam": 3, "digoxin": 3, "know": 176, "http://www": 28, "internationaldrugmart": 3}}
      //alert("inside");
      // word_count = data['Diabetes'];
      var test = data1["Drug"];
      var words = {};
      for(var key in test){
        if(test[key] > 3)

          words[key] = test[key];
      }


      var svg_location = "#word_cloud";
      var width = 900
      var height = 900;



      var fill = schemeCategory10;

      // var spectral = d3.scaleYlGnBu();

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
}
