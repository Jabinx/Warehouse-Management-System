import Mock from 'mockjs'
import table from './table.json'
import user from './user.json'
import zong from './zong.json'
import jiezhi from './jiezhi.json'

Mock.mock('/mock/table','get',{
    status:200,
    message:'success',
    data:table
})

Mock.mock('/mock/user','get',{
    status:200,
    message:'success',
    data:user
})

Mock.mock('/mock/zong','get',{
    status:200,
    message:'success',
    data:zong
})

Mock.mock('/mock/jiezhi','get',{
    status:200,
    message:'success',
    data:jiezhi
})