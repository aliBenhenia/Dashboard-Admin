import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
  import { useState } from 'react';
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Ecommerce', '1', <PieChartOutlined />),
    getItem('Crypto', '2', <DesktopOutlined />),
    getItem('NFT', '3', <ContainerOutlined />),
    getItem('Apps', 'sub1', <MailOutlined />, [
      getItem('Calender', '5'),
      getItem('Projects', '6'),
      getItem('Tasks', '7'),
      getItem('CRM', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];
  const Leftbar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    return (
      <div className='fixed top-0 left-0 bg-gray-800 z-10'
      style={{
        width : "10",
      }
      }>
        <Button
        class="bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
        className=' h-screen '
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    );
  };
  export default Leftbar;