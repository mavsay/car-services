'use strict'
const cars = [
  {
    id: 'cars1',
    name: 'VOLKSWAGEN',
    models: ['POLO', 'JETTA', 'PASSAT'],
  },
  {
    id: 'cars2',
    name: 'TOYOTA',
    models: ['COROLLA', 'CAMRY', 'RAV-4']
  },
  {
    id: 'cars3',
    name: 'HONDA',
    models: ['CIVIC', 'ACCORD', 'CITY']
  },
  {
    id: 'cars4',
    name: 'AUDI',
    models: ['A6', 'S6', 'RS6']
  },
];

const works = [
  {
    id: 'work1',
    operation: 'Замена масла',
  },
  {
    id: 'work2',
    operation: 'Замена тормозных колодок',
  },
  {
    id: 'work3',
    operation: 'Замена воздушного фильтра',
  },
  {
    id: 'work4',
    operation: 'Замена свечей',
  }
]


const models = [
  {
    brand: 'VOLKSWAGEN',
    model: 'POLO',
    services: ['VTM-AUTO'],
  },
  {
    brand: 'VOLKSWAGEN',
    model: 'JETTA',
    services: ['VTM-AUTO'],
  },
  {
    brand: 'VOLKSWAGEN',
    model: 'PASSAT',
    services: ['VTM-AUTO'],
  },

  {
    brand: 'AUDI',
    model: 'A6',
    services: ['VTM-AUTO', 'GTM-AUTO'],
  },
  {
    brand: 'AUDI',
    model: 'S6',
    services: ['VTM-AUTO', 'GTM-AUTO'],
  },
  {
    brand: 'AUDI',
    model: 'RS6',
    services: ['VTM-AUTO'],
  },


  {
    brand: 'TOYOTA',
    model: 'COROLLA',
    services: ['TTS-AUTO'],
  },
  {
    brand: 'TOYOTA',
    model: 'CAMRY',
    services: ['TTS-AUTO'],
  },
  {
    brand: 'TOYOTA',
    model: 'RAV-4',
    services: ['TTS-AUTO'],
  },

  {
    brand: 'HONDA',
    model: 'CIVIC',
    services: ['TTS-AUTO'],
  },
  {
    brand: 'HONDA',
    model: 'ACCORD',
    services: ['TTS-AUTO'],
  },
  {
    brand: 'HONDA',
    model: 'CITY',
    services: ['TTS-AUTO'],
  },
]


const services = [
  {
    id: 'service1',
    service: 'TTS-AUTO',
    models: [
      {
        name: 'HONDA',
        model: 'CIVIC',
        works: [
          {
            operation: 'Замена масла',
            price: 1500,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2000,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 500,
          },
          {
            operation: 'Замена свечей',
            price: 1000,
          }
        ]
      },
      {
        name: 'HONDA',
        model: 'ACCORD',
        works: [
          {
            operation: 'Замена масла',
            price: 1600,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2100,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 600,
          },
          {
            operation: 'Замена свечей',
            price: 1100,
          }
        ]
      },
      {
        name: 'HONDA',
        model: 'CITY',
        works: [
          {
            operation: 'Замена масла',
            price: 1400,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 1900,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 400,
          },
          {
            operation: 'Замена свечей',
            price: 900,
          }
        ]
      },
      {
        name: 'TOYOTA',
        model: 'COROLLA',
        works: [
          {
            operation: 'Замена масла',
            price: 1600,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2100,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 600,
          },
          {
            operation: 'Замена свечей',
            price: 1100,
          }
        ]
      },
      {
        name: 'TOYOTA',
        model: 'CAMRY',
        works: [
          {
            operation: 'Замена масла',
            price: 1700,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2200,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 700,
          },
          {
            operation: 'Замена свечей',
            price: 1200,
          }
        ]
      },
      {
        name: 'TOYOTA',
        model: 'RAV-4',
        works: [
          {
            operation: 'Замена масла',
            price: 1800,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2300,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 800,
          },
          {
            operation: 'Замена свечей',
            price: 1300,
          }
        ]
      },
    ]
  },
  {
    id: 'service2',
    service: 'VTM-AUTO',
    models: [
      {
        name: 'VOLKSWAGEN',
        model: 'POLO',
        works: [
          {
            operation: 'Замена масла',
            price: 1500,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2000,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 500,
          },
          {
            operation: 'Замена свечей',
            price: 1000,
          }
        ]
      },
      {
        name: 'VOLKSWAGEN',
        model: 'JETTA',
        works: [
          {
            operation: 'Замена масла',
            price: 1600,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2100,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 600,
          },
          {
            operation: 'Замена свечей',
            price: 1100,
          }
        ]
      },
      {
        name: 'VOLKSWAGEN',
        model: 'PASSAT',
        works: [
          {
            operation: 'Замена масла',
            price: 1700,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2200,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 700,
          },
          {
            operation: 'Замена свечей',
            price: 1200,
          }
        ]
      },
      {
        name: 'AUDI',
        model: 'A6',
        works: [
          {
            operation: 'Замена масла',
            price: 1700,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2200,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 700,
          },
          {
            operation: 'Замена свечей',
            price: 1200,
          }
        ]
      },
      {
        name: 'AUDI',
        model: 'S6',
        works: [
          {
            operation: 'Замена масла',
            price: 1900,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2500,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 1000,
          },
          {
            operation: 'Замена свечей',
            price: 1500,
          }
        ]
      },
      {
        name: 'AUDI',
        model: 'RS6',
        works: [
          {
            operation: 'Замена масла',
            price: 2000,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2600,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 1100,
          },
          {
            operation: 'Замена свечей',
            price: 1600,
          }
        ]
      },
    ]
  },
  {
    id: 'service2',
    service: 'GTM-AUTO',
    models: [
      {
        name: 'VOLKSWAGEN',
        model: 'POLO',
        works: [
          {
            operation: 'Замена масла',
            price: 1500,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2000,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 500,
          },
          {
            operation: 'Замена свечей',
            price: 1000,
          }
        ]
      },
      {
        name: 'VOLKSWAGEN',
        model: 'JETTA',
        works: [
          {
            operation: 'Замена масла',
            price: 1600,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2100,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 600,
          },
          {
            operation: 'Замена свечей',
            price: 1100,
          }
        ]
      },
      {
        name: 'VOLKSWAGEN',
        model: 'PASSAT',
        works: [
          {
            operation: 'Замена масла',
            price: 1700,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2200,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 700,
          },
          {
            operation: 'Замена свечей',
            price: 1200,
          }
        ]
      },
      {
        name: 'AUDI',
        model: 'A6',
        works: [
          {
            operation: 'Замена масла',
            price: 1700,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2200,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 700,
          },
          {
            operation: 'Замена свечей',
            price: 1200,
          }
        ]
      },
      {
        name: 'AUDI',
        model: 'S6',
        works: [
          {
            operation: 'Замена масла',
            price: 1900,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2500,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 1000,
          },
          {
            operation: 'Замена свечей',
            price: 1500,
          }
        ]
      },
      {
        name: 'AUDI',
        model: 'RS6',
        works: [
          {
            operation: 'Замена масла',
            price: 2000,
          },
          {
            operation: 'Замена тормозных колодок',
            price: 2600,
          },
          {
            operation: 'Замена воздушного фильтра',
            price: 1100,
          },
          {
            operation: 'Замена свечей',
            price: 1600,
          }
        ]
      },
    ]
  }
];


const carsBlock = document.querySelector('.cars');
const modelsBlock = document.querySelector('.models');
const worksBlock = document.querySelector('.works');
const servicesBlock = document.querySelector('.button_submit');
const answerContainer = document.querySelector('.answer_container');
const form = document.querySelector('.form');
const buttonSubmit = document.querySelector('.button_submit');
// buttonSubmit.disabled = true;

const carsNames = cars.map(item => item.name);
const worksNames = works.map(item => item.operation);
const worksId = works.map(item => item.id);

const createSelect = (selectName, className) => {
  const select = document.createElement("select");
  select.name = selectName;
  select.className = className;

  return select;
}

const createOptions = (options, element) => {
  options.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    element.appendChild(option);
  });
};

const createDefaultOption = (element) => {
  const defaultOption = document.createElement('option');
  defaultOption.text = element;
  selectAuto.appendChild(defaultOption);
};

const selectAuto = createSelect('auto', 'auto');
createDefaultOption('AUTO');
createOptions(carsNames, selectAuto);
carsBlock.insertAdjacentElement('beforeend', selectAuto);


const selectModels = createSelect('model', 'model');
selectModels.disabled = true;
modelsBlock.insertAdjacentElement('beforeend', selectModels);


selectAuto.addEventListener('change', () => {
  const choosingAuto = selectAuto.value;
  const brand = cars.find(item => item.name == choosingAuto);
  selectModels.innerHTML = '';
  if (brand) {
    createOptions(brand.models, selectModels);
    selectModels.disabled = false;
  } else {
    selectModels.disabled = true;
  }
});

const createMainWorks = (worksArr, element) => {
  worksArr.forEach(item => {
    const divInput = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = item.id;
    input.name = item.operation;
    input.value = item.operation;
    const label = document.createElement('label');
    label.textContent = item.operation;
    label.htmlFor = item.id;
    divInput.appendChild(input);
    divInput.appendChild(label);
    element.appendChild(divInput);
  });
};

createMainWorks(works, worksBlock);


const serviceArr1 = services.map(item => item.models);
const serviceArr2 = serviceArr1.flat(1);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const answer = {
    auto: null,
    model: null,
    works: [],
  };

  const fields = Object.values(event.target);
  answer.auto = fields[0].value;
  answer.model = fields[1].value;
  const works = fields.splice(2, fields.length - 3);

  works.forEach(item => {
    if (item.checked) {
      answer.works.push(item.value);
    }
  });

  const matchModel = models.find(item => {
    const isAuto = item.brand === answer.auto;
    const isModel = item.model === answer.model;
    if (isAuto && isModel) return item
  });

  const ss = new Set(matchModel.services);

  const service = services.filter(item =>ss.has(item.service));

  console.log(service)

});
// const serviceArr3 = serviceArr2.filter(item => item.model === 'CIVIC');

// const createAnswer = () => {
//   const selectedNames = Object.values(selectAuto).map(item => item.value);
//   if (selectedNames.find(item => item === 'TOYOTA')) {
//     console.log('yes');
//   }
// };

// createAnswer();

// const answer = document.createElement('div');
// answer.innerHTML = '';

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   answer.innerHTML = 'Мой ответ';
//   answerContainer.appendChild(answer);
// });

// console.dir(serviceArr1, 'serviceArr');
// console.dir(serviceArr2, 'serviceArr2');
// console.dir(serviceArr3, 'serviceArr3');
