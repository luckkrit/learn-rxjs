import { fromEvent } from "rxjs";
import { pluck, debounceTime, distinctUntilChanged } from "rxjs/operators";

const inputElement = document.createElement("input");
document.body.appendChild(inputElement);
const observable = fromEvent(inputElement, "input");
observable
  .pipe(pluck("target", "value"), debounceTime(500), distinctUntilChanged())
  .subscribe((x) => console.log(x));
