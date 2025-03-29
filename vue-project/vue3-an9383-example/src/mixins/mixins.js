export default {
  methods: {
    $callTime() {
      let date = new Date()
      console.log(date)

      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${date.getHours()}/${date.getMinutes()}`
    }
  }
}