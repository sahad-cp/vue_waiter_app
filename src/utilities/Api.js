import axios from 'axios';
import Cookie from 'js-cookie';

export const API_URL = "http://localhost:8000"
const APIClientPrivate = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": true,
      Authorization: `Bearer ${Cookie.get('access-token')}`,
    },
   
  });
  
  export const APIClient = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
   
  });
  
  export default APIClientPrivate;


//   path('api/loginApp/',AppLoginApi.as_view(), name='app_login'),
//     path('appApi/categoryProduct/<int:id>/', ProductsFromCategory.as_view()),
//     path('appApi/AttributeProduct/<int:id>',ProductAttributeApi.as_view()),
//     path('appApi/category/',CategoryApi.as_view()),
//     path('appApi/customerApp/',CustomerAppApi.as_view()),
//     path('appApi/TablesApi/',TableAppApi.as_view()),
//     path('appApi/billAppApi/',BillAppApi.as_view()),
//     path('appApi/CustomerOrderApi/',CustomerOrderGetApp.as_view()),
//     path('appApi/AppLogout/',AppLogout.as_view()),
//     path('appApi/RefreshTokenApi/',RefreshTokenApi.as_view()),