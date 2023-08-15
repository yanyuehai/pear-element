function flattenArray(arr: any) {
  return arr.reduce(
    (acc: any, curr: any) => acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr),
    [],
  );
}
export default flattenArray;
