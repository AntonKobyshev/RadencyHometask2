export default class ClassList {
  public constructor(...args: (string | undefined)[]) {
    this.classes = args.filter(
      (className) => className !== undefined
    ) as string[];
  }
  public add(className?: string) {
    if (className === undefined) return;

    this.classes.push(className);
  }
  public compose() {
    if (this.classes.length === 0) return;

    return this.classes.join(' ');
  }
  private classes: string[];
}