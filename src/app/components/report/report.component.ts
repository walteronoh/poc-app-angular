import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  month: string = "";
  error: string = "";
  months: Array<string> = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  header: Array<string> = ["Month","Location","HIV Positive","HIV Negative"];
  reports: Array<any> = [];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  checkInput = (): any => {
    if (this.month === "") {
      this.error = "Select One Of The Months";
    } else {
      this.error = "";
    }
  }

  onSubmit = (): any => {
    if(this.month !== ""){
      this.apiService.getReportByMonth(this.month).subscribe((response)=>{
        if(response.length === 0){
          this.error = `No Reports Found For ${this.month}`;
        }else{
          this.error = "";
          this.reports = response
          console.log(response)
        }
      });
    }
  }

}
