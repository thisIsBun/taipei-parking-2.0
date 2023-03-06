# 車位即時查
連結：[taipei-parking-2.0](https://thisisbun.github.io/taipei-parking-2.0/#/)
![project_main_demogif](https://user-images.githubusercontent.com/106903594/222969992-d42dece4-c41d-4c43-abb8-e94f3e0042e9.gif)

## 目錄
* [專案簡介](#專案簡介)
* [功能結構](#功能結構)
* [如何執行](#如何執行)
* [目錄結構說明](#目錄結構說明)
* [專案 DEMO](#專案-demo)

## 專案簡介

### **收錄台北市停車場即時資訊，快速搜尋空車位**
```
你要開車進台北市嗎？
在煩惱要去哪裡停車嗎？
想知道哪裡有空位、怎麼收費嗎？

let me intoduce you 車位即時查，幫你節省找停車場的時間

可預先查詢目的地周邊的停車場
- 先搜尋目的地
- 儲存 2~3個適合的停車場
- 導航去最理想的停車場

已經在目的地了
- 在儲存頁面看預先儲存的是否有空位
- 直接定位目前位置，找附近停車場
```

### 功能
- 沒有登入使用者，可以使用的功能：
  - 地圖頁面：
    - 地點搜尋：只要輸入關鍵字，會提供符合的地址選項
    - 定位功能：一鍵自動定位目前位置
    - Circle功能：以目的地或目前位置為中心，畫出 100m/250m/500m的範圍，協助使用者判斷停車場跟目的地的距離。
    - 停車場資訊，結合台北市資料大平台，顯示台北市停車場的即時資訊：
      - hover會顯示該停車場的「即時空車位」、「是否提供充電樁」
      - 點擊會顯示停車場的詳細資訊
    - 停車場導航：可一鍵開啟 Google地圖導航
