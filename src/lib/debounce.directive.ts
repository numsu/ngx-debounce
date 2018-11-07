import {EventEmitter, ElementRef, OnInit, Directive, Input, Output} from '@angular/core';
import {NgModel} from '@angular/forms';

import {fromEvent} from 'rxjs';
import {map, debounceTime} from 'rxjs/operators';

@Directive({ selector: '[debounce]' })
export class DebounceDirective implements OnInit {
    @Input() delay: number = 700;
    @Input() event: string = 'keyup';
    @Output() func = new EventEmitter<any>();

    constructor(private model: NgModel,
                private elementRef: ElementRef) {
    }

    ngOnInit() {
        const eventStream = fromEvent(this.elementRef.nativeElement, this.event).pipe(
            map(() => this.model.value),
            debounceTime(this.delay));

        eventStream.subscribe(input => this.func.emit(input));
    }

}
