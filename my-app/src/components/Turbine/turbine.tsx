import React from 'react'
import Image from '../Image/image'

export type TurbineProps = {}

const Turbine: React.FC<TurbineProps> = (props) => {
  return (
    <div style={{
      marginTop: "355px"
    }}>
    <Image
      image="turbine.png"
      altText="Turbine"
      className="process-images turbine"
      hasStateIndicator
      hasLabel
      showComponentName
      componentName={"Water turbine"}
    />
    </div>
  )
}

export default Turbine
