import React from 'react'
import Image from '../Image/image'

export type GeneratorProps = {}

const Generator: React.FC<GeneratorProps> = (props) => {
  return (
    <div style={{
      marginTop: "355px"
    }}>
    <Image
      image="generator.png"
      altText="Generator"
      className="process-images generator"
      hasStateIndicator
      hasLabel
      showComponentName
      componentName={"Generator"}
    />
    </div>
  )
}

export default Generator
