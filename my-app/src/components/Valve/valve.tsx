import React from 'react'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'
import "./valve.scss"

export type ValveProps = {
  on: boolean
  //handleOnOff(): void
  className: string
}

const Valve: React.FC<ValveProps> = (props) => {
  const systemOn = useSelector((s: MainState) => s.systemOn)

  let content = (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAfUlEQVRIid1VQQ7AIAhDw8N4Oj9zV0CWaGAsoTcNthYEAbpgOHsrmxe9iIiKd+sZ4DtGiYibLs9yBLd8slzHZ/97Xcys1kTkKo+XWIvSwmekSELVrqxPsl1YLNw1MrpEc/YZK31EMH8cAljOue18oFg6VqSb9Clc4qTkP3kAnKsTO1/EplkAAAAASUVORK5CYII="
      alt="valveClose"
      className={props.className}
    //onClick={props.handleOnOff}
    />
  )

  if (systemOn && props.on) {
    content = (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAABYlAAAWJQFJUiTwAAADKUlEQVRIiaWWTY8bRRCGn+qvGc8mrJwlipC4RogDHBAXJAQKR5D4r1w4sRJI/AlOKORCgkQ2lu3x9HR35TC9XstjVmtRVmva1VX1TvVbXT3CsXyA0gIXgFZdBqT+d/VZAFPXQtVtgbfAgByGdCdA+P6nH/jz6iWbxxtKTrTR4AqY4FnHHS40NLYlrnoe6RPefPiKQTd88epLfvn6VxhmUY/kOfr5y8+UB/664W7+9K9nyrN9/vdksoaP/33OxhRWlzeIQhs9QS07zQyaCaGFmAglsRwb/rh8Tb5o+aT/lH/i61lImWk8SgN0dfXWQrnjpNS5ZdqaptpFYMWMkznIPfKEj9QSsWT+5ubBvvPtukcGdsCIpZzjdl4mNAekDg/3nRkG0NGBmrpazDQkTecCJk6Km3jx6S5UlslW0/3nRBB++/l3fCvEcYsxDlEwJJCMKEjxmBIQFdLjt8Stx2mHD8pX335DPoo5AxmMgmtIQyFYTzJrkgAakNJgASuJbHsAVtHRqqMVJY/9yT2sIFeKKLgebGFrE0EWDGJIVhhtRHWBzRfYYhAZQAZUEr1Z4nxgtY0E70gCBlTUo6ahlLU4gI4lW93BmKCsgC3FBlJqkdTgy1i58KAOFUsxHiXxSD2bd8qyu2I3vpnMFKCBsgDWSCeotSAZRCABgwEsGAUzgtfaHyu3uc6LQJcmrhO1nzpIBcSAuz2woHo4njbose6csezm/rdFuRe7OMHcGdLOIt5V/l78cf2dKfaEbgaSZ436PDnlPwPpx/8HsktznbQL1AQohalVj2AsFDs991etTK8kty1fJ10GQgcxgoygsdp6CA2ksfYua1EEyGAwXF9fk3XFojOkmGvCaYoCgAOtu2+UlDf4YEnDBd+9+JHgAzFFxEDKTIexZI+IUFQpeMReomNHvxVEZEpF9idhelV1gMGZAjqS4uSfWdCPZkolA2wmTpRRikaBUZQtMb2jaS2llNMAADKt9bs13gdSyhirQA9s5G6curQMOD8yxBt801JKqiDU/n9gKIZglJw3GFHQjPWQj4pn1jSNoPofZay3314HQHLiltSjuO8BN7awLUB0aVIAAAAASUVORK5CYII="
        alt="valveOpen"
        className={props.className}
      //onClick={props.handleOnOff}
      />
    )
  }
  return <>{content}</>
}


export default Valve
