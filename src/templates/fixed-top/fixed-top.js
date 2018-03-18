export default {
      showFixedTop (errmsg) {
        this.setData({
            showFixedTop: false,
            fixedTopInfo: errmsg
        })
        const timer = setTimeout(() => {
          this.setData({
              showFixedTop: true
          })
        }, 2000)
    }
}
