export default {
      showToast (errmsg) {
        this.setData({
            showToast: false,
            errInfo: errmsg
        })
        const timer = setTimeout(() => {
          this.setData({
              showToast: true
          })
        }, 1200)
    }
}
