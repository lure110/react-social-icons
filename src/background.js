import React from 'react'

import { socialSvgContent } from './styles.js'

function Background({ networkKey, ...props }) { // eslint-disable-line react/prop-types
  return (
    <g {...props} className="social-svg-background" style={socialSvgContent}>
      <circle cx="32" cy="32" r="31" />
    </g>
  )
}

export default Background
