const mixins = require('../../utils/mixins');
const api = require('../../utils/api.js');

const options = {

  data: {
    my_rank: {
      "openid": "oNzwL0aPupIknO-7aHla1h1a6y6w",
      "unionid": "",
      "nickname": "fogcrane",
      "gender": "1",
      "city": "Shantou",
      "province": "Guangdong",
      "avatarurl": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/yK9YYfibRVt9eTwGibIzbBsshzMtUlgp4kbTSm20GWXNAeCHz872JhkrqEpgdbPYaIuqhAiaziaEwmF1PkDp7SNjAA\/64",
      "total_score": 627,
      "last_modified": 1517212205,
      "ranking_no": 2
    },
    "ranking_list": [{
      "openid": "oNzwL0cNsHN3BPT0QSNpf_fdPIws",
      "unionid": "",
      "nickname": "明欢",
      "gender": "1",
      "city": "",
      "province": "Yau Tsim Mong",
      "avatarurl": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/Hof1uGicoy8sA0ibTHy85olicMFptHatm1dwDLSiavpT3PWgr1icDaArxSmqPmwSia5xCMHWm1E0XqjicSgWibZtmDlF1Q\/64",
      "total_score": 840,
      "last_modified": 1517822080,
      "ranking_no": 1
    }, {
      "openid": "oNzwL0aPupIknO-7aHla1h1a6y6w",
      "unionid": "",
      "nickname": "fogcrane",
      "gender": "1",
      "city": "Shantou",
      "province": "Guangdong",
      "avatarurl": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/yK9YYfibRVt9eTwGibIzbBsshzMtUlgp4kbTSm20GWXNAeCHz872JhkrqEpgdbPYaIuqhAiaziaEwmF1PkDp7SNjAA\/64",
      "total_score": 627,
      "last_modified": 1517212205,
      "ranking_no": 2
    }, {
      "openid": "oNzwL0WLvSJUQZfZrLcuQLLK0cGI",
      "unionid": "",
      "nickname": "陶子",
      "gender": "2",
      "city": "Guangzhou",
      "province": "Guangdong",
      "avatarurl": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTID9ArXkS4HU2Al89aPGm92nJjia4pclb8JP2aHibica50Ricne2y3Y8k86qOhCL3dicvdvuAjiaGG6TibNw\/64",
      "total_score": 536,
      "last_modified": 1517912885,
      "ranking_no": 3
    }, {
      "openid": "oNzwL0ZDh2-XNw6FB8cUBSzWUzUo",
      "unionid": "",
      "nickname": "Mark",
      "gender": "1",
      "city": "Guangzhou",
      "province": "Guangdong",
      "avatarurl": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTLtibHkJpndo7Vyq4SWKstAOhXDAplmb8pIDfslXS7icfx7oUVMf3pZeKSGNrOcAPHuzWicK2Illvg8w\/64",
      "total_score": 144,
      "last_modified": 1518343383,
      "ranking_no": 4
    }, {
      "openid": "oNzwL0d9x1aDKpeccwDH8AC9YWKU",
      "unionid": "",
      "nickname": "零℃",
      "gender": "1",
      "city": "Huanggang",
      "province": "Hubei",
      "avatarurl": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eoSpnSJ3UoFdQO9q4zvHiaX8W6Be3SyCnwPfA5ia748dOIsnJfMdT9ma8CW69AJLAOWozFIuXCKlZ5Q\/64",
      "total_score": 97,
      "last_modified": 1515757847,
      "ranking_no": 5
    }, {
      "openid": "oNzwL0SBMV6GccfMGB0LAknaAk64",
      "unionid": "",
      "nickname": "Z、CHENG",
      "gender": "1",
      "city": "Guangzhou",
      "province": "Guangdong",
      "avatarurl": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/ibV47icLJF8mgwnhkfQdmDNhxrWYC5ic5ibicFpeKI6ib5piaVhAha6faoricHxakYa8DEXZ2821p4ERib3ndPcgRMdXbkw\/64",
      "total_score": 59,
      "last_modified": 1516095896,
      "ranking_no": 6
    }, {
      "openid": "oNzwL0QceOZd_kogSbUdQnQPymew",
      "unionid": "",
      "nickname": "alisa,-)",
      "gender": "2",
      "city": "Guangzhou",
      "province": "Guangdong",
      "avatarurl": "https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eqjbOdSE2QZ9a9LEMypCm0Ig0ME7kWqMGFWXPKwC94Lw3xYDrpzl4P2DgnacSQLE7H6knXKz6ianibw\/64",
      "total_score": 2,
      "last_modified": 1515746548,
      "ranking_no": 7
    }]
  },

  onLoad() {},

  onShareAppMessage: function(res) {
    return {
      title: this.data.share_title,
      path: "pages/index/index",
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }

}

mixins(options);
Page(options);
