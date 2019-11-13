//app.js
App({
  onLaunch: function () {
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=wHmdxzSwfK8YC2bjaww3ISZc&client_secret=Q4TXWnZnCaGoYeg8M4N9flUW4cQu5Fwe',
      method:'POST',
      success:(res)=>{
        // console.log(res)
        this.globalData.access_token=res.data.access_token
      },
      fail:()=>{
        wx.showToast({
          title: '鉴权失败！',
        })
      }
    })
  },
  globalData: {
    access_token: ''
  }
})