import React from 'react';
import Tree from '..';
export default function TabDemo() {
  const Data = [
    {
      title: '一级菜单',
      key: '0',
      children: [
        {
          title: '二级菜单0',
          key: '0-0',
          disabled: true,
          children: [
            {
              title: '三级菜单0',
              key: '0-0-0',
              disableCheckbox: true,
            },
            {
              title: '三级菜单1',
              key: '0-0-1',
            },
          ],
        },
        {
          title: '二级菜单1',
          key: '0-1',
          children: [{ title: <span style={{ color: '#1677ff' }}>菜单</span>, key: '0-0-1-0' }],
        },
      ],
    },
  ];
  return (
    <div>
      <Tree treeData={Data} />
    </div>
  );
}
