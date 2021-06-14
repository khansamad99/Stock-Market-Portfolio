**Add Transaction**
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

  * **Code:** 200 <br />
    **Content:** `{"Success" }`

  ```
  
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

**Fetch Transactions**
----
  Fetch All Transactions

* **URL**

  /allTransactions

* **Method:**

  `GET`
  

* **Success Response:**

   **Code:** 200 <br />

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



