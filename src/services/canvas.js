import { registerNode } from 'topology-core/middles'
import {
  flowData,
  flowDataAnchors,
  flowDataIconRect,
  flowDataTextRect,
  flowSubprocess,
  flowSubprocessIconRect,
  flowSubprocessTextRect,
  flowDb,
  flowDbIconRect,
  flowDbTextRect,
  flowDocument,
  flowDocumentAnchors,
  flowDocumentIconRect,
  flowDocumentTextRect,
  flowInternalStorage,
  flowInternalStorageIconRect,
  flowInternalStorageTextRect,
  flowExternStorage,
  flowExternStorageAnchors,
  flowExternStorageIconRect,
  flowExternStorageTextRect,
  flowQueue,
  flowQueueIconRect,
  flowQueueTextRect,
  flowManually,
  flowManuallyAnchors,
  flowManuallyIconRect,
  flowManuallyTextRect,
  flowDisplay,
  flowDisplayAnchors,
  flowDisplayIconRect,
  flowDisplayTextRect,
  flowParallel,
  flowParallelAnchors,
  flowComment,
  flowCommentAnchors
} from 'topology-flow-diagram'

import {
  activityFinal,
  activityFinalIconRect,
  activityFinalTextRect,
  swimlaneV,
  swimlaneVIconRect,
  swimlaneVTextRect,
  swimlaneH,
  swimlaneHIconRect,
  swimlaneHTextRect,
  fork,
  forkHAnchors,
  forkIconRect,
  forkTextRect,
  forkVAnchors
} from 'topology-activity-diagram'
import {
  simpleClass,
  simpleClassIconRect,
  simpleClassTextRect,
  interfaceClass,
  interfaceClassIconRect,
  interfaceClassTextRect
} from 'topology-class-diagram'
import {
  lifeline,
  lifelineAnchors,
  lifelineIconRect,
  lifelineTextRect,
  sequenceFocus,
  sequenceFocusAnchors,
  sequenceFocusIconRect,
  sequenceFocusTextRect
} from 'topology-sequence-diagram'

// 自定义图形
import {
  myShape,  // 形状
  myIconRect,  // 图片
  myTextRect,  //文字
  myAnchors  //锚点
} from '../custom'

export function canvasRegister() {
  registerNode(
    'flowData',
    flowData,
    flowDataAnchors,
    flowDataIconRect,
    flowDataTextRect
  )
  registerNode(
    'flowSubprocess',
    flowSubprocess,
    null,
    flowSubprocessIconRect,
    flowSubprocessTextRect
  )
  registerNode('flowDb', flowDb, null, flowDbIconRect, flowDbTextRect)
  registerNode(
    'flowDocument',
    flowDocument,
    flowDocumentAnchors,
    flowDocumentIconRect,
    flowDocumentTextRect
  )
  registerNode(
    'flowInternalStorage',
    flowInternalStorage,
    null,
    flowInternalStorageIconRect,
    flowInternalStorageTextRect
  )
  registerNode(
    'flowExternStorage',
    flowExternStorage,
    flowExternStorageAnchors,
    flowExternStorageIconRect,
    flowExternStorageTextRect
  )
  registerNode(
    'flowQueue',
    flowQueue,
    null,
    flowQueueIconRect,
    flowQueueTextRect
  )
  registerNode(
    'flowManually',
    flowManually,
    flowManuallyAnchors,
    flowManuallyIconRect,
    flowManuallyTextRect
  )
  registerNode(
    'flowDisplay',
    flowDisplay,
    flowDisplayAnchors,
    flowDisplayIconRect,
    flowDisplayTextRect
  )
  registerNode('flowParallel', flowParallel, flowParallelAnchors, null, null)
  registerNode('flowComment', flowComment, flowCommentAnchors, null, null)

  // activity
  registerNode(
    'activityFinal',
    activityFinal,
    null,
    activityFinalIconRect,
    activityFinalTextRect
  )
  registerNode(
    'swimlaneV',
    swimlaneV,
    null,
    swimlaneVIconRect,
    swimlaneVTextRect
  )
  registerNode(
    'swimlaneH',
    swimlaneH,
    null,
    swimlaneHIconRect,
    swimlaneHTextRect
  )
  registerNode('forkH', fork, forkHAnchors, forkIconRect, forkTextRect)
  registerNode('forkV', fork, forkVAnchors, forkIconRect, forkTextRect)

  // class
  registerNode(
    'simpleClass',
    simpleClass,
    null,
    simpleClassIconRect,
    simpleClassTextRect
  )
  registerNode(
    'interfaceClass',
    interfaceClass,
    null,
    interfaceClassIconRect,
    interfaceClassTextRect
  )

  // sequence
  registerNode(
    'lifeline',
    lifeline,
    lifelineAnchors,
    lifelineIconRect,
    lifelineTextRect
  )
  registerNode(
    'sequenceFocus',
    sequenceFocus,
    sequenceFocusAnchors,
    sequenceFocusIconRect,
    sequenceFocusTextRect
  )

  registerNode('myCustom', myShape, myAnchors, myIconRect, myTextRect);
}

export const Tools = [
  {
    group: '基本形状',
    children: [
      {
        name: '正方形',
        icon: 'icon-rect',
        data: {
          text: '正方形',
          rect: {
            width: 100,
            height: 100
          },
          // paddingLeft: 10,
          // paddingRight: 10,
          // paddingTop: 10,
          // paddingBottom: 10,
          name: 'rectangle',
          icon: '\ue65f',
          // iconFamily: 'iconfont1',
          // iconSize: 0,
          // iconColor: '#000000'
        }
      },
      {
        name: '圆角矩形',
        icon: 'icon-rectangle',
        data: {
          text: '圆角矩形',
          rect: {
            width: 200,
            height: 50
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 0.1,
          name: 'rectangle',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '圆',
        icon: 'icon-circle',
        data: {
          text: '圆',
          rect: {
            width: 100,
            height: 100
          },
          name: 'circle',
          textMaxLine: 1,
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '三角形',
        icon: 'icon-triangle',
        data: {
          text: '三角形',
          rect: {
            width: 100,
            height: 100
          },
          name: 'triangle',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '菱形',
        icon: 'icon-diamond',
        data: {
          text: '菱形',
          rect: {
            width: 100,
            height: 100
          },
          name: 'diamond',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '五边形',
        icon: 'icon-pentagon',
        data: {
          text: '五边形',
          rect: {
            width: 100,
            height: 100
          },
          name: 'pentagon',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '六边形',
        icon: 'icon-hexagon',
        data: {
          text: '六边形',
          rect: {
            width: 100,
            height: 100
          },
          paddingTop: 10,
          paddingBottom: 10,
          name: 'hexagon',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '五角星',
        icon: 'icon-pentagram',
        data: {
          text: '五角星',
          rect: {
            width: 100,
            height: 100
          },
          name: 'pentagram',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '左箭头',
        icon: 'icon-arrow-left',
        data: {
          text: '左箭头',
          rect: {
            width: 200,
            height: 100
          },
          name: 'leftArrow',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '右箭头',
        icon: 'icon-arrow-right',
        data: {
          text: '右箭头',
          rect: {
            width: 200,
            height: 100
          },
          name: 'rightArrow',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '双向箭头',
        icon: 'icon-twoway-arrow',
        data: {
          text: '双向箭头',
          rect: {
            width: 200,
            height: 100
          },
          name: 'twowayArrow',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '直线',
        icon: 'icon-line',
        data: {
          text: '直线',
          rect: {
            width: 100,
            height: 100
          },
          name: 'line',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '云',
        icon: 'icon-cloud',
        data: {
          text: '云',
          rect: {
            width: 100,
            height: 100
          },
          name: 'cloud',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '消息框',
        icon: 'icon-msg',
        data: {
          text: '消息框',
          rect: {
            width: 100,
            height: 100
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'message',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '文档',
        icon: 'icon-file',
        data: {
          text: '文档',
          rect: {
            width: 80,
            height: 100
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'file',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: 'text',
        icon: 'icon-text',
        data: {
          text: '示例文字',
          rect: {
            width: 160,
            height: 30
          },
          name: 'text',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: 'image',
        icon: 'icon-image',
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100
          },
          name: 'image',
          image: require('../assets/logo.png'),
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '立方体',
        icon: 'icon-cube',
        data: {
          rect: {
            width: 60,
            height: 70
          },
          text: '立方体',
          is3D: true,
          z: 15,
          zRotate: 15,
          fillStyle: '#ddd',
          name: 'cube',
          // icon: '\ue63c',
          // iconFamily: 'topology',
          // iconColor: '#777777',
          // iconSize: 30
        }
      },
      {
        name: '人',
        icon: 'icon-people',
        data: {
          text:'',
          rect: {
            width: 70,
            height: 100
          },
          name: 'people',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '视频/网页',
        icon: 'icon-pc',
        data: {
          text: '视频/网页',
          rect: {
            width: 200,
            height: 200
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          // strokeStyle: 'transparent',
          name: 'div',
          iconSize: 0,
          iconColor: '#000000'
        }
      }
    ]
  },
  {
    group: '流程图',
    children: [
      {
        name: '开始/结束',
        icon: 'icon-flow-start',
        data: {
          text: '开始',
          rect: {
            width: 120,
            height: 40
          },
          borderRadius: 0.5,
          name: 'rectangle',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '流程',
        icon: 'icon-rectangle',
        data: {
          text: '流程',
          rect: {
            width: 120,
            height: 40
          },
          name: 'rectangle',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '判定',
        icon: 'icon-diamond',
        data: {
          text: '判定',
          rect: {
            width: 120,
            height: 60
          },
          name: 'diamond',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '数据',
        icon: 'icon-flow-data',
        data: {
          text: '数据',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowData',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '准备',
        icon: 'icon-flow-ready',
        data: {
          text: '准备',
          rect: {
            width: 120,
            height: 50
          },
          name: 'hexagon',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '子流程',
        icon: 'icon-flow-subprocess',
        data: {
          text: '子流程',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowSubprocess',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '数据库',
        icon: 'icon-db',
        data: {
          text: '数据库',
          rect: {
            width: 80,
            height: 120
          },
          name: 'flowDb',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '文档',
        icon: 'icon-flow-document',
        data: {
          text: '文档',
          rect: {
            width: 120,
            height: 100
          },
          name: 'flowDocument',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '内部存储',
        icon: 'icon-internal-storage',
        data: {
          text: '内部存储',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowInternalStorage',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '外部存储',
        icon: 'icon-extern-storage',
        data: {
          text: '外部存储',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowExternStorage',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '队列',
        icon: 'icon-flow-queue',
        data: {
          text: '队列',
          rect: {
            width: 100,
            height: 100
          },
          name: 'flowQueue',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '手动输入',
        icon: 'icon-flow-manually',
        data: {
          text: '手动输入',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowManually',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '展示',
        icon: 'icon-flow-display',
        data: {
          text: '展示',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowDisplay',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '并行模式',
        icon: 'icon-flow-parallel',
        data: {
          text: '并行模式',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowParallel',
          iconSize: 0,
          iconColor: '#000000'
        }
      },
      {
        name: '注释',
        icon: 'icon-flow-comment',
        data: {
          text: '注释',
          rect: {
            width: 100,
            height: 100
          },
          name: 'flowComment',
          iconSize: 0,
          iconColor: '#000000'
        }
      }
    ]
  },
  {
    group: '网络环境',
      children: [
        {
          name: '公有云DMZ',
          // icon: 'icon-rect',
          text: '公有云DMZ',
          data: {
            name: 'myCustom', // registerNode的第一个参数。
            text: '公有云DMZ',
            rect: {
              width: 360,
              height: 360
            },
            font: {
              fontSize: 12,
              fontFamily: 'Arial',
              color: '#222222',
              fontWeight: 'bold'
            },
            iconSize: 0,
            iconColor: '#000',
          }
        },
        {
          name: '公有云SF',
          // icon: 'icon-rect',
          text: '公有云SF',
          data: {
            name: 'myCustom', // registerNode的第一个参数。
            text: '公有云SF',
            rect: {
              width: 360,
              height: 360
            },
            font: {
              fontSize: 12,
              fontFamily: 'Arial',
              color: '#222',
              fontWeight: 'bold'
            },
            iconSize: 0,
            iconColor: '#000',
          }
        },
      ]
  },
  {
    group: 'Database',
      children: [
        {
          name: 'Postgrel',
          icon: 'icondb',
          iconCus: 'iconfont1',
          text: 'Postgrel',
          data: {
            text: 'Postgrel',
            rect: {
              width: 100,
              height: 100
            },
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            name: 'image',
            icon: '\ue62d',
            iconFamily: 'iconfont1',
            iconSize: 0,
            iconColor: '#1296db'
          }
        },
        {
          name: 'MySql',
          icon: 'icondb',
          iconCus: 'iconfont1',
          text: 'MySql',
          data: {
            text: 'MySql',
            rect: {
              width: 100,
              height: 100
            },
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            name: 'image',
            icon: '\ue62d',
            iconFamily: 'iconfont1',
            iconColor: '#1296db',
            iconSize: 0,
          }
        }
      ]
  },
  {
    group: '公共服务',
      children: [
        {
          name: '文件存储FPS',
          icon: 'iconwenjiancunchu',
          iconCus: 'iconfont1',
          text: '文件存储FPS',
          data: {
            text: '文件存储FPS',
            rect: {
              width: 100,
              height: 100
            },
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            name: 'image',
            icon: '\ue6ce',
            iconFamily: 'iconfont1',
            iconSize: 0,
            iconColor: '#1296db'
          }
        },
        {
          name: '电子合同',
          icon: 'iconhetong',
          iconCus: 'iconfont1',
          text: '电子合同',
          data: {
            text: '电子合同',
            rect: {
              width: 100,
              height: 100
            },
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            name: 'image',
            icon: '\ue61f',
            iconFamily: 'iconfont1',
            iconColor: '#1296db',
            
          }
        }
      ]
  },
  {
    group: '新申请应用',
      children: [
        {
          type: 'add',
          name: '新申请',
          icon: 'icontianjia1',
          iconCus: 'iconfont1',
        },
        {
          name: '电子合同',
          icon: 'iconhetong',
          iconCus: 'iconfont1',
          text: '电子合同',
          data: {
            text: '电子合同',
            rect: {
              width: 100,
              height: 100
            },
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            name: 'image',
            icon: '\ue61f',
            iconFamily: 'iconfont1',
            iconColor: '#1296db',
            iconSize: 0,
          }
        }
      ]
  },
  // {
  //   group: '活动图',
  //   children: [
  //     {
  //       name: '开始',
  //       icon: 'icon-inital',
  //       data: {
  //         text: '',
  //         rect: {
  //           width: 30,
  //           height: 30
  //         },
  //         name: 'circle',
  //         fillStyle: '#555',
  //         strokeStyle: 'transparent'
  //       }
  //     },
  //     {
  //       name: '结束',
  //       icon: 'icon-final',
  //       data: {
  //         text: '',
  //         rect: {
  //           width: 30,
  //           height: 30
  //         },
  //         name: 'activityFinal'
  //       }
  //     },
  //     {
  //       name: '活动',
  //       icon: 'icon-action',
  //       data: {
  //         text: '活动',
  //         rect: {
  //           width: 120,
  //           height: 50
  //         },
  //         borderRadius: 0.25,
  //         name: 'rectangle'
  //       }
  //     },
  //     {
  //       name: '决策/合并',
  //       icon: 'icon-diamond',
  //       data: {
  //         text: '决策',
  //         rect: {
  //           width: 120,
  //           height: 50
  //         },
  //         name: 'diamond'
  //       }
  //     },
  //     {
  //       name: '垂直泳道',
  //       icon: 'icon-swimlane-v',
  //       data: {
  //         text: '垂直泳道',
  //         rect: {
  //           width: 200,
  //           height: 500
  //         },
  //         name: 'swimlaneV'
  //       }
  //     },
  //     {
  //       name: '水平泳道',
  //       icon: 'icon-swimlane-h',
  //       data: {
  //         text: '水平泳道',
  //         rect: {
  //           width: 500,
  //           height: 200
  //         },
  //         name: 'swimlaneH'
  //       }
  //     },
  //     {
  //       name: '垂直分岔/汇合',
  //       icon: 'icon-fork-v',
  //       data: {
  //         text: '',
  //         rect: {
  //           width: 10,
  //           height: 150
  //         },
  //         name: 'forkV',
  //         fillStyle: '#555',
  //         strokeStyle: 'transparent'
  //       }
  //     },
  //     {
  //       name: '水平分岔/汇合',
  //       icon: 'icon-fork',
  //       data: {
  //         text: '',
  //         rect: {
  //           width: 150,
  //           height: 10
  //         },
  //         name: 'forkH',
  //         fillStyle: '#555',
  //         strokeStyle: 'transparent'
  //       }
  //     }
  //   ]
  // },
  // {
  //   group: '时序图和类图',
  //   children: [
  //     {
  //       name: '生命线',
  //       icon: 'icon-lifeline',
  //       data: {
  //         text: '生命线',
  //         rect: {
  //           width: 150,
  //           height: 400
  //         },
  //         name: 'lifeline'
  //       }
  //     },
  //     {
  //       name: '激活',
  //       icon: 'icon-focus',
  //       data: {
  //         text: '',
  //         rect: {
  //           width: 12,
  //           height: 200
  //         },
  //         name: 'sequenceFocus'
  //       }
  //     },
  //     {
  //       name: '简单类',
  //       icon: 'icon-simple-class',
  //       data: {
  //         text: 'Topolgoy',
  //         rect: {
  //           width: 270,
  //           height: 200
  //         },
  //         paddingTop: 40,
  //         font: {
  //           fontFamily: 'Arial',
  //           color: '#222',
  //           fontWeight: 'bold'
  //         },
  //         fillStyle: '#ffffba',
  //         strokeStyle: '#7e1212',
  //         name: 'simpleClass',
  //         children: [
  //           {
  //             text: '- name: string\n+ setName(name: string): void',
  //             name: 'text',
  //             paddingLeft: 10,
  //             paddingRight: 10,
  //             paddingTop: 10,
  //             paddingBottom: 10,
  //             rectInParent: {
  //               x: 0,
  //               y: 0,
  //               width: '100%',
  //               height: '100%',
  //               rotate: 0
  //             },
  //             font: {
  //               fontFamily: 'Arial',
  //               color: '#222',
  //               textAlign: 'left',
  //               textBaseline: 'top'
  //             }
  //           }
  //         ]
  //       }
  //     },
  //     {
  //       name: '类',
  //       icon: 'icon-class',
  //       data: {
  //         text: 'Topolgoy',
  //         rect: {
  //           width: 270,
  //           height: 200
  //         },
  //         paddingTop: 40,
  //         font: {
  //           fontFamily: 'Arial',
  //           color: '#222',
  //           fontWeight: 'bold'
  //         },
  //         fillStyle: '#ffffba',
  //         strokeStyle: '#7e1212',
  //         name: 'interfaceClass',
  //         children: [
  //           {
  //             text: '- name: string',
  //             name: 'text',
  //             paddingLeft: 10,
  //             paddingRight: 10,
  //             paddingTop: 10,
  //             paddingBottom: 10,
  //             rectInParent: {
  //               x: 0,
  //               y: 0,
  //               width: '100%',
  //               height: '50%',
  //               rotate: 0
  //             },
  //             font: {
  //               fontFamily: 'Arial',
  //               color: '#222',
  //               textAlign: 'left',
  //               textBaseline: 'top'
  //             }
  //           },
  //           {
  //             text: '+ setName(name: string): void',
  //             name: 'text',
  //             paddingLeft: 10,
  //             paddingRight: 10,
  //             paddingTop: 10,
  //             paddingBottom: 10,
  //             rectInParent: {
  //               x: 0,
  //               y: '50%',
  //               width: '100%',
  //               height: '50%',
  //               rotate: 0
  //             },
  //             font: {
  //               fontFamily: 'Arial',
  //               color: '#222',
  //               textAlign: 'left',
  //               textBaseline: 'top'
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   ]
  // }
]
