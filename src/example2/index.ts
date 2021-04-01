import { of } from "rxjs";
import { reduce } from "rxjs/operators";
export default (): void => {
  const observable = of(1, 2, 3, 4, 5);
  observable
    .pipe(reduce((acc: number, total: number) => acc + total, 0))
    .subscribe((x: number) => console.log(x));
};
