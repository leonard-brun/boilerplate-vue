import { onMounted, onUnmounted, ref } from "vue"

export default function useWindowDimensions() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const onDimensionsChange = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => window.addEventListener("resize", onDimensionsChange))
  onUnmounted(() => window.removeEventListener("resize", onDimensionsChange))

  return {
    width,
    height
  }
}