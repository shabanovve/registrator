import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const lessons = [
      { id: 11, date: '1515847793' },
      { id: 12, date: '1515848631' },
      { id: 13, date: '1515849631' },
      { id: 14, date: '1515850631' },
      { id: 15, date: '1515851631' },
      { id: 16, date: '1515852631' }
    ];

    return { customers, lessons };
  }
}
