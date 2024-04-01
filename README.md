# FORM BUILDER BACKEND


# This service is used to store the data of the user and the organization

### Technologies used
- Node js

- Express js

- MySql

- Sequilize

### POST Request URL of service for user registration
  >(http://localhost:5000/users/register)
  
  - In this case we would register user and store the user data in the database
  
### POST Request URL of service using username and password
  >(http://localhost:5000/users/login)

  - In this case we would login the user using username and password and send the response of a jwt token to verify the user in further request

### POST Request URL to store form data of user
  >(http://localhost:5000/users/postForm)

  - In this case we would post the form data of the user filled in the form of organization.

### GET Request URL to get organization form
  >(http://localhost:5000/users/getForm)

  - In this case we would get the form data organization posted

### POST Request URL of service for organization registration
  >(http://localhost:5000/org/register)
  
  - In this case we would register organization and store the organization data in the database
  
### POST Request URL of service using username and password
  >(http://localhost:5000/org/login)

  - In this case we would login the organization using username and password and send the response of a jwt token to verify the organization in further request

### POST Request URL to store form fields and label of organization
  >(http://localhost:5000/org/postForm)

  - In this case we would post the form label and fields of the organization.

### GET Request URL to get user form
  >(http://localhost:5000/org/getUserSubmission)

  - In this case we would get the form data user posted in our fields

### Example

### POST request URL for org to post form field, placeholder and type
  >(http://localhost:5000/org/postForm)

      Request
      '''
        {
            "org_id":1,
            "form_name":"test",
            "field_type": "1:textbox,2:radiobutton,3:dropdown,4:textbox",
            "field_label": "1:name,2:isload,3:test,4:lastname",
            "field_options": "3:{test1,test2,test3}"
        }   
      Response
        {
          "message": "Form created successfully",
          "form": {
              "id": 2,
              "org_id": 1,
              "form_name": "test",
              "updatedAt": "2024-04-01T13:48:27.711Z",
              "createdAt": "2024-04-01T13:48:27.711Z"
          }
        }
      '''
      
### GET Request URL of all Organization Form data and fields
  >(http://localhost:5000/users/getForm)
  
    Response
      '''
       {
        "forms": [
              {
                "id": 1,
                "org_id": 1,
                "form_name": "this is celoni",
                "createdAt": "2024-04-01T09:07:05.000Z",
                "updatedAt": "2024-04-01T09:07:05.000Z",
                "form_fields": [
                      {
                          "id": 1,
                          "form_id": 1,
                          "field_type": "1:textbox,2:dropdown",
                          "field_label": "1:this is celoni,2:testttt",
                          "field_options": "2:testtt",
                          "createdAt": "2024-04-01T09:07:05.000Z",
                          "updatedAt": "2024-04-01T09:07:05.000Z"
                      }
                    ]
              },
              {
                  "id": 2,
                  "org_id": 1,
                  "form_name": "test",
                  "createdAt": "2024-04-01T13:48:27.000Z",
                  "updatedAt": "2024-04-01T13:48:27.000Z",
                  "form_fields": [
                      {
                          "id": 2,
                          "form_id": 2,
                          "field_type": "1:textbox,2:radiobutton,3:dropdown,4:textbox",
                          "field_label": "1:name,2:isload,3:test,4:lastname",
                          "field_options": "3:{test1,test2,test3}",
                          "createdAt": "2024-04-01T13:48:27.000Z",
                          "updatedAt": "2024-04-01T13:48:27.000Z"
                      }
                  ]
              }
          ]
    }
      '''
    
### GET Request URL for organization to get user submitted data
  >(http://localhost:5000/org/getUserSubmission)
  
    Response
      '''
            {
        "forms": [
            {
                "id": 1,
                "org_id": 1,
                "form_name": "this is celoni",
                "createdAt": "2024-04-01T09:07:05.000Z",
                "updatedAt": "2024-04-01T09:07:05.000Z",
                "form_fields": [
                    {
                        "id": 1,
                        "form_id": 1,
                        "field_type": "1:textbox,2:dropdown",
                        "field_label": "1:this is celoni,2:testttt",
                        "field_options": "2:testtt",
                        "createdAt": "2024-04-01T09:07:05.000Z",
                        "updatedAt": "2024-04-01T09:07:05.000Z"
                    }
                ],
                "submissions": [
                    {
                        "id": 3,
                        "form_id": 1,
                        "user_id": 1,
                        "user_data": "{\n\"user_data\":{\n\"inputData\":{\n\"0\":{\n\"label\":\"fdsa\",\n\"type\":\"textfield\"\n}\n},\n\"dropwDown\":[\nnull,\n{\n\"label\":\"testtt\",\n\"type\":\"dropdown\"\n}\n]\n}\n}",
                        "createdAt": "2024-04-01T09:15:59.000Z",
                        "updatedAt": "2024-04-01T09:15:59.000Z"
                    },
                    {
                        "id": 2,
                        "form_id": 1,
                        "user_id": 1,
                        "user_data": "{\n  \"user_data\": {}\n}",
                        "createdAt": "2024-04-01T09:08:29.000Z",
                        "updatedAt": "2024-04-01T09:08:29.000Z"
                    },
                    {
                        "id": 1,
                        "form_id": 1,
                        "user_id": 1,
                        "user_data": "{\n\"user_data\":{\n\"inputData\":{\n\"0\":{\n\"label\":\"test\",\n\"type\":\"textfield\"\n}\n},\n\"dropwDown\":[\nnull,\n{\n\"label\":\"testtt\",\n\"type\":\"dropdown\"\n}\n]\n}\n}",
                        "createdAt": "2024-04-01T09:07:27.000Z",
                        "updatedAt": "2024-04-01T09:07:27.000Z"
                    }
                ]
            },
            {
                "id": 2,
                "org_id": 1,
                "form_name": "test",
                "createdAt": "2024-04-01T13:48:27.000Z",
                "updatedAt": "2024-04-01T13:48:27.000Z",
                "form_fields": [
                    {
                        "id": 2,
                        "form_id": 2,
                        "field_type": "1:textbox,2:radiobutton,3:dropdown,4:textbox",
                        "field_label": "1:name,2:isload,3:test,4:lastname",
                        "field_options": "3:{test1,test2,test3}",
                        "createdAt": "2024-04-01T13:48:27.000Z",
                        "updatedAt": "2024-04-01T13:48:27.000Z"
                    }
                ],
                "submissions": []
            }
        ]
    }
      '''
      
### Post Request URL using email and password for user login
  >(http://localhost:5000/users/login)
  
    Request
      '''
        {
          "email" : "test",
          "password":"test"
        }
        Response
        {
          "user": {
              "id": 1,
              "username": "test",
              "email": "test",
              "password": "$2a$10$unQR6168FUBpssQAMjwlUu8NGZ2NRoyH0UMuYLATeuXemMbxF19rS",
              "createdAt": "2024-04-01T05:30:12.000Z",
              "updatedAt": "2024-04-01T05:30:12.000Z"
          },
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMTk3OTkxMywiZXhwIjoxNzExOTgzNTEzfQ.WQnHxpeIMLmggetsMo2Q1RjdFWYcfNMCyRnBhigpGFE"
        }
      '''


### Developer: Raghav GC

### Contact: raghavgc11@gmail.com

### Thank you
