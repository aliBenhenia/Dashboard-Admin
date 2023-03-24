import React,{useState} from 'react'
import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Select, Space ,Menu} from 'antd';
const { Option } = Select;
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
export default function Header() {
    const [selectedItems, setSelectedItems] = useState([]);
  return (
    <div className='fixed top-0 w-full bg-gray-800 z-10'>
          <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-300">
      <div className="flex items-center">
      </div>
      <div className="flex items-center " >
      <Select
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Option>
  </Select>
        <button className="relative p-2 ml-4">
          <FaBell size={20} />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">5</span>
        </button>
        <button className="relative p-2 ml-4">
          <FaShoppingCart size={20} />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-green-500 rounded-full">3</span>
            </button>
            <img
          src="https://avatars.githubusercontent.com/u/95689141?v=4"
          alt="Avatar"
          className="w-8 h-8 rounded-full mr-4 ml-3"
        />
            </div>
            </header>
    </div>
  )
}
