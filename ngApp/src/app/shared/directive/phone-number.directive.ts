import { Directive, HostListener, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[jhiIsPhoneOnly]'
})
export class PhoneNumberDirective {

    regexStr =  '^[0-9 ()-+]*$';
    @Input() isPhoneNo: boolean;

    constructor(private el: ElementRef) { }

    @HostListener('keypress', ['$event']) onKeyPress(event) {
        //console.log(event.key + " " +  new RegExp(this.regexStr).test(event.key));
        if(event.keyCode !== 8 && event.keyCode !== 46 && event.keyCode !== 9 && event.keyCode !== 37 && event.keyCode !== 39 ){
            return new RegExp(this.regexStr).test(event.key);
        }
        else{
            return true;
        }
       
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
