import { Component, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleCaseSmartPipe } from '../title-case-smart.pipe';


@Component({
  selector: 'app-pipe-case-demo',
  standalone: true,
  // import CommonModule so template pipes (titlecase) work, FormsModule for input two-way binding,
  // and TitleCaseSmartPipe (our custom pipe) so we can use it in the template.
  imports: [CommonModule, FormsModule, TitleCaseSmartPipe],
  providers: [TitleCasePipe], // provide TitleCasePipe so we can inject it in the class
  templateUrl: './title-case-pipe-demo.component.html',
  styleUrls: ['./title-case-pipe-demo.component.css'],
})
export class PipeCaseDemoComponent {
  // two-way bound string for user input (template example)
  userInput = 'abhay velankar';

  // example array of strings to show pipe behavior in *ngFor
  samples = [
    'angular tutorial: pipes & transforms',
    'the quick brown fox',
    'an example of title case'
  ];

  // inject Angular's TitleCasePipe for programmatic usage
  private titleCasePipe = inject(TitleCasePipe);

  // show programmatic transform using built-in TitleCasePipe
  getProgrammaticTitle(value: string) {
    // returns Title Case using the built-in pipe inside TypeScript
    return this.titleCasePipe.transform(value);
  }

  // show programmatic usage of custom behavior (if you wanted to do it in TS)
  // (a simple example: call custom pipe's transform directly)
  transformWithCustomPipe(value: string) {
    // instantiate the custom pipe inline (it's lightweight) — alternatively inject it
    const p = new TitleCaseSmartPipe();
    return p.transform(value);
  }
}
