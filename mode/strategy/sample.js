/**
 * 策略模式 表示  一个对象的行为可以在运行时更改
 * 这需要两个步骤完成：
 *    1. 策略： 里面封装了多个行为 function，
 *    2. 环境： 决定最终对象使用的是哪种行为的
 */

// 策略  为具体过程 可以随之变化
var levelObj = {
  A: (money) => {
    return money * 4
  },
  B: () => {
    return money * 3
  },
  C: () => {
    return money * 2
  },
}

// 环境 不变
var calculateBouns = function (level, money) {
  return levelObj[level](money)
}

console.log(calculateBouns('A', 10000))
