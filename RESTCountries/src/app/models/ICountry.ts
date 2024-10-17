export interface ICountry {
    name: {
        common: string,
        official: string
    },
    tld: string,
    currencies: {
        [key: string]: {
            name: string,
            symbol: string
        }
    },
    capital: string,
    region: string,
    languages: {
        [key: string]: string
    },
    population: number,
    continents: [
        string
    ],
    flags: {
        png: string
    },
    borders: [
        string
    ]
}

//Ako ne bude radilo treba urediti kao na linku