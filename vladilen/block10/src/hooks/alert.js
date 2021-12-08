import { ref } from 'vue'

export function useAlert (visibility = false) {
  const alert = ref(visibility)

  const toogle = () => {
    const alerts = alert.value = !alert.value
    return alerts
  }

  const close = () => {
    const closeAlert = alert.value = false
    return closeAlert
  }
  return { alert, toogle, close }
  // return [alert, toogle, close]
}
