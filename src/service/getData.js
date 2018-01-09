/**
 * 用戶登錄
 */
export const login = (username, password, verifycode) => {
  return {
    user_id: '123',
    user_name: '李伯特',
    user_token: '123433535',
    user_remarks: '愛編程、愛探索、愛科技、愛生活'
  }
}
/**
 * 获取我的用戶列表
 */
export const getUserList = (userid, token) => {
  switch (userid) {
    case '1' :
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
    case '2' :
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
      id: '1',
      name: '我的家人'
    },
    {
      id: '2',
      name: '我的好友'
    },
    {
      id: '3',
      name: '我的老師'
    }
  ]
}

/**
 * 获取我的聊天歷史列表
 */
export const getChatHistoryList = (userid, token) => {
  return [
    {
      chatid: '5',
      userid: '5',
      username: '終南山'
    },
    {
      chatid: '6',
      userid: '6',
      username: '王守義'
    },
    {
      chatid: '7',
      userid: '7',
      username: '張曉曉'
    }
  ]
}
/**
 * 獲取一條新的聊天連接
 */
export const getChatSession = (myid, token, userid) => {
  switch (userid) {
    case '1' :
      return {
        chatid: '1',
        username: '李老师',
        remark: '爱编程爱生活爱科学',
        status: '正在输入中...'
      }
    case '2' :
      return {
        chatid: '2',
        username: '张小强',
        remark: '爱编程爱生活爱科学',
        status: '在线'
      }
    case '3' :
      return {
        chatid: '3',
        username: '王曉曉',
        remark: '爱编程爱生活爱科学',
        status: '正在输入中...'
      }
    case '4' :
      return {
        chatid: '4',
        username: '王一平',
        remark: '爱编程爱生活爱科学',
        status: '在线'
      }
    case '5' :
      return {
        chatid: '5',
        username: '終南山',
        remark: '爱编程爱生活爱科学',
        status: '正在输入中...'
      }
    case '6' :
      return {
        chatid: '6',
        username: '王守義',
        remark: '爱编程爱生活爱科学',
        status: '在线'
      }
    case '7' :
      return {
        chatid: '7',
        username: '張曉曉',
        remark: '爱编程爱生活爱科学',
        status: '在线'
      }
  }
}
