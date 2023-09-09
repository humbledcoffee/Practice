//前者包含后者 则返回前者 否则不返回
type example = Extract<number, number | string>
type example2 = Extract<boolean, number | string>
export { }