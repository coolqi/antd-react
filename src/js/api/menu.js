/**
 * 定义sidebar中的菜单项
 *
 * 一些约定:
 * 1.菜单最多2层;
 * 2.只有"叶子"节点才能跳转;
 * 4.所有的key都不能重复;
 */

const menu = [{
    key: '',
    name: '首页'
  },
  {
    key: 'dashboard',  // route时url中的值
    name: '统计信息',  // 在菜单中显示的名称
    child: [  // 最多只能到二级导航
      {
        key: 'dashboard1',
        name: '统计1',
      },
      {
        key: 'dashboard2',
        name: '统计2',
      }
    ],
  },
  {
    key: 'manage',
    name: '订单管理',
    child: [
      {
        key: 'manage1',
        name: '列表1',
      },
      {
        key: 'manage2',  
        name: '列表2',
      },
    ],
  },
];

export default menu;