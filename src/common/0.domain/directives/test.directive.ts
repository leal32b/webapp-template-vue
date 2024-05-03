import { type ObjectDirective, type DirectiveBinding } from 'vue'

export const TestDirective: ObjectDirective = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    if (process.env.NODE_ENV !== 'test') {
      return
    }

    const { value } = binding

    if (typeof value !== 'string') {
      console.error(`value (${value}) is not a string`)

      return
    }

    if (el.classList.contains(value)) {
      console.error(`element already has "${value}" class`)
    }

    el.classList.add(value)
  }
}
