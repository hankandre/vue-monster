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
    // Launches the attack. Simply returns if the user's or monster's health is 0. If not, it causes damage to each
    // and pushes the new health to the healths array for rendering.
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
    // Resets the game.
    newGame: function () {
      this.myHealth = 100
      this.monsterHealth = 100
      this.gameStart = true
      this.healths = []
      return this.lunged = false
    },
    // Launches the user's special attack. A conditional exists to prevent the user from launching it more
    // than once.
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
    // Heals user. The user has health added although it's still possible that the Monster's damage exceeds the healing amount.
    // The healths are then pushed to the healths array for rendering.
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


// A reusable function to calculate damage
function damage (health) {
  return health -= Math.round(Math.random() * 10)
}
