import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
   dataSource: MatTableDataSource<UserData>;

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  constructor(private http:HttpClient) {
  //   // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  //   // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  url:string = "http://localhost:54673/api/studentInfo";

  
 
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

   if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }   }
    ngOnInit(){
    
    }
 
}
 /** Builds and returns a new User. */
function createNewUser(id: number): UserData {
   const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
} 


