import { filmPresets, newPresets } from './presets.js'

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value))
}

Storage.prototype.getObject = function (key) {
  let value = this.getItem(key)
  return value && JSON.parse(value)
}

const eventBus = new Vue()

const checkForPreset = (preset, items) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].name === preset) {
      console.log('Preset exists')
      return true
    }
  }
  return false
}

const pushToCart = (cartContent, presets) => {
  cartContent.push(presets)
  localStorage.setObject('cart', { items: cartContent })
  console.log('from pushToCart Func\n', cartContent)
  eventBus.$emit('changeCartCounter')
  return alert(`Added ${presets.name} to your cart!`)
}

new Vue({
  el: '#cartCounter',
  data: {
    cartCounter: localStorage.getObject('cart').items.length
  },
  created() {
    eventBus.$on('changeCartCounter', () => {
      this.cartCounter = localStorage.getObject('cart').items.length
    })
  }
})

new Vue({
  el: '#add-to-cart-shortcut-film-presets',
  methods: {
    addToCart() {
      if (localStorage.getObject('cart').items.length !== 0) {
        if (
          checkForPreset(
            'Film Presets by SKFXON',
            localStorage.getObject('cart').items
          ) == false
        ) {
          let cartContent = localStorage.getObject('cart').items
          pushToCart(cartContent, filmPresets)
        } else {
          alert('You already have this item in your cart.')
          console.log(localStorage.getObject('cart').items)
        }
      } else {
        let cartContent = localStorage.getObject('cart').items
        pushToCart(cartContent, filmPresets)
      }
    }
  },
  created() {
    console.log('Created Hook\n', localStorage.getObject('cart'))
  }
})

new Vue({
  el: '#add-to-cart-shortcut-new-presets',
  methods: {
    addToCart() {
      if (localStorage.getObject('cart').items.length !== 0) {
        if (
          checkForPreset(
            'New Presets by SKFXON',
            localStorage.getObject('cart').items
          ) == false
        ) {
          let cartContent = localStorage.getObject('cart').items
          pushToCart(cartContent, newPresets)
        } else {
          alert('You already have this item in your cart.')
          console.log(localStorage.getObject('cart').items)
        }
      } else {
        let cartContent = localStorage.getObject('cart').items
        pushToCart(cartContent, newPresets)
      }
    }
  }
})
