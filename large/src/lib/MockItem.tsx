export interface IMockItem {
  index: number | string
}

export const MockItem = ({ index }: IMockItem) => <span>Mock item {index}</span>
