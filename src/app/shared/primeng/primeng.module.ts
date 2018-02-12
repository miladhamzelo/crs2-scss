import {NgModule} from '@angular/core';
import {
    ButtonModule, ConfirmationService, ConfirmDialogModule, DataTableModule, FieldsetModule,
    PanelModule, SharedModule
} from 'primeng/primeng';
import {SidebarModule} from 'primeng/components/sidebar/sidebar';

@NgModule({
    imports: [
        ButtonModule,
        ConfirmDialogModule,
        PanelModule,
        FieldsetModule,
        SidebarModule,
        DataTableModule,
        SharedModule
    ],
    exports: [
        ButtonModule,
        ConfirmDialogModule,
        PanelModule,
        FieldsetModule,
        SidebarModule,
        DataTableModule,
        SharedModule
    ],
    providers: [
        ConfirmationService
    ]
})
export class PrimengModule { }
