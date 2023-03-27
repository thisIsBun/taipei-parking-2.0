# 車位即時查
連結：[taipei-parking-2.0](https://thisisbun.github.io/taipei-parking-2.0/#/) 
> 帳密：
> - 可使用 Google帳號登入
> - Account: `user@example.com`, Password: `111111`

![project_main_demogif](https://user-images.githubusercontent.com/106903594/227787275-49f4840d-7c93-43d0-bf2b-9e23de6da0e2.gif)

## 目錄
* [專案簡介](#專案簡介)
* [功能介紹](#功能介紹)
* [開發工具](#開發工具)
* [如何執行](#如何執行)
* [專案 demo](#專案-demo)
  * [地圖頁面](#地圖頁面)
  * [停車場標記](#停車場標記)
  * [停車場導航](#停車場導航)
  * [登入頁面](#登入頁面)
  * [儲存頁面](#儲存頁面)
  * [PWA app](#pwa-app)
  * [深色模式](#深色模式)
  * [響應式設計](#響應式設計)

## 專案簡介
**收錄台北市停車場即時資訊，快速搜尋空車位**
```
要開車進台北市嗎？
怕會花很多時間找停車場嗎？
想知道哪裡有空位、怎麼收費嗎？

let me introduce to you "車位即時查"

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
    - 地點搜尋：輸入內容時，即時提供地點預測清單
    - 定位功能：一鍵自動定位目前位置
    - Circle功能：以目的地或目前位置為中心，畫出 100m/250m/500m的範圍，協助判斷停車場的距離
    - 停車場即時資訊：
      - hover會顯示停車場的「即時空車位數」、「是否提供充電樁」
      - 點擊則可看到費率、營業時間等詳細資訊
    - 停車場導航：一鍵開啟 Google地圖導航
  - 登入頁面


- 登入後可使用的功能：
  - 儲存頁面，提供兩種檢視模式：
    - Card view：以卡片的方式，加強停車場資訊視覺化的
    - Table view：以表格方式呈現，欄位提供排序功能，方便快速檢視資料
    
```
- 提供兩種登入方式：
  - 使用 Google帳號登入
  - 使用 email登入

- 提供好的用戶體驗：
  - Progressive Web App(PWA)
  - 可切換 Dark/Light mode
  - 提供 RWD響應式設計
```
  
## 開發工具
- 前端語言
  - react v18.2.0
  - react-router v6.8.0
  - styled-components 5.3.6

- 使用套件
  - @react-google-maps/api
  - use-places-autocomplete
  - @reach/combobox
  - react-table
  - firebase
  - fortawesome
  - sweetalert2

- 程式碼優化工具
  - PropTypes
  - eslint
  - prettier

- API reference
  - Google Map：
    - Maps JavaScript API
    - Places API
    - Geocoding API
  - 政府資料開放平臺([網址](https://data.gov.tw/dataset/128435))：
    - TCMSV_alldesc.json
    - TCMSV_allavailable.json
  - Firebase Authentication
    - Google Account
    - Email/Password

## 如何執行
確認 local已經有安裝 Node.js，專案是使用 v16.16.0開發

1. `npm install`
安裝此專案所需的第三方套件

2. 找到 .env.local檔案，並 Google Map及 Firebase的 api keys
  - 路徑：src > constants > .env.local
  - 如何取得 google map api keys：[參考 google developers說明](https://developers.google.com/maps/documentation/embed/get-api-key?hl=zh-tw)
  - 如何取得 firebase api keys：[參考 firebase documentation說明](https://firebase.google.com/docs/projects/api-keys?hl=zh-tw)

3. `npm run start`
在 local啟動專案


## 專案 demo

### 地圖頁面

#### 搜尋目的地
> 只要輸入內容，系統會即時提供預測的地點清單

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
> 
![Marker Clusterer demo](https://user-images.githubusercontent.com/106903594/223284868-4b917bac-60ce-426f-92b0-27d7adf34940.gif)

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
### 登入頁面 
> 提供兩種登入方式，可使用 Google帳號或 email登入
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/106903594/224597166-ecc495c2-a2bc-49d2-b747-1ab9ce3dc0e0.png">

* * *
### 儲存頁面 

#### Card view
> 以卡片的方式呈現每個停車場，用視覺化的方式呈現即時空車位及充電樁資訊

![card view demo](https://user-images.githubusercontent.com/106903594/223118374-c22855d1-fb2b-4b88-b3ed-b368053f7894.gif)

#### Table view
> 以表格的方式呈現每個停車場，欄位可使用排序功能，方便快速檢視資料

![table view demo](https://user-images.githubusercontent.com/106903594/223155334-7bc947e9-bde7-474d-aaed-d461987e01ec.gif)

* * *
### PWA app
> 可直接將 app安裝到桌面，點擊就可以開始使用

<img width="936" alt="image" src="https://user-images.githubusercontent.com/106903594/227769397-83738121-18a6-410d-82e7-35e47916b9d4.png">

* * *
### 深色模式
> 提供 Dark/Light切換鈕，讓你有舒適的瀏覽方式

![dark/light mode demo](https://user-images.githubusercontent.com/106903594/223291344-e9871131-8a73-4e68-aa1c-474c040ecfe0.gif)

* * *
### 響應式設計
> 不論用手機或桌機，都方便瀏覽網頁
<img width="1193" alt="image" src="https://user-images.githubusercontent.com/106903594/223442228-0ea0020a-15b7-47c6-a0cf-524ee71c93e4.png">
<img width="1193" alt="image" src="https://user-images.githubusercontent.com/106903594/223442366-2e388e65-7baf-45d9-83a1-8771c3d80c46.png">



