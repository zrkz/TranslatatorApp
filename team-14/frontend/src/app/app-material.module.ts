import {NgModule, Type} from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatOptionModule} from '@angular/material/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from "@angular/material/tooltip";
import {HighlightOnHoverDirective} from "./directives/highlight-on-hover.directive";

const materials = [
  MatIconModule,
  MatTreeModule,
  MatListModule,
  MatSortModule,
  MatInputModule,
  MatTableModule,
  MatOptionModule,
  MatDialogModule,
  MatButtonModule,
  MatTooltipModule,
  MatDividerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule
];

const directives: Type<any>[] = [HighlightOnHoverDirective];

const components: Type<any>[] = [];

@NgModule({
  declarations: [
    ...directives,
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materials
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materials,
    ...directives,
    ...components
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class MaterialModule {
}
