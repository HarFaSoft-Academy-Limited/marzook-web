{
    "info": {
        "_postman_id": "staff-deductions-api-collection",
        "name": "Staff Deductions API",
        "description": "Complete API collection for managing staff deductions in the school management system",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
        "_exporter_id": "staff-deductions-api"
    },
    "item": [
        {
            "name": "List Staff Deductions",
            "request": {
                "method": "GET",
                "header": [
                    {
                        "key": "Authorization",
                        "value": "Bearer {{auth_token}}",
                        "type": "text"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "url": {
                    "raw": "{{base_url}}/api/v1/staff-deductions?page=1&per_page=15",
                    "host": ["{{base_url}}"],
                    "path": ["api", "v1", "staff-deductions"],
                    "query": [
                        {
                            "key": "page",
                            "value": "1",
                            "description": "Page number for pagination"
                        },
                        {
                            "key": "per_page",
                            "value": "15",
                            "description": "Number of items per page"
                        }
                    ]
                },
                "description": "Retrieve a paginated list of all staff deductions with staff information"
            },
            "response": [
                {
                    "name": "Success Response",
                    "originalRequest": {
                        "method": "GET",
                        "header": [
                            {
                                "key": "Authorization",
                                "value": "Bearer {{auth_token}}",
                                "type": "text"
                            }
                        ],
                        "url": {
                            "raw": "{{base_url}}/api/v1/staff-deductions",
                            "host": ["{{base_url}}"],
                            "path": ["api", "v1", "staff-deductions"]
                        }
                    },
                    "status": "OK",
                    "code": 200,
                    "_postman_previewlanguage": "json",
                    "header": [
                        {
                            "key": "Content-Type",
                            "value": "application/json"
                        }
                    ],
                    "cookie": [],
                    "body": "{\n    \"data\": [\n        {\n            \"id\": 1,\n            \"staff_id\": 5,\n            \"for_month\": \"2025-01-01\",\n            \"type\": \"tax\",\n            \"amount\": \"500.00\",\n            \"created_at\": \"2025-01-15T10:30:00.000000Z\",\n            \"updated_at\": \"2025-01-15T10:30:00.000000Z\",\n            \"staff\": {\n                \"id\": 5,\n                \"name\": \"John Doe\",\n                \"email\": \"john.doe@school.com\"\n            }\n        }\n    ],\n    \"current_page\": 1,\n    \"per_page\": 15,\n    \"total\": 25,\n    \"last_page\": 2\n}"
                }
            ]
        },
        {
            "name": "Create Staff Deduction",
            "request": {
                "method": "POST",
                "header": [
                    {
                        "key": "Authorization",
                        "value": "Bearer {{auth_token}}",
                        "type": "text"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\n    \"staff_id\": 5,\n    \"for_month\": \"2025-01-01\",\n    \"type\": \"tax\",\n    \"amount\": 500.00\n}",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    }
                },
                "url": {
                    "raw": "{{base_url}}/api/v1/staff-deductions",
                    "host": ["{{base_url}}"],
                    "path": ["api", "v1", "staff-deductions"]
                },
                "description": "Create a new staff deduction record. The combination of staff_id, for_month, and type must be unique."
            },
            "response": [
                {
                    "name": "Success Response",
                    "originalRequest": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Authorization",
                                "value": "Bearer {{auth_token}}",
                                "type": "text"
                            },
                            {
                                "key": "Content-Type",
                                "value": "application/json",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"staff_id\": 5,\n    \"for_month\": \"2025-01-01\",\n    \"type\": \"tax\",\n    \"amount\": 500.00\n}"
                        },
                        "url": {
                            "raw": "{{base_url}}/api/v1/staff-deductions",
                            "host": ["{{base_url}}"],
                            "path": ["api", "v1", "staff-deductions"]
                        }
                    },
                    "status": "Created",
                    "code": 201,
                    "_postman_previewlanguage": "json",
                    "header": [
                        {
                            "key": "Content-Type",
                            "value": "application/json"
                        }
                    ],
                    "cookie": [],
                    "body": "{\n    \"id\": 1,\n    \"staff_id\": 5,\n    \"for_month\": \"2025-01-01\",\n    \"type\": \"tax\",\n    \"amount\": \"500.00\",\n    \"created_at\": \"2025-01-15T10:30:00.000000Z\",\n    \"updated_at\": \"2025-01-15T10:30:00.000000Z\"\n}"
                },
                {
                    "name": "Validation Error",
                    "originalRequest": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Authorization",
                                "value": "Bearer {{auth_token}}",
                                "type": "text"
                            },
                            {
                                "key": "Content-Type",
                                "value": "application/json",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"staff_id\": 999,\n    \"for_month\": \"invalid-date\",\n    \"type\": \"\",\n    \"amount\": -100\n}"
                        },
                        "url": {
                            "raw": "{{base_url}}/api/v1/staff-deductions",
                            "host": ["{{base_url}}"],
                            "path": ["api", "v1", "staff-deductions"]
                        }
                    },
                    "status": "Unprocessable Entity",
                    "code": 422,
                    "_postman_previewlanguage": "json",
                    "header": [
                        {
                            "key": "Content-Type",
                            "value": "application/json"
                        }
                    ],
                    "cookie": [],
                    "body": "{\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n        \"staff_id\": [\"The selected staff id is invalid.\"],\n        \"for_month\": [\"The for month is not a valid date.\"],\n        \"type\": [\"The type field is required.\"],\n        \"amount\": [\"The amount must be at least 0.\"]\n    }\n}"
                }
            ]
        },
        {
            "name": "Get Single Staff Deduction",
            "request": {
                "method": "GET",
                "header": [
                    {
                        "key": "Authorization",
                        "value": "Bearer {{auth_token}}",
                        "type": "text"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "url": {
                    "raw": "{{base_url}}/api/v1/staff-deductions/1",
                    "host": ["{{base_url}}"],
                    "path": ["api", "v1", "staff-deductions", "1"]
                },
                "description": "Retrieve a specific staff deduction by ID with staff information"
            },
            "response": [
                {
                    "name": "Success Response",
                    "originalRequest": {
                        "method": "GET",
                        "header": [
                            {
                                "key": "Authorization",
                                "value": "Bearer {{auth_token}}",
                                "type": "text"
                            }
                        ],
                        "url": {
                            "raw": "{{base_url}}/api/v1/staff-deductions/1",
                            "host": ["{{base_url}}"],
                            "path": ["api", "v1", "staff-deductions", "1"]
                        }
                    },
                    "status": "OK",
                    "code": 200,
                    "_postman_previewlanguage": "json",
                    "header": [
                        {
                            "key": "Content-Type",
                            "value": "application/json"
                        }
                    ],
                    "cookie": [],
                    "body": "{\n    \"id\": 1,\n    \"staff_id\": 5,\n    \"for_month\": \"2025-01-01\",\n    \"type\": \"tax\",\n    \"amount\": \"500.00\",\n    \"created_at\": \"2025-01-15T10:30:00.000000Z\",\n    \"updated_at\": \"2025-01-15T10:30:00.000000Z\",\n    \"staff\": {\n        \"id\": 5,\n        \"name\": \"John Doe\",\n        \"email\": \"john.doe@school.com\"\n    }\n}"
                },
                {
                    "name": "Not Found Error",
                    "originalRequest": {
                        "method": "GET",
                        "header": [
                            {
                                "key": "Authorization",
                                "value": "Bearer {{auth_token}}",
                                "type": "text"
                            }
                        ],
                        "url": {
                            "raw": "{{base_url}}/api/v1/staff-deductions/999",
                            "host": ["{{base_url}}"],
                            "path": ["api", "v1", "staff-deductions", "999"]
                        }
                    },
                    "status": "Not Found",
                    "code": 404,
                    "_postman_previewlanguage": "json",
                    "header": [
                        {
                            "key": "Content-Type",
                            "value": "application/json"
                        }
                    ],
                    "cookie": [],
                    "body": "{\n    \"message\": \"No query results for model [App\\\\Models\\\\StaffDeduction] 999\"\n}"
                }
            ]
        },
        {
            "name": "Update Staff Deduction",
            "request": {
                "method": "PUT",
                "header": [
                    {
                        "key": "Authorization",
                        "value": "Bearer {{auth_token}}",
                        "type": "text"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\n    \"staff_id\": 5,\n    \"for_month\": \"2025-01-01\",\n    \"type\": \"tax\",\n    \"amount\": 600.00\n}",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    }
                },
                "url": {
                    "raw": "{{base_url}}/api/v1/staff-deductions/1",
                    "host": ["{{base_url}}"],
                    "path": ["api", "v1", "staff-deductions", "1"]
                },
                "description": "Update an existing staff deduction record"
            },
            "response": [
                {
                    "name": "Success Response",
                    "originalRequest": {
                        "method": "PUT",
                        "header": [
                            {
                                "key": "Authorization",
                                "value": "Bearer {{auth_token}}",
                                "type": "text"
                            },
                            {
                                "key": "Content-Type",
                                "value": "application/json",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"staff_id\": 5,\n    \"for_month\": \"2025-01-01\",\n    \"type\": \"tax\",\n    \"amount\": 600.00\n}"
                        },
                        "url": {
                            "raw": "{{base_url}}/api/v1/staff-deductions/1",
                            "host": ["{{base_url}}"],
                            "path": ["api", "v1", "staff-deductions", "1"]
                        }
                    },
                    "status": "OK",
                    "code": 200,
                    "_postman_previewlanguage": "json",
                    "header": [
                        {
                            "key": "Content-Type",
                            "value": "application/json"
                        }
                    ],
                    "cookie": [],
                    "body": "{\n    \"id\": 1,\n    \"staff_id\": 5,\n    \"for_month\": \"2025-01-01\",\n    \"type\": \"tax\",\n    \"amount\": \"600.00\",\n    \"created_at\": \"2025-01-15T10:30:00.000000Z\",\n    \"updated_at\": \"2025-01-15T11:45:00.000000Z\"\n}"
                }
            ]
        },
        {
            "name": "Delete Staff Deduction",
            "request": {
                "method": "DELETE",
                "header": [
                    {
                        "key": "Authorization",
                        "value": "Bearer {{auth_token}}",
                        "type": "text"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ],
                "url": {
                    "raw": "{{base_url}}/api/v1/staff-deductions/1",
                    "host": ["{{base_url}}"],
                    "path": ["api", "v1", "staff-deductions", "1"]
                },
                "description": "Delete a staff deduction record"
            },
            "response": [
                {
                    "name": "Success Response",
                    "originalRequest": {
                        "method": "DELETE",
                        "header": [
                            {
                                "key": "Authorization",
                                "value": "Bearer {{auth_token}}",
                                "type": "text"
                            }
                        ],
                        "url": {
                            "raw": "{{base_url}}/api/v1/staff-deductions/1",
                            "host": ["{{base_url}}"],
                            "path": ["api", "v1", "staff-deductions", "1"]
                        }
                    },
                    "status": "OK",
                    "code": 200,
                    "_postman_previewlanguage": "json",
                    "header": [
                        {
                            "key": "Content-Type",
                            "value": "application/json"
                        }
                    ],
                    "cookie": [],
                    "body": "{\n    \"message\": \"Staff deduction deleted successfully\"\n}"
                }
            ]
        }
    ],
    "event": [
        {
            "listen": "prerequest",
            "script": {
                "type": "text/javascript",
                "exec": [""]
            }
        },
        {
            "listen": "test",
            "script": {
                "type": "text/javascript",
                "exec": [""]
            }
        }
    ],
    "variable": [
        {
            "key": "base_url",
            "value": "http://localhost:8000",
            "type": "string",
            "description": "Base URL for the API"
        },
        {
            "key": "auth_token",
            "value": "your_auth_token_here",
            "type": "string",
            "description": "Bearer token for authentication"
        }
    ]
}
