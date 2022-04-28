<template>
  <Input
    icon="account-outline"
    :mask="{
      mask: new Array(26).join('L'),
      tokens: { 'L': { pattern: /[0-9A-zÀ-ú- ]/ }}
    }"
    :placeholders="['Pierre-Alexandre', 'P-A', 'Barbouy', 'Front-end Developer']"
    prop="name" />
</template>

<script>
import Input from "@/components/forms/Input.vue"

export default {
  name: "NameInput",
  components: { Input }
}
</script>