import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import MovieList from './MovieModule/MovieList';
import { BrowserRouter as Router } from 'react-router-dom'
import Public from './routes/public';

const { Header, Content, Footer } = Layout


const App = () =>(
  <Layout className="layout">
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Header>
  <Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-content">
      <Router>
      <Public />
      </Router>
    </div>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Movie List</Footer>
</Layout>
)

export default App;
