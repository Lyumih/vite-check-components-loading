export interface IMockItem {
  index: number
}

export const MockItem = ({ index }: IMockItem) => <span>Mock item {index}</span>
