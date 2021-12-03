/**
 * Web Drawer Component
 *
 */

import React from 'react'
import Modal from '../modal/Modal'

function Drawer({ ...props }) {
  return <Modal mode="drawer" {...props} />
}

Drawer.Content = Modal.Content
Drawer.Header = Modal.Header
Drawer.Bar = Modal.Bar

export default Drawer
