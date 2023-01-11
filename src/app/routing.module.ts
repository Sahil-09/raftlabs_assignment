import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ChessComponent } from "./chess/chess.component";
import { NavComponent } from "./nav/nav.component";
import { ReaderComponent } from "./reader/reader.component";
import { ShelfComponent } from "./shelf/shelf.component";

const approute:Routes=[
    {path: '', component:NavComponent},
    {path:'assignment_1',component:ShelfComponent},
    {path:'assignment_2',component:ChessComponent},
    {path:'assignment_1/read',component:ReaderComponent}, 
]

@NgModule({
    imports:[RouterModule.forRoot(approute)],
    exports:[RouterModule]
})

export class Approuter{}