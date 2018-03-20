const mixins = require('../../utils/mixins');
const api = require('../../utils/api.js');
const Auth = require('../../utils/auth.js');
const base = require('../../utils/base.js');

const options = {

  data: {
    page_title: "",
    share_path: "",
    showModal: false,
    money: 200
  },

  onLoad() {
    Auth.getUserInfo().then(res => {
      console.log("res", res)
      this.setData({
        user: res.userInfo
      });
    })

    // base.checkOrSignon().then(user => {
    //   console.log("user", user)
    // })
  },

  linkToLevel() {
    wx.navigateTo({
      url: '../levels/index'
    })
  },

  linkToRank() {
    wx.navigateTo({
      url: '../rank/index'
    })
  },

  hideModal() {
    this.setData({
      showModal: !this.data.showModal
    })
  },

  clickDetermine() {
    var money = this.data.money + 50;
    this.setData({
      money: money,
      showModal: !this.data.showModal,
      showattendance: true
    })
  },

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
