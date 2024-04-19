import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cpfCnpjMask]'
})
export class CpfCnpjMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value.replace(/\D/g, '');
    let maskedValue = '';

    if (value.length <= 11) {
      maskedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      maskedValue = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    this.el.nativeElement.value = maskedValue;
  }
}
