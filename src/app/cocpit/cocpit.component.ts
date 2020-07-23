import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';


@Component({
  selector: 'app-cocpit',
  templateUrl: './cocpit.component.html',
  styleUrls: ['./cocpit.component.css']
})
export class CocpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }
}
