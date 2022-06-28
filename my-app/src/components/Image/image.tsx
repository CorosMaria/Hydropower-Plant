import React from 'react'
import './image.scss'
import Label from '../../components/Label/label'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'

export type ImageProps = {
  image: string
  className?: string
  altText?: string
  onClick?: any
  mode?: string
  hasStateIndicator?: boolean
  hasLabel?: boolean
  showComponentName?: boolean
  componentName?: string
  value?: number
  unit?: string
  onCenter?: boolean
  onTop?: boolean
}

type Props = ImageProps & {

}

const Image: React.FC<Props> = (props) => {
  const [running, setRunning] = React.useState(true)
  const systemOn = useSelector((s: MainState) => s.systemOn)

  const handleToggleRunningMode = () => {
    setRunning(!running)
  }

  const renderStateIndicator = () => {
    switch (running && systemOn) {
      case true:
        return (
          <img
            src="data:image/png;base64,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"
            alt="Run Mode"
            className="mode-Images"
            onClick={handleToggleRunningMode}
          />
        )
      case false:
        return (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADKCAYAAAAPUmSrAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAJsElEQVR4nO2dW5LbOgwF4dRdUyp7ynqyp6nZ1NyPWDWKrQcpgSAe3Z8Zx6LE0wJoyfJDwIovxfd6KL4XnMDBHoOmEK0wl4PgwN5jhgy9MMc34QD2E0GMI5jzTjhgx0QXohVycAAH5x1zMfY2OGlyyMQLHJBvhsuhtQHDSSMfwkEYIsasHm3gZJbOScWdV8twlAWL8iSXy0yVHb6V5ygy9KIw+SXyk30nu/KdVYZeLoQidY4y71xT5hHjnI6QpMxTxp1CjkE0hiVdpjLtUHPuEeQ6FatKhh1BjglUqiqRd4JF+WSqVJWog6d6OCJ7VYk4cARxSOaqEmnAyBGAjFUlymARJBDZqkqEQXLdIyhZqornAVI9EpBBFK+Do3okI7IsHgeFIEmJKoq3AZ1mf7ocv3+3v/bPn3HjCExD6Fzl0tNgfAnSI0MPiCMisaqKi0HISf6HyzFKiB6KyhOhqswegG318CBDD0XE8S7KzI3bVo9ogqxBloY/j2PWhu0EiSzHKwVk8SjKjI3uOkD1aKCAKCKHwTTPrPUGbQTJKMcrBWTxIorlxjY9oHrcoIAoIrshNcuu1YbGC3JXjl+/2l738XFvOyMoIMtMUSw2Mr7F6hWkVYhWPIiTXJSZrdfoDYwVpEUObSFamSVOYllmiTJFkvSCrJkhC6JYbfM2Y6pIa2vlQZA1yKLCjOsooySZJ4g3OdYgigrWooyQRF+QqNVjD2S5jWXb5VuSbHKsQZRbWFaTH5pvJpa3nCxEFETk77itx57oQutJnlTjpmmcriBnExpVji2sqwoVpYv/NN5ErL9V2yLIz5/3tvH5ee//97Dsj4eLkvCGViWxqSKt1eOuIGssZRGxE4Vq0ozGmsS2zTpDU5AR73eGVRvJ+qSZu5LYtVln4fn5c1ygR773FpnWWwm4U4r0v114tc2yDLBl+2XRetF2naL9EbCIGLZZ1mf4ZZuZSNR2nXC567kqiZ82awZWonjcd8eMCqV6JTFrs2af0TOJkqiajFjEX5FEV9irbRbokkgUbVQriao9EVqNTNUkEdrVpFeS+RcNq1YR2q4uNE/YQz7daiJLm+VxTHdIJIoWKpKYtFnZwngF2q4uDnLZFdkeSfS+r3733ixvZLsan6iaaJzA7dutbIJkJZEoOzT70yqJzdMXoQ1OKF3czenlSjLlDl+wJdF87eS1KcYtkugUjEQHfBM+WEjLpUpCm1WIRCe3q9XkTJK3NxgiCD02GHElv/MuJvZAKwNjOXTnSBKbKtKC9ffMITW9OY5RSeAdWlRtdt2xkSTR4q8kxedvTxK7VivLGZGWMBQ9eabdAvhm050tSbgMArCCSgJwwnhJKiz6KqxHKszjX946qVdJbO/27Vm0VwgimNKa67ntVu8TCj2K4nFMoEq8NQmhhPH8U2TiSeIJhC3BWElGLfYI5xzqLN7/YS1JrK/ozhZl9vZBhZYnqsxvtyL+BBqClGK+JHf4/LQPLIKUY/lhUbddVRNLcEd+OcubHBErcFC0fn33nRmLvBGyeJMDLPkSkcdhu3WrvMz8mTGNYM9o5cAl4ypJDx8f+t8reQ34WXVBiLJ8yfEPKvqQxAIkgIvE/nQLwIAfEv2TLYDBjK0kiX4j3BWzPv6tOZ9fu5KYlxc+94eJHOXd15oEUc7hGJnjSxIAh/iThDPlPhybKfiTRIQwbMExmcamJKqL9pqfiOSjwDzu5d5nJRHhzLmGYzEVv5KIEA4RjoEDfEsC4AD/klQ+k1bed0e8SeLyRq6KYam4zw7Yyr9NJSnwyUhqis+f/3ZrodKZtdK+BiCOJFVAEHfEkuTjI3eIMu9bYN6+vvsQp4v3NUuYsvzeInK4Yeu77rEqySvRwxWhMhZftIvsFI5hlWTks7giVRXvYqwpJslWJbGVRGT8Q+u8y4IgrsnXbm3hNYQRWivYZHedHrqaLHioKlHFoIr88+9zfpckuyhR5RApKYjIviT5n+C4FVZtcSILAafMqyQivn5erFWc7EIUrSIiHtutBU+iVKewICL7kuT7dAtAmV1Jjh5Fr0rxs5cbis/DUd59VJLiEzQdjv8Rjx9iWDQAIuKjkohwNpsFx/0UP5KIMGHWcLybOJSEPgwqcJZzX5VEhLObFRznFh4i35L4KhpM4Fg4vl34qyQAzvArCWe7MXBcuzmVxFcfBrdAkDda8r1+ze49jdOfnsJNkPdBkE0OJHnsvWbuHcFnIEs/yHFIPklEEKUV5GgipyQLyLIPgjSzI8nj6DVxJFlAlm+Qoxs1SQ7/4IHqoiDHJVparb3XxasmCxVlQZDLtFSRvdfFlWShgizIcZvakojkFQU51NgI/6Y3e22Z7fOBR5JJFgRRRV2S3X+MQmRZkEOd1lbr4LUikqmaLEQTBTmG0VpFDv8gGSXZwpM4SGHGMEl2/zETltIgxRR6Wq3DPzypUU3O0BAHIdzQU0VO/yhVq8kZLdIghUt6q8jpHyXqbSoAG7TehvLK2TcT+WIiZOc045e/4449EIk7efX7IAiA8TS50yLJ5Y/GADxwN6e3KwmigGeuLtbXtEqCC1AWlTUJBoFHtHLZ+z6Hl0e4dgJeOAl2V+57KwlFA6LTnWHVj4AxCDygncOr70fbBS7RbLMWrlYSigZE43Jmh1xxxyCYwajc3ZEEFyAKt7KqEXRup4fpaFxZ30Oj3eLeLpjK6JxxFzBkRsUfTQlpu8CckW3WgmYloe0CU6xypd1u4QN4QDWHZmsS7AFNLNqshRGS0HbBUKxzNKqS4APMYEjuRoeZh9uBKpZt1gLXSSADQ0/2oyXp/r0HgD1m5cZqu7RdcIsZbdaCVbtF8YARmOTKOrz8lAN0c+VJ8AbbHwqtFzQxW45pG3yCKHCIF0GmbVR4kATsMHOB7m7D0uACstShIYglJRFBFBDfgkzf+JMmD5AlH43hm57R6QN4gijFiCKIiJNBPGl2AFniEkmOBVeDeUJVSUpEQUQcDugJVSURHSFzmUeXg3rSlX9k8Ud0ORZcD+4JVSUgWQQRCTDAJ1SVIHQGKkT+QgxyBVXFMZmqx5pQg12BLI7IWD3WhBvwCkRxQNbqsSbswFcgywSyV481oQe/goW9EZXkWEixEyuoKgOpKIhIoh15AVkUqSrHQrodeoE27CLVxViTeudWXM5/BXFuhKBEfkrs5AqVzEcVR3GyS+Wm1M6uUM+5N3EGTGzVrNTd8SdDs20lzsBJrJ4PEeEgrDHJ9J2NGE0WmXiBA7KNafe0tbEJE0MWduDAnONtuaEJ898AB6mPDMIw551wwO7jWRzmVwEO4hhmiMNcDuJ/d4o6hUMTzTAAAAAASUVORK5CYII="
            alt="Stop Mode"
            className="mode-Images"
            onClick={handleToggleRunningMode}
          />
        )
    }
  }

  const renderLabel = () => {
    return <Label value={props.value} unit={props.unit} className="label info" />
  }

  const renderName = () => {
    return <div style={props.onCenter ? { marginLeft: "auto", marginRight: "auto" } : {}} className="component-name"> {props.componentName} </div>
  }

  return (
    <div>
      {props.hasStateIndicator && renderStateIndicator()}
      {props.onTop && props.hasLabel && renderLabel()}
      {props.onTop && props.showComponentName && renderName()}
      <img
        src={props.image}
        alt={props.altText}
        className={props.className}
        onClick={props.onClick}
      />
      {!props.onTop && props.hasLabel && renderLabel()}
      {!props.onTop && props.showComponentName && renderName()}
    </div>
  )
}

export default Image
