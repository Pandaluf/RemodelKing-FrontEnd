<template>
  <nav_bar></nav_bar>
  <v-main>
    <h1 class="title">Company Progress</h1>
    <h2 class="analisys">Growth Analisys</h2>
    <div class="graphics">
      <div id="chart_div" style="width: 800px; height: 500px;" class="growth"></div>
    </div>
  </v-main>
  <footer-component></footer-component>
</template>

<script>
import nav_bar from "../nav_bar.vue";
import footerComponent from "../footerComponent.vue";

google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var chartDiv = document.getElementById('chart_div');

  var date = [
    ['Name', 'Prices', 'Numbers'],
    ['Canis Major Dwarf', 4000, 23.3],
    ['Sagittarius Dwarf', 24000, 4.5],
    ['Ursa Major II Dwarf', 30000, 14.3],
    ['Lg. Magellanic Cloud', 20000, 0.9],
    ['Bootes I', 40000, 13.1]
  ]
  const data = google.visualization.arrayToDataTable(date);

  var materialOptions = {
    width: 900,
    chart: {
      title: 'Hi people of youtube',
      subtitle: 'it is diagrams for mi work'
    },
    series: {
      0: { axis: 'Prices' }, // Bind series 0 to an axis named 'distance'.
      1: { axis: 'Number' } // Bind series 1 to an axis named 'brightness'.
    },
    axes: {
      y: {
        Prices: {label: 'Prices'}, // Left y-axis.
        Number: {side: 'right', label: 'Number'} // Right y-axis.
      }
    }
  };

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}
export default {
  name: "companyProgress",
  components: {
    nav_bar,
    footerComponent
  }
}
</script>

<style scoped>
  .graphics{
    width: 100%;
    display: grid;
    justify-content: center;
  }
  .title{
    text-align: center;
    font-size: 35px;
    font-weight: 300;
    padding: 25px 0;
  }
  .analisys{
    font-weight: 500;
    font-size: 25px;
    padding-left: 25px;
    padding-bottom: 25px;
  }
</style>