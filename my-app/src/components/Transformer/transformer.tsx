import React from 'react'
import Image from '../Image/image'

export type TransformerProps = {}

const Transformer: React.FC<TransformerProps> = (props) => {
  return (
    <div style={{
      marginTop: "300px"
    }}>
    <Image
      image="transformer.png"
      altText="Transformer"
      className="process-images transformer"
      hasStateIndicator
      hasLabel
      value={20}
      unit="MW"
      showComponentName
      componentName={"Transformer"}
    />
    </div>
  )
}

export default Transformer
