import { Component } from '@angular/core';
import { IAppStore, rootReducer, INITIAL_STATE } from 'src/angular-core/ng-store/ng-redux.store';
import {NgRedux} from 'ng2-redux'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wp-frontend';
  constructor(private ngRedux:NgRedux<IAppStore>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
