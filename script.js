// 初始化地圖
var map = L.map('map').setView([25.033, 121.565], 10);

// 設定圖層
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 加入災害潛勢區域 (範例: 臺北市)
var taipeiFloodRisk = L.polygon([
  [25.033, 121.565],
  [25.043, 121.575],
  [25.053, 121.555]
]).addTo(map);

// 設定彈出視窗顯示潛勢區資訊
taipeiFloodRisk.bindPopup("臺北市淹水潛勢區域");

// 更多區域可按需加入
