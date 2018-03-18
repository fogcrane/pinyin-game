const API = require('./base')

// const newsDetails = (id)=>{//咨询详情
//     return API.get("/api/mag.news.item.json?id="+id);
// }
// const userInvate = (data)=>{//统计接口
//     return API.post('/api/user.invate.json',data)
// }

module.exports = Object.assign(
  API, 
  // {authSignon: API.guard(authSignon)}, 
  // {touristList}
)
