<script setup lang="ts">
import VueTypes, { string } from 'vue-types'

type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

defineProps({
  type: string<ButtonType>().def('default'),
  round: VueTypes.bool.def(false),
  circle: VueTypes.bool.def(false),
  icon: VueTypes.string.def(''),
  disabled: VueTypes.bool.def(false),
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button
    class="su-button" :class="[
      `su-button--${type}`,
      {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="`su-icon-${icon}`" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.su-button {
  display: inline-block;
  margin: 0;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  color: #606266;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  transition: 0.1s;
  cursor: pointer;
  appearance: none;
  box-sizing: border-box;
  user-select: none;

  &:focus,
  &:hover {
    color: #409eff;
    background-color: #ecf5ff;
    border-color: #c6e2ff;
  }

  &.is-round {
    padding: 12px 23px;
    border-radius: 20px;
  }

  &.is-circle {
    padding: 12px;
    border-radius: 50%;
  }
}

.su-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:focus,
  &:hover {
    color: #fff;
    background: #66b1ff;
    border-color: #66b1ff;
  }
}

.su-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:focus,
  &:hover {
    color: #fff;
    background: #85ce61;
    border-color: #85ce61;
  }
}

.su-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:focus,
  &:hover {
    color: #fff;
    background: #a6a9ad;
    border-color: #a6a9ad;
  }
}

.su-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:focus,
  &:hover {
    color: #fff;
    background: #ebb563;
    border-color: #ebb563;
  }
}

.su-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:focus,
  &:hover {
    color: #fff;
    background: #f78989;
    border-color: #f78989;
  }
}

[class^="su-button"].is-disabled,
[class^=" su-button"].is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;

  &:focus,
  &:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}

.su-button--primary.is-disabled {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;

  &:focus,
  &:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}

.su-button--success.is-disabled {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;

  &:focus,
  &:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
}

.su-button--info.is-disabled {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;

  &:focus,
  &:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
}

.su-button--warning.is-disabled {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;

  &:focus,
  &:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
}

.su-button--danger.is-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;

  &:focus,
  &:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
}

[class^="su-icon-"] + span,
[class^=" su-icon-"] + span {
  margin-left: 5px;
}
</style>
