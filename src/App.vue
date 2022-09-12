<script setup lang="ts">
import { ref } from 'vue'

const gender = ref('1')
</script>

<template>
  <div id="app">
    <div class="row">
      <SuRadio v-model="gender" label="0">
        男
      </SuRadio>
      <SuRadio v-model="gender" label="1">
        女
      </SuRadio>
    </div>
    <div class="row">
      <SuRadio v-model="gender" label="0" />
      <SuRadio v-model="gender" label="1" />
    </div>
    <div class="row">
      <SuRadioGroup v-model="gender">
        <SuRadio label="0">
          男
        </SuRadio>
        <SuRadio label="1">
          女
        </SuRadio>
      </SuRadioGroup>
    </div>
    <div class="row">
      <SuRadioGroup v-model="gender">
        <SuRadio label="0" disabled>
          男
        </SuRadio>
        <SuRadio label="1">
          女
        </SuRadio>
      </SuRadioGroup>
    </div>
    <div class="row">
      <SuRadioGroup v-model="gender">
        <SuRadio label="0">
          男
        </SuRadio>
        <SuRadio label="1" disabled>
          女
        </SuRadio>
      </SuRadioGroup>
    </div>
    <div class="row">
      <SuRadioGroup v-model="gender">
        <SuRadio label="0" disabled>
          男
        </SuRadio>
        <SuRadio label="1" disabled>
          女
        </SuRadio>
      </SuRadioGroup>
    </div>
    <div class="row">
      <SuButton>
        确定
      </SuButton>
      <SuButton type="primary">
        确定
      </SuButton>
      <SuButton type="info">
        确定
      </SuButton>
      <SuButton type="warning">
        确定
      </SuButton>
      <SuButton type="danger">
        确定
      </SuButton>
    </div>
    <div class="row">
      <SuButton round>
        确定
      </SuButton>
      <SuButton type="primary" round>
        确定
      </SuButton>
      <SuButton type="info" round>
        确定
      </SuButton>
      <SuButton type="warning" round>
        确定
      </SuButton>
      <SuButton type="danger" round>
        确定
      </SuButton>
    </div>
    <div class="row">
      <SuButton circle>
        确定
      </SuButton>
      <SuButton type="primary" circle>
        确定
      </SuButton>
      <SuButton type="info" circle>
        确定
      </SuButton>
      <SuButton type="warning" circle>
        确定
      </SuButton>
      <SuButton type="danger" circle>
        确定
      </SuButton>
    </div>
    <div class="row">
      <SuButton icon="delete">
        确定
      </SuButton>
      <SuButton icon="delete" type="primary">
        确定
      </SuButton>
      <SuButton icon="delete" type="info">
        确定
      </SuButton>
      <SuButton icon="delete" type="warning">
        确定
      </SuButton>
      <SuButton icon="delete" type="danger">
        确定
      </SuButton>
    </div>
    <div class="row">
      <SuButton icon="delete" circle />
      <SuButton icon="delete" type="primary" circle />
      <SuButton icon="delete" type="info" circle />
      <SuButton icon="delete" type="warning" circle />
      <SuButton icon="delete" type="danger" circle />
    </div>
    <div class="row">
      <SuButton disabled>
        确定
      </SuButton>
      <SuButton type="primary" disabled>
        确定
      </SuButton>
      <SuButton type="info" disabled>
        确定
      </SuButton>
      <SuButton type="warning" disabled>
        确定
      </SuButton>
      <SuButton type="danger" disabled>
        确定
      </SuButton>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-bottom: 24px;
}

.su-button {
  margin-right: 8px;
}
</style>
