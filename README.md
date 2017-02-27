# vue-monster

This project was created as a test for Vuejs. It uses Vue's built in directives for conditional rendering. As well as 
conditional styling using Vue's built in `bind` directive.

## Frustrations
I'm pretty sure that some of the methods could be updated to be Vue `computed` methods instead since a lot
of things are getting re-rendered with my current approach. At one point I considered doing a Vue `watch` method in 
order to reset the game if `gameStart` boolean was set to true. For instance:

```js
new Vue({
  data: {
    gameStart: false,
    myHealth: 42,
    monsterHealth: 0
  },
  watch: {
    gameStart: function () {
      // Watches gameStart and updates the values then.
      if (this.gameStart) {
        this.myHealth = 100
        return this.monsterHealth = 100
      }
    }
  }
})
```
This solution seemed more DRY to me but I dislike `watch` methods due to their performance detriments so I reverted back to a `method`.
