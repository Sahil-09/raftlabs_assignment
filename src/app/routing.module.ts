import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReaderComponent } from "./reader/reader.component";
import { ShelfComponent } from "./shelf/shelf.component";

const approute:Routes=[
    {path:'',component:ShelfComponent},
    {path:'read',component:ReaderComponent}, 
]

@NgModule({
    imports:[RouterModule.forRoot(approute)],
    exports:[RouterModule]
})

export class Approuter{}