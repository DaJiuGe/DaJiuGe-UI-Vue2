<script lang="ts" setup>
import { provide } from 'vue'
import VueTypes, { arrayOf, oneOfType } from 'vue-types'
import { CheckboxGroupKey } from './meta'

const props = defineProps({
  value: arrayOf(oneOfType([String, Number, Boolean])).def([]),
  disabled: VueTypes.bool.def(false),
})

const emit = defineEmits < {
  (e: 'input', value: String | Number | Boolean): void
}>()

provide(CheckboxGroupKey, {
  value: () => props.value,
  disabled: () => props.disabled,
  emitValue: (val: String | Number | Boolean) => {
    emit('input', val)
  },
})
</script>

<template>
  <div class="su-checkbox-group">
    <slot />
  </div>
</template>
