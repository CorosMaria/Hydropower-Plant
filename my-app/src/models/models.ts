export type objectData = {
  Remote: number,
  Digi: number,
  Com: number,
  AI0: number,
  AI1: number,
  AI2: number,
  AI3: number,
  AI4: number,
  AI5: number,
  AI6: number,
  AI7: number,
  AO0: number,
  AO1: number,
  AO2: number,
  AO3: number,
  Sample_nr: number
}

export type MainState = {
  systemOn: boolean
  plc_data: objectData
  loading: boolean
  valves: {
    valve1On: boolean
    valve2On: boolean
    valve3On: boolean
  }
}