**Add Transaction**
----
  Add a transaction with Trade type-Buy/Sell and stockName, price , quantity

* **URL**

  /addTransaction

* **Method:**

  `POST`
  
*  **URL Params**

  
* **Data Params**

   **Required:**
 
   `stockName=[string]`
   `Trade=[string]`
   `Price=[Number]`
   `qunatity=[integer]`



* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```