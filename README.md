 
 **PORTFOLIO TRACKING API**

1.**Add Transaction/Trade**
----
  Add a transaction with Trade type-Buy/Sell and stockName, price , quantity

* **URL**

  /Transactions

* **Method:**

  `POST`
  
* **Data Params**

   **Required:**
 
   `stockName=[string]`

   `Trade=[string]`

   `Price=[Number]`

   `qunatity=[integer]`


* **Success Response:**

     **Code:** 200 OK
   
    **Content:** `{"Success" }`
    
**Request:**
```json
POST /Transactions/
Accept: application/json
Content-Type: application/json

{
    "stockName": "TCS",
    "Trade": "Buy",
    "Buy":[{
        "Price":520,
        "Quantity":5,
        "Transaction":2600
    }] 
}

```

2.**Fetch Transactions/Trades**
----
  Fetch All Transactions

* **URL**

  /allTransactions

* **Method:**

  `GET`
  

* **Success Response:**

   **Code:** 200 OK

**Response:**
```json
GET /allTransactions

[
    {
        "_id": "60c66d7ba3108821a45f0951",
        "stockName": "TCS",
        "trade": "buy",
        "buy": [
            {
                "_id": "60c66d7ba3108821a45f0952",
                "price": 574.21,
                "quantity": 4,
                "transaction": 2296.84
            }
        ],
        "sell": [],
        "__v": 0
    },
    {
        "_id": "60c6f752468e0e241865f637",
        "stockName": "TCS",
        "trade": "sell",
        "sell": [
            {
                "_id": "60c6f752468e0e241865f638",
                "price": 500,
                "quantity": 4,
                "transaction": 2000
            }
        ],
        "buy": [],
        "__v": 0
    }
]

```


3.**Fetch Portfolio**
----
  Fetch Portfolio

* **URL**

  /portfolio

* **Method:**

  `GET`
  

* **Success Response:**

   **Code:** 200 OK

**Response:**
```json
GET /portfolio

[
    {
        "buyPrice": 574.21,
        "sellPrice": 500,
        "quantity": 0,
        "returns": 40,
        "_id": "60c6574c26a5046c0499777d",
        "stockName": "TCS",
        "currentPrice": 500,
        "__v": 0
    },
    {
        "buyPrice": 0,
        "sellPrice": 0,
        "quantity": 0,
        "returns": 0,
        "_id": "60c6574c26a5046c0499777e",
        "stockName": "INFOSYS",
        "currentPrice": 600,
        "__v": 0
    }
]

```

4.**Fetch Returns**
----
  Fetch Returns by summing up all returns of each Stock

* **URL**

  /returns

* **Method:**

  `GET`
  

* **Success Response:**

   **Code:** 200 OK

**Response:**
```json
GET /returns

[
    {
        "_id": null,
        "Returns": 40
    }
]

```

5.**Delete Transaction/Trade**
----
  Delete a previous placed transaction/trade

  Also updated Stock for which transaction was deleted

* **URL**

  /returns

* **Method:**

  `DELETE`
  

* **Success Response:**

   **Code:** 200 OK

  **Content:** `{"Transaction Deleted Stock updated" }`

