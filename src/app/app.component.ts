import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'Test',
    name: 'Automation Test',
    content: 'Any'
  }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprint(blueprintrData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintrData.serverName,
      content: blueprintrData.serverContent
    });
  }
}
