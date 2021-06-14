**Add Transaction**
----
  Add a transaction with Trade type-Buy/Sell and stockName, price , quantity

* **URL**

  /addTransaction

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
POST /addTransaction/
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

