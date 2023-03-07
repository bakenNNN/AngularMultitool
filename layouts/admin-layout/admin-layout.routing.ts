import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { ListHagyatekComponent } from "src/app/list-hagyatek/list-hagyatek.component";
import { CreateKozfogisComponent } from "../../create-kozfogis/create-kozfogis.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { BevetelgrafComponent } from "src/app/bevetelgraf/bevetelgraf.component";
import { ListKozfogisComponent } from "../../list-kozfogis/list-kozfogis.component";
import { ListBevetelComponent } from "src/app/list-bevetel/list-bevetel.component";
import { EditKozfogisComponent } from "../../edit-kozfogis/edit-kozfogis.component";
import { KozfogisPdfComponent } from "src/app/kozfogis-pdf/kozfogis-pdf.component";
import { ListGyerekvedelemComponent } from "src/app/list-gyerekvedelem/list-gyerekvedelem.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { AuthGuard} from "../../services/auth.guard";
export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent , canActivate:[AuthGuard]},
  { path: "list-hagyatek", component: ListHagyatekComponent, canActivate:[AuthGuard] },
  { path:'create', component: CreateKozfogisComponent, canActivate:[AuthGuard] },
  { path: "notifications", component: NotificationsComponent, canActivate:[AuthGuard] },
  { path: "bevetelgraf", component: BevetelgrafComponent, canActivate:[AuthGuard] },
  { path:'list-kozfogis', component: ListKozfogisComponent, canActivate:[AuthGuard] },
  {path:'kozfogis-pdf/:Neev',component: KozfogisPdfComponent, canActivate:[AuthGuard]},
  {path: 'list-bevetel', component: ListBevetelComponent, canActivate:[AuthGuard]},
  { path: "list-gyerekvedelem", component: ListGyerekvedelemComponent, canActivate:[AuthGuard] },
  {path:'update-kozfogis/:id', component:EditKozfogisComponent, canActivate:[AuthGuard]}

];
