import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrl: './filter-area.component.css'
})
export class FilterAreaComponent {
  @Output() formAlertIsVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() search: EventEmitter<string> = new EventEmitter<string>();


  onAddItemClick(){
    this.formAlertIsVisibleChange.emit(true)
  }

  onSearch(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value)
  }
}
