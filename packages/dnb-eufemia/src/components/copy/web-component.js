/**
 * This file is used to enable Web Components
 *
 */

import { registerElement } from '../../shared/custom-element'
import Copy from './Copy'
export default Copy
export * from './Copy'

registerElement(Copy?.tagName, Copy, Copy.defaultProps)
