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
  months: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  header: Array<string> = ["Month", "Location", "HIV Positive", "HIV Negative", "Unknown"];
  patient_list_header: Array<string> = ["Patient Name","Encounter Date","Location","HIV Status","Gender","Age"];
  patient_list_data : any = [];
  reports: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  checkInput = (): any => {
    if (this.month === "") {
      this.error = "Select One Of The Months";
    } else {
      this.error = "";
    }
  }

  onSubmit = (): void => {
    if (this.month !== "") {
      this.apiService.getReportByMonth(this.month).subscribe((response) => {
        if (response.length === 0) {
          this.error = `No Reports Found For ${this.month}`;
        } else {
          this.error = "";
          this.reports = response
          console.log(response)
        }
      });
    }
  }

  getPatientsByStatus = (status: string, reportDate: string): void => {
    this.apiService.getPatientsByStatus(status, reportDate).subscribe((response) => {
      this.patient_list_data = response;
      this.reports = [];
    })
  }

}
