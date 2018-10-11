import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        question: 'Which of there looks more delicious?',
        image: [
          {
            id: 1,
            name: 'Apple',
            url:
              'https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 2,
            name: 'Banana',
            url:
              'https://images.pexels.com/photos/38283/bananas-fruit-carbohydrates-sweet-38283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 3,
            name: 'Cherry',
            url:
              'https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 4,
            name: 'Kiwi',
            url:
              'https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 5,
            name: 'Orange',
            url:
              'https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 6,
            name: 'Strawberry',
            url:
              'https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
        ]
      },
      {
        question: 'Which car do you prefer?',
        image: [
          {
            id: 1,
            name: 'Mercedes Benz',
            url:
              'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 2,
            name: 'Audi',
            url:
              'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 3,
            name: 'Chevrolet',
            url:
              'https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 4,
            name: 'Ferrari',
            url:
              'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 5,
            name: 'Mustang',
            url:
              'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 6,
            name: 'Range Rover',
            url:
              'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
        ]
      },
      {
        question: 'Which drink do you prefer?',
        image: [
          {
            id: 1,
            name: 'Coffee',
            url:
              'https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 2,
            name: 'Tea',
            url:
              'https://images.pexels.com/photos/405238/pexels-photo-405238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 3,
            name: 'Juice',
            url:
              'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 4,
            name: 'Smoothie',
            url:
              'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 5,
            name: 'Water',
            url:
              'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            id: 6,
            name: 'Milk Shake',
            url:
              'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
        ]
      }
    ];
    return { products };
  }
}
