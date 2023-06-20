export interface IMock {
  index: number
}

export const Mock = ({ index }: IMock) => <span>Mock item {index}</span>
