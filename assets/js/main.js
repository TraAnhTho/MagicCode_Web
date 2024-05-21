alert("Chào mừng bạn đến Magic Code");

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
      0: { color: "#F9E1E0", offset: 0.2 }, // Java
      1: { color: "#FEADB9" }, // PHP
      2: { color: "#C88BD9", offset: 0.2 }, // Python
      3: { color: "#9799BA" }, // C++
      4: { color: "#BC85A3", offset: 0.2 }, // C#
      5: { color: "#F3DDB3" }, // HTML
      6: { color: "#487ba6", offset: 0.2 }, // JS
      7: { color: "#E17E76" }, // Other
    },
  };
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
