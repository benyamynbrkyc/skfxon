Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value))
}

Storage.prototype.getObject = function (key) {
  let value = this.getItem(key)
  return value && JSON.parse(value)
}

const findByAttr = (array, attr, value) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i
    }
  }
  return -1
}

const formatEmail = (cartContent, total) => {
  let formattedString = ''
  for (let i = 0; i < cartContent.length; i++) {
    formattedString += `${i + 1}:\nName: ${cartContent[i].name}\nPrice: ${
      cartContent[i].price
    }\n`
  }
  return `${formattedString}Total: ${total}`
}

const eventBus = new Vue()

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
  el: '#cartContent',
  data: {
    cartContent: localStorage.getObject('cart').items,
    total: 0,
    cartIsEmpty: null,
    checkoutClicked: false,
    userEmail: null
  },
  methods: {
    removeFromCart(item) {
      let cartContent = localStorage.getObject('cart').items
      let indexOfItem = findByAttr(cartContent, 'name', `${item.name}`)
      cartContent.splice(indexOfItem, 1)
      localStorage.setObject('cart', { items: cartContent })
      eventBus.$emit('changeCartCounter')
      location.reload()
    },
    async checkout() {
      if (!this.checkoutClicked) {
        this.checkoutClicked = true
      } else {
        let cartContent = this.cartContent

        const params = new URLSearchParams()
        params.append('subject', 'Preset Checkout')
        params.append('email', this.userEmail)
        params.append('text', formatEmail(cartContent, this.total))

        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: params,
          url: '/email'
        }

        await axios(options)
      }
    }
  },
  created() {
    let sum = 0
    for (let i = 0; i < this.cartContent.length; i++) {
      sum += this.cartContent[i].price
    }
    this.total = sum

    if (this.cartContent.length == 0) {
      this.cartIsEmpty = true
    } else {
      this.cartIsEmpty = false
    }
  }
})
