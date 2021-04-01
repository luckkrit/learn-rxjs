import { fromEvent } from "rxjs";
import {map, debounceTime, distinctUntilChanged} from "rxjs/operators"

const inputElement = document.createElement("input")
document.body.appendChild(inputElement);
const observable = fromEvent(inputElement, "input");
observable.pipe(map(event=>(event as any).target.value), debounceTime(500), distinctUntilChanged()).subscribe(x=>console.log(x));