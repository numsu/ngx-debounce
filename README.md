[![npm version](https://badge.fury.io/js/ngx-debounce.svg)](https://www.npmjs.com/package/ngx-debounce)

# ngx-debounce

***ngx-debounce*** is an Angular directive that adds a debounce to your input fields.

It delays the start of a function call after every keyup -event.

## Installation:

```bash
npm i ngx-debounce --save
```

## Use Example:

Add the declaration to your @NgModule:

```typescript
import {DebounceModule} from 'ngx-debounce';

...

@NgModule({
  ...
  Imports: [
    DebounceModule
  ]
  ...
})
```

Use directly inside your HTML templates

```
<input debounce [delay]="700" (func)="myDebouncedFunction()" [(ngModel)]="..." name="Debounce input">
```

## Author

[Miro Metsänheimo](https://miro.metsanheimo.fi)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
