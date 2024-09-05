// 初始化地圖
var map = L.map('map').setView([25.033, 121.565], 10);

// 設定圖層
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
