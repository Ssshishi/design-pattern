/**
 * 中介者模式 表示 所有相关联的对象都可以通过中介者对象来通信，这样降低对象与对象之间的耦合性
 *  比如： 购物车需求 存在商品选择表单，颜色选择表单，购买数量选择表单等等 都会触发change事件，那么
 * 可以使用中介者模式，实现各个事件之间的解耦
 */

var goods = {
  'red|32G': 3,
  'green|64G': 3,
  'blue|128G': 3,
  'yellow|256G': 3,
  'pink|512G': 3,
}

/**
 * 通过中介者 完成 对象与对象之间的低耦合性
 */
var agency = (function () {
  var colorSelect = document.getElementById('colorSelect')
  var numberSelect = document.getElementById('numberSelect')
  var memorySelect = document.getElementById('memorySelect')

  return {
    changed: function (obj) {
      switch (obj) {
        case colorSelect:
          // TODO
          break
        case memorySelect:
          // TODO
          break
        case numberSelect:
          // TODO
          break
        default:
          break
      }
    },
  }
})()

colorSelect.onChange = function () {
  agency.changed(this)
}

memorySelect.onChange = function () {
  agency.changed(this)
}

numberSelect.onChange = function () {
  agency.changed(this)
}
