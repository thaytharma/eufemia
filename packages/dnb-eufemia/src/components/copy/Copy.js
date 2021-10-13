/**
 * Copy Tag
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styled from '@emotion/styled'
import { hasSelectedText, IS_IOS } from '../../shared/helpers'
import {
  warn,
  convertJsxToString,
  registerElement,
  extendPropsWithContext,
  makeUniqueId,
} from '../../shared/component-helper'
import { runIOSSelectionFix } from '../../components/NumberFormat'
//import { useCopyWithNotice } from '../../components/number-format/NumberUtils'
import Context from '../../shared/Context'

// we may use this one, but for now, we just keep the build in mdx support
// import ReactMarkdown from 'react-markdown'

const StyledSpan = styled.span`
  cursor: copy;
`

let hasiOSFix = false

export default class Copy extends React.PureComponent {
  static tagName = 'dnb-copy'
  static contextType = Context

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    id: null,
    className: null,
  }

  static enableWebComponent() {
    registerElement(Copy?.tagName, Copy, Copy.defaultProps)
  }

  constructor(props) {
    super(props)
    this._ref = React.createRef()
    this._id = props.id || makeUniqueId()
  }

  componentDidMount() {
    clearTimeout(this._selectAllTimeout)

    // NB: This hack may be removed in future iOS versions
    // in order that iOS v13 can select something on the first try, we run this add range trick
    if (IS_IOS && !hasiOSFix) {
      hasiOSFix = true
      runIOSSelectionFix()
    }
  }

  render() {
    // const { copy } = useCopyWithNotice()
    const props = extendPropsWithContext(
      this.props,
      Copy.defaultProps,
      this.context.Copy
    )
    const {
      id, // eslint-disable-line
      children,
      className,
      ..._rest
    } = props
    let rest = _rest
    const onClickHandler = () => {
      if (!hasSelectedText()) {
        try {
          const str = convertJsxToString(children)

          if (String(str).length > 0) {
            const selection = window.getSelection()
            const range = document.createRange()
            range.selectNodeContents(this._ref.current)
            selection.removeAllRanges()
            selection.addRange(range)

            //copy(str, this._ref.current) // use copyWithNotice only to use the nice effect / animation
          }
        } catch (e) {
          warn(e)
        }
      }
    }

    const params = {
      onClick: onClickHandler,
    }

    return (
      <StyledSpan
        className={classnames('dnb-copy', className)}
        ref={this._ref}
        id={this._id}
        {...rest}
        {...params}
      >
        {children}
      </StyledSpan>
    )
  }
}
