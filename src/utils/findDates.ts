export default function findDates(string: string) {
  return string.match(/(\d\d?\/\d\d?\/\d+)|(\d\d?\.\d\d?\.\d+)/g) || [];
}
