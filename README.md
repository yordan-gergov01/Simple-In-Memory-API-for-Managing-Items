# Simple In-Memory API for Managing Items

This is a lightweight Express-based REST API built with TypeScript. It allows users to manage a simple list of items stored in memory.


## Features

- Create new items
- Retrieve all items
- Input validation middleware
- CORS enabled
- Secure HTTP headers with `helmet`
- Rate limiting with `express-rate-limit`
- Centralized error handling
- In-memory data storage (no database required)


## Installation

1. Clone the repository:
   git clone [https://github.com/your-username/simple-in-memory-api.git](https://github.com/yordan-gergov01/Simple-In-Memory-API-for-Managing-Items.git)
   cd simple-in-memory-api

2. Install dependencies
   npm install

3. Create a .env file in the root directory and set the application port:
   APP_PORT=3000


## Running the server

  - npm run start
  - by default, the server will run at http://localhost:3000


## API Endpoints

 - GET /api/v1/items
 - Returns a list of all items


   {
   
  "status": "success",
  
  "data": {
  
    "items": [
    
      {
      
        "id": "uuid-v4-string",
        
        "name": "Sample Item"
        
      }
      
    ]
    
  }
  
}


- POST /api/v1/items
- Creates a new item
- Request Body:
  

  {
  "name": "New Item"
}


## Testing with Postman

1. Open Postman.

2. Use:

 - GET: http://localhost:3000/api/v1/items

 - POST: http://localhost:3000/api/v1/items

3. For POST requests:

 - Set Body → raw → JSON

 - Use:
 - 

   {
   
  "name": "Example Item"
  
}


4. Send the request and view the response
