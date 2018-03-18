export default {
    toDetail (res) {
        let {id} = res.currentTarget.dataset;
        wx.navigateTo({
          url:'/pages/details/details?id=' + id
        })
    },
}
