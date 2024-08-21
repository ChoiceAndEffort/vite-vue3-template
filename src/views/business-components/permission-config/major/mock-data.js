export const mockData = {
  success: true,
  code: '200',
  msg: '操作成功',
  requestId: '',
  timestamp: '2024-08-06 17:47:53.808',
  data: [
    {
      powerId: '000000008ba875a4018bad0b34a300cf',
      pid: '0',
      pathId: '000000008ba875a4018bad0b34a300cf',
      pathName: '生产首页',
      powerIcon: 'icon-shouye',
      iconColor: '',
      powerName: '生产首页',
      powerType: 'M',
      level: 1,
      sortNo: 1,
      remark: '个人中心',
      status: 'O',
      otherRemark: '{"componentMapping":"home"}',
      terminalType: 'B',
      terminalRoute: '/home',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-07-29 10:08:31',
      hasChildren: false,
      children: []
    },
    {
      powerId: 'ff808081905dcfe60190d998d0642230',
      pid: '0',
      pathId: 'ff808081905dcfe60190d998d0642230',
      pathName: '涂装首页',
      powerIcon: null,
      iconColor: null,
      powerName: '涂装首页',
      powerType: 'M',
      level: 1,
      sortNo: 2,
      remark: null,
      status: 'O',
      otherRemark: '{"componentMapping":"coating-home"}',
      terminalType: 'B',
      terminalRoute: '/coating-home',
      addTime: '2024-07-22 16:39:49',
      updTime: '2024-07-30 08:51:45',
      hasChildren: false,
      children: []
    },
    {
      powerId: 'ff8080818ec19a1a0190546df6260b4d',
      pid: '0',
      pathId: 'ff8080818ec19a1a0190546df6260b4d',
      pathName: '督办看板',
      powerIcon: null,
      iconColor: null,
      powerName: '督办看板',
      powerType: 'M',
      level: 1,
      sortNo: 3,
      remark: null,
      status: 'O',
      otherRemark: '{"componentMapping":"supervision-board/major"}',
      terminalType: 'B',
      terminalRoute: '/supervision-board',
      addTime: '2024-06-26 20:03:31',
      updTime: '2024-07-26 17:09:58',

      children: [
        {
          powerId: 'ff8080818ec19a1a0190546e95cb0b4e',
          pid: 'ff8080818ec19a1a0190546df6260b4d',
          pathId:
            'ff8080818ec19a1a0190546df6260b4d,ff8080818ec19a1a0190546e95cb0b4e',
          pathName: '督办看板,导出',
          powerIcon: null,
          iconColor: null,
          powerName: '导出',
          powerType: 'B',
          level: 2,
          sortNo: 1,
          remark: null,
          status: 'O',
          otherRemark: null,
          terminalType: 'B',
          terminalRoute: 'export',
          addTime: '2024-06-26 20:04:12',
          updTime: '2024-07-29 11:21:50',
          hasChildren: false,
          children: null
        }
      ]
    },
    {
      powerId: '2c9ff40f8caf335d018cafc4f72e00c4',
      pid: '0',
      pathId: '2c9ff40f8caf335d018cafc4f72e00c4',
      pathName: '个人中心',
      powerIcon: 'icon-prefixIcon2',
      iconColor: null,
      powerName: '个人中心',
      powerType: 'M',
      level: 1,
      sortNo: 4,
      remark: null,
      status: 'O',
      otherRemark: '{"componentMapping":""}',
      terminalType: 'B',
      terminalRoute: '/personal-center',
      addTime: '2023-12-28 17:32:50',
      updTime: '2024-07-26 17:09:56',
      //
      children: [
        {
          powerId: '2c9ff40f8caf335d018cafdeb3c500c5',
          pid: '2c9ff40f8caf335d018cafc4f72e00c4',
          pathId:
            '2c9ff40f8caf335d018cafc4f72e00c4,2c9ff40f8caf335d018cafdeb3c500c5',
          pathName: '个人中心,待办事项',
          powerIcon: 'icon-a-Group427320862',
          iconColor: '#BA45AB',
          powerName: '待办事项',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"personal-center/to-do-list/major"}',
          terminalType: 'B',
          terminalRoute: 'to-do-list',
          addTime: '2023-12-28 18:00:57',
          updTime: '2024-07-29 09:14:49',

          children: [
            {
              powerId: '2c9ff40d8caf330d018cafdf015d00bf',
              pid: '2c9ff40f8caf335d018cafdeb3c500c5',
              pathId:
                '2c9ff40f8caf335d018cafc4f72e00c4,2c9ff40f8caf335d018cafdeb3c500c5,2c9ff40d8caf330d018cafdf015d00bf',
              pathName: '个人中心1,待办事项,任务转交',
              powerIcon: null,
              iconColor: null,
              powerName: '任务转交',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'taskTransfer',
              addTime: '2023-12-28 18:01:17',
              updTime: '2024-07-29 14:34:25',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40f8caf335d018cafe8107100c6',
              pid: '2c9ff40f8caf335d018cafdeb3c500c5',
              pathId:
                '2c9ff40f8caf335d018cafc4f72e00c4,2c9ff40f8caf335d018cafdeb3c500c5,2c9ff40f8caf335d018cafe8107100c6',
              pathName: '个人中心1,待办事项,提交',
              powerIcon: null,
              iconColor: null,
              powerName: '提交',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'commit',
              addTime: '2023-12-28 18:11:11',
              updTime: '2024-07-29 14:34:30',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40e8caf33bd018cafe9899100c6',
              pid: '2c9ff40f8caf335d018cafdeb3c500c5',
              pathId:
                '2c9ff40f8caf335d018cafc4f72e00c4,2c9ff40f8caf335d018cafdeb3c500c5,2c9ff40e8caf33bd018cafe9899100c6',
              pathName: '个人中心,待办事项,事项详情',
              powerIcon: null,
              iconColor: null,
              powerName: '事项详情',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"personal-center/to-do-list/detail"}',
              terminalType: 'B',
              terminalRoute: 'matter-detail',
              addTime: '2023-12-28 18:12:47',
              updTime: '2024-07-29 14:34:28',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40f8caf335d018cafe8992b00c7',
              pid: '2c9ff40f8caf335d018cafdeb3c500c5',
              pathId:
                '2c9ff40f8caf335d018cafc4f72e00c4,2c9ff40f8caf335d018cafdeb3c500c5,2c9ff40f8caf335d018cafe8992b00c7',
              pathName: '个人中心,待办事项,事项提交',
              powerIcon: null,
              iconColor: null,
              powerName: '事项提交',
              powerType: 'P',
              level: 3,
              sortNo: 4,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"personal-center/to-do-list/detail"}',
              terminalType: 'B',
              terminalRoute: 'matter-commit',
              addTime: '2023-12-28 18:11:46',
              updTime: '2024-07-29 14:34:31',

              children: [
                {
                  powerId: '2c9ff40f8caf335d018cafe90e0200c8',
                  pid: '2c9ff40f8caf335d018cafe8992b00c7',
                  pathId:
                    '2c9ff40f8caf335d018cafc4f72e00c4,2c9ff40f8caf335d018cafdeb3c500c5,2c9ff40f8caf335d018cafe8992b00c7,2c9ff40f8caf335d018cafe90e0200c8',
                  pathName: '个人中心,待办事项,事项提交,事项提交',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '事项提交',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: 'null',
                  terminalType: 'B',
                  terminalRoute: 'save',
                  addTime: '2023-12-28 18:12:15',
                  updTime: '2024-07-29 14:34:31',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      powerId: '402894f58b45969b018b459703e40000',
      pid: '0',
      pathId: '402894f58b45969b018b459703e40000',
      pathName: '人事管理',
      powerIcon: 'icon-icon-user',
      iconColor: '',
      powerName: '人事管理',
      powerType: 'M',
      level: 1,
      sortNo: 5,
      remark: '人事管理',
      status: 'O',
      otherRemark: '{"componentMapping":""}',
      terminalType: 'B',
      terminalRoute: '/personnel-management',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-07-26 15:18:18',

      children: [
        {
          powerId: '402894f58b45969b018b459a15200001',
          pid: '402894f58b45969b018b459703e40000',
          pathId:
            '402894f58b45969b018b459703e40000,402894f58b45969b018b459a15200001',
          pathName: '人事管理,组织架构',
          powerIcon: 'icon-icon_zuzhijiagou',
          iconColor: '#6696F3',
          powerName: '组织架构',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: '组织架构',
          status: 'O',
          otherRemark:
            '{"componentMapping":"personnel-management/organization/major"}',
          terminalType: 'B',
          terminalRoute: 'organization-list',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:57',

          children: [
            {
              powerId: '000000008c1ec209018c1f198c7400d5',
              pid: '402894f58b45969b018b459a15200001',
              pathId:
                '402894f58b45969b018b459703e40000,402894f58b45969b018b459a15200001,000000008c1ec209018c1f198c7400d5',
              pathName: '人事管理,组织架构,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-29 14:38:45',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '402894f58b45969b018b459b22330002',
          pid: '402894f58b45969b018b459703e40000',
          pathId:
            '402894f58b45969b018b459703e40000,402894f58b45969b018b459b22330002',
          pathName: '人事管理,人员信息',
          powerIcon: 'icon-icon_renyuanxinxi',
          iconColor: '#BA45AB',
          powerName: '人员信息',
          powerType: 'M',
          level: 2,
          sortNo: 2,
          remark: '人员信息',
          status: 'O',
          otherRemark:
            '{"componentMapping":"personnel-management/personnel-information/major"}',
          terminalType: 'B',
          terminalRoute: 'personnel-information-list',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:57',

          children: [
            {
              powerId: '402894a78c1f277b018c1f2d74cf0000',
              pid: '402894f58b45969b018b459b22330002',
              pathId:
                '402894f58b45969b018b459703e40000,402894f58b45969b018b459b22330002,402894a78c1f277b018c1f2d74cf0000',
              pathName: '人事管理,人员信息,配置工种',
              powerIcon: null,
              iconColor: null,
              powerName: '配置工种',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'config',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '402894f58b45969b018b459c03f70003',
          pid: '402894f58b45969b018b459703e40000',
          pathId:
            '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003',
          pathName: '人事管理,工种管理',
          powerIcon: 'icon-icon_gongzhongguanli',
          iconColor: '#42D9C7',
          powerName: '工种管理',
          powerType: 'M',
          level: 2,
          sortNo: 3,
          remark: '工种管理',
          status: 'O',
          otherRemark:
            '{"componentMapping":"personnel-management/job-management/major"}',
          terminalType: 'B',
          terminalRoute: 'job-management-list',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:57',

          children: [
            {
              powerId: '000000008c46f2f9018c583fb2851359',
              pid: '402894f58b45969b018b459c03f70003',
              pathId:
                '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003,000000008c46f2f9018c583fb2851359',
              pathName: '人事管理,工种管理,工种导入',
              powerIcon: null,
              iconColor: null,
              powerName: '工种导入',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'upload',
              addTime: '2023-12-11 17:40:19',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1f2459018c1f3290d70000',
              pid: '402894f58b45969b018b459c03f70003',
              pathId:
                '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003,000000008c1f2459018c1f3290d70000',
              pathName: '人事管理,工种管理,下载模板',
              powerIcon: null,
              iconColor: null,
              powerName: '下载模板',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'download',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1f2459018c1f32e3380001',
              pid: '402894f58b45969b018b459c03f70003',
              pathId:
                '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003,000000008c1f2459018c1f32e3380001',
              pathName: '人事管理,工种管理,编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑',
              powerType: 'B',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1f2459018c1f3338be0002',
              pid: '402894f58b45969b018b459c03f70003',
              pathId:
                '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003,000000008c1f2459018c1f3338be0002',
              pathName: '人事管理,工种管理,删除',
              powerIcon: null,
              iconColor: null,
              powerName: '删除',
              powerType: 'B',
              level: 3,
              sortNo: 4,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'delete',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1f2459018c1f343baf0004',
              pid: '402894f58b45969b018b459c03f70003',
              pathId:
                '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003,000000008c1f2459018c1f343baf0004',
              pathName: '人事管理,工种管理,新增',
              powerIcon: null,
              iconColor: null,
              powerName: '新增',
              powerType: 'B',
              level: 3,
              sortNo: 5,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'add',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            },
            {
              powerId: 'ff808081905dcfe60190de3372992908',
              pid: '402894f58b45969b018b459c03f70003',
              pathId:
                '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003,ff808081905dcfe60190de3372992908',
              pathName: '人事管理,工种管理,工种导入',
              powerIcon: null,
              iconColor: null,
              powerName: '工种导入',
              powerType: 'P',
              level: 3,
              sortNo: 6,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"personnel-management/job-management/export"}',
              terminalType: 'B',
              terminalRoute: 'job-management-export',
              addTime: '2024-07-23 14:07:12',
              updTime: '2024-07-26 16:48:54',

              children: [
                {
                  powerId: 'ff808081905dcfe60190de374eb7292d',
                  pid: 'ff808081905dcfe60190de3372992908',
                  pathId:
                    '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003,ff808081905dcfe60190de3372992908,ff808081905dcfe60190de374eb7292d',
                  pathName: '人事管理,工种管理,工种导入,保存',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '保存',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: '""',
                  terminalType: 'B',
                  terminalRoute: 'save',
                  addTime: '2024-07-23 14:11:25',
                  updTime: '2024-07-25 10:24:57',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff808081905dcfe60190de56deaa2df9',
                  pid: 'ff808081905dcfe60190de3372992908',
                  pathId:
                    '402894f58b45969b018b459703e40000,402894f58b45969b018b459c03f70003,ff808081905dcfe60190de3372992908,ff808081905dcfe60190de56deaa2df9',
                  pathName: '人事管理,工种管理,工种导入,工种导入',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工种导入',
                  powerType: 'B',
                  level: 4,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'import',
                  addTime: '2024-07-23 14:45:53',
                  updTime: '2024-07-25 10:24:57',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba749586d0078',
          pid: '402894f58b45969b018b459703e40000',
          pathId:
            '402894f58b45969b018b459703e40000,000000008ba31ae2018ba749586d0078',
          pathName: '人事管理,钉钉配置',
          powerIcon: 'icon-icon_dingdingpeizhi',
          iconColor: '#1678FF',
          powerName: '钉钉配置',
          powerType: 'M',
          level: 2,
          sortNo: 4,
          remark: '钉钉配置',
          status: 'O',
          otherRemark:
            '{"componentMapping":"personnel-management/dingding/major"}',
          terminalType: 'B',
          terminalRoute: 'dingding',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:57',

          children: [
            {
              powerId: '000000008c1f2459018c1f379cf8000c',
              pid: '000000008ba31ae2018ba749586d0078',
              pathId:
                '402894f58b45969b018b459703e40000,000000008ba31ae2018ba749586d0078,000000008c1f2459018c1f379cf8000c',
              pathName: '人事管理,钉钉配置,同步',
              powerIcon: null,
              iconColor: null,
              powerName: '同步',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'sync',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1f2459018c1f37530b000b',
              pid: '000000008ba31ae2018ba749586d0078',
              pathId:
                '402894f58b45969b018b459703e40000,000000008ba31ae2018ba749586d0078,000000008c1f2459018c1f37530b000b',
              pathName: '人事管理,钉钉配置,编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba74812af0075',
          pid: '402894f58b45969b018b459703e40000',
          pathId:
            '402894f58b45969b018b459703e40000,000000008ba31ae2018ba74812af0075',
          pathName: '人事管理,考勤管理',
          powerIcon: 'icon-icon_kaoqinguanli',
          iconColor: '#FFD84D',
          powerName: '考勤管理',
          powerType: 'M',
          level: 2,
          sortNo: 5,
          remark: '考勤管理',
          status: 'O',
          otherRemark:
            '{"componentMapping":"personnel-management/attendance-management"}',
          terminalType: 'B',
          terminalRoute: 'attendance-management-list',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:57',

          children: [
            {
              powerId: '000000008ba31ae2018ba748972f0076',
              pid: '000000008ba31ae2018ba74812af0075',
              pathId:
                '402894f58b45969b018b459703e40000,000000008ba31ae2018ba74812af0075,000000008ba31ae2018ba748972f0076',
              pathName: '人事管理,考勤管理,考勤导入',
              powerIcon: null,
              iconColor: '',
              powerName: '考勤导入',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: '考勤导入',
              status: 'O',
              otherRemark:
                '{"componentMapping":"personnel-management/attendance-management/export"}',
              terminalType: 'B',
              terminalRoute: 'attendance-management-export',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 16:45:34',

              children: [
                {
                  powerId: '000000008c1f2459018c1f36a2c00009',
                  pid: '000000008ba31ae2018ba748972f0076',
                  pathId:
                    '402894f58b45969b018b459703e40000,000000008ba31ae2018ba74812af0075,000000008ba31ae2018ba748972f0076,000000008c1f2459018c1f36a2c00009',
                  pathName: '人事管理,考勤管理,考勤导入,保存',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '保存',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: 'null',
                  terminalType: 'B',
                  terminalRoute: 'save',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:57',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: '000000008c1f2459018c1f3583ae0007',
              pid: '000000008ba31ae2018ba74812af0075',
              pathId:
                '402894f58b45969b018b459703e40000,000000008ba31ae2018ba74812af0075,000000008c1f2459018c1f3583ae0007',
              pathName: '人事管理,考勤管理,考勤导入',
              powerIcon: null,
              iconColor: null,
              powerName: '考勤导入',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'import',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1f2459018c1f35ca070008',
              pid: '000000008ba31ae2018ba74812af0075',
              pathId:
                '402894f58b45969b018b459703e40000,000000008ba31ae2018ba74812af0075,000000008c1f2459018c1f35ca070008',
              pathName: '人事管理,考勤管理,考勤导出',
              powerIcon: null,
              iconColor: null,
              powerName: '考勤导出',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'download',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba749036e0077',
          pid: '402894f58b45969b018b459703e40000',
          pathId:
            '402894f58b45969b018b459703e40000,000000008ba31ae2018ba749036e0077',
          pathName: '人事管理,奖罚台账',
          powerIcon: 'icon-icon_jiangchengtaizhang',
          iconColor: '#FF865D',
          powerName: '奖罚台账',
          powerType: 'M',
          level: 2,
          sortNo: 7,
          remark: '奖罚台账',
          status: 'O',
          otherRemark:
            '{"componentMapping":"personnel-management/reward-punishment"}',
          terminalType: 'B',
          terminalRoute: 'reward-punishment-list',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:57',

          children: [
            {
              powerId: '2c9ff40f8d0cae39018d2077d5061237',
              pid: '000000008ba31ae2018ba749036e0077',
              pathId:
                '402894f58b45969b018b459703e40000,000000008ba31ae2018ba749036e0077,2c9ff40f8d0cae39018d2077d5061237',
              pathName: '人事管理,奖罚台账,奖罚详情',
              powerIcon: null,
              iconColor: null,
              powerName: '奖罚详情',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"personnel-management/reward-punishment/detail"}',
              terminalType: 'B',
              terminalRoute: 'reward-punishment-detail',
              addTime: '2024-01-19 14:45:41',
              updTime: '2024-07-26 16:51:52',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22de0ffd1845',
              pid: '000000008ba31ae2018ba749036e0077',
              pathId:
                '402894f58b45969b018b459703e40000,000000008ba31ae2018ba749036e0077,402894a78c1f6f9e018c22de0ffd1845',
              pathName: '人事管理,奖罚台账,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'download',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:57',
              hasChildren: false,
              children: null
            }
          ]
        }
      ]
    },
    {
      powerId: '402894f58ba34981018ba34bc2aa0001',
      pid: '0',
      pathId: '402894f58ba34981018ba34bc2aa0001',
      pathName: '项目信息',
      powerIcon: 'icon-prefixIcon',
      iconColor: '#2EC889',
      powerName: '项目信息',
      powerType: 'M',
      level: 1,
      sortNo: 6,
      remark: '项目信息',
      status: 'O',
      otherRemark:
        '{"componentMapping":"project-information/project-information-list/major"}',
      terminalType: 'B',
      terminalRoute: '/project-information',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-07-26 15:18:25',

      children: [
        {
          powerId: '402894a78c1f6f9e018c1fc8211f04ce',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,402894a78c1f6f9e018c1fc8211f04ce',
          pathName: '项目信息,新增',
          powerIcon: null,
          iconColor: null,
          powerName: '新增',
          powerType: 'B',
          level: 2,
          sortNo: 1,
          remark: '新增按钮',
          status: 'O',
          otherRemark: null,
          terminalType: 'B',
          terminalRoute: 'add',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:58',
          hasChildren: false,
          children: null
        },
        {
          powerId: '402894a78c1f6f9e018c1fc8bddf04cf',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,402894a78c1f6f9e018c1fc8bddf04cf',
          pathName: '项目信息,配置',
          powerIcon: null,
          iconColor: null,
          powerName: '配置',
          powerType: 'B',
          level: 2,
          sortNo: 2,
          remark: '配置按钮',
          status: 'O',
          otherRemark: null,
          terminalType: 'B',
          terminalRoute: 'config',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:58',
          hasChildren: false,
          children: null
        },
        {
          powerId: '402894a78c1f6f9e018c1fc926bf04d0',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,402894a78c1f6f9e018c1fc926bf04d0',
          pathName: '项目信息,删除',
          powerIcon: null,
          iconColor: null,
          powerName: '删除',
          powerType: 'B',
          level: 2,
          sortNo: 3,
          remark: '删除',
          status: 'O',
          otherRemark: null,
          terminalType: 'B',
          terminalRoute: 'delete',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:58',
          hasChildren: false,
          children: null
        },
        {
          powerId: '000000008ba31ae2018ba3a9156a0037',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3a9156a0037',
          pathName: '项目信息,项目新增',
          powerIcon: null,
          iconColor: '',
          powerName: '项目新增',
          powerType: 'P',
          level: 2,
          sortNo: 4,
          remark: '新增项目',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/project-information-list/add","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'project-information-add',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:58',
          hasChildren: false,
          children: null
        },
        {
          powerId: '000000008ba31ae2018ba390122c0014',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba390122c0014',
          pathName: '项目信息,项目详情',
          powerIcon: null,
          iconColor: '#2EC889',
          powerName: '项目详情',
          powerType: 'P',
          level: 2,
          sortNo: 5,
          remark: '项目基础信息-详情',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/basic-information/detail","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'basic-information-detail',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:58',
          hasChildren: false,
          children: null
        },
        {
          powerId: '000000008ba31ae2018ba3a9d7800038',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3a9d7800038',
          pathName: '项目信息,基础信息',
          powerIcon: 'icon-icon_jichuxinxi',
          iconColor: '#6696F3',
          powerName: '基础信息',
          powerType: 'P',
          level: 2,
          sortNo: 6,
          remark: '项目信息-编辑',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/basic-information/edit1","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'basic-information-edit',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:58',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1fe9831e0ae3',
              pid: '000000008ba31ae2018ba3a9d7800038',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3a9d7800038,402894a78c1f6f9e018c1fe9831e0ae3',
              pathName: '项目信息,项目配置,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba3915e240015',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3915e240015',
          pathName: '项目信息,工艺配置详情',
          powerIcon: null,
          iconColor: '',
          powerName: '工艺配置详情',
          powerType: 'P',
          level: 2,
          sortNo: 7,
          remark: '工艺配置-详情',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/process-config/detail","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'process-config-detail',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',
          hasChildren: false,
          children: null
        },
        {
          powerId: '000000008ba31ae2018ba3aa644a0039',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3aa644a0039',
          pathName: '项目信息,工艺配置',
          powerIcon: 'icon-icon_gongyipeizhi',
          iconColor: '#1678FF',
          powerName: '工艺配置',
          powerType: 'P',
          level: 2,
          sortNo: 8,
          remark: '工艺配置-编辑',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/process-config/edit","levelIncrease":true,"isQuickEntry":true,"entryTitle":"工艺配置"}',
          terminalType: 'B',
          terminalRoute: 'process-config-edit',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1fdc386305cd',
              pid: '000000008ba31ae2018ba3aa644a0039',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3aa644a0039,402894a78c1f6f9e018c1fdc386305cd',
              pathName: '项目信息,工艺配置,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: '保存',
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba393c4ae0018',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba393c4ae0018',
          pathName: '项目信息,检验配置详情',
          powerIcon: null,
          iconColor: '',
          powerName: '检验配置详情',
          powerType: 'P',
          level: 2,
          sortNo: 9,
          remark: '检验配置-详情',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/check-config/detail","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'check-config-detail',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',
          hasChildren: false,
          children: null
        },
        {
          powerId: '000000008ba31ae2018ba3aac65f003a',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3aac65f003a',
          pathName: '项目信息,检验配置',
          powerIcon: 'icon-icon_jianyanpeizhi',
          iconColor: '#1AB9FD',
          powerName: '检验配置',
          powerType: 'P',
          level: 2,
          sortNo: 10,
          remark: '检验配置-修改',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/check-config/edit","levelIncrease":true,"isQuickEntry":true,"entryTitle":"检验配置"}',
          terminalType: 'B',
          terminalRoute: 'check-config-edit',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1fdda6de05ce',
              pid: '000000008ba31ae2018ba3aac65f003a',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3aac65f003a,402894a78c1f6f9e018c1fdda6de05ce',
              pathName: '项目信息,检验配置,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba3944d95001a',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3944d95001a',
          pathName: '项目信息,数据详情列表',
          powerIcon: null,
          iconColor: '',
          powerName: '数据详情列表',
          powerType: 'P',
          level: 2,
          sortNo: 11,
          remark: '数据管理-详情',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/data-manage/major","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'data-manage-detail-major',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '000000008ba31ae2018ba3984c190020',
              pid: '000000008ba31ae2018ba3944d95001a',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3944d95001a,000000008ba31ae2018ba3984c190020',
              pathName: '项目信息,数据详情列表,数据详情',
              powerIcon: null,
              iconColor: '',
              powerName: '数据详情',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: '数据详情-列表-详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/data-manage/major-detail","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'data-manage-detail-major-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba3ab90c7003b',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ab90c7003b',
          pathName: '项目信息,数据管理',
          powerIcon: 'icon-icon_shujuguanli',
          iconColor: '#FD9C0B',
          powerName: '数据管理',
          powerType: 'P',
          level: 2,
          sortNo: 12,
          remark: '数据管理-编辑-列表',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/data-manage/major","levelIncrease":true,"isQuickEntry":true,"entryTitle":"数据管理"}',
          terminalType: 'B',
          terminalRoute: 'data-manage-edit-major',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '000000008ba31ae2018ba3a0c344002a',
              pid: '000000008ba31ae2018ba3ab90c7003b',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ab90c7003b,000000008ba31ae2018ba3a0c344002a',
              pathName: '项目信息,数据管理,数据管理编辑',
              powerIcon: null,
              iconColor: '',
              powerName: '数据管理编辑',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: '数据管理-编辑-详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/data-manage/major-detail","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'data-manage-edit-major-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',

              children: [
                {
                  powerId: '402894a78c1f6f9e018c22e16c3b1a27',
                  pid: '000000008ba31ae2018ba3a0c344002a',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3a0c344002a,402894a78c1f6f9e018c22e16c3b1a27',
                  pathName: '项目信息,数据管理编辑,删除',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '删除',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'delete',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '402894a78c1f6f9e018c22f73fc31e53',
                  pid: '000000008ba31ae2018ba3a0c344002a',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3a0c344002a,402894a78c1f6f9e018c22f73fc31e53',
                  pathName: '项目信息,数据管理编辑,编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '编辑',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'edit',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: '000000008ba31ae2018ba3a1e323002c',
              pid: '000000008ba31ae2018ba3ab90c7003b',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ab90c7003b,000000008ba31ae2018ba3a1e323002c',
              pathName: '项目信息,数据管理,数据批导',
              powerIcon: null,
              iconColor: '',
              powerName: '数据批导',
              powerType: 'B',
              level: 3,
              sortNo: 4,
              remark: '数据管理-导入-列表',
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'dataImport',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22fcc7981f90',
              pid: '000000008ba31ae2018ba3ab90c7003b',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ab90c7003b,402894a78c1f6f9e018c22fcc7981f90',
              pathName: '项目信息,数据管理,数据批导',
              powerIcon: null,
              iconColor: null,
              powerName: '数据批导',
              powerType: 'P',
              level: 3,
              sortNo: 4,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/data-manage/import-major","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'data-manage-import-major',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',

              children: [
                {
                  powerId: '402894a78c1f6f9e018c2308b26120c6',
                  pid: '402894a78c1f6f9e018c22fcc7981f90',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,402894a78c1f6f9e018c22fcc7981f90,402894a78c1f6f9e018c2308b26120c6',
                  pathName: '项目信息,数据批导,下载模板',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '下载模板',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'download',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '402894a78c1f6f9e018c2309368320c7',
                  pid: '402894a78c1f6f9e018c22fcc7981f90',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,402894a78c1f6f9e018c22fcc7981f90,402894a78c1f6f9e018c2309368320c7',
                  pathName: '项目信息,数据批导,上传数据',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '上传数据',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'uploadTem',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '000000008ba31ae2018ba3a3e8a0002d',
                  pid: '402894a78c1f6f9e018c22fcc7981f90',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ab90c7003b,402894a78c1f6f9e018c22fcc7981f90,000000008ba31ae2018ba3a3e8a0002d',
                  pathName: '项目信息,数据管理,数据批导,数据效验',
                  powerIcon: null,
                  iconColor: '',
                  powerName: '数据效验',
                  powerType: 'P',
                  level: 4,
                  sortNo: 3,
                  remark: '数据管理-导入-校验',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"project-information/data-manage/import-major-edit","levelIncrease":true}',
                  terminalType: 'B',
                  terminalRoute: 'data-manage-import-major-edit',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '000000008ba31ae2018ba3a5b77c0032',
                  pid: '402894a78c1f6f9e018c22fcc7981f90',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ab90c7003b,402894a78c1f6f9e018c22fcc7981f90,000000008ba31ae2018ba3a5b77c0032',
                  pathName: '项目信息,数据管理,数据批导,数据详情',
                  powerIcon: null,
                  iconColor: '',
                  powerName: '数据详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 4,
                  remark: '数据管理导入校验',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"project-information/data-manage/import-major-detail","levelIncrease":true}',
                  terminalType: 'B',
                  terminalRoute: 'data-manage-import-major-detail',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba396586a001c',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba396586a001c',
          pathName: '项目信息,定额详情列表',
          powerIcon: null,
          iconColor: '',
          powerName: '定额详情列表',
          powerType: 'P',
          level: 2,
          sortNo: 13,
          remark: '定额配置-详情',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/quota-allocation/detail-major","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'quota-allocation-detail-major',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '000000008ba31ae2018ba3a642eb0034',
              pid: '000000008ba31ae2018ba396586a001c',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba396586a001c,000000008ba31ae2018ba3a642eb0034',
              pathName: '项目信息,定额详情列表,定额详情',
              powerIcon: null,
              iconColor: '',
              powerName: '定额详情',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: '定额配置-定额详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/quota-allocation/detail-major-detail","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'quota-allocation-detail-major-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba3abf654003c',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3abf654003c',
          pathName: '项目信息,定额配置',
          powerIcon: 'icon-icon_dingepeizhi',
          iconColor: '#42D9C7',
          powerName: '定额配置',
          powerType: 'P',
          level: 2,
          sortNo: 14,
          remark: '定额配置-修改',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/quota-allocation/edit-major","levelIncrease":true,"isQuickEntry":true,"entryTitle":"定额配置"}',
          terminalType: 'B',
          terminalRoute: 'quota-allocation-edit-major',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1fdeb83705cf',
              pid: '000000008ba31ae2018ba3abf654003c',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3abf654003c,402894a78c1f6f9e018c1fdeb83705cf',
              pathName: '项目信息,定额配置,配置',
              powerIcon: null,
              iconColor: null,
              powerName: '配置',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'config',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba31ae2018ba3a798cb0035',
              pid: '000000008ba31ae2018ba3abf654003c',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3abf654003c,000000008ba31ae2018ba3a798cb0035',
              pathName: '项目信息,定额配置,定额列表',
              powerIcon: null,
              iconColor: '',
              powerName: '定额列表',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: '定额配置-详情-详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/quota-allocation/edit-major-detail","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'quota-allocation-edit-major-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',

              children: [
                {
                  powerId: '402894a78c1f6f9e018c1fe0e55e065e',
                  pid: '000000008ba31ae2018ba3a798cb0035',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3a798cb0035,402894a78c1f6f9e018c1fe0e55e065e',
                  pathName: '项目信息,定额列表,更新标准定额',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '更新标准定额',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'update',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '402894a78c1f6f9e018c1fe23d46065f',
                  pid: '000000008ba31ae2018ba3a798cb0035',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3a798cb0035,402894a78c1f6f9e018c1fe23d46065f',
                  pathName: '项目信息,定额列表,定额配置',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '定额配置',
                  powerType: 'B',
                  level: 3,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'quotaBtn',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '402894a78c1f6f9e018c1fe3014e0660',
                  pid: '000000008ba31ae2018ba3a798cb0035',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3a798cb0035,402894a78c1f6f9e018c1fe3014e0660',
                  pathName: '项目信息,定额列表,定额模式切换',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '定额模式切换',
                  powerType: 'B',
                  level: 3,
                  sortNo: 3,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'modeChange',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '000000008ba31ae2018ba3a82c630036',
                  pid: '000000008ba31ae2018ba3a798cb0035',
                  pathId:
                    '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3abf654003c,000000008ba31ae2018ba3a798cb0035,000000008ba31ae2018ba3a82c630036',
                  pathName: '项目信息,定额配置,定额列表,定额编辑',
                  powerIcon: null,
                  iconColor: '',
                  powerName: '定额编辑',
                  powerType: 'P',
                  level: 4,
                  sortNo: 4,
                  remark: '定额配置-详情-修改',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"project-information/quota-allocation/edit-major-detail-child","levelIncrease":true}',
                  terminalType: 'B',
                  terminalRoute: 'quota-allocation-edit-major-detail-child',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-25 10:24:58',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba3ac664e003d',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ac664e003d',
          pathName: '项目信息,工费预算',
          powerIcon: 'icon-icon_gongfeiyusuan',
          iconColor: '#815AE8',
          powerName: '工费预算',
          powerType: 'P',
          level: 2,
          sortNo: 15,
          remark: '工费预算-编辑',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/person-budget/edit","levelIncrease":true,"isQuickEntry":true,"entryTitle":"工费预算"}',
          terminalType: 'B',
          terminalRoute: 'person-budget-edit',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1fea0f1b0ae4',
              pid: '000000008ba31ae2018ba3ac664e003d',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ac664e003d,402894a78c1f6f9e018c1fea0f1b0ae4',
              pathName: '项目信息,工费预算,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba396cc76001d',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba396cc76001d',
          pathName: '项目信息,工费预算详情',
          powerIcon: null,
          iconColor: '',
          powerName: '工费预算详情',
          powerType: 'P',
          level: 2,
          sortNo: 16,
          remark: '工费预算-详情',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/person-budget/detail","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'person-budget-detail',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',
          hasChildren: false,
          children: null
        },
        {
          powerId: '000000008ba31ae2018ba3ace8e6003e',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ace8e6003e',
          pathName: '项目信息,焊材预算',
          powerIcon: 'icon-icon_hancaiyusuan',
          iconColor: '#2AC556',
          powerName: '焊材预算',
          powerType: 'P',
          level: 2,
          sortNo: 17,
          remark: '焊材预算-编辑',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/weld-budget/edit","levelIncrease":true,"isQuickEntry":true,"entryTitle":"焊材预算"}',
          terminalType: 'B',
          terminalRoute: 'weld-budget-edit',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1fea988a0ae5',
              pid: '000000008ba31ae2018ba3ace8e6003e',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3ace8e6003e,402894a78c1f6f9e018c1fea988a0ae5',
              pathName: '项目信息,焊材预算,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba3975848001e',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3975848001e',
          pathName: '项目信息,焊材预算详情',
          powerIcon: null,
          iconColor: '',
          powerName: '焊材预算详情',
          powerType: 'P',
          level: 2,
          sortNo: 18,
          remark: '焊材预算-详情',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/weld-budget/detail","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'weld-budget-detail',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',
          hasChildren: false,
          children: null
        },
        {
          powerId: '000000008ba31ae2018ba397bc4a001f',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba397bc4a001f',
          pathName: '项目信息,涂装体系详情',
          powerIcon: null,
          iconColor: '',
          powerName: '涂装体系详情',
          powerType: 'P',
          level: 2,
          sortNo: 19,
          remark: '涂装体系-详情',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/coating-system/detail","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-system-detail',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '000000008c340305018c341db2d60180',
              pid: '000000008ba31ae2018ba397bc4a001f',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba397bc4a001f,000000008c340305018c341db2d60180',
              pathName: '项目信息,涂装体系详情,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2023-12-04 17:16:51',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba31ae2018ba3adbbcd003f',
          pid: '402894f58ba34981018ba34bc2aa0001',
          pathId:
            '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3adbbcd003f',
          pathName: '项目信息,涂装体系',
          powerIcon: 'icon-icon_tuzhuangtixi',
          iconColor: '#BA45AB',
          powerName: '涂装体系',
          powerType: 'P',
          level: 2,
          sortNo: 20,
          remark: '涂装预算-编辑',
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/coating-system/edit","levelIncrease":true,"isQuickEntry":true,"entryTitle":"涂装体系"}',
          terminalType: 'B',
          terminalRoute: 'coating-system-edit',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:24:59',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1feb014e0ae6',
              pid: '000000008ba31ae2018ba3adbbcd003f',
              pathId:
                '402894f58ba34981018ba34bc2aa0001,000000008ba31ae2018ba3adbbcd003f,402894a78c1f6f9e018c1feb014e0ae6',
              pathName: '项目信息,涂装体系,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:24:58',
              hasChildren: false,
              children: null
            }
          ]
        }
      ]
    },
    {
      powerId: '000000008ba7de6f018ba86872f30029',
      pid: '0',
      pathId: '000000008ba7de6f018ba86872f30029',
      pathName: '计划管理',
      powerIcon: 'icon-a-Frame3358',
      iconColor: '',
      powerName: '计划管理',
      powerType: 'M',
      level: 1,
      sortNo: 7,
      remark: '计划管理',
      status: 'O',
      otherRemark: 'null',
      terminalType: 'B',
      terminalRoute: '/plan-management',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-07-26 17:23:23',

      children: [
        {
          powerId: '000000008ba7de6f018ba8690ebf002a',
          pid: '000000008ba7de6f018ba86872f30029',
          pathId:
            '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba8690ebf002a',
          pathName: '计划管理,节点计划',
          powerIcon: 'icon-icon_jiedianjihua',
          iconColor: '#1678FF',
          powerName: '节点计划',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: '节点计划',
          status: 'O',
          otherRemark: '{"componentMapping":"plan-management/node-plan/major"}',
          terminalType: 'B',
          terminalRoute: 'node-plan',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:23:23',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1febe3a20b7b',
              pid: '000000008ba7de6f018ba8690ebf002a',
              pathId:
                '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba8690ebf002a,402894a78c1f6f9e018c1febe3a20b7b',
              pathName: '计划管理,节点计划,编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba7de6f018ba86abe08002d',
              pid: '000000008ba7de6f018ba8690ebf002a',
              pathId:
                '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba8690ebf002a,000000008ba7de6f018ba86abe08002d',
              pathName: '计划管理,节点计划,计划编辑',
              powerIcon: null,
              iconColor: '',
              powerName: '计划编辑',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: '计划编辑',
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/node-plan/edit"}',
              terminalType: 'B',
              terminalRoute: 'node-plan-edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:23',

              children: [
                {
                  powerId: 'ff808081905dcfe60190de76e9e22e26',
                  pid: '000000008ba7de6f018ba86abe08002d',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba8690ebf002a,000000008ba7de6f018ba86abe08002d,ff808081905dcfe60190de76e9e22e26',
                  pathName: '计划管理,节点计划,计划编辑,计划编辑1',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '计划编辑1',
                  powerType: 'P',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"plan-management/node-plan/edit-child-major"}',
                  terminalType: 'B',
                  terminalRoute: 'node-plan-edit-child-major',
                  addTime: '2024-07-23 15:20:53',
                  updTime: '2024-07-26 17:23:23',

                  children: [
                    {
                      powerId: 'ff808081905dcfe60190de78fab72e27',
                      pid: 'ff808081905dcfe60190de76e9e22e26',
                      pathId:
                        '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba8690ebf002a,000000008ba7de6f018ba86abe08002d,ff808081905dcfe60190de76e9e22e26,ff808081905dcfe60190de78fab72e27',
                      pathName:
                        '计划管理,节点计划,计划编辑,计划编辑1,计划编辑2',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '计划编辑2',
                      powerType: 'P',
                      level: 5,
                      sortNo: 1,
                      remark: null,
                      status: 'O',
                      otherRemark:
                        '{"componentMapping":"plan-management/node-plan/edit-child-major-detail"}',
                      terminalType: 'B',
                      terminalRoute: 'node-plan-edit-child-major-detail',
                      addTime: '2024-07-23 15:23:09',
                      updTime: '2024-07-30 10:45:10',
                      hasChildren: false,
                      children: null
                    },
                    {
                      powerId: 'ff8080818ec19a1a01905470da1f0b4f',
                      pid: 'ff808081905dcfe60190de76e9e22e26',
                      pathId:
                        '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba8690ebf002a,000000008ba7de6f018ba86abe08002d,ff808081905dcfe60190de76e9e22e26,ff8080818ec19a1a01905470da1f0b4f',
                      pathName: '计划管理,节点计划,计划编辑,计划编辑1,产能评估',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '产能评估',
                      powerType: 'P',
                      level: 5,
                      sortNo: 2,
                      remark: null,
                      status: 'O',
                      otherRemark:
                        '{"componentMapping":"plan-management/node-plan/capacity-assessment"}',
                      terminalType: 'B',
                      terminalRoute: 'capacity-assessment',
                      addTime: '2024-06-26 20:06:40',
                      updTime: '2024-07-26 17:23:23',
                      hasChildren: false,
                      children: null
                    }
                  ]
                }
              ]
            },
            {
              powerId: '000000008ba7de6f018ba869cd8a002b',
              pid: '000000008ba7de6f018ba8690ebf002a',
              pathId:
                '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba8690ebf002a,000000008ba7de6f018ba869cd8a002b',
              pathName: '计划管理,节点计划,计划详情',
              powerIcon: null,
              iconColor: '',
              powerName: '计划详情',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: '计划详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/node-plan/edit"}',
              terminalType: 'B',
              terminalRoute: 'node-plan-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:23',

              children: [
                {
                  powerId: '000000008ba7de6f018ba86a5d58002c',
                  pid: '000000008ba7de6f018ba869cd8a002b',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba8690ebf002a,000000008ba7de6f018ba869cd8a002b,000000008ba7de6f018ba86a5d58002c',
                  pathName: '计划管理,节点计划,计划详情,计划详情1',
                  powerIcon: null,
                  iconColor: '',
                  powerName: '计划详情1',
                  powerType: 'P',
                  level: 4,
                  sortNo: 1,
                  remark: '计划详情1',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"plan-management/node-plan/edit-child-major"}',
                  terminalType: 'B',
                  terminalRoute: 'node-plan-detail-child',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '000000008ba7de6f018ba86c68ac0030',
          pid: '000000008ba7de6f018ba86872f30029',
          pathId:
            '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba86c68ac0030',
          pathName: '计划管理,作业计划',
          powerIcon: 'icon-icon_zuoyejihua',
          iconColor: '#FFD02A',
          powerName: '作业计划',
          powerType: 'M',
          level: 2,
          sortNo: 2,
          remark: '作业计划',
          status: 'O',
          otherRemark: '{"componentMapping":"plan-management/job-plan/major"}',
          terminalType: 'B',
          terminalRoute: 'job-plan',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:23:23',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1fec7e620b7c',
              pid: '000000008ba7de6f018ba86c68ac0030',
              pathId:
                '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba86c68ac0030,402894a78c1f6f9e018c1fec7e620b7c',
              pathName: '计划管理,作业计划,编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba7de6f018ba86ce7c40031',
              pid: '000000008ba7de6f018ba86c68ac0030',
              pathId:
                '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba86c68ac0030,000000008ba7de6f018ba86ce7c40031',
              pathName: '计划管理,作业计划,计划详情',
              powerIcon: null,
              iconColor: '',
              powerName: '计划详情',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: '计划详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/job-plan/detail"}',
              terminalType: 'B',
              terminalRoute: 'job-plan-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba7de6f018ba86d652f0032',
              pid: '000000008ba7de6f018ba86c68ac0030',
              pathId:
                '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba86c68ac0030,000000008ba7de6f018ba86d652f0032',
              pathName: '计划管理,作业计划,计划编辑',
              powerIcon: null,
              iconColor: '',
              powerName: '计划编辑',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: '计划编辑',
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/job-plan/edit1"}',
              terminalType: 'B',
              terminalRoute: 'job-plan-edit1',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:23',

              children: [
                {
                  powerId: '402894f58ba86b95018ba86dade20000',
                  pid: '000000008ba7de6f018ba86d652f0032',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,000000008ba7de6f018ba86c68ac0030,000000008ba7de6f018ba86d652f0032,402894f58ba86b95018ba86dade20000',
                  pathName: '计划管理,作业计划,计划编辑,计划编辑1',
                  powerIcon: null,
                  iconColor: '',
                  powerName: '计划编辑1',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: '计划编辑1',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"plan-management/job-plan/edit2"}',
                  terminalType: 'B',
                  terminalRoute: 'job-plan-edit2',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '2c9ff40f8caf335d018caf9890620006',
          pid: '000000008ba7de6f018ba86872f30029',
          pathId:
            '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018caf9890620006',
          pathName: '计划管理,准备计划',
          powerIcon: 'icon-a-Group427320863',
          iconColor: '#1678FF',
          powerName: '准备计划',
          powerType: 'M',
          level: 2,
          sortNo: 3,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"plan-management/preparation-plan/major"}',
          terminalType: 'B',
          terminalRoute: 'preparation-plan',
          addTime: '2023-12-28 16:44:20',
          updTime: '2024-07-26 17:23:23',

          children: [
            {
              powerId: '2c9ff40d8caf330d018caf995f5a0002',
              pid: '2c9ff40f8caf335d018caf9890620006',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018caf9890620006,2c9ff40d8caf330d018caf995f5a0002',
              pathName: '计划管理,准备计划,管理',
              powerIcon: null,
              iconColor: null,
              powerName: '管理',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'manage',
              addTime: '2023-12-28 16:45:13',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40f8caf335d018cafb2609e00bd',
              pid: '2c9ff40f8caf335d018caf9890620006',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018caf9890620006,2c9ff40f8caf335d018cafb2609e00bd',
              pathName: '计划管理,准备计划,计划管理',
              powerIcon: null,
              iconColor: '#1678FF',
              powerName: '计划管理',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/preparation-plan/bulletin-board"}',
              terminalType: 'B',
              terminalRoute: 'bulletin-board',
              addTime: '2023-12-28 17:12:32',
              updTime: '2024-07-26 17:23:23',

              children: [
                {
                  powerId: '2c9ff40e8caf33bd018cafb344d800ba',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40e8caf33bd018cafb344d800ba',
                  pathName: '计划管理,计划管理,推送提醒',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '推送提醒',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'push-reminder',
                  addTime: '2023-12-28 17:13:31',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8caf33bd018cafb4152f00bb',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40e8caf33bd018cafb4152f00bb',
                  pathName: '计划管理,计划管理,新增',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '新增',
                  powerType: 'B',
                  level: 3,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'add',
                  addTime: '2023-12-28 17:14:24',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8caf33bd018cafb4905700bc',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40e8caf33bd018cafb4905700bc',
                  pathName: '计划管理,计划管理,编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '编辑',
                  powerType: 'B',
                  level: 3,
                  sortNo: 3,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'edit',
                  addTime: '2023-12-28 17:14:55',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8caf33bd018cafb4f0f300bd',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40e8caf33bd018cafb4f0f300bd',
                  pathName: '计划管理,计划管理,删除',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '删除',
                  powerType: 'B',
                  level: 3,
                  sortNo: 4,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'delete',
                  addTime: '2023-12-28 17:15:20',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8caf33bd018cafb53dfe00be',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40e8caf33bd018cafb53dfe00be',
                  pathName: '计划管理,计划管理,提交',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '提交',
                  powerType: 'B',
                  level: 3,
                  sortNo: 5,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'submit',
                  addTime: '2023-12-28 17:15:40',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40d8caf330d018cafb5930100b9',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40d8caf330d018cafb5930100b9',
                  pathName: '计划管理,计划管理,审核不通过',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '审核不通过',
                  powerType: 'B',
                  level: 3,
                  sortNo: 6,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'reviewFailed',
                  addTime: '2023-12-28 17:16:02',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40f8caf335d018cafb5ea6c00be',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40f8caf335d018cafb5ea6c00be',
                  pathName: '计划管理,计划管理,审核通过',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '审核通过',
                  powerType: 'B',
                  level: 3,
                  sortNo: 7,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'approved',
                  addTime: '2023-12-28 17:16:24',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40d8caf330d018cafb78d0b00bb',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018caf9890620006,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40d8caf330d018cafb78d0b00bb',
                  pathName: '计划管理,准备计划,计划管理,计划编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '计划编辑',
                  powerType: 'P',
                  level: 3,
                  sortNo: 8,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"plan-management/preparation-plan/plan-edit"}',
                  terminalType: 'B',
                  terminalRoute: 'plan-edit',
                  addTime: '2023-12-28 17:18:11',
                  updTime: '2024-07-26 17:23:23',

                  children: [
                    {
                      powerId: '2c9ff40e8caf33bd018cafb9ad6400c0',
                      pid: '2c9ff40d8caf330d018cafb78d0b00bb',
                      pathId:
                        '000000008ba7de6f018ba86872f30029,2c9ff40d8caf330d018cafb78d0b00bb,2c9ff40e8caf33bd018cafb9ad6400c0',
                      pathName: '计划管理,计划编辑,保存',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '保存',
                      powerType: 'B',
                      level: 3,
                      sortNo: 2,
                      remark: null,
                      status: 'O',
                      otherRemark: null,
                      terminalType: 'B',
                      terminalRoute: 'save',
                      addTime: '2023-12-28 17:20:31',
                      updTime: '2024-07-26 17:23:23',
                      hasChildren: false,
                      children: null
                    },
                    {
                      powerId: '2c9ff40e8caf33bd018cafb9125e00bf',
                      pid: '2c9ff40d8caf330d018cafb78d0b00bb',
                      pathId:
                        '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40d8caf330d018cafb78d0b00bb,2c9ff40e8caf33bd018cafb9125e00bf',
                      pathName: '计划管理,计划管理,计划编辑,加载模板',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '加载模板',
                      powerType: 'B',
                      level: 4,
                      sortNo: 3,
                      remark: null,
                      status: 'O',
                      otherRemark: 'null',
                      terminalType: 'B',
                      terminalRoute: 'loadTemplate',
                      addTime: '2023-12-28 17:19:51',
                      updTime: '2024-07-26 17:23:23',
                      hasChildren: false,
                      children: null
                    }
                  ]
                },
                {
                  powerId: '2c9ff40f8caf335d018cafba59f000bf',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018caf9890620006,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40f8caf335d018cafba59f000bf',
                  pathName: '计划管理,准备计划,计划管理,计划新增',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '计划新增',
                  powerType: 'P',
                  level: 4,
                  sortNo: 9,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"plan-management/preparation-plan/plan-edit"}',
                  terminalType: 'B',
                  terminalRoute: 'plan-add',
                  addTime: '2023-12-28 17:21:15',
                  updTime: '2024-07-26 17:23:23',

                  children: [
                    {
                      powerId: '2c9ff40d8caf330d018cafbacbf100bc',
                      pid: '2c9ff40f8caf335d018cafba59f000bf',
                      pathId:
                        '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafba59f000bf,2c9ff40d8caf330d018cafbacbf100bc',
                      pathName: '计划管理,计划新增,加载模板',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '加载模板',
                      powerType: 'B',
                      level: 3,
                      sortNo: 1,
                      remark: null,
                      status: 'O',
                      otherRemark: null,
                      terminalType: 'B',
                      terminalRoute: 'loadTemplate',
                      addTime: '2023-12-28 17:21:44',
                      updTime: '2024-07-26 17:23:23',
                      hasChildren: false,
                      children: null
                    },
                    {
                      powerId: '2c9ff40f8caf335d018cafbb3ca500c0',
                      pid: '2c9ff40f8caf335d018cafba59f000bf',
                      pathId:
                        '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018cafba59f000bf,2c9ff40f8caf335d018cafbb3ca500c0',
                      pathName: '计划管理,计划新增,保存',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '保存',
                      powerType: 'B',
                      level: 3,
                      sortNo: 2,
                      remark: null,
                      status: 'O',
                      otherRemark: null,
                      terminalType: 'B',
                      terminalRoute: 'save',
                      addTime: '2023-12-28 17:22:13',
                      updTime: '2024-07-26 17:23:23',
                      hasChildren: false,
                      children: null
                    }
                  ]
                },
                {
                  powerId: '2c9ff40f8caf335d018cafbce4c400c1',
                  pid: '2c9ff40f8caf335d018cafb2609e00bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018caf9890620006,2c9ff40f8caf335d018cafb2609e00bd,2c9ff40f8caf335d018cafbce4c400c1',
                  pathName: '计划管理,准备计划,计划管理,单计划详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '单计划详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 10,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"plan-management/preparation-plan/single-plan-details"}',
                  terminalType: 'B',
                  terminalRoute: 'bulletin-board-details',
                  addTime: '2023-12-28 17:24:01',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: '2c9ff40d8caf330d018cafb72b7200ba',
              pid: '2c9ff40f8caf335d018caf9890620006',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018caf9890620006,2c9ff40d8caf330d018cafb72b7200ba',
              pathName: '计划管理,准备计划,计划详情',
              powerIcon: null,
              iconColor: null,
              powerName: '计划详情',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/preparation-plan/plan-details"}',
              terminalType: 'B',
              terminalRoute: 'plan-details',
              addTime: '2023-12-28 17:17:46',
              updTime: '2024-07-26 17:23:23',

              children: [
                {
                  powerId: 'ff8080818e0d1745018e1188852a03de',
                  pid: '2c9ff40d8caf330d018cafb72b7200ba',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40f8caf335d018caf9890620006,2c9ff40d8caf330d018cafb72b7200ba,ff8080818e0d1745018e1188852a03de',
                  pathName: '计划管理,准备计划,计划详情,单计划详情--1',
                  powerIcon: '',
                  iconColor: null,
                  powerName: '单计划详情--1',
                  powerType: 'P',
                  level: 4,
                  sortNo: 1,
                  remark: '计划管理,单计划详情',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"plan-management/preparation-plan/single-plan-details"}',
                  terminalType: 'B',
                  terminalRoute: 'single-plan-details',
                  addTime: '2024-03-06 10:12:23',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '2c9ff40e8caf33bd018cafbd430e00c1',
          pid: '000000008ba7de6f018ba86872f30029',
          pathId:
            '000000008ba7de6f018ba86872f30029,2c9ff40e8caf33bd018cafbd430e00c1',
          pathName: '计划管理,计划模板',
          powerIcon: 'icon-Frame15',
          iconColor: '#1AB9FD',
          powerName: '计划模板',
          powerType: 'M',
          level: 2,
          sortNo: 11,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"plan-management/plan-template/major"}',
          terminalType: 'B',
          terminalRoute: 'plan-template',
          addTime: '2023-12-28 17:24:25',
          updTime: '2024-07-26 17:23:23',

          children: [
            {
              powerId: '2c9ff40e8caf33bd018cafbdaf0e00c2',
              pid: '2c9ff40e8caf33bd018cafbd430e00c1',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40e8caf33bd018cafbd430e00c1,2c9ff40e8caf33bd018cafbdaf0e00c2',
              pathName: '计划管理,计划模板,新增',
              powerIcon: null,
              iconColor: null,
              powerName: '新增',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'add',
              addTime: '2023-12-28 17:24:53',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40e8caf33bd018cafbe19f400c3',
              pid: '2c9ff40e8caf33bd018cafbd430e00c1',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40e8caf33bd018cafbd430e00c1,2c9ff40e8caf33bd018cafbe19f400c3',
              pathName: '计划管理,计划模板,编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'edit',
              addTime: '2023-12-28 17:25:21',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40f8caf335d018cafbe780200c2',
              pid: '2c9ff40e8caf33bd018cafbd430e00c1',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40e8caf33bd018cafbd430e00c1,2c9ff40f8caf335d018cafbe780200c2',
              pathName: '计划管理,计划模板,删除',
              powerIcon: null,
              iconColor: null,
              powerName: '删除',
              powerType: 'B',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'delete',
              addTime: '2023-12-28 17:25:45',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40d8caf330d018cafbf1c4000bd',
              pid: '2c9ff40e8caf33bd018cafbd430e00c1',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40e8caf33bd018cafbd430e00c1,2c9ff40d8caf330d018cafbf1c4000bd',
              pathName: '计划管理,计划模板,新增模板',
              powerIcon: null,
              iconColor: null,
              powerName: '新增模板',
              powerType: 'P',
              level: 3,
              sortNo: 4,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/plan-template/edit"}',
              terminalType: 'B',
              terminalRoute: 'plan-template-add',
              addTime: '2023-12-28 17:26:27',
              updTime: '2024-07-26 17:23:23',

              children: [
                {
                  powerId: '2c9ff40f8caf335d018cafc018f100c3',
                  pid: '2c9ff40d8caf330d018cafbf1c4000bd',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40d8caf330d018cafbf1c4000bd,2c9ff40f8caf335d018cafc018f100c3',
                  pathName: '计划管理,新增模板,保存',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '保存',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'save',
                  addTime: '2023-12-28 17:27:31',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: '2c9ff40d8caf330d018cafc0cb7000be',
              pid: '2c9ff40e8caf33bd018cafbd430e00c1',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40e8caf33bd018cafbd430e00c1,2c9ff40d8caf330d018cafc0cb7000be',
              pathName: '计划管理,计划模板,编辑模板',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑模板',
              powerType: 'P',
              level: 3,
              sortNo: 5,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/plan-template/edit"}',
              terminalType: 'B',
              terminalRoute: 'plan-template-edit',
              addTime: '2023-12-28 17:28:17',
              updTime: '2024-07-26 17:23:23',

              children: [
                {
                  powerId: '2c9ff40e8caf33bd018cafc140c700c4',
                  pid: '2c9ff40d8caf330d018cafc0cb7000be',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,2c9ff40d8caf330d018cafc0cb7000be,2c9ff40e8caf33bd018cafc140c700c4',
                  pathName: '计划管理,编辑模板,保存',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '保存',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'save',
                  addTime: '2023-12-28 17:28:47',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: '2c9ff40e8caf33bd018cafc330cd00c5',
              pid: '2c9ff40e8caf33bd018cafbd430e00c1',
              pathId:
                '000000008ba7de6f018ba86872f30029,2c9ff40e8caf33bd018cafbd430e00c1,2c9ff40e8caf33bd018cafc330cd00c5',
              pathName: '计划管理,计划模板,模板详情',
              powerIcon: null,
              iconColor: null,
              powerName: '模板详情',
              powerType: 'P',
              level: 3,
              sortNo: 6,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/plan-template/edit"}',
              terminalType: 'B',
              terminalRoute: 'plan-template-detail',
              addTime: '2023-12-28 17:30:54',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff8080818ec19a1a0190105506fe0075',
          pid: '000000008ba7de6f018ba86872f30029',
          pathId:
            '000000008ba7de6f018ba86872f30029,ff8080818ec19a1a0190105506fe0075',
          pathName: '计划管理,作业计划看板',
          powerIcon: null,
          iconColor: null,
          powerName: '作业计划看板',
          powerType: 'M',
          level: 2,
          sortNo: 13,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"plan-management/job-plan-plate/major"}',
          terminalType: 'B',
          terminalRoute: 'job-plan-plate',
          addTime: '2024-06-13 14:42:06',
          updTime: '2024-07-26 17:23:23',

          children: [
            {
              powerId: 'ff8080818ec19a1a019010831977047e',
              pid: 'ff8080818ec19a1a0190105506fe0075',
              pathId:
                '000000008ba7de6f018ba86872f30029,ff8080818ec19a1a0190105506fe0075,ff8080818ec19a1a019010831977047e',
              pathName: '计划管理,作业计划看板,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2024-06-13 15:32:26',
              updTime: '2024-07-26 17:23:23',
              hasChildren: false,
              children: null
            },
            {
              powerId: 'ff8080818ec19a1a0190105760da0077',
              pid: 'ff8080818ec19a1a0190105506fe0075',
              pathId:
                '000000008ba7de6f018ba86872f30029,ff8080818ec19a1a0190105506fe0075,ff8080818ec19a1a0190105760da0077',
              pathName: '计划管理,作业计划看板,计划详情',
              powerIcon: null,
              iconColor: null,
              powerName: '计划详情',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"plan-management/job-plan-plate/process-ton-details","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'process-ton-details',
              addTime: '2024-06-13 14:44:40',
              updTime: '2024-07-26 17:23:23',

              children: [
                {
                  powerId: 'ff8080819058bd1901905d8bbfd30102',
                  pid: 'ff8080818ec19a1a0190105760da0077',
                  pathId:
                    '000000008ba7de6f018ba86872f30029,ff8080818ec19a1a0190105760da0077,ff8080819058bd1901905d8bbfd30102',
                  pathName: '计划管理,计划详情,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2024-06-28 14:32:38',
                  updTime: '2024-07-26 17:23:23',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      powerId: '000000008ba875a4018ba8c1c4210030',
      pid: '0',
      pathId: '000000008ba875a4018ba8c1c4210030',
      pathName: '工单管理',
      powerIcon: 'icon-a-Frame33581',
      iconColor: '',
      powerName: '工单管理',
      powerType: 'M',
      level: 1,
      sortNo: 8,
      remark: '工单管理',
      status: 'O',
      otherRemark: 'null',
      terminalType: 'B',
      terminalRoute: '/work-order-management',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-07-26 17:24:08',

      children: [
        {
          powerId: '000000008ba875a4018ba8c333760031',
          pid: '000000008ba875a4018ba8c1c4210030',
          pathId:
            '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c333760031',
          pathName: '工单管理,生产派工',
          powerIcon: 'icon-icon_shengchanpaidan',
          iconColor: '#2EC889',
          powerName: '生产派工',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: '生产派工',
          status: 'O',
          otherRemark:
            '{"componentMapping":"work-order-management/product-dispatch/major"}',
          terminalType: 'B',
          terminalRoute: 'product-dispatch',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:24:08',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1fedaba40c14',
              pid: '000000008ba875a4018ba8c333760031',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c333760031,402894a78c1f6f9e018c1fedaba40c14',
              pathName: '工单管理,生产派工,查看已选工单',
              powerIcon: null,
              iconColor: null,
              powerName: '查看已选工单',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'see',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c1fee2b090c15',
              pid: '000000008ba875a4018ba8c333760031',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c333760031,402894a78c1f6f9e018c1fee2b090c15',
              pathName: '工单管理,生产派工,派工',
              powerIcon: null,
              iconColor: null,
              powerName: '派工',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'dispatch',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba875a4018ba8c3b1940032',
              pid: '000000008ba875a4018ba8c333760031',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c333760031,000000008ba875a4018ba8c3b1940032',
              pathName: '工单管理,生产派工,工单详情',
              powerIcon: null,
              iconColor: '',
              powerName: '工单详情',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: '工单详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"work-order-management/product-dispatch/product-detail"}',
              terminalType: 'B',
              terminalRoute: 'work-order-management-product-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba875a4018ba8c49af40035',
              pid: '000000008ba875a4018ba8c333760031',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c333760031,000000008ba875a4018ba8c49af40035',
              pathName: '工单管理,生产派工,工单详情',
              powerIcon: null,
              iconColor: '',
              powerName: '工单详情',
              powerType: 'P',
              level: 3,
              sortNo: 4,
              remark: '工单详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"work-order-management/product-dispatch/temporary-detail"}',
              terminalType: 'B',
              terminalRoute: 'work-order-management-temporary-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba875a4018ba8c515590036',
          pid: '000000008ba875a4018ba8c1c4210030',
          pathId:
            '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c515590036',
          pathName: '工单管理,临时工单',
          powerIcon: 'icon-icon_linshigongdan1',
          iconColor: '#FF865D',
          powerName: '临时工单',
          powerType: 'M',
          level: 2,
          sortNo: 4,
          remark: '临时工单',
          status: 'O',
          otherRemark:
            '{"componentMapping":"work-order-management/temporary-work-order/major"}',
          terminalType: 'B',
          terminalRoute: 'temporary-list',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:24:08',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1feedf230c16',
              pid: '000000008ba875a4018ba8c515590036',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c515590036,402894a78c1f6f9e018c1feedf230c16',
              pathName: '工单管理,临时工单,新增',
              powerIcon: null,
              iconColor: null,
              powerName: '新增',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'add',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c1fef34f80c17',
              pid: '000000008ba875a4018ba8c515590036',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c515590036,402894a78c1f6f9e018c1fef34f80c17',
              pathName: '工单管理,临时工单,指派',
              powerIcon: null,
              iconColor: null,
              powerName: '指派',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'assign',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22db39af170c',
              pid: '000000008ba875a4018ba8c515590036',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c515590036,402894a78c1f6f9e018c22db39af170c',
              pathName: '工单管理,临时工单,编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑',
              powerType: 'B',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22db8f26170d',
              pid: '000000008ba875a4018ba8c515590036',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c515590036,402894a78c1f6f9e018c22db8f26170d',
              pathName: '工单管理,临时工单,删除',
              powerIcon: null,
              iconColor: null,
              powerName: '删除',
              powerType: 'B',
              level: 3,
              sortNo: 4,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'delete',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba875a4018ba8c5925a0037',
              pid: '000000008ba875a4018ba8c515590036',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c515590036,000000008ba875a4018ba8c5925a0037',
              pathName: '工单管理,临时工单,工单详情',
              powerIcon: null,
              iconColor: '',
              powerName: '工单详情',
              powerType: 'P',
              level: 3,
              sortNo: 5,
              remark: '工单详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"work-order-management/temporary-work-order/detail"}',
              terminalType: 'B',
              terminalRoute: 'temporary-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba875a4018ba8c5fd600038',
          pid: '000000008ba875a4018ba8c1c4210030',
          pathId:
            '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c5fd600038',
          pathName: '工单管理,工单查询',
          powerIcon: 'icon-icon_gongdanchaxun',
          iconColor: '#1AB9FD',
          powerName: '工单查询',
          powerType: 'M',
          level: 2,
          sortNo: 6,
          remark: '工单查询',
          status: 'O',
          otherRemark:
            '{"componentMapping":"work-order-management/query/major"}',
          terminalType: 'B',
          terminalRoute: 'query-list',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:24:08',

          children: [
            {
              powerId: '000000008ba875a4018ba8c688f00039',
              pid: '000000008ba875a4018ba8c5fd600038',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c5fd600038,000000008ba875a4018ba8c688f00039',
              pathName: '工单管理,工单查询,工单详情',
              powerIcon: null,
              iconColor: '',
              powerName: '工单详情',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: '工单详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"work-order-management/query/product-detail"}',
              terminalType: 'B',
              terminalRoute: 'query-product-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba875a4018ba8c7594b003a',
              pid: '000000008ba875a4018ba8c5fd600038',
              pathId:
                '000000008ba875a4018ba8c1c4210030,000000008ba875a4018ba8c5fd600038,000000008ba875a4018ba8c7594b003a',
              pathName: '工单管理,工单查询,工单详情',
              powerIcon: null,
              iconColor: '',
              powerName: '工单详情',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: '工单详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"work-order-management/query/temporary-detail"}',
              terminalType: 'B',
              terminalRoute: 'query-temporary-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:24:08',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '2c9ff40e8caf33bd018cb0aaa73f00cd',
          pid: '000000008ba875a4018ba8c1c4210030',
          pathId:
            '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd',
          pathName: '工单管理,工单看板',
          powerIcon: 'icon-Vector1',
          iconColor: '#FD9C0B',
          powerName: '工单看板',
          powerType: 'M',
          level: 2,
          sortNo: 14,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"work-order-management/work-order-board/major"}',
          terminalType: 'B',
          terminalRoute: 'work-order-board',
          addTime: '2023-12-28 21:43:43',
          updTime: '2024-07-26 17:24:08',

          children: [
            {
              powerId: '2c9ff40d8caf330d018cb0afdee500c9',
              pid: '2c9ff40e8caf33bd018cb0aaa73f00cd',
              pathId:
                '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd,2c9ff40d8caf330d018cb0afdee500c9',
              pathName: '工单管理,工单看板,工单列表',
              powerIcon: null,
              iconColor: null,
              powerName: '工单列表',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"work-order-management/work-order-board/project"}',
              terminalType: 'B',
              terminalRoute: 'work-order-board-project-list',
              addTime: '2023-12-28 21:49:25',
              updTime: '2024-07-26 17:24:08',

              children: [
                {
                  powerId: '2c9ff40f8caf335d018cb0ad74360295',
                  pid: '2c9ff40d8caf330d018cb0afdee500c9',
                  pathId:
                    '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd,2c9ff40d8caf330d018cb0afdee500c9,2c9ff40f8caf335d018cb0ad74360295',
                  pathName: '工单管理,工单看板,工单列表,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/work-order-board/product-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'project-work-order-detail',
                  addTime: '2023-12-28 21:46:47',
                  updTime: '2024-07-26 17:24:08',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: '2c9ff40f8caf335d018cb0ac52900294',
              pid: '2c9ff40e8caf33bd018cb0aaa73f00cd',
              pathId:
                '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd,2c9ff40f8caf335d018cb0ac52900294',
              pathName: '工单管理,工单看板,工单列表1',
              powerIcon: null,
              iconColor: null,
              powerName: '工单列表1',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"work-order-management/work-order-board/workshop-list1"}',
              terminalType: 'B',
              terminalRoute: 'work-order-board-workshop-list1',
              addTime: '2023-12-28 21:45:33',
              updTime: '2024-07-26 17:24:08',

              children: [
                {
                  powerId: '2c9ff40d8caf330d018cb0af01c700c8',
                  pid: '2c9ff40f8caf335d018cb0ac52900294',
                  pathId:
                    '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd,2c9ff40f8caf335d018cb0ac52900294,2c9ff40d8caf330d018cb0af01c700c8',
                  pathName: '工单管理,工单看板,工单列表1,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/work-order-board/temporary-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'workshop-work-order-temporary-detail1',
                  addTime: '2023-12-28 21:48:28',
                  updTime: '2024-08-02 14:58:07',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40d8caf330d018cb0ae3f2900c7',
                  pid: '2c9ff40f8caf335d018cb0ac52900294',
                  pathId:
                    '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd,2c9ff40f8caf335d018cb0ac52900294,2c9ff40d8caf330d018cb0ae3f2900c7',
                  pathName: '工单管理,工单看板,工单列表1,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/work-order-board/product-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'workshop-work-order-detail1',
                  addTime: '2023-12-28 21:47:39',
                  updTime: '2024-08-02 14:57:41',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: '2c9ff40e8caf33bd018cb0acdb5701af',
              pid: '2c9ff40e8caf33bd018cb0aaa73f00cd',
              pathId:
                '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd,2c9ff40e8caf33bd018cb0acdb5701af',
              pathName: '工单管理,工单看板,工单列表2',
              powerIcon: null,
              iconColor: null,
              powerName: '工单列表2',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"work-order-management/work-order-board/workshop-list2"}',
              terminalType: 'B',
              terminalRoute: 'work-order-board-workshop-list2',
              addTime: '2023-12-28 21:46:08',
              updTime: '2024-07-26 17:24:08',

              children: [
                {
                  powerId: '2c9ff40f8caf335d018cb0af742c0296',
                  pid: '2c9ff40e8caf33bd018cb0acdb5701af',
                  pathId:
                    '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd,2c9ff40e8caf33bd018cb0acdb5701af,2c9ff40f8caf335d018cb0af742c0296',
                  pathName: '工单管理,工单看板,工单列表2,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/work-order-board/temporary-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'workshop-work-order-temporary-detail2',
                  addTime: '2023-12-28 21:48:58',
                  updTime: '2024-07-26 17:24:08',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8caf33bd018cb0aea56f01b0',
                  pid: '2c9ff40e8caf33bd018cb0acdb5701af',
                  pathId:
                    '000000008ba875a4018ba8c1c4210030,2c9ff40e8caf33bd018cb0aaa73f00cd,2c9ff40e8caf33bd018cb0acdb5701af,2c9ff40e8caf33bd018cb0aea56f01b0',
                  pathName: '工单管理,工单看板,工单列表2,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/work-order-board/product-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'workshop-work-order-detail2',
                  addTime: '2023-12-28 21:48:05',
                  updTime: '2024-07-26 17:24:08',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      powerId: '000000008ba875a4018ba8b3bbcc002b',
      pid: '0',
      pathId: '000000008ba875a4018ba8b3bbcc002b',
      pathName: '质量管理',
      powerIcon: 'icon-Frame12',
      iconColor: '',
      powerName: '质量管理',
      powerType: 'M',
      level: 1,
      sortNo: 9,
      remark: '质量管理',
      status: 'O',
      otherRemark: 'null',
      terminalType: 'B',
      terminalRoute: '/quality-control',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-08-05 08:34:26',

      children: [
        {
          powerId: '000000008ba875a4018ba8b4412e002c',
          pid: '000000008ba875a4018ba8b3bbcc002b',
          pathId:
            '000000008ba875a4018ba8b3bbcc002b,000000008ba875a4018ba8b4412e002c',
          pathName: '质量管理,无损检测',
          powerIcon: 'icon-icon_wusunjiance',
          iconColor: '#2EC889',
          powerName: '无损检测',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: '无损检测',
          status: 'O',
          otherRemark: '{"componentMapping":"quality-control/ndt/major"}',
          terminalType: 'B',
          terminalRoute: 'ndt',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-08-05 08:37:47',

          children: [
            {
              powerId: '2c9ff40f8d0cae39018d20762e361236',
              pid: '000000008ba875a4018ba8b4412e002c',
              pathId:
                '000000008ba875a4018ba8b3bbcc002b,000000008ba875a4018ba8b4412e002c,2c9ff40f8d0cae39018d20762e361236',
              pathName: '质量管理,无损检测,检测',
              powerIcon: null,
              iconColor: null,
              powerName: '检测',
              powerType: 'B',
              level: 3,
              sortNo: 0,
              remark: '批量检测',
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'batch-check',
              addTime: '2024-01-19 14:43:53',
              updTime: '2024-08-05 08:45:12',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22d9385a148f',
              pid: '000000008ba875a4018ba8b4412e002c',
              pathId:
                '000000008ba875a4018ba8b3bbcc002b,000000008ba875a4018ba8b4412e002c,402894a78c1f6f9e018c22d9385a148f',
              pathName: '质量管理,无损检测,检测',
              powerIcon: null,
              iconColor: null,
              powerName: '检测',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'check',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-08-05 08:45:54',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40f8d0cae39018d20751f1a1235',
              pid: '000000008ba875a4018ba8b4412e002c',
              pathId:
                '000000008ba875a4018ba8b3bbcc002b,000000008ba875a4018ba8b4412e002c,2c9ff40f8d0cae39018d20751f1a1235',
              pathName: '质量管理,无损检测,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: '导出',
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2024-01-19 14:42:43',
              updTime: '2024-08-05 08:57:14',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba875a4018ba8b52c6c002e',
              pid: '000000008ba875a4018ba8b4412e002c',
              pathId:
                '000000008ba875a4018ba8b3bbcc002b,000000008ba875a4018ba8b4412e002c,000000008ba875a4018ba8b52c6c002e',
              pathName: '质量管理,无损检测,检测详情',
              powerIcon: null,
              iconColor: '',
              powerName: '检测详情',
              powerType: 'P',
              level: 3,
              sortNo: 4,
              remark: '检测详情',
              status: 'O',
              otherRemark: '{"componentMapping":"quality-control/ndt/detail"}',
              terminalType: 'B',
              terminalRoute: 'ndt-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-08-05 09:07:57',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba875a4018ba8b4a71c002d',
              pid: '000000008ba875a4018ba8b4412e002c',
              pathId:
                '000000008ba875a4018ba8b3bbcc002b,000000008ba875a4018ba8b4412e002c,000000008ba875a4018ba8b4a71c002d',
              pathName: '质量管理,无损检测,检测操作',
              powerIcon: null,
              iconColor: '',
              powerName: '检测操作',
              powerType: 'P',
              level: 3,
              sortNo: 5,
              remark: '检测操作',
              status: 'O',
              otherRemark: '{"componentMapping":"quality-control/ndt/edit"}',
              terminalType: 'B',
              terminalRoute: 'ndt-edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-08-05 08:57:15',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40d8d0cade2018d207316590ec4',
              pid: '000000008ba875a4018ba8b4412e002c',
              pathId:
                '000000008ba875a4018ba8b3bbcc002b,000000008ba875a4018ba8b4412e002c,2c9ff40d8d0cade2018d207316590ec4',
              pathName: '质量管理,无损检测,检测操作',
              powerIcon: null,
              iconColor: null,
              powerName: '检测操作',
              powerType: 'P',
              level: 3,
              sortNo: 6,
              remark: '检测操作',
              status: 'O',
              otherRemark:
                '{"componentMapping":"quality-control/ndt/batch-edit"}',
              terminalType: 'B',
              terminalRoute: 'ndt-batch-edit',
              addTime: '2024-01-19 14:40:30',
              updTime: '2024-08-05 08:49:45',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba875a4018ba8b5a543002f',
          pid: '000000008ba875a4018ba8b3bbcc002b',
          pathId:
            '000000008ba875a4018ba8b3bbcc002b,000000008ba875a4018ba8b5a543002f',
          pathName: '质量管理,检验台账',
          powerIcon: 'icon-icon_jianyantaizhang',
          iconColor: '#1678FF',
          powerName: '检验台账',
          powerType: 'M',
          level: 2,
          sortNo: 2,
          remark: '检验台账',
          status: 'O',
          otherRemark:
            '{"componentMapping":"quality-control/inspection-ledger/major"}',
          terminalType: 'B',
          terminalRoute: 'inspection-ledger',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-08-05 08:58:39',
          hasChildren: false,
          children: null
        }
      ]
    },
    {
      powerId: '000000008ba875a4018ba8a7f1300027',
      pid: '0',
      pathId: '000000008ba875a4018ba8a7f1300027',
      pathName: '成品库存',
      powerIcon: 'icon-Frame11',
      iconColor: '',
      powerName: '成品库存',
      powerType: 'M',
      level: 1,
      sortNo: 10,
      remark: '成品库存',
      status: 'O',
      otherRemark: '{"componentMapping":"finished-good-inventory/major"}',
      terminalType: 'B',
      terminalRoute: '/finished-good-inventory-m',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-08-05 08:36:38',

      children: [
        {
          powerId: '000000008ba875a4018ba8a879f50028',
          pid: '000000008ba875a4018ba8a7f1300027',
          pathId:
            '000000008ba875a4018ba8a7f1300027,000000008ba875a4018ba8a879f50028',
          pathName: '成品库存,成品库存',
          powerIcon: 'icon-icon_chengpinkucun',
          iconColor: '#1678FF',
          powerName: '成品库存',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: '成品库存',
          status: 'O',
          otherRemark: '{"componentMapping":"finished-good-inventory/major"}',
          terminalType: 'B',
          terminalRoute: 'finished-good-inventory',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-08-05 08:59:57',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1ff3dae10e35',
              pid: '000000008ba875a4018ba8a879f50028',
              pathId:
                '000000008ba875a4018ba8a7f1300027,000000008ba875a4018ba8a879f50028,402894a78c1f6f9e018c1ff3dae10e35',
              pathName: '成品库存,成品库存,打印二维码',
              powerIcon: null,
              iconColor: null,
              powerName: '打印二维码',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'print',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-08-05 09:02:34',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c1ff45f960e36',
              pid: '000000008ba875a4018ba8a879f50028',
              pathId:
                '000000008ba875a4018ba8a7f1300027,000000008ba875a4018ba8a879f50028,402894a78c1f6f9e018c1ff45f960e36',
              pathName: '成品库存,成品库存,出库',
              powerIcon: null,
              iconColor: null,
              powerName: '出库',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'outbound',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-08-05 09:07:55',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba875a4018ba8a98280002a',
              pid: '000000008ba875a4018ba8a879f50028',
              pathId:
                '000000008ba875a4018ba8a7f1300027,000000008ba875a4018ba8a879f50028,000000008ba875a4018ba8a98280002a',
              pathName: '成品库存,成品库存,出库详情',
              powerIcon: null,
              iconColor: '',
              powerName: '出库详情',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: '出库详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"finished-good-inventory/detail","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'finished-good-inventory-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-08-05 09:08:36',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008ba875a4018ba8a8ea390029',
              pid: '000000008ba875a4018ba8a879f50028',
              pathId:
                '000000008ba875a4018ba8a7f1300027,000000008ba875a4018ba8a879f50028,000000008ba875a4018ba8a8ea390029',
              pathName: '成品库存,成品库存,成品出库',
              powerIcon: null,
              iconColor: '',
              powerName: '成品出库',
              powerType: 'P',
              level: 3,
              sortNo: 4,
              remark: '成品出库',
              status: 'O',
              otherRemark:
                '{"componentMapping":"finished-good-inventory/outbound","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'finished-good-inventory-outbound',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-08-05 09:09:44',
              hasChildren: false,
              children: null
            }
          ]
        }
      ]
    },
    {
      powerId: '000000008ba875a4018ba8caa9f4003b',
      pid: '0',
      pathId: '000000008ba875a4018ba8caa9f4003b',
      pathName: '业务配置',
      powerIcon: 'icon-Frame9',
      iconColor: '',
      powerName: '业务配置',
      powerType: 'M',
      level: 1,
      sortNo: 11,
      remark: '业务配置',
      status: 'O',
      otherRemark: 'null',
      terminalType: 'B',
      terminalRoute: '/system-config',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-07-25 15:34:54',

      children: [
        {
          powerId: '000000008ba875a4018ba8cff4c80041',
          pid: '000000008ba875a4018ba8caa9f4003b',
          pathId:
            '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8cff4c80041',
          pathName: '业务配置,角色配置',
          powerIcon: 'icon-icon_jiaosepeizhi',
          iconColor: '#03EDDF',
          powerName: '角色配置',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: '角色配置',
          status: 'O',
          otherRemark:
            '{"componentMapping":"system-config/role-configuration/major"}',
          terminalType: 'B',
          terminalRoute: 'role-configuration',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:05:58',

          children: [
            {
              powerId: '402894a78c1f6f9e018c1f829b090167',
              pid: '000000008ba875a4018ba8cff4c80041',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8cff4c80041,402894a78c1f6f9e018c1f829b090167',
              pathName: '业务配置,角色配置,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: '保存按钮',
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22cf2ced0f57',
              pid: '000000008ba875a4018ba8cff4c80041',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8cff4c80041,402894a78c1f6f9e018c22cf2ced0f57',
              pathName: '业务配置,角色配置,新增角色',
              powerIcon: null,
              iconColor: null,
              powerName: '新增角色',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'add',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22cfb3ae0f58',
              pid: '000000008ba875a4018ba8cff4c80041',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8cff4c80041,402894a78c1f6f9e018c22cfb3ae0f58',
              pathName: '业务配置,角色配置,编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑',
              powerType: 'B',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22d0379b0f59',
              pid: '000000008ba875a4018ba8cff4c80041',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8cff4c80041,402894a78c1f6f9e018c22d0379b0f59',
              pathName: '业务配置,角色配置,删除',
              powerIcon: null,
              iconColor: null,
              powerName: '删除',
              powerType: 'B',
              level: 3,
              sortNo: 4,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'delete',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba875a4018ba8d0a5410042',
          pid: '000000008ba875a4018ba8caa9f4003b',
          pathId:
            '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8d0a5410042',
          pathName: '业务配置,权限配置',
          powerIcon: 'icon-icon_quanxianpeizhi',
          iconColor: '#FD9C0B',
          powerName: '权限配置',
          powerType: 'M',
          level: 2,
          sortNo: 2,
          remark: '权限配置',
          status: 'O',
          otherRemark:
            '{"componentMapping":"system-config/permission-assign/major"}',
          terminalType: 'B',
          terminalRoute: 'permission-assign',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:05:58',

          children: [
            {
              powerId: '402894a78c1f6f9e018c22d66af0135a',
              pid: '000000008ba875a4018ba8d0a5410042',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8d0a5410042,402894a78c1f6f9e018c22d66af0135a',
              pathName: '业务配置,权限配置,新增',
              powerIcon: null,
              iconColor: null,
              powerName: '新增',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'add',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            },
            {
              powerId: '402894a78c1f6f9e018c22d6b869135b',
              pid: '000000008ba875a4018ba8d0a5410042',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8d0a5410042,402894a78c1f6f9e018c22d6b869135b',
              pathName: '业务配置,权限配置,移除',
              powerIcon: null,
              iconColor: null,
              powerName: '移除',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'delete',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008ba875a4018ba8d11eae0043',
          pid: '000000008ba875a4018ba8caa9f4003b',
          pathId:
            '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8d11eae0043',
          pathName: '业务配置,项目权限',
          powerIcon: 'icon-icon_xiangmuquanxian',
          iconColor: '#6696F3',
          powerName: '项目权限',
          powerType: 'M',
          level: 2,
          sortNo: 3,
          remark: '项目权限',
          status: 'O',
          otherRemark:
            '{"componentMapping":"system-config/project-permission/major"}',
          terminalType: 'B',
          terminalRoute: 'project-permission',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-25 10:05:58',

          children: [
            {
              powerId: '402894a78c1f6f9e018c22d73158135c',
              pid: '000000008ba875a4018ba8d11eae0043',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,000000008ba875a4018ba8d11eae0043,402894a78c1f6f9e018c22d73158135c',
              pathName: '业务配置,项目权限,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff8080818ec19a1a01905845cfa41c80',
          pid: '000000008ba875a4018ba8caa9f4003b',
          pathId:
            '000000008ba875a4018ba8caa9f4003b,ff8080818ec19a1a01905845cfa41c80',
          pathName: '业务配置,标准吨比例',
          powerIcon: null,
          iconColor: null,
          powerName: '标准吨比例',
          powerType: 'M',
          level: 2,
          sortNo: 4,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"system-config/standard-ton-rati-configuration/major"}',
          terminalType: 'B',
          terminalRoute: 'standard-ton-rati-configuration',
          addTime: '2024-06-27 13:58:09',
          updTime: '2024-07-25 10:05:58',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff8080818ec19a1a0190584481b01c7c',
          pid: '000000008ba875a4018ba8caa9f4003b',
          pathId:
            '000000008ba875a4018ba8caa9f4003b,ff8080818ec19a1a0190584481b01c7c',
          pathName: '业务配置,峰值产能',
          powerIcon: null,
          iconColor: null,
          powerName: '峰值产能',
          powerType: 'M',
          level: 2,
          sortNo: 5,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"system-config/peak-production-capacity/major"}',
          terminalType: 'B',
          terminalRoute: 'peak-production-capacity',
          addTime: '2024-06-27 13:56:43',
          updTime: '2024-08-06 14:02:28',

          children: [
            {
              powerId: 'ff8080818ec19a1a01905844da9e1c7d',
              pid: 'ff8080818ec19a1a0190584481b01c7c',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,ff8080818ec19a1a0190584481b01c7c,ff8080818ec19a1a01905844da9e1c7d',
              pathName: '业务配置,峰值产能,新增',
              powerIcon: null,
              iconColor: null,
              powerName: '新增',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'add',
              addTime: '2024-06-27 13:57:06',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            },
            {
              powerId: 'ff8080818ec19a1a0190584525191c7e',
              pid: 'ff8080818ec19a1a0190584481b01c7c',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,ff8080818ec19a1a0190584481b01c7c,ff8080818ec19a1a0190584525191c7e',
              pathName: '业务配置,峰值产能,编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '编辑',
              powerType: 'B',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'edit',
              addTime: '2024-06-27 13:57:25',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            },
            {
              powerId: 'ff8080818ec19a1a0190584574cc1c7f',
              pid: 'ff8080818ec19a1a0190584481b01c7c',
              pathId:
                '000000008ba875a4018ba8caa9f4003b,ff8080818ec19a1a0190584481b01c7c,ff8080818ec19a1a0190584574cc1c7f',
              pathName: '业务配置,峰值产能,删除',
              powerIcon: null,
              iconColor: null,
              powerName: '删除',
              powerType: 'B',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'delete',
              addTime: '2024-06-27 13:57:45',
              updTime: '2024-07-25 10:05:58',
              hasChildren: false,
              children: null
            }
          ]
        }
      ]
    },
    {
      powerId: '2c9ff40d8caf330d018cafea905900c0',
      pid: '0',
      pathId: '2c9ff40d8caf330d018cafea905900c0',
      pathName: '工艺管理',
      powerIcon: 'icon-Frame18',
      iconColor: null,
      powerName: '工艺管理',
      powerType: 'M',
      level: 1,
      sortNo: 12,
      remark: null,
      status: 'O',
      otherRemark: 'null',
      terminalType: 'B',
      terminalRoute: '/process-management',
      addTime: '2023-12-28 18:13:54',
      updTime: '2024-07-26 17:24:23',

      children: [
        {
          powerId: '2c9ff40f8caf335d018caff1113d00cb',
          pid: '2c9ff40d8caf330d018cafea905900c0',
          pathId:
            '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018caff1113d00cb',
          pathName: '工艺管理,工艺模板',
          powerIcon: 'icon-icon_gongyimoban',
          iconColor: '#1678FF',
          powerName: '工艺模板',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: null,
          status: 'O',
          otherRemark:
            '{"redirect":"/process-management/process-template/process-template-list"}',
          terminalType: 'B',
          terminalRoute: 'process-template',
          addTime: '2023-12-28 18:21:01',
          updTime: '2024-08-05 17:00:38',

          children: [
            {
              powerId: '2c9ff40e8caf33bd018caff1f43900cb',
              pid: '2c9ff40f8caf335d018caff1113d00cb',
              pathId:
                '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018caff1113d00cb,2c9ff40e8caf33bd018caff1f43900cb',
              pathName: '工艺管理,工艺模板,工艺模板',
              powerIcon: 'icon-icon_gongyimoban',
              iconColor: '#1678FF',
              powerName: '工艺模板',
              powerType: 'P',
              level: 2,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"process-management/process-template/major"}',
              terminalType: 'B',
              terminalRoute: 'process-template-list',
              addTime: '2023-12-28 18:21:59',
              updTime: '2024-07-26 17:24:23',

              children: [
                {
                  powerId: '2c9ff40d8caf330d018cafff52c200c5',
                  pid: '2c9ff40e8caf33bd018caff1f43900cb',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018caff1113d00cb,2c9ff40e8caf33bd018caff1f43900cb,2c9ff40d8caf330d018cafff52c200c5',
                  pathName: '工艺管理,工艺模板,工艺模板,工艺模板详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工艺模板详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 4,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"process-management/process-template/detail"}',
                  terminalType: 'B',
                  terminalRoute: 'process-template-detail',
                  addTime: '2023-12-28 18:36:35',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff80808191108638019121c7db6a25fd',
                  pid: '2c9ff40e8caf33bd018caff1f43900cb',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018caff1113d00cb,2c9ff40e8caf33bd018caff1f43900cb,ff80808191108638019121c7db6a25fd',
                  pathName: '工艺管理,工艺模板,工艺模板,新增',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '新增',
                  powerType: 'B',
                  level: 4,
                  sortNo: 4,
                  remark: null,
                  status: 'O',
                  otherRemark: '{}',
                  terminalType: 'B',
                  terminalRoute: 'add',
                  addTime: '2024-08-05 17:03:52',
                  updTime: '2024-08-05 17:03:52',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40f8caf335d018caffa566400cd',
                  pid: '2c9ff40e8caf33bd018caff1f43900cb',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018caff1113d00cb,2c9ff40e8caf33bd018caff1f43900cb,2c9ff40f8caf335d018caffa566400cd',
                  pathName: '工艺管理,工艺模板,工艺模板,模板新增',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '模板新增',
                  powerType: 'P',
                  level: 4,
                  sortNo: 5,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"process-management/process-template/add"}',
                  terminalType: 'B',
                  terminalRoute: 'process-template-add',
                  addTime: '2023-12-28 18:31:08',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff80808191108638019121c9b77e274a',
                  pid: '2c9ff40e8caf33bd018caff1f43900cb',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018caff1113d00cb,2c9ff40e8caf33bd018caff1f43900cb,ff80808191108638019121c9b77e274a',
                  pathName: '工艺管理,工艺模板,工艺模板,编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '编辑',
                  powerType: 'B',
                  level: 4,
                  sortNo: 5,
                  remark: null,
                  status: 'O',
                  otherRemark: '{}',
                  terminalType: 'B',
                  terminalRoute: 'edit',
                  addTime: '2024-08-05 17:05:54',
                  updTime: '2024-08-05 17:05:54',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40f8caf335d018caffdb73a00ce',
                  pid: '2c9ff40e8caf33bd018caff1f43900cb',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018caff1113d00cb,2c9ff40e8caf33bd018caff1f43900cb,2c9ff40f8caf335d018caffdb73a00ce',
                  pathName: '工艺管理,工艺模板,工艺模板,模板编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '模板编辑',
                  powerType: 'P',
                  level: 4,
                  sortNo: 6,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"process-management/process-template/edit"}',
                  terminalType: 'B',
                  terminalRoute: 'process-template-edit',
                  addTime: '2023-12-28 18:34:50',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff80808191108638019121ca0cef274b',
                  pid: '2c9ff40e8caf33bd018caff1f43900cb',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018caff1113d00cb,2c9ff40e8caf33bd018caff1f43900cb,ff80808191108638019121ca0cef274b',
                  pathName: '工艺管理,工艺模板,工艺模板,删除',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '删除',
                  powerType: 'B',
                  level: 4,
                  sortNo: 6,
                  remark: null,
                  status: 'O',
                  otherRemark: '{}',
                  terminalType: 'B',
                  terminalRoute: 'delete',
                  addTime: '2024-08-05 17:06:15',
                  updTime: '2024-08-05 17:06:15',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '2c9ff40f8caf335d018cafeaef9700c9',
          pid: '2c9ff40d8caf330d018cafea905900c0',
          pathId:
            '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018cafeaef9700c9',
          pathName: '工艺管理,工序管理',
          powerIcon: 'icon-Frame16',
          iconColor: '#2EC889',
          powerName: '工序管理',
          powerType: 'M',
          level: 2,
          sortNo: 2,
          remark: null,
          status: 'O',
          otherRemark:
            '{"redirect":"/process-management/procedure-management/procedure-management-list"}',
          terminalType: 'B',
          terminalRoute: 'procedure-management',
          addTime: '2023-12-28 18:14:19',
          updTime: '2024-08-05 17:00:38',

          children: [
            {
              powerId: '2c9ff40f8caf335d018cafed44da00ca',
              pid: '2c9ff40f8caf335d018cafeaef9700c9',
              pathId:
                '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018cafeaef9700c9,2c9ff40f8caf335d018cafed44da00ca',
              pathName: '工艺管理,工序管理,工序管理',
              powerIcon: null,
              iconColor: null,
              powerName: '工序管理',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"process-management/procedure-management/major"}',
              terminalType: 'B',
              terminalRoute: 'procedure-management-list',
              addTime: '2023-12-28 18:16:52',
              updTime: '2024-07-26 17:24:23',

              children: [
                {
                  powerId: '2c9ff40e8caf33bd018cafede90f00c7',
                  pid: '2c9ff40f8caf335d018cafed44da00ca',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018cafeaef9700c9,2c9ff40f8caf335d018cafed44da00ca,2c9ff40e8caf33bd018cafede90f00c7',
                  pathName: '工艺管理,工序管理,工序管理,新增',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '新增',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'add',
                  addTime: '2023-12-28 18:17:34',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8caf33bd018cafee370d00c8',
                  pid: '2c9ff40f8caf335d018cafed44da00ca',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018cafeaef9700c9,2c9ff40f8caf335d018cafed44da00ca,2c9ff40e8caf33bd018cafee370d00c8',
                  pathName: '工艺管理,工序管理,工序管理,编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '编辑',
                  powerType: 'B',
                  level: 4,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'edit',
                  addTime: '2023-12-28 18:17:54',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8caf33bd018cafee840500c9',
                  pid: '2c9ff40f8caf335d018cafed44da00ca',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018cafeaef9700c9,2c9ff40f8caf335d018cafed44da00ca,2c9ff40e8caf33bd018cafee840500c9',
                  pathName: '工艺管理,工序管理,工序管理,删除',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '删除',
                  powerType: 'B',
                  level: 4,
                  sortNo: 3,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'delete',
                  addTime: '2023-12-28 18:18:13',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40d8caf330d018cafef416300c1',
                  pid: '2c9ff40f8caf335d018cafed44da00ca',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018cafeaef9700c9,2c9ff40f8caf335d018cafed44da00ca,2c9ff40d8caf330d018cafef416300c1',
                  pathName: '工艺管理,工序管理,工序管理,工序新增',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工序新增',
                  powerType: 'P',
                  level: 4,
                  sortNo: 4,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"process-management/procedure-management/add"}',
                  terminalType: 'B',
                  terminalRoute: 'procedure-management-add',
                  addTime: '2023-12-28 18:19:02',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8caf33bd018caff06cfc00ca',
                  pid: '2c9ff40f8caf335d018cafed44da00ca',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018cafeaef9700c9,2c9ff40f8caf335d018cafed44da00ca,2c9ff40e8caf33bd018caff06cfc00ca',
                  pathName: '工艺管理,工序管理,工序管理,工序详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工序详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 5,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"process-management/procedure-management/detail"}',
                  terminalType: 'B',
                  terminalRoute: 'procedure-management-detail',
                  addTime: '2023-12-28 18:20:19',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40d8caf330d018cafefc4ee00c2',
                  pid: '2c9ff40f8caf335d018cafed44da00ca',
                  pathId:
                    '2c9ff40d8caf330d018cafea905900c0,2c9ff40f8caf335d018cafeaef9700c9,2c9ff40f8caf335d018cafed44da00ca,2c9ff40d8caf330d018cafefc4ee00c2',
                  pathName: '工艺管理,工序管理,工序管理,工序编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工序编辑',
                  powerType: 'P',
                  level: 4,
                  sortNo: 6,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"process-management/procedure-management/edit"}',
                  terminalType: 'B',
                  terminalRoute: 'procedure-management-edit',
                  addTime: '2023-12-28 18:19:36',
                  updTime: '2024-07-26 17:24:23',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      powerId: '000000008c1ec209018c1ef8fe990000',
      pid: '0',
      pathId: '000000008c1ec209018c1ef8fe990000',
      pathName: '报表查询',
      powerIcon: 'icon-Frame10',
      iconColor: null,
      powerName: '报表查询',
      powerType: 'M',
      level: 1,
      sortNo: 13,
      remark: '报表查询',
      status: 'O',
      otherRemark: 'null',
      terminalType: 'B',
      terminalRoute: '/report-query',
      addTime: '2023-12-01 08:30:00',
      updTime: '2024-07-26 17:23:50',

      children: [
        {
          powerId: '000000008c1ec209018c1ef9d1ac0001',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1ef9d1ac0001',
          pathName: '报表查询,车间日报',
          powerIcon: 'icon-icon_chejianribao',
          iconColor: '#FD9C0B',
          powerName: '车间日报',
          powerType: 'M',
          level: 2,
          sortNo: 1,
          remark: '车间日报',
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/workshop-daily-report/major"}',
          terminalType: 'B',
          terminalRoute: 'workshop-daily-report',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:23:50',

          children: [
            {
              powerId: '000000008c340305018c342c427202fc',
              pid: '000000008c1ec209018c1ef9d1ac0001',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1ef9d1ac0001,000000008c340305018c342c427202fc',
              pathName: '报表查询,车间日报,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2023-12-04 17:32:45',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '000000008c1ec209018c1efa9af60002',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002',
          pathName: '报表查询,工费报表',
          powerIcon: 'icon-icon_gongfeibaobiao',
          iconColor: '#42D9C7',
          powerName: '工费报表',
          powerType: 'M',
          level: 2,
          sortNo: 2,
          remark: '工费报表',
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/labor-cost-report/major"}',
          terminalType: 'B',
          terminalRoute: 'labor-cost-report',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:23:50',

          children: [
            {
              powerId: '000000008c340305018c342cf2ec02fd',
              pid: '000000008c1ec209018c1efa9af60002',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c340305018c342cf2ec02fd',
              pathName: '报表查询,工费报表,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2023-12-04 17:33:30',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1ec209018c1efbc1db0003',
              pid: '000000008c1ec209018c1efa9af60002',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efbc1db0003',
              pathName: '报表查询,工费报表,工序明细',
              powerIcon: null,
              iconColor: null,
              powerName: '工序明细',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: '工费详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/labor-cost-report/project-labor-detail"}',
              terminalType: 'B',
              terminalRoute: 'project-labor-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:50',

              children: [
                {
                  powerId: '000000008c340305018c392fbbff4119',
                  pid: '000000008c1ec209018c1efbc1db0003',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efbc1db0003,000000008c340305018c392fbbff4119',
                  pathName: '报表查询,工费详情,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2023-12-05 16:54:39',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '000000008c1ec209018c1efdd36c0005',
                  pid: '000000008c1ec209018c1efbc1db0003',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efbc1db0003,000000008c1ec209018c1efdd36c0005',
                  pathName: '报表查询,工费报表,工序明细,工费明细',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工费明细',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: '工费明细',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"report-query/labor-cost-report/project-labor-detail/detail"}',
                  terminalType: 'B',
                  terminalRoute: 'project-labor-detail-detail',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-26 17:23:50',

                  children: [
                    {
                      powerId: '000000008c340305018c3429a26402fb',
                      pid: '000000008c1ec209018c1efdd36c0005',
                      pathId:
                        '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efbc1db0003,000000008c1ec209018c1efdd36c0005,000000008c340305018c3429a26402fb',
                      pathName: '报表查询,工费报表,工序明细,工费明细,工单详情',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '工单详情',
                      powerType: 'P',
                      level: 5,
                      sortNo: 1,
                      remark: '项目工费详情-工单详情',
                      status: 'O',
                      otherRemark:
                        '{"componentMapping":"work-order-management/product-dispatch/product-detail"}',
                      terminalType: 'B',
                      terminalRoute:
                        'project-labor-detail-detail-product-detail',
                      addTime: '2023-12-04 17:29:53',
                      updTime: '2024-07-26 17:23:50',
                      hasChildren: false,
                      children: null
                    }
                  ]
                },
                {
                  powerId: '2c9ff40e8d0cae8c018d0fb841e403ce',
                  pid: '000000008c1ec209018c1efbc1db0003',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efbc1db0003,2c9ff40e8d0cae8c018d0fb841e403ce',
                  pathName: '报表查询,工费报表,工序明细,工艺明细',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工艺明细',
                  powerType: 'P',
                  level: 4,
                  sortNo: 3,
                  remark: '工费报表-工序明细-工艺明细',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"report-query/labor-cost-report/project-labor-detail/technology-labor-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'technology-labor-detail',
                  addTime: '2024-01-16 08:42:30',
                  updTime: '2024-07-26 17:23:50',

                  children: [
                    {
                      powerId: '2c9ff40d8d0cade2018d0fb9471a03b6',
                      pid: '2c9ff40e8d0cae8c018d0fb841e403ce',
                      pathId:
                        '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0fb841e403ce,2c9ff40d8d0cade2018d0fb9471a03b6',
                      pathName: '报表查询,工艺明细,导出',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '导出',
                      powerType: 'B',
                      level: 3,
                      sortNo: 1,
                      remark: '工艺明细导出',
                      status: 'O',
                      otherRemark: null,
                      terminalType: 'B',
                      terminalRoute: 'export',
                      addTime: '2024-01-16 08:43:37',
                      updTime: '2024-07-26 17:23:50',
                      hasChildren: false,
                      children: null
                    },
                    {
                      powerId: '2c9ff40e8d0cae8c018d0fbaa5e303e2',
                      pid: '2c9ff40e8d0cae8c018d0fb841e403ce',
                      pathId:
                        '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efbc1db0003,2c9ff40e8d0cae8c018d0fb841e403ce,2c9ff40e8d0cae8c018d0fbaa5e303e2',
                      pathName: '报表查询,工费报表,工序明细,工艺明细,工费明细',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '工费明细',
                      powerType: 'P',
                      level: 5,
                      sortNo: 2,
                      remark:
                        '工费报表-工序明细-工艺明细-工费明细 （面包屑问题）',
                      status: 'O',
                      otherRemark:
                        '{"componentMapping":"report-query/labor-cost-report/project-labor-detail/detail"}',
                      terminalType: 'B',
                      terminalRoute: 'project-labor-technology-detail-detail',
                      addTime: '2024-01-16 08:45:07',
                      updTime: '2024-07-26 17:23:50',

                      children: [
                        {
                          powerId: '2c9ff40f8d0cae39018d0fbb5e4a048b',
                          pid: '2c9ff40e8d0cae8c018d0fbaa5e303e2',
                          pathId:
                            '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0fbaa5e303e2,2c9ff40f8d0cae39018d0fbb5e4a048b',
                          pathName: '报表查询,工费明细,导出',
                          powerIcon: null,
                          iconColor: null,
                          powerName: '导出',
                          powerType: 'B',
                          level: 3,
                          sortNo: 1,
                          remark: '工费明细导出',
                          status: 'O',
                          otherRemark: null,
                          terminalType: 'B',
                          terminalRoute: 'export',
                          addTime: '2024-01-16 08:45:54',
                          updTime: '2024-07-26 17:23:50',
                          hasChildren: false,
                          children: null
                        },
                        {
                          powerId: '2c9ff40e8d0cae8c018d1f98c63e09a5',
                          pid: '2c9ff40e8d0cae8c018d0fbaa5e303e2',
                          pathId:
                            '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efbc1db0003,2c9ff40e8d0cae8c018d0fb841e403ce,2c9ff40e8d0cae8c018d0fbaa5e303e2,2c9ff40e8d0cae8c018d1f98c63e09a5',
                          pathName:
                            '报表查询,工费报表,工序明细,工艺明细,工费明细,工单详情',
                          powerIcon: null,
                          iconColor: null,
                          powerName: '工单详情',
                          powerType: 'P',
                          level: 6,
                          sortNo: 2,
                          remark:
                            '工费报表-工序明细-工艺明细-工费明细-工单详情 （面包屑问题）',
                          status: 'O',
                          otherRemark:
                            '{"componentMapping":"work-order-management/product-dispatch/product-detail"}',
                          terminalType: 'B',
                          terminalRoute:
                            'project-labor-technology-detail-detail-product-detail',
                          addTime: '2024-01-19 10:42:02',
                          updTime: '2024-08-06 15:47:15',
                          hasChildren: false,
                          children: null
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              powerId: '000000008c1ec209018c1efcff060004',
              pid: '000000008c1ec209018c1efa9af60002',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efcff060004',
              pathName: '报表查询,工费报表,工费详情',
              powerIcon: null,
              iconColor: null,
              powerName: '工费详情',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: '工费详情',
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/labor-cost-report/workshop-labor-detail"}',
              terminalType: 'B',
              terminalRoute: 'workshop-labor-detail',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:50',

              children: [
                {
                  powerId: '000000008c46f2f9018c57dba5d40da0',
                  pid: '000000008c1ec209018c1efcff060004',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efcff060004,000000008c46f2f9018c57dba5d40da0',
                  pathName: '报表查询,工费详情,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2023-12-11 15:51:02',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '000000008c340305018c3428a2ef02f9',
                  pid: '000000008c1ec209018c1efcff060004',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efcff060004,000000008c340305018c3428a2ef02f9',
                  pathName: '报表查询,工费报表,工费详情,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: '车间工费详情-生产工单-工单详情',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/product-dispatch/product-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'workshop-labor-detail-product-detail',
                  addTime: '2023-12-04 17:28:48',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '000000008c340305018c342939bd02fa',
                  pid: '000000008c1ec209018c1efcff060004',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efa9af60002,000000008c1ec209018c1efcff060004,000000008c340305018c342939bd02fa',
                  pathName: '报表查询,工费报表,工费详情,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 3,
                  remark: '车间工费详情-临时工单-工单详情',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/product-dispatch/temporary-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'workshop-labor-detail-temporary-detail',
                  addTime: '2023-12-04 17:29:26',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '000000008c1ec209018c1efed8510006',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efed8510006',
          pathName: '报表查询,项目产量',
          powerIcon: 'icon-icon_xiangmuchanliang',
          iconColor: '#BA45AB',
          powerName: '项目产量',
          powerType: 'M',
          level: 2,
          sortNo: 3,
          remark: '项目产量',
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/project-output/major"}',
          terminalType: 'B',
          terminalRoute: 'project-output',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:23:50',

          children: [
            {
              powerId: '000000008c340305018c342f6c3402fe',
              pid: '000000008c1ec209018c1efed8510006',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efed8510006,000000008c340305018c342f6c3402fe',
              pathName: '报表查询,项目产量,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2023-12-04 17:36:12',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1ec209018c1effad7f0007',
              pid: '000000008c1ec209018c1efed8510006',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efed8510006,000000008c1ec209018c1effad7f0007',
              pathName: '报表查询,项目产量,项目明细',
              powerIcon: null,
              iconColor: null,
              powerName: '项目明细',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: '项目明细',
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/project-output/project-details"}',
              terminalType: 'B',
              terminalRoute: 'project-details',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:50',

              children: [
                {
                  powerId: '000000008c340305018c3932e7ef427b',
                  pid: '000000008c1ec209018c1effad7f0007',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1effad7f0007,000000008c340305018c3932e7ef427b',
                  pathName: '报表查询,项目明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2023-12-05 16:58:07',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '000000008c1ec209018c1f0041910008',
                  pid: '000000008c1ec209018c1effad7f0007',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1efed8510006,000000008c1ec209018c1effad7f0007,000000008c1ec209018c1f0041910008',
                  pathName: '报表查询,项目产量,项目明细,物料明细',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '物料明细',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: '物料明细',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"report-query/project-output/material-details"}',
                  terminalType: 'B',
                  terminalRoute: 'material-details',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-07-26 17:23:50',

                  children: [
                    {
                      powerId: '000000008c340305018c39336b1e427c',
                      pid: '000000008c1ec209018c1f0041910008',
                      pathId:
                        '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f0041910008,000000008c340305018c39336b1e427c',
                      pathName: '报表查询,物料明细,导出',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '导出',
                      powerType: 'B',
                      level: 3,
                      sortNo: 1,
                      remark: null,
                      status: 'O',
                      otherRemark: null,
                      terminalType: 'B',
                      terminalRoute: 'export',
                      addTime: '2023-12-05 16:58:40',
                      updTime: '2024-07-26 17:23:50',
                      hasChildren: false,
                      children: null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          powerId: '000000008c1ec209018c1f00e3140009',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f00e3140009',
          pathName: '报表查询,车间产量',
          powerIcon: 'icon-icon_chejianchanliang',
          iconColor: '#1AB9FD',
          powerName: '车间产量',
          powerType: 'M',
          level: 2,
          sortNo: 4,
          remark: '车间产量',
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/workshop-production/major"}',
          terminalType: 'B',
          terminalRoute: 'workshop-production',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:23:50',

          children: [
            {
              powerId: '000000008c340305018c342ff65302ff',
              pid: '000000008c1ec209018c1f00e3140009',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f00e3140009,000000008c340305018c342ff65302ff',
              pathName: '报表查询,车间产量,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2023-12-04 17:36:48',
              updTime: '2024-08-06 14:09:37',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1ec209018c1f01806e000a',
              pid: '000000008c1ec209018c1f00e3140009',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f00e3140009,000000008c1ec209018c1f01806e000a',
              pathName: '报表查询,车间产量,车间明细',
              powerIcon: null,
              iconColor: null,
              powerName: '车间明细',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: '车间明细',
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/workshop-production/workshop-details"}',
              terminalType: 'B',
              terminalRoute: 'workshop-details',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:50',

              children: [
                {
                  powerId: '000000008c340305018c37dcb1eb13c6',
                  pid: '000000008c1ec209018c1f01806e000a',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f01806e000a,000000008c340305018c37dcb1eb13c6',
                  pathName: '报表查询,车间明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2023-12-05 10:44:20',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '000000008c1ec209018c1f027b06000b',
                  pid: '000000008c1ec209018c1f01806e000a',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f00e3140009,000000008c1ec209018c1f01806e000a,000000008c1ec209018c1f027b06000b',
                  pathName: '报表查询,车间产量,车间明细,物料明细',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '物料明细',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: '物料明细',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"report-query/workshop-production/cj-material-details"}',
                  terminalType: 'B',
                  terminalRoute: 'cj-material-details',
                  addTime: '2023-12-01 08:30:00',
                  updTime: '2024-08-06 17:10:17',

                  children: [
                    {
                      powerId: '000000008c340305018c3948118043e3',
                      pid: '000000008c1ec209018c1f027b06000b',
                      pathId:
                        '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f027b06000b,000000008c340305018c3948118043e3',
                      pathName: '报表查询,物料明细,导出',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '导出',
                      powerType: 'B',
                      level: 3,
                      sortNo: 1,
                      remark: null,
                      status: 'O',
                      otherRemark: null,
                      terminalType: 'B',
                      terminalRoute: 'export',
                      addTime: '2023-12-05 17:21:14',
                      updTime: '2024-07-26 17:23:50',
                      hasChildren: false,
                      children: null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          powerId: '000000008c1ec209018c1f034f19000c',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f034f19000c',
          pathName: '报表查询,生产进度',
          powerIcon: 'icon-icon_shengchanjindu',
          iconColor: '#1678FF',
          powerName: '生产进度',
          powerType: 'M',
          level: 2,
          sortNo: 5,
          remark: '生产进度',
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/production-schedule/major"}',
          terminalType: 'B',
          terminalRoute: 'production-schedule',
          addTime: '2023-12-01 08:30:00',
          updTime: '2024-07-26 17:23:50',

          children: [
            {
              powerId: '000000008c340305018c3432405a0300',
              pid: '000000008c1ec209018c1f034f19000c',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f034f19000c,000000008c340305018c3432405a0300',
              pathName: '报表查询,生产进度,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2023-12-04 17:39:18',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c340305018c3433592003b8',
              pid: '000000008c1ec209018c1f034f19000c',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f034f19000c,000000008c340305018c3433592003b8',
              pathName: '报表查询,生产进度,图形配置',
              powerIcon: null,
              iconColor: null,
              powerName: '图形配置',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'config',
              addTime: '2023-12-04 17:40:30',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            },
            {
              powerId: '000000008c1ec209018c1f0424ce000d',
              pid: '000000008c1ec209018c1f034f19000c',
              pathId:
                '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f034f19000c,000000008c1ec209018c1f0424ce000d',
              pathName: '报表查询,生产进度,视图编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '视图编辑',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: '视图编辑',
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/production-schedule/components/production-progress-view-edit"}',
              terminalType: 'B',
              terminalRoute: 'production-progress-view-edit',
              addTime: '2023-12-01 08:30:00',
              updTime: '2024-07-26 17:23:50',

              children: [
                {
                  powerId: '000000008c340305018c34346b8703b9',
                  pid: '000000008c1ec209018c1f0424ce000d',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,000000008c1ec209018c1f0424ce000d,000000008c340305018c34346b8703b9',
                  pathName: '报表查询,视图编辑,保存',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '保存',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'save',
                  addTime: '2023-12-04 17:41:40',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '2c9ff40d8d0cade2018d0dfc68ae0002',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,2c9ff40d8d0cade2018d0dfc68ae0002',
          pathName: '报表查询,焊材报表',
          powerIcon: 'icon-hancaibaobiao',
          iconColor: '#2AC556',
          powerName: '焊材报表',
          powerType: 'M',
          level: 2,
          sortNo: 6,
          remark: null,
          status: 'O',
          otherRemark: '{"componentMapping":"report-query/weld-report/major"}',
          terminalType: 'B',
          terminalRoute: 'weld-report',
          addTime: '2024-01-16 00:37:42',
          updTime: '2024-07-26 17:23:50',
          hasChildren: false,
          children: null
        },
        {
          powerId: '2c9ff40e8d0cae8c018d0dfce95e0004',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0dfce95e0004',
          pathName: '报表查询,涂料报表',
          powerIcon: 'icon-Frame19',
          iconColor: '#BA45AB',
          powerName: '涂料报表',
          powerType: 'M',
          level: 2,
          sortNo: 7,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/coating-report/major"}',
          terminalType: 'B',
          terminalRoute: 'coating-report',
          addTime: '2024-01-16 00:38:15',
          updTime: '2024-07-26 17:23:50',

          children: [
            {
              powerId: '2c9ff40f8d0cae39018d0dfd89e40003',
              pid: '2c9ff40e8d0cae8c018d0dfce95e0004',
              pathId:
                '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0dfce95e0004,2c9ff40f8d0cae39018d0dfd89e40003',
              pathName: '报表查询,涂料报表,工序明细',
              powerIcon: null,
              iconColor: null,
              powerName: '工序明细',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: '涂装报表 -工序明细',
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/coating-report/detail"}',
              terminalType: 'B',
              terminalRoute: 'coating-process-detail-report',
              addTime: '2024-01-16 00:38:56',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: '2c9ff40e8d0cae8c018d0df469df0000',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0df469df0000',
          pathName: '报表查询,记工报表',
          powerIcon: 'icon-jigongbaobiao',
          iconColor: '#6696F3',
          powerName: '记工报表',
          powerType: 'M',
          level: 2,
          sortNo: 8,
          remark: null,
          status: 'O',
          otherRemark: '{"componentMapping":"report-query/record-time/major"}',
          terminalType: 'B',
          terminalRoute: 'record-time',
          addTime: '2024-01-16 00:28:58',
          updTime: '2024-07-26 17:23:50',

          children: [
            {
              powerId: '2c9ff40f8d0cae39018d0df50c620000',
              pid: '2c9ff40e8d0cae8c018d0df469df0000',
              pathId:
                '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0df469df0000,2c9ff40f8d0cae39018d0df50c620000',
              pathName: '报表查询,记工报表,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2024-01-16 00:29:40',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40d8d0cade2018d0df5a8a60000',
              pid: '2c9ff40e8d0cae8c018d0df469df0000',
              pathId:
                '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0df469df0000,2c9ff40d8d0cade2018d0df5a8a60000',
              pathName: '报表查询,记工报表,记工明细',
              powerIcon: null,
              iconColor: null,
              powerName: '记工明细',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/record-time/record-time-detail"}',
              terminalType: 'B',
              terminalRoute: 'record-time-detail',
              addTime: '2024-01-16 00:30:20',
              updTime: '2024-07-26 17:23:50',

              children: [
                {
                  powerId: '2c9ff40d8d0cade2018d0df7abe10001',
                  pid: '2c9ff40d8d0cade2018d0df5a8a60000',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,2c9ff40d8d0cade2018d0df5a8a60000,2c9ff40d8d0cade2018d0df7abe10001',
                  pathName: '报表查询,记工明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2024-01-16 00:32:32',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: '2c9ff40e8d0cae8c018d0df83da00001',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0df83da00001',
          pathName: '报表查询,准备计划报表',
          powerIcon: 'icon-zhunbeijihuabaobiao',
          iconColor: '#FFD84D',
          powerName: '准备计划报表',
          powerType: 'M',
          level: 2,
          sortNo: 9,
          remark: '准备计划报表',
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/prepare-planning-reports/major"}',
          terminalType: 'B',
          terminalRoute: 'prepare-planning-reports',
          addTime: '2024-01-16 00:33:09',
          updTime: '2024-07-26 17:23:50',

          children: [
            {
              powerId: '2c9ff40f8d0cae39018d0df925730001',
              pid: '2c9ff40e8d0cae8c018d0df83da00001',
              pathId:
                '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0df83da00001,2c9ff40f8d0cae39018d0df925730001',
              pathName: '报表查询,准备计划报表,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: '导出',
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2024-01-16 00:34:08',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            },
            {
              powerId: '2c9ff40e8d0cae8c018d0dfa1e3a0002',
              pid: '2c9ff40e8d0cae8c018d0df83da00001',
              pathId:
                '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0df83da00001,2c9ff40e8d0cae8c018d0dfa1e3a0002',
              pathName: '报表查询,准备计划报表,部门明细',
              powerIcon: null,
              iconColor: null,
              powerName: '部门明细',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: '部门明细',
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/prepare-planning-reports/details1"}',
              terminalType: 'B',
              terminalRoute: 'prepare-planning-reports-details1',
              addTime: '2024-01-16 00:35:12',
              updTime: '2024-07-26 17:23:50',

              children: [
                {
                  powerId: '2c9ff40f8d0cae39018d0dfac8b10002',
                  pid: '2c9ff40e8d0cae8c018d0dfa1e3a0002',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0dfa1e3a0002,2c9ff40f8d0cae39018d0dfac8b10002',
                  pathName: '报表查询,部门明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: '导出',
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2024-01-16 00:35:56',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: '2c9ff40e8d0cae8c018d0dfb9ca60003',
                  pid: '2c9ff40e8d0cae8c018d0dfa1e3a0002',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,2c9ff40e8d0cae8c018d0df83da00001,2c9ff40e8d0cae8c018d0dfa1e3a0002,2c9ff40e8d0cae8c018d0dfb9ca60003',
                  pathName: '报表查询,准备计划报表,部门明细,准备计划详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '准备计划详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: '准备计划详情',
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"report-query/prepare-planning-reports/details2"}',
                  terminalType: 'B',
                  terminalRoute: 'prepare-planning-reports-details2',
                  addTime: '2024-01-16 00:36:50',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190e7a710e73ff3',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e7a710e73ff3',
          pathName: '报表查询,涂装产量',
          powerIcon: null,
          iconColor: null,
          powerName: '涂装产量',
          powerType: 'M',
          level: 2,
          sortNo: 10,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/coating-output/major"}',
          terminalType: 'B',
          terminalRoute: 'coating-output',
          addTime: '2024-07-25 10:10:04',
          updTime: '2024-07-29 18:06:24',

          children: [
            {
              powerId: 'ff808081905dcfe60190e7a7839e3ff4',
              pid: 'ff808081905dcfe60190e7a710e73ff3',
              pathId:
                '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e7a710e73ff3,ff808081905dcfe60190e7a7839e3ff4',
              pathName: '报表查询,涂装产量,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2024-07-25 10:10:34',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            },
            {
              powerId: 'ff808081905dcfe60190e7a803023ff5',
              pid: 'ff808081905dcfe60190e7a710e73ff3',
              pathId:
                '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e7a710e73ff3,ff808081905dcfe60190e7a803023ff5',
              pathName: '报表查询,涂装产量,项目明细',
              powerIcon: null,
              iconColor: null,
              powerName: '项目明细',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/coating-output/project-details"}',
              terminalType: 'B',
              terminalRoute: 'coating-project-details',
              addTime: '2024-07-25 10:11:06',
              updTime: '2024-07-30 08:45:03',

              children: [
                {
                  powerId: 'ff80808190ed0cae0190fc217cad1876',
                  pid: 'ff808081905dcfe60190e7a803023ff5',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e7a710e73ff3,ff808081905dcfe60190e7a803023ff5,ff80808190ed0cae0190fc217cad1876',
                  pathName: '报表查询,涂装产量,项目明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: '{}',
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2024-07-29 09:36:11',
                  updTime: '2024-07-29 09:36:11',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff80808190ed0cae0190fc22327a1877',
                  pid: 'ff808081905dcfe60190e7a803023ff5',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e7a710e73ff3,ff808081905dcfe60190e7a803023ff5,ff80808190ed0cae0190fc22327a1877',
                  pathName: '报表查询,涂装产量,项目明细,物料明细',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '物料明细',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"report-query/coating-output/material-details"}',
                  terminalType: 'B',
                  terminalRoute: 'coating-material-details',
                  addTime: '2024-07-29 09:36:58',
                  updTime: '2024-07-30 08:45:28',

                  children: [
                    {
                      powerId: 'ff80808190ed0cae0190fc2296741878',
                      pid: 'ff80808190ed0cae0190fc22327a1877',
                      pathId:
                        '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e7a710e73ff3,ff80808190ed0cae0190fc22327a1877,ff80808190ed0cae0190fc2296741878',
                      pathName: '报表查询,涂装产量,物料明细,导出',
                      powerIcon: null,
                      iconColor: null,
                      powerName: '导出',
                      powerType: 'B',
                      level: 4,
                      sortNo: 1,
                      remark: null,
                      status: 'O',
                      otherRemark: '{}',
                      terminalType: 'B',
                      terminalRoute: 'export',
                      addTime: '2024-07-29 09:37:24',
                      updTime: '2024-07-29 09:37:24',
                      hasChildren: false,
                      children: null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190e8770b994d84',
          pid: '000000008c1ec209018c1ef8fe990000',
          pathId:
            '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84',
          pathName: '报表查询,涂装日报',
          powerIcon: null,
          iconColor: null,
          powerName: '涂装日报',
          powerType: 'M',
          level: 2,
          sortNo: 11,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"report-query/coating-daily/major"}',
          terminalType: 'B',
          terminalRoute: 'coating-daily',
          addTime: '2024-07-25 13:57:14',
          updTime: '2024-07-30 09:05:20',

          children: [
            {
              powerId: 'ff808081905dcfe60190e877fb124d85',
              pid: 'ff808081905dcfe60190e8770b994d84',
              pathId:
                '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e877fb124d85',
              pathName: '报表查询,涂装日报,产量明细',
              powerIcon: null,
              iconColor: null,
              powerName: '产量明细',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/coating-daily/output-detail"}',
              terminalType: 'B',
              terminalRoute: 'output-detail',
              addTime: '2024-07-25 13:58:16',
              updTime: '2024-07-30 09:05:42',

              children: [
                {
                  powerId: 'ff80808190ed0cae0190edaee9bd0001',
                  pid: 'ff808081905dcfe60190e877fb124d85',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e877fb124d85,ff80808190ed0cae0190edaee9bd0001',
                  pathName: '报表查询,涂装日报,产量明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2024-07-26 14:16:22',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: 'ff808081905dcfe60190e8784aa24d86',
              pid: 'ff808081905dcfe60190e8770b994d84',
              pathId:
                '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e8784aa24d86',
              pathName: '报表查询,涂装日报,产值明细',
              powerIcon: null,
              iconColor: null,
              powerName: '产值明细',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/coating-daily/production-detail"}',
              terminalType: 'B',
              terminalRoute: 'production-detail',
              addTime: '2024-07-25 13:58:36',
              updTime: '2024-07-30 09:06:00',

              children: [
                {
                  powerId: 'ff80808190ed0cae0190edaf32600002',
                  pid: 'ff808081905dcfe60190e8784aa24d86',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e8784aa24d86,ff80808190ed0cae0190edaf32600002',
                  pathName: '报表查询,涂装日报,产值明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2024-07-26 14:16:40',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: 'ff808081905dcfe60190e878a6284d87',
              pid: 'ff808081905dcfe60190e8770b994d84',
              pathId:
                '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e878a6284d87',
              pathName: '报表查询,涂装日报,工费明细',
              powerIcon: null,
              iconColor: null,
              powerName: '工费明细',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/coating-daily/expenses-detail"}',
              terminalType: 'B',
              terminalRoute: 'expenses-detail',
              addTime: '2024-07-25 13:58:59',
              updTime: '2024-07-30 09:06:16',

              children: [
                {
                  powerId: 'ff80808190ed0cae0190edaf990b0003',
                  pid: 'ff808081905dcfe60190e878a6284d87',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e878a6284d87,ff80808190ed0cae0190edaf990b0003',
                  pathName: '报表查询,涂装日报,工费明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2024-07-26 14:17:07',
                  updTime: '2024-07-26 17:23:50',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff8080819102a71d01910327544d0004',
                  pid: 'ff808081905dcfe60190e878a6284d87',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e878a6284d87,ff8080819102a71d01910327544d0004',
                  pathName: '报表查询,涂装日报,工费明细,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/product-dispatch/product-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'attendance-detail-product-detail',
                  addTime: '2024-07-30 18:19:55',
                  updTime: '2024-07-31 17:11:48',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff8080819102a71d0191032815c90005',
                  pid: 'ff808081905dcfe60190e878a6284d87',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e878a6284d87,ff8080819102a71d0191032815c90005',
                  pathName: '报表查询,涂装日报,工费明细,工单详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '工单详情',
                  powerType: 'P',
                  level: 4,
                  sortNo: 3,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"work-order-management/product-dispatch/temporary-detail"}',
                  terminalType: 'B',
                  terminalRoute: 'attendance-detail-temporary-detail',
                  addTime: '2024-07-30 18:20:44',
                  updTime: '2024-07-31 17:11:54',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: 'ff808081905dcfe60190e87905974d88',
              pid: 'ff808081905dcfe60190e8770b994d84',
              pathId:
                '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e87905974d88',
              pathName: '报表查询,涂装日报,出勤明细',
              powerIcon: null,
              iconColor: null,
              powerName: '出勤明细',
              powerType: 'P',
              level: 3,
              sortNo: 4,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"report-query/coating-daily/attendance-detail"}',
              terminalType: 'B',
              terminalRoute: 'attendance-detail',
              addTime: '2024-07-25 13:59:24',
              updTime: '2024-07-30 09:06:44',

              children: [
                {
                  powerId: 'ff80808190ed0cae01910131585836bd',
                  pid: 'ff808081905dcfe60190e87905974d88',
                  pathId:
                    '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff808081905dcfe60190e87905974d88,ff80808190ed0cae01910131585836bd',
                  pathName: '报表查询,涂装日报,出勤明细,导出',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '导出',
                  powerType: 'B',
                  level: 4,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: 'null',
                  terminalType: 'B',
                  terminalRoute: 'export',
                  addTime: '2024-07-30 09:11:37',
                  updTime: '2024-07-30 09:11:37',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: 'ff80808190ed0cae0190edaeaafd0000',
              pid: 'ff808081905dcfe60190e8770b994d84',
              pathId:
                '000000008c1ec209018c1ef8fe990000,ff808081905dcfe60190e8770b994d84,ff80808190ed0cae0190edaeaafd0000',
              pathName: '报表查询,涂装日报,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 5,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2024-07-26 14:16:06',
              updTime: '2024-07-26 17:23:50',
              hasChildren: false,
              children: null
            }
          ]
        }
      ]
    },
    {
      powerId: 'ff808081905dcfe60190bfee587811dd',
      pid: '0',
      pathId: 'ff808081905dcfe60190bfee587811dd',
      pathName: '涂装项目',
      powerIcon: 'icon-prefixIcon',
      iconColor: '#2EC889',
      powerName: '涂装项目',
      powerType: 'M',
      level: 1,
      sortNo: 14,
      remark: null,
      status: 'O',
      otherRemark:
        '{"componentMapping":"project-information/project-information-list/major","pageType":"coating-project"}',
      terminalType: 'B',
      terminalRoute: '/coating-project',
      addTime: '2024-07-17 17:03:07',
      updTime: '2024-07-29 08:54:51',

      children: [
        {
          powerId: 'ff808081905dcfe60190c5077c741531',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c5077c741531',
          pathName: '涂装项目,新增',
          powerIcon: null,
          iconColor: null,
          powerName: '新增',
          powerType: 'B',
          level: 2,
          sortNo: 1,
          remark: null,
          status: 'O',
          otherRemark: null,
          terminalType: 'B',
          terminalRoute: 'add',
          addTime: '2024-07-18 16:48:41',
          updTime: '2024-07-29 08:54:51',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff808081905dcfe60190c5087b741532',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c5087b741532',
          pathName: '涂装项目,项目详情',
          powerIcon: null,
          iconColor: '#2EC889',
          powerName: '项目详情',
          powerType: 'P',
          level: 2,
          sortNo: 2,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/basic-information/detail","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-basic-information-detail',
          addTime: '2024-07-18 16:49:46',
          updTime: '2024-07-29 08:54:51',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff808081905dcfe60190c50901c31533',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50901c31533',
          pathName: '涂装项目,基础信息',
          powerIcon: 'icon-icon_jichuxinxi',
          iconColor: '#6696F3',
          powerName: '基础信息',
          powerType: 'P',
          level: 2,
          sortNo: 3,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/basic-information/edit1","pageType":"coating-project","entryTitle":"基础信息","isQuickEntry":true,"levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-basic-information-edit',
          addTime: '2024-07-18 16:50:20',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c86b9705154e',
              pid: 'ff808081905dcfe60190c50901c31533',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50901c31533,ff808081905dcfe60190c86b9705154e',
              pathName: '涂装项目,基础信息,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2024-07-19 08:36:53',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c5099f661534',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c5099f661534',
          pathName: '涂装项目,项目新增',
          powerIcon: null,
          iconColor: null,
          powerName: '项目新增',
          powerType: 'P',
          level: 2,
          sortNo: 4,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/project-information-list/add","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-add',
          addTime: '2024-07-18 16:51:01',
          updTime: '2024-07-29 08:54:51',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff808081905dcfe60190c50d3ca31536',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50d3ca31536',
          pathName: '涂装项目,工艺配置详情',
          powerIcon: null,
          iconColor: null,
          powerName: '工艺配置详情',
          powerType: 'P',
          level: 2,
          sortNo: 6,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/process-config/detail","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-process-config-detail',
          addTime: '2024-07-18 16:54:57',
          updTime: '2024-07-29 08:54:51',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff808081905dcfe60190c50dd9f21537',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50dd9f21537',
          pathName: '涂装项目,工艺配置',
          powerIcon: null,
          iconColor: null,
          powerName: '工艺配置',
          powerType: 'P',
          level: 2,
          sortNo: 7,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/process-config/edit","pageType":"coating-project","isQuickEntry":true,"entryTitle":"工艺配置","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-process-config-edit',
          addTime: '2024-07-18 16:55:38',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c86cd2ba1551',
              pid: 'ff808081905dcfe60190c50dd9f21537',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50dd9f21537,ff808081905dcfe60190c86cd2ba1551',
              pathName: '涂装项目,工艺配置,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2024-07-19 08:38:13',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c50e2ee51538',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50e2ee51538',
          pathName: '涂装项目,配置',
          powerIcon: null,
          iconColor: null,
          powerName: '配置',
          powerType: 'B',
          level: 2,
          sortNo: 8,
          remark: null,
          status: 'O',
          otherRemark: null,
          terminalType: 'B',
          terminalRoute: 'config',
          addTime: '2024-07-18 16:55:59',
          updTime: '2024-07-29 08:54:51',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff808081905dcfe60190c50eb60f1539',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50eb60f1539',
          pathName: '涂装项目,检验配置详情',
          powerIcon: null,
          iconColor: null,
          powerName: '检验配置详情',
          powerType: 'P',
          level: 2,
          sortNo: 9,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/check-config/detail","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-check-config-detail',
          addTime: '2024-07-18 16:56:34',
          updTime: '2024-07-29 08:54:51',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff808081905dcfe60190c50f8243153a',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50f8243153a',
          pathName: '涂装项目,检验配置',
          powerIcon: null,
          iconColor: null,
          powerName: '检验配置',
          powerType: 'P',
          level: 2,
          sortNo: 10,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/check-config/edit","pageType":"coating-project","isQuickEntry":true,"entryTitle":"检验配置","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-check-config-edit',
          addTime: '2024-07-18 16:57:26',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c86d44d01552',
              pid: 'ff808081905dcfe60190c50f8243153a',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50f8243153a,ff808081905dcfe60190c86d44d01552',
              pathName: '涂装项目,检验配置,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2024-07-19 08:38:43',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c50fd3b9153b',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50fd3b9153b',
          pathName: '涂装项目,删除',
          powerIcon: null,
          iconColor: null,
          powerName: '删除',
          powerType: 'B',
          level: 2,
          sortNo: 11,
          remark: null,
          status: 'O',
          otherRemark: null,
          terminalType: 'B',
          terminalRoute: 'delete',
          addTime: '2024-07-18 16:57:47',
          updTime: '2024-07-29 08:54:51',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff808081905dcfe60190c510ddc3153c',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c510ddc3153c',
          pathName: '涂装项目,数据详情列表',
          powerIcon: null,
          iconColor: null,
          powerName: '数据详情列表',
          powerType: 'P',
          level: 2,
          sortNo: 12,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/data-manage/major","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-data-manage-detail-major',
          addTime: '2024-07-18 16:58:55',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c5127bd6153e',
              pid: 'ff808081905dcfe60190c510ddc3153c',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c510ddc3153c,ff808081905dcfe60190c5127bd6153e',
              pathName: '涂装项目,数据详情列表,数据管理详情',
              powerIcon: null,
              iconColor: null,
              powerName: '数据管理详情',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/data-manage/major-detail","pageType":"coating-project","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'coating-project-data-manage-detail-major-detail',
              addTime: '2024-07-18 17:00:41',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c514da831542',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c514da831542',
          pathName: '涂装项目,数据管理',
          powerIcon: null,
          iconColor: null,
          powerName: '数据管理',
          powerType: 'P',
          level: 2,
          sortNo: 18,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/data-manage/major","pageType":"coating-project","isQuickEntry":true,"entryTitle":"数据管理","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-data-manage-edit-major',
          addTime: '2024-07-18 17:03:17',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c86ef4701555',
              pid: 'ff808081905dcfe60190c514da831542',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c514da831542,ff808081905dcfe60190c86ef4701555',
              pathName: '涂装项目,数据管理,数据批导',
              powerIcon: null,
              iconColor: null,
              powerName: '数据批导',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'dataImport',
              addTime: '2024-07-19 08:40:33',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            },
            {
              powerId: 'ff808081905dcfe60190c511ac73153d',
              pid: 'ff808081905dcfe60190c514da831542',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c514da831542,ff808081905dcfe60190c511ac73153d',
              pathName: '涂装项目,数据管理,数据详情',
              powerIcon: null,
              iconColor: null,
              powerName: '数据详情',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"coating-project-data-manage-detail-major-detail","pageType":"coating-project","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'coating-project-data-manage-detail-major-detail',
              addTime: '2024-07-18 16:59:48',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            },
            {
              powerId: 'ff808081905dcfe60190c50c91071535',
              pid: 'ff808081905dcfe60190c514da831542',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c514da831542,ff808081905dcfe60190c50c91071535',
              pathName: '涂装项目,数据管理,数据批导',
              powerIcon: null,
              iconColor: null,
              powerName: '数据批导',
              powerType: 'P',
              level: 3,
              sortNo: 3,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/data-manage/import-major","pageType":"coating-project","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'coating-project-data-manage-import-major',
              addTime: '2024-07-18 16:54:14',
              updTime: '2024-07-29 08:54:51',

              children: [
                {
                  powerId: 'ff808081905dcfe60190c86c1a03154f',
                  pid: 'ff808081905dcfe60190c50c91071535',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50c91071535,ff808081905dcfe60190c86c1a03154f',
                  pathName: '涂装项目,数据批导,下载模板',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '下载模板',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'download',
                  addTime: '2024-07-19 08:37:26',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff808081905dcfe60190c86c6e231550',
                  pid: 'ff808081905dcfe60190c50c91071535',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c50c91071535,ff808081905dcfe60190c86c6e231550',
                  pathName: '涂装项目,数据批导,上传数据',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '上传数据',
                  powerType: 'B',
                  level: 3,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'uploadTem',
                  addTime: '2024-07-19 08:37:48',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff808081905dcfe60190c51393481540',
                  pid: 'ff808081905dcfe60190c50c91071535',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c514da831542,ff808081905dcfe60190c50c91071535,ff808081905dcfe60190c51393481540',
                  pathName: '涂装项目,数据管理,数据批导,数据校验',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '数据校验',
                  powerType: 'P',
                  level: 4,
                  sortNo: 3,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"project-information/data-manage/import-major-edit","pageType":"coating-project","levelIncrease":true}',
                  terminalType: 'B',
                  terminalRoute:
                    'coating-project-data-manage-import-major-edit',
                  addTime: '2024-07-18 17:01:53',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff808081905dcfe60190c5141cb81541',
                  pid: 'ff808081905dcfe60190c50c91071535',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c514da831542,ff808081905dcfe60190c50c91071535,ff808081905dcfe60190c5141cb81541',
                  pathName: '涂装项目,数据管理,数据批导,数据详情',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '数据详情',

                  powerType: 'P',
                  level: 4,
                  sortNo: 4,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"project-information/data-manage/import-major-detail","pageType":"coating-project","levelIncrease":true}',
                  terminalType: 'B',
                  terminalRoute:
                    'coating-project-data-manage-import-major-detail',
                  addTime: '2024-07-18 17:02:28',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                }
              ]
            },
            {
              powerId: 'ff808081905dcfe60190c51304a8153f',
              pid: 'ff808081905dcfe60190c514da831542',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c514da831542,ff808081905dcfe60190c51304a8153f',
              pathName: '涂装项目,数据管理,数据管理编辑',
              powerIcon: null,
              iconColor: null,
              powerName: '数据管理编辑',
              powerType: 'P',
              level: 3,
              sortNo: 4,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/data-manage/major-detail","pageType":"coating-project","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute: 'coating-project-data-manage-edit-major-detail',
              addTime: '2024-07-18 17:01:16',
              updTime: '2024-07-29 08:54:51',

              children: [
                {
                  powerId: 'ff808081905dcfe60190c86e01761553',
                  pid: 'ff808081905dcfe60190c51304a8153f',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c51304a8153f,ff808081905dcfe60190c86e01761553',
                  pathName: '涂装项目,数据管理编辑,删除',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '删除',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'delete',
                  addTime: '2024-07-19 08:39:31',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff808081905dcfe60190c86e62651554',
                  pid: 'ff808081905dcfe60190c51304a8153f',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c51304a8153f,ff808081905dcfe60190c86e62651554',
                  pathName: '涂装项目,数据管理编辑,编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '编辑',
                  powerType: 'B',
                  level: 3,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'edit',
                  addTime: '2024-07-19 08:39:56',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c51585ad1543',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c51585ad1543',
          pathName: '涂装项目,定额详情列表',
          powerIcon: null,
          iconColor: null,
          powerName: '定额详情列表',
          powerType: 'P',
          level: 2,
          sortNo: 19,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/quota-allocation/detail-major","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-quota-allocation-detail-major',
          addTime: '2024-07-18 17:04:00',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c5162b661544',
              pid: 'ff808081905dcfe60190c51585ad1543',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c51585ad1543,ff808081905dcfe60190c5162b661544',
              pathName: '涂装项目,定额详情列表,定额详情',
              powerIcon: null,
              iconColor: null,
              powerName: '定额详情',
              powerType: 'P',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/quota-allocation/detail-major-detail","pageType":"coating-project","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute:
                'coating-project-quota-allocation-detail-major-detail',
              addTime: '2024-07-18 17:04:43',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c8680a7d1549',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c8680a7d1549',
          pathName: '涂装项目,定额配置',
          powerIcon: null,
          iconColor: null,
          powerName: '定额配置',
          powerType: 'P',
          level: 2,
          sortNo: 23,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/quota-allocation/edit-major","pageType":"coating-project","isQuickEntry":true,"entryTitle":"定额配置","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-quota-allocation-edit-major',
          addTime: '2024-07-19 08:33:00',
          updTime: '2024-08-01 11:36:15',

          children: [
            {
              powerId: 'ff808081905dcfe60190c870a4641559',
              pid: 'ff808081905dcfe60190c8680a7d1549',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c8680a7d1549,ff808081905dcfe60190c870a4641559',
              pathName: '涂装项目,定额配置,配置',
              powerIcon: null,
              iconColor: null,
              powerName: '配置',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'config',
              addTime: '2024-07-19 08:42:24',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            },
            {
              powerId: 'ff808081905dcfe60190c516d91d1545',
              pid: 'ff808081905dcfe60190c8680a7d1549',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c8680a7d1549,ff808081905dcfe60190c516d91d1545',
              pathName: '涂装项目,定额配置,定额列表',
              powerIcon: null,
              iconColor: null,
              powerName: '定额列表',
              powerType: 'P',
              level: 3,
              sortNo: 2,
              remark: null,
              status: 'O',
              otherRemark:
                '{"componentMapping":"project-information/quota-allocation/edit-major-detail","pageType":"coating-project","levelIncrease":true}',
              terminalType: 'B',
              terminalRoute:
                'coating-project-quota-allocation-edit-major-detail',
              addTime: '2024-07-18 17:05:27',
              updTime: '2024-07-29 08:54:51',

              children: [
                {
                  powerId: 'ff808081905dcfe60190c86f7b411556',
                  pid: 'ff808081905dcfe60190c516d91d1545',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c516d91d1545,ff808081905dcfe60190c86f7b411556',
                  pathName: '涂装项目,定额列表,更新标准定额',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '更新标准定额',
                  powerType: 'B',
                  level: 3,
                  sortNo: 1,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'update',
                  addTime: '2024-07-19 08:41:08',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff808081905dcfe60190c86fe0331557',
                  pid: 'ff808081905dcfe60190c516d91d1545',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c516d91d1545,ff808081905dcfe60190c86fe0331557',
                  pathName: '涂装项目,定额列表,定额配置',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '定额配置',
                  powerType: 'B',
                  level: 3,
                  sortNo: 2,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'quotaBtn',
                  addTime: '2024-07-19 08:41:33',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff808081905dcfe60190c87049701558',
                  pid: 'ff808081905dcfe60190c516d91d1545',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c516d91d1545,ff808081905dcfe60190c87049701558',
                  pathName: '涂装项目,定额列表,定额模式切换',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '定额模式切换',
                  powerType: 'B',
                  level: 3,
                  sortNo: 3,
                  remark: null,
                  status: 'O',
                  otherRemark: null,
                  terminalType: 'B',
                  terminalRoute: 'modeChange',
                  addTime: '2024-07-19 08:42:00',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                },
                {
                  powerId: 'ff808081905dcfe60190c5176d381546',
                  pid: 'ff808081905dcfe60190c516d91d1545',
                  pathId:
                    'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c8680a7d1549,ff808081905dcfe60190c516d91d1545,ff808081905dcfe60190c5176d381546',
                  pathName: '涂装项目,定额配置,定额列表,定额编辑',
                  powerIcon: null,
                  iconColor: null,
                  powerName: '定额编辑',
                  powerType: 'P',
                  level: 4,
                  sortNo: 4,
                  remark: null,
                  status: 'O',
                  otherRemark:
                    '{"componentMapping":"project-information/quota-allocation/edit-major-detail-child","pageType":"coating-project","levelIncrease":true}',
                  terminalType: 'B',
                  terminalRoute:
                    'coating-project-quota-allocation-edit-major-detail-child',
                  addTime: '2024-07-18 17:06:05',
                  updTime: '2024-07-29 08:54:51',
                  hasChildren: false,
                  children: null
                }
              ]
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c86934b1154a',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c86934b1154a',
          pathName: '涂装项目,涂装体系详情',
          powerIcon: null,
          iconColor: null,
          powerName: '涂装体系详情',
          powerType: 'P',
          level: 2,
          sortNo: 24,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/coating-system/detail","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-coating-system-detail',
          addTime: '2024-07-19 08:34:16',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c870ff45155a',
              pid: 'ff808081905dcfe60190c86934b1154a',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c86934b1154a,ff808081905dcfe60190c870ff45155a',
              pathName: '涂装项目,涂装体系详情,导出',
              powerIcon: null,
              iconColor: null,
              powerName: '导出',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'export',
              addTime: '2024-07-19 08:42:47',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c869dfcd154b',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c869dfcd154b',
          pathName: '涂装项目,工费预算详情',
          powerIcon: null,
          iconColor: null,
          powerName: '工费预算详情',
          powerType: 'P',
          level: 2,
          sortNo: 25,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/person-budget/detail","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-person-budget-detail',
          addTime: '2024-07-19 08:35:00',
          updTime: '2024-07-29 08:54:51',
          hasChildren: false,
          children: null
        },
        {
          powerId: 'ff808081905dcfe60190c86a715e154c',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c86a715e154c',
          pathName: '涂装项目,涂装体系',
          powerIcon: null,
          iconColor: null,
          powerName: '涂装体系',
          powerType: 'P',
          level: 2,
          sortNo: 26,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/coating-system/edit","isQuickEntry":true,"entryTitle":"涂装体系","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-coating-system-edit',
          addTime: '2024-07-19 08:35:37',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c8715309155b',
              pid: 'ff808081905dcfe60190c86a715e154c',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c86a715e154c,ff808081905dcfe60190c8715309155b',
              pathName: '涂装项目,涂装体系,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2024-07-19 08:43:08',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            }
          ]
        },
        {
          powerId: 'ff808081905dcfe60190c86b087e154d',
          pid: 'ff808081905dcfe60190bfee587811dd',
          pathId:
            'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c86b087e154d',
          pathName: '涂装项目,工费预算',
          powerIcon: null,
          iconColor: null,
          powerName: '工费预算',
          powerType: 'P',
          level: 2,
          sortNo: 27,
          remark: null,
          status: 'O',
          otherRemark:
            '{"componentMapping":"project-information/person-budget/edit","isQuickEntry":true,"entryTitle":"工费预算","pageType":"coating-project","levelIncrease":true}',
          terminalType: 'B',
          terminalRoute: 'coating-project-person-budget-edit',
          addTime: '2024-07-19 08:36:16',
          updTime: '2024-07-29 08:54:51',

          children: [
            {
              powerId: 'ff808081905dcfe60190c871afe5155c',
              pid: 'ff808081905dcfe60190c86b087e154d',
              pathId:
                'ff808081905dcfe60190bfee587811dd,ff808081905dcfe60190c86b087e154d,ff808081905dcfe60190c871afe5155c',
              pathName: '涂装项目,工费预算,保存',
              powerIcon: null,
              iconColor: null,
              powerName: '保存',
              powerType: 'B',
              level: 3,
              sortNo: 1,
              remark: null,
              status: 'O',
              otherRemark: null,
              terminalType: 'B',
              terminalRoute: 'save',
              addTime: '2024-07-19 08:43:32',
              updTime: '2024-07-29 08:54:51',
              hasChildren: false,
              children: null
            }
          ]
        }
      ]
    }
  ]
};
