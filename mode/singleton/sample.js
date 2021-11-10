/**
 * 适用场景： 只能建立单一的对象
 * 比如： 一个弹框，无论点击多少次，都只应创建一次
 */

class CreateUser {
  constructor(name) {
    this.name = name
    this.getName()
  }
  getName() {
    return this.name
  }
}

// 单一模式 当实例建立后 则 不再建立
var ProxyMode = (function () {
  var instance = null
  return function (name) {
    if (!instance) {
      instance = new CreateUser(name)
    }
    return instance
  }
})()

var a = new ProxyMode('aaaa')
var b = new ProxyMode('bbb')

console.log(a === b) // true 此时b为 aaaa
