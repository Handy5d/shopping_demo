const INFO_KEY = 'hm_shopping_info'
const HISTORY_KEY = 'hm_history_list'

export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result
    ? JSON.parse(result)
    : {
        token: '',
        userId: ''
      }
}

export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

export const GetHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
