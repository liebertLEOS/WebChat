/**
 * 获取我的用戶列表
 */
export const getUserList = (userid, token) => {
  switch (userid) {
    case 1 :
      return [
        {
          id: '1',
          name: '李老师',
          remark: '爱编程爱生活爱科学',
          status: '正在输入中...'
        },
        {
          id: '2',
          name: '张小强',
          remark: '爱编程爱生活爱科学',
          status: '在线'
        }
      ]
    case 2 :
      return [
        {
          id: '3',
          name: '王曉曉',
          remark: '爱编程爱生活爱科学',
          status: '正在输入中...'
        },
        {
          id: '4',
          name: '王一平',
          remark: '爱编程爱生活爱科学',
          status: '在线'
        }
      ]
    default :
      return [
        {
          id: '5',
          name: '終南山',
          remark: '爱编程爱生活爱科学',
          status: '正在输入中...'
        },
        {
          id: '6',
          name: '王守義',
          remark: '爱编程爱生活爱科学',
          status: '在线'
        },
        {
          id: '7',
          name: '張曉曉',
          remark: '爱编程爱生活爱科学',
          status: '在线'
        }
      ]
  }
}

/**
 * 获取我的用戶分組
 */
export const getUserCateList = (userid, token) => {
  return [
    {
      id: 1,
      name: '我的家人'
    },
    {
      id: 2,
      name: '我的好友'
    },
    {
      id: 3,
      name: '我的老師'
    }
  ]
}
