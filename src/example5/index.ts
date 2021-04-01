import { fromEvent, pipe } from 'rxjs';
import { map, mergeMap, pluck } from 'rxjs/operators';

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const p = document.createElement('p');
const span = document.createElement('span');
p.textContent = 'Combined value: ';
p.appendChild(span);
input1.id = 'input1';
input2.id = 'input2';
input2.style.marginLeft = '5px';
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(p);
// fromEvent(input1, 'input').pipe(pluck('target', 'value')).subscribe((x:string)=>span.textContent = x);
const obs1 = fromEvent(input1, 'input');
const obs2 = fromEvent(input2, 'input');

mergeMap((event1: string) =>
  obs2.pipe(
    pluck('target', 'value'),
    map((event2: string) => event1 + ' ' + event2),
  ),
)(obs1.pipe(pluck('target', 'value'))).subscribe((x) => (span.textContent = x));
