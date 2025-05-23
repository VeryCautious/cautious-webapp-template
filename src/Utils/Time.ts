export const Second = 1000
export const Minute = Second * 60
export const Hour = Minute * 60
export const Day = Hour * 24

export const WaitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))