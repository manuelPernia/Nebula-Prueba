import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  pageNumber: any;
  numberEntries: any;
  peopleDetail: any = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  private getPeople(): void {
    const params = {
      conditions: {},
      page_number: this.pageNumber,
      number_entries: this.numberEntries,
    };
    this.peopleService.getPeople(params).subscribe(
      (data: any) => {
				console.log(data.results);
        this.peopleDetail = data['results'];
      },
      (err) => {
        console.log('HERE ARE ERR', err);
      }
    );
  }
}
