// pages/changepic/changepic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "image_url": "./images/b1.jpg"
  },
  handleChange: function(e) {
    // console.log(e)
    this.setData({
      image_url: this.data.image_url === "./images/b3.jpg" ? "./images/b1.jpg":"./images/b3.jpg"
    })
  },
  handleClickWithParams: function(e) {
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.num)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})