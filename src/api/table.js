import request from "@/utils/request"

export function getList() {
    return request({
      url: '/table',
      method: 'get',
    })
}

export function getZong() {
  return request({
    url: '/zong',
    method: 'get',
  })
}

export function getjiezhi() {
  return request({
    url: '/jiezhi',
    method: 'get',
  })
}