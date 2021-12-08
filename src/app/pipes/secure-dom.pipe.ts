import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'secureDOM'
})

export class SecureDOMPipe implements PipeTransform {


  constructor( private sanitizer: DomSanitizer ) { }

  transform( value: string ): any {
    const url = 'https://open.spotify.com/embed?uri=';

    return this.sanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
