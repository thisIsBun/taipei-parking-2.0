# 車位即時查
連結：[taipei-parking-2.0](https://thisisbun.github.io/taipei-parking-2.0/#/)
![project_main_demogif](https://user-images.githubusercontent.com/106903594/222969992-d42dece4-c41d-4c43-abb8-e94f3e0042e9.gif)

## 目錄
* [專案簡介](#專案簡介)
* [功能介紹](#功能介紹)
* [開發工具](#開發工具)
* [專案結構](#專案結構)
* [如何執行](#如何執行)
* [專案 demo](#專案-demo)
  * [地圖頁面](#地圖頁面)
  * [停車場標記](#停車場標記)
  * [停車場導航](#停車場導航)
  * [儲存頁面](#儲存頁面)
  * [深色模式](#深色模式)

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
    - Card view：以卡片的方式，加強停車場資訊視覺化的
    - Table view：以表格方式呈現，欄位提供排序功能，方便快速檢視資料

> __可切換 Dark/Light mode及提供 RWD響應式設計，希望提供使用者最舒服的瀏覽方式__

## 開發工具
- 前端語言：
  - react v17.0.1
  - react-router v6.8.0
  - styled-components 5.3.6

- 專案使用套件：
  - @react-google-maps/api
  - use-places-autocomplete
  - @reach/combobox
  - react-table
  - fortawesome
  - sweetalert2

- 程式碼優化工具：
  - PropTypes
  - eslint
  - prettier

## 專案結構
```
├── README.md
├── package-lock.json
├── package.json
└── src
    ├── App.js
    ├── apis
    │   └── WebAPI.js
    ├── assets
    │   └── logo.png
    ├── components
    │   ├── Card
    │   ├── Footer
    │   ├── Form
    │   ├── Loader
    │   ├── Locator
    │   ├── Map
    │   ├── Modal
    │   ├── Navbar
    │   ├── ProtectedRoute
    │   ├── Search
    │   ├── Switch
    │   ├── Table
    │   └── Tooltip
    ├── constants
    │   ├── style.js
    │   └── utils.js
    ├── contexts
    │   ├── AuthContext.js
    │   ├── ParkContext.js
    │   └── ThemeContext.js
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── HomePage
    │   │   ├── HomePage.js
    │   │   └── index.js
    │   ├── LoginPage
    │   │   ├── LoginPage.js
    │   │   └── index.js
    │   ├── SavePage
    │   │   ├── SavePage.js
    │   │   └── index.js
    │   └── SignupPage
    │       ├── SignupPage.js
    │       └── index.js
    ├── reportWebVitals.js
    └── setupTests.js
```

## 如何執行
確認 local已經有安裝 Node.js，專案是使用 v16.16.0開發

1. `npm install`
安裝此專案所需的第三方套件

2. 找到 .env.local檔案，並輸入 Google Map API keys
  - 路徑：src > constants > .env.local
  - 如何取得 api keys：[參考 google developers說明](https://developers.google.com/maps/documentation/embed/get-api-key?hl=zh-tw)

3. `npm run start`
在 local啟動專案

> __測試帳號 account: user1 , password: 12345678__

## 專案 demo

### 地圖頁面

#### 搜尋目的地
> 系統會根據輸入的關鍵字，列出符合關鍵字的選項

![Search demo](https://user-images.githubusercontent.com/106903594/223045025-b1d0fd90-5156-4077-a21e-dc9b9b6d4433.gif)

#### 定位目前位置
> 點擊「定位」按鈕，系統就能取得目前裝置位置

![Locator demo](https://user-images.githubusercontent.com/106903594/223048593-f308ab96-54f4-4fa7-b0c0-bedd6f1ff066.gif)

#### 用 Circle判斷停車場距離
> 100m(綠)/250m(黃)/500m(紅)的圓圈，輔助判斷停車場與目的地的距離
<img width="1345" alt="image" src="https://user-images.githubusercontent.com/106903594/223068210-e02b39ec-6eaa-4782-b881-e6b058613d92.png">

* * *
### 停車場標記

#### Marker Clusterer 集合效果
> 可點擊 zoom in/out按鈕，地圖會自動集合 marker，避免過多 marker聚集在一起

![Marker Clusterer demo](https://user-images.githubusercontent.com/106903594/223065986-56c6e589-2a0c-49f8-91e6-408d5056ec20.gif)

#### 即時資訊
> hover時可顯示空位及是否有充電樁資訊、點擊會有停車場詳細資訊

![Real-time marker info demo](https://user-images.githubusercontent.com/106903594/223111962-84ae2d94-c57a-4c20-8548-249d90b0cab5.gif)

> 可從右下角知道資料更新時間
<img width="1404" alt="image" src="https://user-images.githubusercontent.com/106903594/223113135-649fb401-3e49-484d-bbd3-ece35b8e491c.png">

* * *
### 停車場導航
>  點擊路線後，可自動開啟 Google地圖導航

![Google map nevigate demo](https://user-images.githubusercontent.com/106903594/223115778-57a9613d-7c9b-4fde-bd31-62e8dd724e90.gif)

* * *
### 儲存頁面 

#### Card view
> 以卡片的方式呈現每個停車場，用視覺化的方式呈現即時空車位及充電樁資訊

![card view demo](https://user-images.githubusercontent.com/106903594/223118374-c22855d1-fb2b-4b88-b3ed-b368053f7894.gif)

#### Table view
> 以表格的方式呈現每個停車場，欄位可使用排序功能，方便快速檢視資料

![table view demo](https://user-images.githubusercontent.com/106903594/223155334-7bc947e9-bde7-474d-aaed-d461987e01ec.gif)

* * *
### 深色模式
> 提供 Dark/Light切換鈕，讓你有舒適的瀏覽方式

![dark/light mode demo](https://user-images.githubusercontent.com/106903594/223161759-5b1f7097-51c5-45b0-8ab8-eec78c64ed6c.gif)

* * *
### RWD設計
