import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { ListagemComponent } from "./pages/listagem/listagem.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "listagem", component: ListagemComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
