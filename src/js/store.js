import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import filterListReducer from "./reducers/filterListReducer"

const middleware = applyMiddleware(promise(), thunk, logger());


    let company = {
    companyInfo: [
        {
           "id": 1,
           "company": "Joshua Enterprise",
           "status": "critical",
           "backupAcc": "JA-SQL01",
           "dataSet":"JA-SQL01",
           "date": "06/28/16",
           "time": "15:10:23"
        },
        {
           "id": 2,
           "company": "Jonathan Enterprise",
           "status": "critical",
           "backupAcc": "JA-SQL01",
           "dataSet": "JA-SQL01",
           "date": "06/28/16",
           "time": "15:10:23"
        },
        {
           "id": 3,
           "company": "Joshua Enterprise",
           "status": "warning",
           "backupAcc": "JA-SQL01",
           "dataSet": "JA-SQL01",
           "date": "06/28/16",
           "time": "15:10:23"
        },
        {
           "id": 4,
           "company": "Joshua Enterprise",
           "status": "warning",
           "backupAcc": "JA-SQL01",
           "dataSet": "JA-SQL01",
           "date": "06/28/16",
           "time": "15:10:23"
        },
        {
           "id": 5,
           "company": "Joshua Enterprise",
           "status": "warning",
           "backupAcc": "JA-SQL01",
           "dataSet": "JA-SQL02",
           "date": "06/28/16",
           "time": "15:10:23"
        },
        {
           "id": 6,
           "company": "Jennifer Enterprise",
           "status": "success",
           "backupAcc": "JA-DSK01",
           "dataSet": "JA-DSK02",
           "date": "06/28/16",
           "time": "15:10:23"
        },
        {
           "id": 7,
           "company": "Joshua Enterprise",
           "status": "success",
           "backupAcc": "JA-SQL05",
           "dataSet": "JA-SQL05",
           "date": "06/28/16",
           "time": "15:10:23"
        },
     ],
     filter: 'warning'
  }

export default createStore(filterListReducer, company, middleware)
