import React from 'react'
import Image from '../Image/image'

export type PoleProps = {}

const Pole: React.FC<PoleProps> = (props) => {
  const drawLines = () => {
    return (
      <svg height="210" width="200">
        <line x1="0" y1="100" x2="240" y2="0" stroke="yellow" />
        <line x1="0" y1="100" x2="320" y2="0" stroke="yellow" />
        <line x1="0" y1="100" x2="500" y2="0" stroke="yellow" />
      </svg>
    )
  }

  return (
    <div
      style={{
        display: 'inline-flex',
      }}
    >
      {drawLines()}
      <Image
        image="stalp_transmisie.png"
        altText="Stalp Transmisie"
        className="process-images stalp"
      />
      <Image
        image="stalp_transmisie.png"
        altText="Stalp Transmisie"
        className="process-images stalp"
        showComponentName
        componentName={"Electricity poles"}
      />
    </div>
  )
}

export default Pole
