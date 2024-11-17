export default {
  install: (app, options) => {
    app.config.globalProperties.$sayHello = (qlqcoisa) => {
      console.log('Hello from MyPlugin!', qlqcoisa)
    }
  }
}
