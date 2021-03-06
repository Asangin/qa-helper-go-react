import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Layout } from 'antd';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
           <Route exact path='/ping'>
               <Ping />
           </Route>
           <Route exact path='/'>
               <Home />
           </Route>
       </Switch>
   </BrowserRouter>
  );
};

const Home = () => {
  return (
      <div>
          <NavBar />

          <div>
              <h3>Served by Golang server from a single binary file</h3>
          </div>
      </div>
  );
};

const Ping = () => {
  const [notification, setNotification] = useState('');

  const handlePing = async () => {
      try {
          const response = await axios.get('/api/ping');
          setNotification(`Successful ping with response: ${response.data}`);
      } catch (e) {
          setNotification('Failed to ping');
      }

      setTimeout(() => setNotification(''), 2000);
  }

  return (
      <div>
          <NavBar />

          <div>
              <p>{notification}</p>

              {/* <button onClick={handlePing}>Ping</button> */}
              <Button type="primary" icon={<PoweroffOutlined />} onClick={handlePing}>
              Ping!
              </Button>
          </div>
      </div>
  );
};

const NavBar = () => {
  return (
      <div>
          <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/ping'>Ping</a></li>
          </ul>
      </div>
  );
};

export default App;
