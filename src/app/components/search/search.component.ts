import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = "";
  error: string = "";
  patients: any = [];
  header = ['Name', 'Gender', 'DOB', 'Phone Number', 'Hiv Status'];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  searchValue(): void{
    if (this.search === "") {
      this.error = "";
      this.patients = [];
    } else {
      if (this.search.length >3) {
        this.error = "";
        this.apiService.getPatients(this.search).subscribe((response) => {
          if(response.length < 1){
            this.error = "User Not Found";
            this.patients = [];
          }else{
            this.patients = response
          }
        })
      } else {
        this.error = "Enter 2 Or More Values";
        this.patients = [];
      }
    }
  }

}
