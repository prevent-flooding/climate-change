// 初始化地圖
var map = L.map('map').setView([25.033, 121.565], 10);

// 設定圖層
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 加入災害潛勢區域 (臺北市)
var taipeiFloodRisk = L.polygon([
  [25.033, 121.565],
  [25.043, 121.575],
  [25.053, 121.555]
]).addTo(map).bindPopup("臺北市淹水潛勢區域");
