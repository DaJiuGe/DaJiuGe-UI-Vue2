<script lang="ts" setup>
import { provide } from 'vue'
import VueTypes, { oneOfType } from 'vue-types'
import { RadioGroupKey } from './meta'

const props = defineProps({
  value: oneOfType([String, Number, Boolean]).def(''),
  disabled: VueTypes.bool.def(false),
})

const emit = defineEmits < {
  (e: 'input', value: String | Number | Boolean): void
}>()

provide(RadioGroupKey, {
  value: () => props.value,
  disabled: () => props.disabled,
  emitValue: (val: String | Number | Boolean) => {
    emit('input', val)
  },
})
</script>

<template>
  <div class="su-radio-group">
    <slot />
  </div>
</template>
