const mixins = require('../../utils/mixins');
const api = require('../../utils/api.js');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const options = {

  data: {
    curr_tip_id: 0,
    selectWord: '',
    selectId: []
  },

  onLoad() {
    let param = {
      currentPage: 1,
      pageSize: 10
    };
    api.playData(param).then(res => {
      if (res.msg == 'success') {
        let arr = res.data.data;
        let words = Object.keys(arr);
        let tips = Object.values(arr);
        let singleWord = this.reverseWord(words);
        let shuffleWord = this.shuffle(singleWord);
        let objWord = this.getObjWord(shuffleWord);
        this.setData({
          word: objWord,
          resetWord: words,
          tips: tips,
          curr_tip: tips[this.data.curr_tip_id]
        })
      } else {
        console.log('error');
        return;
      }
    })
  },

  onShow() {
    wx.showToast({
      title: '找出拼音对应的汉字',
      icon: 'none',
      duration: 1000,
      success: res => {
        let startTime = new Date().getTime();
        this.setData({
          showFlag: true,
          startTime: startTime
        })
      }
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
  },

  getObjWord(words) {
    let result = [];
    words.forEach((item) => {
      result.push({
        word: item,
        isSelected: false,
        isHide: false
      })
    })
    return result;
  },

  reverseWord(words) {
    let word = []
    words.forEach((item) => {
      for (var i = 0; i < item.length; i++) {
        word.push(item[i])
      }
    })
    return word;
  },

  shuffle(arr) {
    let _arr = arr.slice()
    for (var i = 0; i < _arr.length; i++) {
      let j = getRandomInt(0, i)
      let t = _arr[i]
      _arr[i] = _arr[j]
      _arr[j] = t
    }
    return _arr
  },

  selectWord(e) {
    console.log('ee', e);
    let [_this, selectWord, selectId, curr_id, curr_text, curr_tip_id, word] = [this, this.data.selectWord, this.data.selectId, e.currentTarget.dataset.id, e.currentTarget.dataset.text, this.data.curr_tip_id, this.data.word];
    word[curr_id].isSelected = true;
    selectWord += curr_text;
    let param = {
      id: curr_id
    };
    selectId.push(param);
    _this.setData({
      selectWord: selectWord,
      selectId: selectId,
      word: word
    })
    if (selectWord.length == 4) {
      if (_this.data.resetWord[curr_tip_id] === selectWord) {
        selectId.map(item => {
          word[item.id].isHide = true;
          _this.setData({
            word: word
          })
        })
        wx.showToast({
          title: '太棒了',
          icon: 'none',
          duration: 500
        })
        _this.setData({
          selectWord: '',
          selectId: [],
          curr_tip_id: _this.data.curr_tip_id + 1,
          curr_tip: _this.data.tips[_this.data.curr_tip_id + 1]
        })
      } else {
        wx.showToast({
          title: '再找找看~',
          icon: 'none',
          duration: 500
        })
        selectId.map(item => {
          word[item.id].isSelected = false;
          _this.setData({
            word: word
          })
        })
        _this.setData({
          selectWord: '',
          selectId: []
        })
      }
    }
  },

}

mixins(options);
Page(options);
