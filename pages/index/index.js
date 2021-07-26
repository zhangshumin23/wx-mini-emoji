// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    emoji: '',
    showEmoji: false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    
  },
  // 打开emoji面板
  openEmoji: function(){
    this.setData({
      showEmoji: true
    })
  },
  // 关闭emoji面板
  closeEmoji: function(){
    this.setData({
      showEmoji: false
    })
  },
  // 选择emoji事件
  chooseEmoji: function(e){
    var emoji = e.detail;
    this.setData({
      emoji: emoji
    })
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
