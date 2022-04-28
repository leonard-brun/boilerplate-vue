<template>
  <div
    class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-gray-400 hover:bg-gray-50"
    :class="{ 'border-gray-400 bg-gray-50': isDragging }"
    @dragover.prevent.stop="isDragging = true"
    @dragenter.prevent.stop="isDragging = true"
    @dragleave.prevent.stop="isDragging = false"
    @dragend.prevent.stop="isDragging = false"
    @drop.prevent.stop="handleFileDrop"
    @click.stop="handleClick">
    <div class="space-y-1 text-center">
      <svg
        class="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true">
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      <div class="flex text-sm text-gray-600">
        <span class="relative bg-transparent cursor-pointer rounded-md font-medium text-indigo-600">Upload a file</span>
        <input
          ref="upload"
          id="file-upload"
          name="file-upload"
          type="file"
          class="sr-only"
          :accept="acceptedTypes"
          @change.stop=handleFileSelection>
        <p class="pl-1">or drag and drop</p>
      </div>
      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileSelect",
  props: {
    acceptedTypes: {
      type: String,
      default: null
    }
  },
  data() {
    return { isDragging: false }
  },
  methods: {
    handleClick() {
      const input = this.$refs.upload
      input.click()
    },
    handleFileSelection() {
      const input = this.$refs.upload
      if (!input.files.length) {
        return
      }

      this.getBase64(input.files[0], result => this.$emit("change", result))
    },
    handleFileDrop(event) {
      if (!event.dataTransfer || !event.dataTransfer.files.length) {
        return
      }

      this.getBase64(event.dataTransfer.files[0], result => this.$emit("change", result))
    },
    getBase64(file, callback) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        return callback(reader.result)
      }
      reader.onerror = function () {
        return callback(null)
      }
    }
  }
}
</script>