<template>
  <div class="modal fade" ref="modalRef" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close"></button><br />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue'
import { Modal } from 'bootstrap'

const props = defineProps({
  modelValue: Boolean,
  title: String
})

const emit = defineEmits(['update:modelValue'])

const modalRef = ref(null)
let modal

onMounted(() => {
  if (modalRef.value) {
    modal = new Modal(modalRef.value)
  }
})

watch(
    () => props.modelValue,
    (modelValue) => {
      if (modelValue) {
        modal.show()
      } else {
        modal.hide()
      }
    }
)

function close() {
  emit('update:modelValue', false)
}
</script>

<!--https://github.com/n3316202/vue3-sindorim-3-->