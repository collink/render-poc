import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-item-renderer',
  template: `
    <p>
      item-renderer works!
    </p>
  `,
  styles: [
  ]
})
export class ItemRendererComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
