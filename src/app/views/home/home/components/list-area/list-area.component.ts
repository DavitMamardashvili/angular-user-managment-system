import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '../../../../../core/service/http/http.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { switchMap } from 'rxjs';
import { PeriodicElement } from '../../enums/periodicElement';
import { User } from '../../models/createUser';
import { ConfirmAlertComponent } from '../../../../../shared/alerts/confirm-alert/confirm-alert.component';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListAreaComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateUser: EventEmitter<User> = new EventEmitter<User>();
  @Input() searchingData: string = '';

  dataSource = new MatTableDataSource<PeriodicElement>();
  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'roles', 'status', 'edit'];

  constructor(private http: HttpService, private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchingData'] && !changes['searchingData'].firstChange) {
      this.applyFilter(changes['searchingData'].currentValue);
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.getItems().pipe(
      switchMap(() => this.http.getItems())
    ).subscribe(response => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.applyFilter(this.searchingData);
    });
  }

  itemIsAddOtUpdate() {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorting ${sortState.direction} ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onEditBtnClick(element: User): void {
    this.updateUser.emit(element);
  }

  openConfirmDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmAlertComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser.emit(id);
      }
    });
  }
}
