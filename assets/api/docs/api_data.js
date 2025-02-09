define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/auth/google",
    "title": "2. Login With Google",
    "name": "GoogleLoginAuth",
    "group": "Auth",
    "description": "<p>Login with Google, If the user is only registered by the /api/v1/auth/register API, then only it generates a token, else it will say unauthorized.</p>",
    "version": "0.0.0",
    "filename": "config/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/google/callback",
    "title": "3. Login With Google Callback",
    "name": "GoogleLoginCallbackAuth",
    "group": "Auth",
    "description": "<p>Callback url for Google login</p>",
    "version": "0.0.0",
    "filename": "config/routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/register",
    "title": "1. User Creation",
    "name": "LoginAuth",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth of the User (YYYY-MM-DD).</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"shankhascm96+1@gmail.com\",\n  \"name\": \"Shankha\",\n  \"dob\": \"2000-01-21\",\n  \"address\": \"A/4 School Bazar\",\n  \"description\": \"description\",\n  \"latitude\": 22.416017,\n  \"longitude\": 87.326930\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "201 CREATED\n{\n    \"data\": {\n        \"message\": \"User create successful.\",\n        \"items\": [\n            {\n                \"isActive\": true,\n                \"_id\": \"609d19464da09840f084926b\",\n                \"email\": \"shankhascm96+1@gmail.com\",\n                \"name\": \"Shankha\",\n                \"dob\": \"2000-01-21T00:00:00.000Z\",\n                \"address\": \"A/4 School Bazar\",\n                \"description\": \"description\",\n                \"latitude\": 22.416017,\n                \"longitude\": 87.32693,\n                \"createdAt\": \"2021-05-13T12:19:18.766Z\",\n                \"updatedAt\": \"2021-05-13T12:19:18.766Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.token",
            "description": "<p>JWT token issued against the credentials.</p>"
          }
        ]
      }
    },
    "description": "<p>Create a new user</p>",
    "version": "0.0.0",
    "filename": "config/routes/auth.js",
    "groupTitle": "Auth",
    "error": {
      "examples": [
        {
          "title": "Validation Error",
          "content": "422 Unprocessable\n{\n    \"error\": {\n        \"message\": \"Received incoming request (`{METHOD} /api/v1/xxx/xxx`), but could not run action.\",\n        \"errors\": [\n            \"Invalid \\\"{field_name}\\\":\\n  · Value ('xyz') was not passed the validation criteria\"\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "401 Unauthorized\n{\n    \"error\": {\n        \"message\": \"Unauthorized.\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Conflict",
          "content": "409 Conflict\n{\n    \"error\": {\n        \"message\": \"Bad Request.\",\n        \"errors\": [\n            \"Some error message.\"\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "400 Bad Request\n{\n    \"error\": {\n        \"message\": \"Bad Request.\",\n        \"errors\": [\n            \"Some error message.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/friends",
    "title": "1. Create Friend",
    "name": "CreateFriend",
    "group": "Friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>User id of the user you want to be friend.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"friendId\": \"609d19464da09840f084926b\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "201 CREATED\n{\n    \"data\": {\n        \"message\": \"Friend create successful.\",\n        \"items\": [\n            {\n                \"_users\": [\n                    \"609d191b4da09840f084926a\",\n                    \"609d19464da09840f084926b\"\n                ],\n                \"isActive\": true,\n                \"_id\": \"609d2cbb8097ab6b34bfb283\",\n                \"createdAt\": \"2021-05-13T13:42:19.789Z\",\n                \"updatedAt\": \"2021-05-13T13:42:19.789Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.items",
            "description": "<p>Friends information</p>"
          }
        ]
      }
    },
    "description": "<p>Update user by id</p>",
    "version": "0.0.0",
    "filename": "config/routes/friend.js",
    "groupTitle": "Friends",
    "error": {
      "examples": [
        {
          "title": "Validation Error",
          "content": "422 Unprocessable\n{\n    \"error\": {\n        \"message\": \"Received incoming request (`{METHOD} /api/v1/xxx/xxx`), but could not run action.\",\n        \"errors\": [\n            \"Invalid \\\"{field_name}\\\":\\n  · Value ('xyz') was not passed the validation criteria\"\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "401 Unauthorized\n{\n    \"error\": {\n        \"message\": \"Unauthorized.\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "400 Bad Request\n{\n    \"error\": {\n        \"message\": \"Bad Request.\",\n        \"errors\": [\n            \"Some error message.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/friends",
    "title": "2. Get All Friends",
    "name": "GetAllFriend",
    "group": "Friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "200 OK\n{\n    \"data\": {\n        \"message\": \"Friends fetch successful.\",\n        \"items\": [\n            {\n                \"_users\": [\n                    {\n                        \"isActive\": true,\n                        \"_id\": \"609d19464da09840f084926b\",\n                        \"email\": \"shankhascm96+1@gmail.com\",\n                        \"name\": \"Shankha\",\n                        \"dob\": \"2000-01-21T00:00:00.000Z\",\n                        \"address\": \"A/4 School Bazar\",\n                        \"description\": \"description\",\n                        \"latitude\": 22.416017,\n                        \"longitude\": 87.32693,\n                        \"createdAt\": \"2021-05-13T12:19:18.766Z\",\n                        \"updatedAt\": \"2021-05-13T12:19:18.766Z\"\n                    }\n                ],\n                \"isActive\": true,\n                \"_id\": \"609d2cbb8097ab6b34bfb283\",\n                \"createdAt\": \"2021-05-13T13:42:19.789Z\",\n                \"updatedAt\": \"2021-05-13T13:42:19.789Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.items.__users",
            "description": "<p>Friend information</p>"
          }
        ]
      }
    },
    "description": "<p>Update user by id</p>",
    "version": "0.0.0",
    "filename": "config/routes/friend.js",
    "groupTitle": "Friends",
    "error": {
      "examples": [
        {
          "title": "Validation Error",
          "content": "422 Unprocessable\n{\n    \"error\": {\n        \"message\": \"Received incoming request (`{METHOD} /api/v1/xxx/xxx`), but could not run action.\",\n        \"errors\": [\n            \"Invalid \\\"{field_name}\\\":\\n  · Value ('xyz') was not passed the validation criteria\"\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "401 Unauthorized\n{\n    \"error\": {\n        \"message\": \"Unauthorized.\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "400 Bad Request\n{\n    \"error\": {\n        \"message\": \"Bad Request.\",\n        \"errors\": [\n            \"Some error message.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/friends:nearby",
    "title": "3. Get All Nearby Friends",
    "name": "GetAllNearbyFriend",
    "group": "Friends",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "maximumDistanceInMeters",
            "description": "<p>Maximum Distance (In Meters) to find the friends.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "200 OK\n{\n    \"data\": {\n        \"message\": \"Friends fetch successful.\",\n        \"items\": [\n            {\n                \"_users\": [\n                    {\n                        \"isActive\": true,\n                        \"_id\": \"609d19464da09840f084926b\",\n                        \"email\": \"shankhascm96+1@gmail.com\",\n                        \"name\": \"Shankha\",\n                        \"dob\": \"2000-01-21T00:00:00.000Z\",\n                        \"address\": \"A/4 School Bazar\",\n                        \"description\": \"description\",\n                        \"latitude\": 22.416017,\n                        \"longitude\": 87.32693,\n                        \"createdAt\": \"2021-05-13T12:19:18.766Z\",\n                        \"updatedAt\": \"2021-05-13T12:19:18.766Z\"\n                    }\n                ],\n                \"isActive\": true,\n                \"_id\": \"609d2cbb8097ab6b34bfb283\",\n                \"createdAt\": \"2021-05-13T13:42:19.789Z\",\n                \"updatedAt\": \"2021-05-13T13:42:19.789Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.items._users",
            "description": "<p>Friend information</p>"
          }
        ]
      }
    },
    "description": "<p>Update user by id</p>",
    "version": "0.0.0",
    "filename": "config/routes/friend.js",
    "groupTitle": "Friends",
    "error": {
      "examples": [
        {
          "title": "Validation Error",
          "content": "422 Unprocessable\n{\n    \"error\": {\n        \"message\": \"Received incoming request (`{METHOD} /api/v1/xxx/xxx`), but could not run action.\",\n        \"errors\": [\n            \"Invalid \\\"{field_name}\\\":\\n  · Value ('xyz') was not passed the validation criteria\"\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "401 Unauthorized\n{\n    \"error\": {\n        \"message\": \"Unauthorized.\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "400 Bad Request\n{\n    \"error\": {\n        \"message\": \"Bad Request.\",\n        \"errors\": [\n            \"Some error message.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/users",
    "title": "1. Get All Users",
    "name": "GetAllUser",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "200 OK\n{\n    \"data\": {\n        \"message\": \"Users fetch successful.\",\n        \"items\": [\n            {\n                \"isActive\": true,\n                \"_id\": \"609d191b4da09840f084926a\",\n                \"email\": \"shankhascm96@gmail.com\",\n                \"name\": \"Shankha\",\n                \"dob\": \"2000-01-21T00:00:00.000Z\",\n                \"address\": \"A/4 School Bazar\",\n                \"description\": \"description\",\n                \"latitude\": 22.415687,\n                \"longitude\": 87.326846,\n                \"createdAt\": \"2021-05-13T12:18:35.461Z\",\n                \"updatedAt\": \"2021-05-13T12:18:35.461Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.items",
            "description": "<p>User information</p>"
          }
        ]
      }
    },
    "description": "<p>Fetch all users</p>",
    "version": "0.0.0",
    "filename": "config/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:userId",
    "title": "2. Get User By Id",
    "name": "GetUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "200 OK\n{\n    \"data\": {\n        \"message\": \"User fetch successful.\",\n        \"items\": [\n            {\n                \"isActive\": true,\n                \"_id\": \"609d191b4da09840f084926a\",\n                \"email\": \"shankhascm96@gmail.com\",\n                \"name\": \"Shankha\",\n                \"dob\": \"2000-01-21T00:00:00.000Z\",\n                \"address\": \"A/4 School Bazar\",\n                \"description\": \"description\",\n                \"latitude\": 22.415687,\n                \"longitude\": 87.326846,\n                \"createdAt\": \"2021-05-13T12:18:35.461Z\",\n                \"updatedAt\": \"2021-05-13T12:18:35.461Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.items",
            "description": "<p>User information</p>"
          }
        ]
      }
    },
    "description": "<p>Fetch user by id</p>",
    "version": "0.0.0",
    "filename": "config/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/api/v1/users/:userId",
    "title": "4. Delete User By Id (Soft Delete)",
    "name": "SoftDeleteUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "200 OK\n{\n    \"data\": {\n        \"message\": \"User delete successful.\",\n        \"items\": [\n            {\n                \"isActive\": false,\n                \"_id\": \"609d191b4da09840f084926a\",\n                \"email\": \"shankhascm96@gmail.com\",\n                \"name\": \"Shankha\",\n                \"dob\": \"2000-01-21T00:00:00.000Z\",\n                \"address\": \"A/4 School Bazar\",\n                \"description\": \"description\",\n                \"latitude\": 22.415687,\n                \"longitude\": 87.326846,\n                \"createdAt\": \"2021-05-13T12:18:35.461Z\",\n                \"updatedAt\": \"2021-05-13T12:18:35.461Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.items",
            "description": "<p>User information</p>"
          }
        ]
      }
    },
    "description": "<p>Soft delete user by id</p>",
    "version": "0.0.0",
    "filename": "config/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/v1/users:undelete/:userId",
    "title": "4. Undo delete User By Id (Soft Delete)",
    "name": "UndoSoftDeleteUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "200 OK\n{\n    \"data\": {\n        \"message\": \"User undo delete successful.\",\n        \"items\": [\n            {\n                \"isActive\": false,\n                \"_id\": \"609d191b4da09840f084926a\",\n                \"email\": \"shankhascm96@gmail.com\",\n                \"name\": \"Shankha\",\n                \"dob\": \"2000-01-21T00:00:00.000Z\",\n                \"address\": \"A/4 School Bazar\",\n                \"description\": \"description\",\n                \"latitude\": 22.415687,\n                \"longitude\": 87.326846,\n                \"createdAt\": \"2021-05-13T12:18:35.461Z\",\n                \"updatedAt\": \"2021-05-13T12:18:35.461Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.items",
            "description": "<p>User information</p>"
          }
        ]
      }
    },
    "description": "<p>Undo soft delete user by id</p>",
    "version": "0.0.0",
    "filename": "config/routes/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "patch",
    "url": "/api/v1/users/:userId",
    "title": "3. Update User By Id",
    "name": "UpdateUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Shankha\",\n  \"dob\": \"2000-01-21\",\n  \"address\": \"A/4 School Bazar\",\n  \"description\": \"description\",\n  \"latitude\": 22.416017,\n  \"longitude\": 87.326930\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success:",
          "content": "200 OK\n{\n    \"data\": {\n        \"message\": \"User update successful.\",\n        \"items\": [\n            {\n                \"isActive\": true,\n                \"_id\": \"609d191b4da09840f084926a\",\n                \"email\": \"shankhascm96@gmail.com\",\n                \"name\": \"Shankha\",\n                \"dob\": \"2000-01-21T00:00:00.000Z\",\n                \"address\": \"A/4 School Bazar\",\n                \"description\": \"description\",\n                \"latitude\": 22.415687,\n                \"longitude\": 87.326846,\n                \"createdAt\": \"2021-05-13T12:18:35.461Z\",\n                \"updatedAt\": \"2021-05-13T12:18:35.461Z\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Success Response Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.message",
            "description": "<p>User friendly message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.items",
            "description": "<p>User information</p>"
          }
        ]
      }
    },
    "description": "<p>Update user by id</p>",
    "version": "0.0.0",
    "filename": "config/routes/user.js",
    "groupTitle": "Users"
  }
] });
