import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ICountry } from '../../models/ICountry';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrl: './single-card.component.css'
})
export class SingleCardComponent implements OnInit{
  countryName!: string;
  country!: ICountry;

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryName = params['name'];
    })

    const countryName = this.route.snapshot.paramMap.get('name')
    if (countryName) {
      this.dataService.getCountryByName(countryName).subscribe(data => {
        this.country = data[0]
      })
    } else {
      console.error('Country name not found in route params');
      
    }
  }

  goBack(): void {
    this.location.back();
  }
}
