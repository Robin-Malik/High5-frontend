import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import AdminNavbar from './components/AdminNavbar'
import HomePage from './pages/HomePage'
import SurveryCreatePage from './pages/SurveryCreatePage'
import SurveyListPage from './pages/SurveyListPage'
import { store } from './redux/store'
import SingleComponentTestPage from './pages/SingleComponentTestPage'
import { fetchSurveyWithId } from './redux/surveyAction'
import Login from './components/Auth/Login'
import ForgotPassword from './components/Auth/ForgotPassword'
import ResetPassword from './components/Auth/ResetPassword'
import ManageUsers from './components/AdminPanel/ManageUsers'
import Earnings from './components/AdminPanel/Earnings'
import MyProfile from './components/MyProfile'
import MyRewards from './components/MyRewards'
import TreeChart from './components/OrgChart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/test" element={<SingleComponentTestPage />} />
      <Route path="/" element={<Login/>} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path='/forgot/password' element= {<ForgotPassword/>}/>
      <Route path='/reset/password/passwordreset/:uidb64/:token' element= {<ResetPassword/>}/>
      <Route path='/my/rewards' element={<MyRewards />}/>
      <Route path='/company/users' element={<ManageUsers/>}/>
      <Route path='/company/account' element={<Earnings/>}/>
      <Route path='/myProfile' element={<MyProfile/>}/>
      <Route
        path="/survey"
        element={
          <>
            <AdminNavbar to="/survey" title="Survey Dashboard" />
            <Outlet />
          </>
        }
      >
        <Route index element={<SurveyListPage />}></Route>
        <Route
          path="/survey/create"
          element={<SurveryCreatePage />}
        />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

