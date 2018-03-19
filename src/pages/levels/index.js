const mixins = require('../../utils/mixins');
const api = require('../../utils/api.js');

const options = {

  data: {
    page_title: "",
    share_path: "",
    level: [{
      id: 1,
      level: 1,
      status: true
    }, {
      id: 2,
      level: 2,
      status: true
    }, {
      id: 3,
      level: 3,
      status: true
    }, {
      id: 4,
      level: 4,
      status: true
    }, {
      id: 5,
      level: 5,
      status: true
    }, {
      id: 6,
      level: 6,
      status: true
    }, {
      id: 7,
      level: 7,
      status: true
    }, {
      id: 8,
      level: 8,
      status: false
    }, {
      id: 8,
      level: 8,
      status: false
    }]
  },

  onLoad() {},

  linkToIdiomPlay(e) {
    wx.navigateTo({
      url: '../play/index?id=' + e.currentTarget.dataset.id
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
