import React from 'react'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { render } from 'react-dom'

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})