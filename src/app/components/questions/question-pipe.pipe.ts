import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionPipe'
})
export class QuestionPipePipe implements PipeTransform {
  public pattern: RegExp = /<question id=(.*?)><\/question>/g;

  transform(value: string): string {
    console.log(value);
    return value.replace(this.pattern, "________");
    
  }

}
