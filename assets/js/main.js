alert("Chào mừng bạn đến Magic Code");
{
  /* 
    <script type="text/javascript">
      
    </script> */
}
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Language", "User"],
    ["Java", 130],
    ["PHP", 180],
    ["Python", 100],
    ["C++", 100],
    ["C#", 90],
    ["HTML", 100],
    ["JS", 100],
    ["Other", 155],
  ]);

  var options = {
    title: "Language Use",
    legend: "none",
    pieSliceText: "label",
    slices: {
      2: { offset: 0.2 },
      4: { offset: 0.2 },
      6: { offset: 0.2 },
      8: { offset: 0.2 },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
