export default function deleteIfFound<T>(
  array: T[],
  predicate: (element: T, index: number, array: T[]) => boolean
): boolean {
  const elementIndex = array.findIndex(predicate);

  if (elementIndex === -1) return false;

  array.splice(elementIndex, 1);
  return true;
}
