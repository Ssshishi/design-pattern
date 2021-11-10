/**
 * 装饰器模式： 保证不改变对象自身的基础上，在代码运行期间给对象动态的添加方法
 * 比如： 给4个型号的自行车加上前灯，尾灯，铃铛 3个配件，
 * 现4种类型自行车被单独定义为一个类，如果通过类继承的话需要创建4*3 12个子类，
 * 但是通过装饰器模式，只需要创建3个类
 */

/**
 * 应用场景： 原有方法维持不变，在原有方法的基础上再挂载其他方法来满足现有需求
 *    将函数拆分成多个可复用的函数，再将拆分出的函数挂载在某个函数上 实现相同效果但增强了复用性
 */

Function.prototype.before = function (beforefn) {
  var self = this
  return function () {
    beforefn.apply(this, arguments)
    return self.apply(this, arguments)
  }
}

Function.prototype.after = function (afterfn) {
  var self = this
  return function () {
    var ret = self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

var func = function () {
  console.log('2')
}

var func1 = function () {
  console.log('1')
}

var func3 = function () {
  console.log('3')
}

func = func.before(func1)
// .after(func3)

func()
