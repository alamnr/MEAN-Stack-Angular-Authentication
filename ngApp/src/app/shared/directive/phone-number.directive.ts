import { Directive, HostListener, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[jhiIsPhoneOnly]'
})
export class PhoneNumberDirective {

    regexStr =  '^[0-9 ()-+\t]*$';
    @Input() isPhoneNo: boolean;

    constructor(private el: ElementRef) { }

    @HostListener('keypress', ['$event']) onKeyPress(event) {
        return new RegExp(this.regexStr).test(event.key);
    }

    @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {

        this.validateFields(event);
    }

    validateFields(event) {
        setTimeout(() => {

            this.el.nativeElement.value =  this.el.nativeElement.value.replace(/[^0-9 ()-+]/g, '').replace(/\s/g, '');
            event.preventDefault();

        }, 1)
    }

}

// https://stackblitz.com/edit/angular-cijbqy-biwrck?file=app%2FspecialChracter.directive.ts
