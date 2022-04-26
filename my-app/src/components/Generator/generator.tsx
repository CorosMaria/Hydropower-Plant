import React from 'react'
import Image from '../Image/image'

export type GeneratorProps = {}

const Generator: React.FC<GeneratorProps> = (props) => {
  return (
    <div style={{
      marginTop: "400px"
    }}>
      <Image
        image="generator2.png"
        altText="Generator"
        className="process-images generator"
        hasStateIndicator
        hasLabel
        value={20}
        unit={"kV"}
        showComponentName
        componentName={"Generator"}
      />
    </div>
  )
}

export default Generator
