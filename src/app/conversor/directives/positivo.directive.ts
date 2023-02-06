import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appPositivo]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PositivoDirective,
    multi: true
  }]
})
export class PositivoDirective  implements ControlValueAccessor{

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }


  @HostListener('keyup', ['$event'])onKeyUp($event: any){
    let valor = $event.target.value;

    valor = valor.replace(/^-?[0-9][0-9]*/gm, '0');
    if(valor < 0){
      console.log("valor menor");
    }





    $event.target.value = valor;
    this.onChange(valor);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void{
    this.el.nativeElement.value = value;
  }
}




