# TASK MANAGER
This is the backend for a Task management App for an Organization build on Node.Js and MySQL.

## Introduction

This project provides the backend functionality for a Task Management platform. It includes features such as user authentication, Task management and Organization management.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine. You can download it from [nodejs.org](https://nodejs.org/).
- MySQL installed and running on your local machine. You can download it from MySQL(https://www.mysql.com/downloads/).

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```git@github.com:gurjashandeepsingh/TaskManager_MySQL.git```

2. Navigate to the project directory:

   ```cd Task-Manager_MySQL ```

3. Install dependencies:

   ```npm install```


4.To start the server, run the following command:
   
   ```npm run start```

   ```This app is protected by .env file, if anyone wants these variables please email me on gurjashandeepsingh1@gmail.com```

The server will start running on port 3000 by default.

To change port add env variable:
```PORT```

# Usage
Steps for Login functionality:

1. Register User using registration API

2. Login that User usgin login API

3. Save the token returned and use it under ```token``` Request Header in all protected API routes.

```To access most of the routes, you need to pass the JWT Tokens for authorization as most of the routes are protected```

Time taken to complete : 1 Day
