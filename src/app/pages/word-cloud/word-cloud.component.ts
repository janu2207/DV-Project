import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import {cloud} from 'd3-cloud';
import {schemeCategory10} from 'd3-scale-chromatic'
@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var word_count = {};
    console.log(cloud)

var data = {"Drug": {"alphagan": 1, "interact": 33, "medications": 452, "drug": 367, "amitriptyline": 3, "atenolol": 9, "carbamazepine": 1, "chlorpromazine": 1, "clonidine": 4, "codeine": 8, "cyclobenzaprine": 1, "diazepam": 3, "digoxin": 3, "know": 176, "http://www": 28, "internationaldrugmart": 3}}
      //alert("inside");
      // word_count = data['Diabetes'];
      var test = data["Drug"];

      var words = {};
      for(var key in test){
        if(test[key] > 3)

          words[key] = test[key];
      }

      console.log(words);
      var svg_location = "#word_cloud";
      var width = 900
      var height = 900;



      var color = d3.scaleThreshold()
            .domain([10,20,30,40,50,60,70,80,90,1000])
            .range(["#FF7F50", "#BDB76B", "#228B22", "#66CDAA", "#00008B", "#8B008B","#C71585","#FFE4E1","#2F4F4F","#800000"]);

      var fill = schemeCategory10;

      // var spectral = d3.scaleYlGnBu();

      var word_entries = d3.entries(words);

      var xScale = d3.scaleLinear()
         .domain([0, d3.max(word_entries, function(d) {
            return d.value*0.5;
          })
         ])
         .range([10,100]);
  var layout = cloud().size([width, height])
        .timeInterval(20)
        .words(word_entries)
        .fontSize(function(d) { return xScale(+d.value); })
        .text(function(d) { return d.key; })
        .rotate(function() { return ~~(Math.random() * 4) * 45; })
        .font("Impact")
        .on("end", draw)

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
            console.log(d.text,d.value);
          })
          ;
      }

      layout.stop();




  }
}
