import {
    AppstoreOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    SettingOutlined, UserAddOutlined, UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';

import {
    Link
} from "react-router-dom";

const items = [
    {
        label: (<Link to={"/"}>Accueil</Link>
        ),
        key: 'Accueil',
        icon: <HomeOutlined />,
    },
    {
        label: (<Link to={"/Option_1"}>Option 1</Link>
        ),
        key: 'option:1',
        icon: <InfoCircleOutlined />,
    },
    {
        label: (<Link to={"/account"}>Se connecter</Link>
        ),
        key: 'account',
        icon: <UserOutlined/>,
    },
    {
        label: (<Link to={"/register"}>S'enregistrer</Link>
        ),
        key: 'register',
        icon: <UserAddOutlined />,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: <Link to={"/test"}>Option 3</Link>,
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
];

const App = () => {
    const [current, setCurrent] = useState('Accueilteams');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;