
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Explore from './components/Explore/Explore';
import Dashboard from './components/Dashboard/Dashboard';
import Purchase from './components/Purchase/Purchase';
import ManageOrders from './components/ManageOreders/ManageOrders';
import ManageProducts from './components/MangeProducts/ManageProducts';
import AddProduct from './components/AddProduct/AddProduct';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Reviews from './components/Reviews/Reviews';
import Pay from './components/Pay/Pay';
import MyOrders from './components/MyOrders/MyOrders';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import AdminRoute from './components/AdminRoute/AdminRoute'


function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivetRoute path="/purchase">
              <Purchase></Purchase>
            </PrivetRoute>
            <PrivetRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivetRoute>
            <PrivetRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivetRoute>
            <PrivetRoute path="/addproduct">
              <AddProduct></AddProduct>
            </PrivetRoute>
            <PrivetRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivetRoute>
            <PrivetRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivetRoute>
            <PrivetRoute path="/reviews">
              <Reviews></Reviews>
            </PrivetRoute>
            <PrivetRoute path="/pay">
              <Pay></Pay>
            </PrivetRoute>
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
