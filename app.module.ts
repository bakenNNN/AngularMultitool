import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { CreateKozfogisComponent } from './create-kozfogis/create-kozfogis.component';
import { ListKozfogisComponent } from './list-kozfogis/list-kozfogis.component';
import { EditKozfogisComponent } from './edit-kozfogis/edit-kozfogis.component';
//import {SETTINGS as FIRESTORE_SETTINGS} from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { ListBevetelComponent } from './list-bevetel/list-bevetel.component';
import { ListGyerekvedelemComponent } from './list-gyerekvedelem/list-gyerekvedelem.component';
import { BevetelgrafComponent } from './bevetelgraf/bevetelgraf.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import * as CanvasJSAngularChart from 'assets/canvasjs.angular.component';
import { ListHagyatekComponent } from './list-hagyatek/list-hagyatek.component';
import { KozfogisPdfComponent } from './kozfogis-pdf/kozfogis-pdf.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatButtonModule,
    PdfJsViewerModule,
    MatCardModule,
    MatInputModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent,CanvasJSChart, AdminLayoutComponent,  CreateKozfogisComponent, ListKozfogisComponent, EditKozfogisComponent, LoginComponent, ListBevetelComponent, ListGyerekvedelemComponent, BevetelgrafComponent, ListHagyatekComponent, KozfogisPdfComponent],
  providers: [/*{
    provide: FIRESTORE_SETTINGS,
    useValue: { ignoreUndefinedProperties: true }
  },*/],
  bootstrap: [AppComponent]
})
export class AppModule {}
