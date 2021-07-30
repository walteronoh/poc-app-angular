import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should create service: "ApiService"', () => {
    service = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  });

  it('getPatients() should return an Observable value', () => {
    (done: DoneFn) => {
      service.getPatients("test").subscribe(value => {
        expect(value).toBe([]);
        done();
      });
    }
  });

  it('getPatientsByStatus() should return an Observable value', () => {
    (done: DoneFn) => {
      service.getPatientsByStatus("", "").subscribe(value => {
        expect(value).toBe([]);
        done();
      });
    }
  });

  it('getReportByMonth() should return an Observable value', () => {
    (done: DoneFn) => {
      service.getReportByMonth("").subscribe(value => {
        expect(value).toBe([]);
        done();
      });
    }
  });
});
