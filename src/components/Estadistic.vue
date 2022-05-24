<template>
  <div class="graphics">
    <div id="chart_div" style="width: 800px; height: 500px;" class="growth"></div>
  </div>
</template>

<script>
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawMaterialChart(data, materialOptions, chartDiv) {
  const materialChart = new google.charts.Bar(chartDiv);
  materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
}
function drawStuff() {
  var chartDiv = document.getElementById('chart_div');
  const date = [
    ['Months', 'Profits'],
    ['January', 1000],
    ['February', 1500],
    ['March', 1350],
    ['April', 900],
    ['May', 1100],
    ['June', 1125],
    ['July', 1220],
    ['August', 1450],
    ['September', 1600],
    ['october', 1450],
    ['November', 1500],
    ['Decemb', 1350]
  ];
  const data = google.visualization.arrayToDataTable(date);

  const materialOptions = {
    width: 900,
    chart: {
      title: 'Sales history by months',
      subtitle: 'is a diagram showing sales by months'
    },
    series: {
      0: {axis: 'Profits'}
    },
    axes: {
      y: {
        Profits: {label: 'Profits'}
      }
    }
  };
  drawMaterialChart(data, materialOptions, chartDiv)
}

export default {
  name: "Estadistic",
  created() {
    //this.drawStuff();
  },
  methods: {

  },

}
</script>

<style scoped>
.graphics{
  width: 100%;
  display: grid;
  justify-content: center;
}
</style>