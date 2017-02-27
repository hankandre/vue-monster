'use strict'

new Vue({
  el: '#app',
  data: {
    myHealth: 100,
    monsterHealth: 100,
    gameStart: true,
    lunged: false,
    healths: [],
    monster: 'monster'
  },
  methods: {
    attack: function () {
      let vm = this
      if (vm.monsterHealth === 0 || vm.myHealth === 0) return
      vm.myHealth = damage(vm.myHealth)
      vm.monsterHealth = damage(vm.monsterHealth)
      if (vm.myHealth <= 0) vm.myHealth = 0
      if (vm.monsterHealth <= 0) vm.monsterHealth = 0
      return vm.healths.push({
        'Your Health is': vm.myHealth,
        "The Monster's health is": vm.monsterHealth
      })
    },
    newGame: function () {
      this.myHealth = 100
      this.monsterHealth = 100
      this.gameStart = true
      this.healths = []
      return this.lunged = false
    },
    specialAttack: function () {
      let vm = this
      if (!vm.lunged) {
        vm.monsterHealth -= Math.round(Math.random() * 15)
        vm.myHealth = damage(vm.myHealth)
        vm.lunged = true
        return vm.healths.push({
          'Your Health is': vm.myHealth,
          "The Monster's health is": vm.monsterHealth
        })
      } else {
        return
      }
    },
    heal: function () {
      let vm = this
      vm.myHealth += Math.round(Math.random() * 12)
      vm.myHealth = damage(vm.myHealth)
      if (vm.myHealth >= 100) {return vm.myHealth = 100}
      return vm.healths.push({
        'Your Health is': vm.myHealth,
        "The Monster's health is": vm.monsterHealth
      })
    }
  }
})

function damage (health) {
  return health -= Math.round(Math.random() * 10)
}
