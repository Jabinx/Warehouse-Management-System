import request from "@/utils/request"

export function getuser() {
    return request({
      url: '/user',
      method: 'get',
    })
}