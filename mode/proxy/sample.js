/**
 * 代理者模式 表示 为其他对象 提供 一种 代理 以控制这个对象的访问
 * 比如： 图片懒加载 先通过一张loading图占位 然后通过异步的方式加载图片 等图片加载好了再放到img标签里面
 */

var imgFunc = (function () {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function (src) {
      imgNode.src = src
    },
  }
})()

var proxyImg = (function () {
  var img = new Image()
  img.onload = function () {
    imgFunc.setSrc(this.src)
  }
  return {
    setSrc: function (src) {
      imgFunc.setSrc('./loading.gif')
      img.src = src
    },
  }
})()
proxyImg.setSrc('./pic.png')
