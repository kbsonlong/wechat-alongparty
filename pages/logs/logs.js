/*
 * 
 * WordPres版微信小程序

 * organization: 蜷缩的蜗牛  www.alongparty.cn
 * github:    https://github.com//winxin-app-watch-life.net
 * 技术支持微信号：
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.alongparty.cn All rights reserved.
 * 
 */

var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
