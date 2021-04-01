import { fromEvent } from "rxjs";
import {map, debounceTime, distinctUntilChanged} from "rxjs/operators"

const input = document.querySelector("input");
const observable = fromEvent(input, "input");
observable.pipe(map(event=>(event as any).target.value), debounceTime(500), distinctUntilChanged()).subscribe(x=>console.log(x));