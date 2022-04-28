import { onMounted, ref } from "vue"

export default function useWritingText(values) {
  const text = ref("")
  let index = 0

  const nextValue = () => {
    if (!values) {
      return
    }

    if (index >= values.value.length) {
      index = 0
    }

    const value = values.value[index]
    writeValue(value)
    index++
  }

  const writeValue = (value, index = 1) => {
    text.value = value.slice(0, index)
    if (text.value === value) {
      setTimeout(() => eraseValue(value), 2000)
      return
    }
    setTimeout(() => writeValue(value, index + 1), 90)
  }

  const eraseValue = (value, index = 1) => {
    text.value = value.slice(0, value.length - index)
    if (text.value === "") {
      setTimeout(nextValue, 800)
      return
    }
    setTimeout(() => eraseValue(value, index + 1), 60)
  }

  onMounted(nextValue)

  return text
}