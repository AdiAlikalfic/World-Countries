import { Component } from '@angular/core';
import { ICountry } from '../../models/ICountry';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  countries: ICountry[] = []
  filteredCountries = this.countries;
  searchTerm: string = '';
  selectedContinent: string = '';
  

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.displayAllCountries().subscribe({
      next: (data: ICountry[]) => {
        this.countries = data;
        this.filteredCountries = data;
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => {
        console.log('complete');
        if (this.countries.length > 0) {
          console.log(this.countries[0].capital);
        }
      }
    })
  }

  onSearch() {
    this.filteredCountries = this.countries.filter(Country => 
      Country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }

  onSelectedContinent(continent: string) {
    this.selectedContinent = continent;
    this.filterCountries()
  }

  private filterCountries() {
    this.filteredCountries = this.countries.filter(country => {
      const matchesSearchTerm = country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
      const matchesContinent = this.selectedContinent ? country.region === this.selectedContinent : true;
      return matchesSearchTerm && matchesContinent
    })
  }

}
