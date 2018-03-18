const mixins = require('../../utils/mixins');
const api = require('../../utils/api.js');

const options = {

  data: {},

  onLoad() {},

  linkToPlay(){
    wx.navigateTo({
      url: '../play/index'
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