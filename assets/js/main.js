// alert("Chào mừng bạn đến Magic Code");

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(barChart);

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
    title: "Ngôn Ngữ Lập Trình Phổ Biến",
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
    }, pieStartAngle: 15, // Xoay biểu đồ để các lát cắt không nằm ngay dưới tiêu đề
    chartArea: {
      top: 60, // khoảng cách từ đỉnh của chartArea đến đỉnh của biểu đồ
      left: 50,
      right: 50,
      bottom: 50,
      width: '100%',
      height: '75%'
    }
  };
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

function barChart() {
  var xValues = [
    "AI Engineer",
    "Network security",
    "Software engineer",
    "Application development",
    "Cloud architecture",
  ];
  var yValues = [100, 80, 60, 40, 20, 0];
  var barColors = ["#E17E76", "#9799BA", "#FEADB9", "#F3DDB3", "#F9E1E0"];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Những Vị Trí Đang Và Sẽ Thiếu Nhân Sự Trong Tương Lai",
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.querySelector(".login-link");
  const registerButton = document.querySelector(".register-button");
  const modal = document.querySelector(".modal");

  loginLink.addEventListener("click", () => {
    modal.style.display = "block";
  });

  registerButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.querySelector(".button"); // Chọn button Register
  const loginLink = document.querySelector(".head"); // Chọn link Login

  const modal = document.getElementById("modal"); // Chọn modal

  // Khi nhấn vào Register
  registerButton.addEventListener("click", function () {
    modal.style.display = "block"; // Hiển thị modal
  });

  // Khi nhấn vào Login
  loginLink.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn chuyển hướng đến href của thẻ <a>
    modal.style.display = "block"; // Hiển thị modal
  });

  // Đóng modal khi nhấn vào overlay
  modal.addEventListener("click", function (event) {
    if (
      event.target === modal ||
      event.target.classList.contains("modal__overlay")
    ) {
      modal.style.display = "none"; // Đóng modal
    }
  });
});
