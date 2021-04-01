import { of } from "rxjs";
import { scan } from "rxjs/operators";

const observable = of(1, 2, 3, 4, 5);
observable
  .pipe(scan((total: number, current: number) => total + current, 0))
  .subscribe((x) => console.log(x));
