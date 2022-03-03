const apiDoc = {
    "openapi": "3.0.0",
    "info": {
      "version": "1.7.0", //版本號
      "title": "E-invoice TW API", //swagger文件的標頭
      "description": "This is e-invoiceTW API doc." //swagger描述
    },
    "tags": [
      {
        "name": "發票",
        "description": "所有關於電子發票的"
      },
      {
        "name": "發票載具",
        "description": "所有關於發票載具的"
      },
      {
        "name": "行動條碼",
        "description": "所有關於行動條碼的"
      }
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/inv/list": {
        "post": {
          "tags": [
            "發票"
          ],
          "summary": "查詢中獎發票號碼清單，依開獎期別(雙數月)取得查詢期別，中獎獎別、號碼及中獎各獎獎金金額。",
          "requestBody": {
            "description": "中獎發票號碼清單 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/invListReq"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "value",
                "required": true,
                "description": "版本號碼 (帶入範例值0.2即可)"
            },
            {
                "name": "action",
                "in": "value",
                "required": true,
                "description": "API 行為 (帶入範例值QryWinningList即可)"
            },
            {
                "name": "invTerm ",
                "in": "value",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "value",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "執行成功",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/invListRes"
                  }
                }
              }
            },
            "500":{
                "description": "系統執行錯誤",
            },
            "900":{
                "description": "建立 JSON 物件失敗",
            },
            "901":{
                "description": "無此期別資料",
            },
            "902":{
                "description": "期別錯誤",
            },
            "903":{
                "description": "參數錯誤",
            },
            "904":{
                "description": "錯誤的查詢種類",
            },
            "907":{
                "description": "捐贈失敗，捐贈碼不存在",
            },
            "908":{
                "description": "捐贈失敗，此發票已被捐贈",
            },
            "913":{
                "description": "捐贈失敗，此發票開立予營業人或機關團體，不能捐贈",
            },
            "915":{
                "description": "查無此發票詳細資料",
            },
            "919":{
                "description": "參數驗證碼錯誤",
            },
            "950":{
                "description": "超過最大查詢次數",
            },
            "951":{
                "description": "超過最大查詢次數",
            },
            "952":{
                "description": "卡片(QR 碼)有效存續時間已過（過期憑證）",
            },
            "953":{
                "description": "卡片檢查碼有誤（偽造卡片）",
            },
            "954":{
                "description": "簽名有誤（偽造之訊息、傳遞不完整）",
            },
            "956":{
                "description": "查詢發票筆數超過上限，請縮小查詢日期區間",
            },            
            "997":{
                "description": "UUID 不符合規定（黑名單）",
            },
            "998":{
                "description": "AppID 不符合規定（可能是被停權或是從未申請該 AppID）",
            },
            "999":{
                "description": "未知錯誤（以避免程式當機）",
            },                                                                                                                                                                                                                                  

          }
        }
      },
      "/inv/header": {
        "post": {
          "tags": [
            "發票"
          ],
          "summary": "查詢發票表頭，利用電子發票證明聯上的二維條碼(QR Code)或者一維條碼(BarCode)，查詢該電子發票證明聯表頭資訊，其回應資訊含：發票號碼、發票開立日期、賣方名稱及發票狀態等資訊",
          "requestBody": {
            "description": "查詢發票表頭 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/invHeaderReq"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "value",
                "required": true,
                "description": "版本號碼 (帶入範例值0.5即可)"
            },
            {
                "name": "type",
                "in": "value",
                "required": true,
                "description": "發票查詢時使用的條碼別(大小寫有別)"
            },
            {
                "name": "invNum",
                "in": "value",
                "required": true,
                "description": "發票號碼"
            },                     
            {
                "name": "action",
                "in": "value",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "generation",
                "in": "value",
                "required": true,
                "description": "(帶入v2值即可)"
            },
            {
                "name": "invDate",
                "in": "value",
                "required": true,
                "description": "發票日期"
            },            
            
            {
                "name": "UUID ",
                "in": "value",
                "required": true,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "value",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/invHeaderRes"
                  }
                }
              }
            }
          }
        }
      },
      "/inv/details": {
        "post": {
          "tags": [
            "發票"
          ],
          "summary": "查詢發票明細",
          "requestBody": {
            "description": "查詢發票明細 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/inv/dntCode": {
        "post": {
          "tags": [
            "發票"
          ],
          "summary": "捐贈碼查詢",
          "requestBody": {
            "description": "捐贈碼查詢 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/invCarrier/header": {
        "post": {
          "tags": [
            "發票載具"
          ],
          "summary": "載具發票表頭查詢",
          "requestBody": {
            "description": "載具發票表頭查詢 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/invCarrier/details": {
        "post": {
          "tags": [
            "發票載具"
          ],
          "summary": "載具發票明細查詢",
          "requestBody": {
            "description": "載具發票明細查詢 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/invCarrier/dnt": {
        "post": {
          "tags": [
            "發票載具"
          ],
          "summary": "載具發票捐贈",
          "requestBody": {
            "description": "載具發票捐贈 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/invCarrier/dntBlank": {
        "post": {
          "tags": [
            "發票載具"
          ],
          "summary": "載具發票捐贈(API 空白頁面)",
          "requestBody": {
            "description": "載具發票捐贈(API 空白頁面) Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/invCarrier/persTheme": {
        "post": {
          "tags": [
            "發票載具"
          ],
          "summary": "已歸戶載具個別化主題",
          "requestBody": {
            "description": "已歸戶載具個別化主題 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },               
      "/mobileBarcode/aggregate": {
        "post": {
          "tags": [
            "行動條碼"
          ],
          "summary": "手機條碼歸戶載具查詢",
          "requestBody": {
            "description": "手機條碼歸戶載具查詢 Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/mobileBarcode/regBlank": {
        "post": {
          "tags": [
            "行動條碼"
          ],
          "summary": "手機條碼載具註冊(API 空白頁面)",
          "requestBody": {
            "description": "手機條碼載具註冊(API 空白頁面) Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/mobileBarcode/carrierLinkBlank": {
        "post": {
          "tags": [
            "行動條碼"
          ],
          "summary": "載具歸戶(手機條碼)(API 空白頁面)",
          "requestBody": {
            "description": "載具歸戶(手機條碼)(API 空白頁面) Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      },
      "/mobileBarcode/finaAccountBlank": {
        "post": {
          "tags": [
            "行動條碼"
          ],
          "summary": "手機條碼綁定金融帳戶(API 空白頁面)",
          "requestBody": {
            "description": "手機條碼綁定金融帳戶(API 空白頁面) Object",
            "required": true, 
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/definitions/winningInvList"
                }
              }
            }
          },          
          "parameters": [ //參數需求
            {
                "name": "version",
                "in": "path",
                "required": true,
                "description": "版本號碼 (帶入範例值即可)"
            },
            {
                "name": "action",
                "in": "path",
                "required": true,
                "description": "API 行為 (帶入範例值即可)"
            },
            {
                "name": "invTerm ",
                "in": "path",
                "required": true,
                "description": "查詢開獎期別，年分為民國年，月份必須為雙數月"
            },
            {
                "name": "UUID ",
                "in": "path",
                "required": false,
                "description": "行動工具 Unique ID(請參考 UUID 參數使用說明)"
            },
            {
                "name": "appID ",
                "in": "path",
                "required": true,
                "description": "透過財政資訊中心申請之軟體ID(請參考取得應用程式帳號(appID))"
            },                                    
          ],
          "produces": ["application/json"],
          "responses": {
            "200": { //用statuCode做分類
              "description": "OK",
              "content": { //內容
                "application/json": { //response格式
                  "schema": { //response要吃什麼樣的model
                    "$ref": "#/definitions/winningInvList"
                  }
                }
              }
            }
          }
        }
      }                                                                              
    },
    "definitions": {
        // winningInvList後續要刪除
      "winningInvList": {
        "type": "object", //資料表物件
        "properties": { //資料表屬性
          "version": {
            "type": "string"
          },
          "action": {
            "type": "string"
          },
          "invTerm": {
            "type": "date"
          },
          "UUID": {
            "type": "string"
          },
          "appID": {
            "type": "string"
          }
        }
      },
      "invListReq": {
        "type": "object", //資料表物件
        "properties": { //資料表屬性
          "version": {
            "type": "string",
          },
          "action": {
            "type": "string"
          },
          "invTerm": {
            "type": "string"
          },
          "UUID": {
            "type": "string"
          },
          "appID": {
            "type": "string"
          }
        }
      },
      "invListRes": {
        "type": "object", //資料表物件
        "properties": { //資料表屬性
          "v": {                    //版本號碼
            "type": "string",
          },
          "code": {                 //訊息回應碼
            "type": "string"
          },
          "msg": {                  //系統回應訊息
            "type": "string"
          },
          "invoYm": {               //發票號碼
            "type": "string"
          },
          "superPrizeNo": {             //千萬特獎號碼
            "type": "string"
          },
          "spcPrizeNo": {              //特獎號碼 1
            "type": "string"
          },
          "spcPrizeNo2": {              //特獎號碼 2
            "type": "string"
          },
          "spcPrizeNo3": {              //特獎號碼 3
            "type": "string"
          },
          "firstPrizeNo1": {              //頭獎號碼 1
            "type": "string"
          },
          "firstPrizeNo2": {              //頭獎號碼 2
            "type": "string"
          },
          "firstPrizeNo3": {              //頭獎號碼 3
            "type": "string"
          },
          "firstPrizeNo4": {              //頭獎號碼 4
            "type": "string"
          },
          "firstPrizeNo5": {              //頭獎號碼 5
            "type": "string"
          },
          "firstPrizeNo6": {              //頭獎號碼 6
            "type": "string"
          },
          "firstPrizeNo7": {              //頭獎號碼 7
            "type": "string"
          },
          "firstPrizeNo8": {              //頭獎號碼 8
            "type": "string"
          },
          "firstPrizeNo9": {              //頭獎號碼 9
            "type": "string"
          },
          "firstPrizeNo10": {              //頭獎號碼 10
            "type": "string"
          },
          "sixthPrizeNo1": {              //六獎號碼 1
            "type": "string"
          },
          "sixthPrizeNo2": {              //六獎號碼 2
            "type": "string"
          },
          "sixthPrizeNo3": {              //六獎號碼 3
            "type": "string"
          },                                                                                                                                                                                           
          "superPrizeAmt": {              //千萬特獎金額
            "type": "string"
          },           
          "spcPrizeAmt": {              //特獎金額
            "type": "string"
          },
          "firstPrizeAmt": {              //頭獎金額
            "type": "string"
          },
          "secondPrizeAmt": {              //二獎金額
            "type": "string"
          },
          "thirdPrizeAmt": {              //三獎金額
            "type": "string"
          },
          "fourthPrizeAmt": {              //四獎金額
            "type": "string"
          },
          "fifthPrizeAmt": {              //伍獎金額
            "type": "string"
          },
          "sixthPrizeAmt": {              //六獎金額
            "type": "string"
          },
          "sixthPrizeNo4": {              //六獎號碼 4
            "type": "string"
          },
          "sixthPrizeNo5": {              //六獎號碼 5
            "type": "string"
          },
          "sixthPrizeNo6": {              //六獎號碼 6
            "type": "string"
          }                                                                                               
        }
      },
      "invHeaderReq": {
        "type": "object", //資料表物件
        "properties": { //資料表屬性
          "version": {
            "type": "string",
          },
          "action": {
            "type": "string"
          },
          "invTerm": {
            "type": "string"
          },
          "UUID": {
            "type": "string"
          },
          "appID": {
            "type": "string"
          }
        }
      },              
      "invHeaderRes": {
        "type": "object", //資料表物件
        "properties": { //資料表屬性
          "v": {                    //版本號碼
            "type": "string",
          },
          "code": {                 //訊息回應碼
            "type": "string"
          },
          "msg": {                  //系統回應訊息
            "type": "string"
          },
          "invNum": {               //發票號碼
            "type": "string"
          },
          "invDate": {               //發票開立日期
            "type": "string"
          },
          "sellerName": {              //賣方名稱
            "type": "string"
          },
          "invStatus": {              //發票狀態
            "type": "string"
          },
          "invPeriod": {              //對獎發票期別
            "type": "string"
          },
          "sellerBan": {              //賣方營業人統編
            
            "type": "string"
          },
          "sellerAddress": {              //賣方營業人地址
            "type": "string"
          },
          "invoiceTime": {              //發票開立時間
            "type": "string"
          },
          "buyerBan": {              //買方營業人統編
            "type": "string"
          },                                                            
          "currency": {              //幣別
            "type": "string"
          }         
        }
      },        
    },
  }
  
  module.exports = apiDoc;