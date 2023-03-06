# 車位即時查
連結：[taipei-parking-2.0](https://thisisbun.github.io/taipei-parking-2.0/#/)
![project_main_demogif](https://user-images.githubusercontent.com/106903594/222969992-d42dece4-c41d-4c43-abb8-e94f3e0042e9.gif)

## 目錄
* [專案簡介](#專案簡介)
* [功能介紹](#功能介紹)
* [開發工具](#開發工具)
* [如何執行](#如何執行)
* [專案結構](#專案結構)
* [目錄結構說明](#目錄結構說明)
* [專案 DEMO](#專案-demo)

## 專案簡介
**收錄台北市停車場即時資訊，快速搜尋空車位**
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
- 定位目前位置，找附近停車場
- 在儲存頁面看預先儲存的是否有空位
```

## 功能介紹
- 沒有登入可使用的功能：
  - 地圖頁面：
    - 地點搜尋：只要輸入關鍵字，系統會自動比對並且提供符合的地址選項
    - 定位功能：一鍵自動定位目前位置
    - Circle功能：以目的地或目前位置為中心，畫出 100m/250m/500m的範圍，協助判斷停車場跟目的地的距離
    - 停車場資訊，結合台北市資料大平台，顯示停車場的即時資訊：
      - hover會顯示停車場的「即時空車位」、「是否提供充電樁」
      - 點擊則可看到費率、營業時間等詳細資訊
    - 停車場導航：一鍵開啟 Google地圖導航
  - 登入頁面：
    可登入已經註冊的帳號，或新註冊帳號


- 登入可使用的功能：
  - 儲存頁面，提供兩種檢視模式：
    - Card view：視覺化的看板方式，呈現各個停車場車位資訊
    - Table view：以表格方式呈現，欄位提供排序功能，方便快速檢視資料

> __可切換 Dark/Light mode及提供 RWD響應式設計，希望使用者有最舒服的瀏覽方式__

## 開發工具
- 前端語言：
  - react v17.0.1
  - react-router v6.8.0
  - styled-components 5.3.6

- 專案使用套件：
  - @react-google-maps/api： 使用 google map api功能(map, marker, circle, markerCluster, infoWindow)
  - use-places-autocomplete、@reach/combobox：建立 searchbox及 auto complete功能
  - react-table：建立表格
  - fortawesome：網頁 icon

- 程式碼優化工具：
  - eslint
  - PropTypes
  - prettier

## 如何執行
請先確認環境已經有安裝 Node.js，專案是使用 v16.16.0開發
1. 
