const apiDoc = {
    "openapi": "3.0.0",
    "info": {
      "version": "1.7.0", //版本號
      "title": "E-invoice TW API", //swagger文件的標頭
      "description": "This is e-invoiceTW API doc." //swagger描述
    },
    "tags": [
      {
        "name": "查詢中獎發票號碼清單",
        "description": "依開獎期別(雙數月)取得查詢期別，中獎獎別、號碼及中獎各獎獎金金額。"
      },
      {
        "name": "查詢發票表頭",
        "description": "利用電子發票證明聯上的二維條碼(QR Code)或者一維條碼(BarCode)，查詢該電子發票證明聯表頭資訊，其回應資訊含：發票號碼、發票開立日期、賣方名稱及發票狀態等資訊。"
      },
      {
        "name": "查詢發票明細",
        "description": "利用電子發票證明聯上的二維條碼(QR Code)或者一維條碼(BarCode)，查詢該電子發票證明聯消費明細資料，至多查詢 99 次。"
      },
      {
        "name": "捐贈碼查詢",
        "description": "查詢目前電子發票平台已經完成註冊登記捐贈碼的受捐贈機關或團體，並回應受捐贈機關或團體統一編號、捐贈碼、受捐贈機關或團體名稱、受捐贈機關或團體簡稱等資訊。"
      },
      {
        "name": "載具發票表頭查詢",
        "description": "可依載具卡別及載具隱碼查詢載具內所持有的雲端發票。最早查詢起始時間為查詢當日前 6 個月 1 日起(例如 9 月 5 日時，最早查詢起始時間為 3 月 1 日起)。"
      },
      {
        "name": "載具發票明細查詢",
        "description": "查詢載具內所持有的雲端發票消費明細。"
      },
      {
        "name": "載具發票捐贈",
        "description": "可針對單一發票，將載具內所持有且尚未開獎之雲端發票，指定受捐贈機關或團體之統編或捐贈碼後，捐贈發票給該受捐贈機關或團體。"
      },
      {
        "name": "手機條碼歸戶載具查詢",
        "description": "查詢單一手機條碼目前有效的歸戶載具。"
      },
      {
        "name": "已歸戶載具個別化主題",
        "description": "查詢已歸戶載具個別化主題統計資訊。"
      },
      {
        "name": "手機條碼載具註冊(API 空白頁面)",
        "description": "手機條碼註冊功能，該功能僅提供手機條碼註冊，但相關郵件驗證開通及匯款或歸戶設定請至電子發票整合服務平台進行操作。"
      },                                
      {
        "name": "載具歸戶(手機條碼)(API 空白頁面)",
        "description": "提供以載具卡號及驗證碼方式歸戶手機條碼功能。"
      },
      {
        "name": "手機條碼綁定金融帳戶(API 空白頁面)",
        "description": "手機條碼金融卡帳號設定。"
      },
      {
        "name": "載具發票捐贈(API 空白頁面)",
        "description": "提供手機條碼及手機條碼下歸戶載具，查詢出尚可捐贈之雲端發票並可針對查詢出之發票進行捐贈。"
      },                              
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/invList": {
        "post": {
          "tags": [
            "查詢中獎發票號碼清單"
          ],
          "summary": "得到中獎發票號碼清單",
          "requestBody": {
            "description": "中獎發票號碼清單 Object",
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
      "/invHeader": {
        "post": {
          "tags": [
            "查詢發票表頭"
          ],
          "summary": "查詢發票表頭",
          "requestBody": {
            "description": "查詢發票表頭 Object",
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
      "/invDetails": {
        "post": {
          "tags": [
            "查詢發票明細"
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
      "/invDntCode": {
        "post": {
          "tags": [
            "捐贈碼查詢"
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
            "載具發票表頭查詢"
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
            "載具發票明細查詢"
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
            "載具發票捐贈"
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
            "載具發票捐贈(API 空白頁面)"
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
      "/invCarrier/PersTheme": {
        "post": {
          "tags": [
            "已歸戶載具個別化主題"
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
            "手機條碼歸戶載具查詢"
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
            "手機條碼載具註冊(API 空白頁面)"
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
            "載具歸戶(手機條碼)(API 空白頁面)"
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
            "手機條碼綁定金融帳戶(API 空白頁面)"
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
      }
    },
  }
  
  module.exports = apiDoc;