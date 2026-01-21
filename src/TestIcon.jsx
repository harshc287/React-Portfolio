import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function TestIcon() {
  return (
    <div style={{ fontSize: '48px', color: 'black' }}>
      <FontAwesomeIcon icon={faGithub} />
    </div>
  )
}
