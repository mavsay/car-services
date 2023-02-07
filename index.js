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
    models: ['CITY','CIVIC', 'ACCORD']
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


// const models = [
//   {
//     brand: 'VOLKSWAGEN',
//     model: 'POLO',
//     services: ['VTM-AUTO'],
//   },
//   {
//     brand: 'VOLKSWAGEN',
//     model: 'JETTA',
//     services: ['VTM-AUTO'],
//   },
//   {
//     brand: 'VOLKSWAGEN',
//     model: 'PASSAT',
//     services: ['VTM-AUTO'],
//   },

//   {
//     brand: 'AUDI',
//     model: 'A6',
//     services: ['VTM-AUTO', 'GTM-AUTO'],
//   },
//   {
//     brand: 'AUDI',
//     model: 'S6',
//     services: ['VTM-AUTO', 'GTM-AUTO'],
//   },
//   {
//     brand: 'AUDI',
//     model: 'RS6',
//     services: ['VTM-AUTO'],
//   },


//   {
//     brand: 'TOYOTA',
//     model: 'COROLLA',
//     services: ['TTS-AUTO'],
//   },
//   {
//     brand: 'TOYOTA',
//     model: 'CAMRY',
//     services: ['TTS-AUTO'],
//   },
//   {
//     brand: 'TOYOTA',
//     model: 'RAV-4',
//     services: ['TTS-AUTO'],
//   },

//   {
//     brand: 'HONDA',
//     model: 'CIVIC',
//     services: ['TTS-AUTO'],
//   },
//   {
//     brand: 'HONDA',
//     model: 'ACCORD',
//     services: ['TTS-AUTO'],
//   },
//   {
//     brand: 'HONDA',
//     model: 'CITY',
//     services: ['TTS-AUTO'],
//   },
// ]


const brandModelService = [
  {
    name: 'HONDA',
    model: 'CITY',
    service: 'TTS-AUTO',
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
    name: 'HONDA',
    model: 'CIVIC',
    service: 'TTS-AUTO',
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
    service: 'TTS-AUTO',
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
    model: 'COROLLA',
    service: 'TTS-AUTO',
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
    service: 'TTS-AUTO',
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
    service: 'TTS-AUTO',
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
  {
    name: 'VOLKSWAGEN',
    model: 'POLO',
    service: 'VTM-AUTO',
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
    service: 'VTM-AUTO',
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
    service: 'VTM-AUTO',
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
    service: 'VTM-AUTO',
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
    service: 'VTM-AUTO',
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
    service: 'VTM-AUTO',
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
  {
    name: 'HONDA',
    model: 'ACCORD',
    service: 'GTM-AUTO',
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
    model: 'RAV-4',
    service: 'GTM-AUTO',
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
  {
    name: 'VOLKSWAGEN',
    model: 'PASSAT',
    service: 'GTM-AUTO',
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
    model: 'RS6',
    service: 'GTM-AUTO',
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
buttonSubmit.disabled = true;

const carsNames = cars.map(item => item.name);
const worksNames = works.map(item => item.operation);
const worksId = works.map(item => item.id);

const createSelect = (selectName, className) => {
  const select = document.createElement("select");
  select.name = selectName;
  select.className = className;

  return select;
}

const createOptions = (options, element, className) => {
  options.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    option.className = className;
    element.appendChild(option);
  });
};

const createDefaultOption = (select, element, className) => {
  const defaultOption = document.createElement('option');
  defaultOption.text = element;
  defaultOption.className = className;
  select.appendChild(defaultOption);
};


const selectAuto = createSelect('auto', 'auto');
createDefaultOption(selectAuto, 'AUTO', 'auto_item');
createOptions(carsNames, selectAuto, 'auto_item');
carsBlock.insertAdjacentElement('beforeend', selectAuto);


const selectModels = createSelect('model', 'model');
selectModels.disabled = true;
modelsBlock.insertAdjacentElement('beforeend', selectModels);


selectAuto.addEventListener('change', () => {
  const choosingAuto = selectAuto.value;
  const brand = cars.find(item => item.name == choosingAuto);
  selectModels.innerHTML = '';
  if (brand) {
    createDefaultOption(selectModels, 'MODEL', 'model_item');
    createOptions(brand.models, selectModels, 'model_item');
    selectModels.disabled = false;
    buttonSubmit.disabled = false;

  } else {
    selectModels.disabled = true;
  }
});



const createMainWorks = (worksArr, element) => {
  worksArr.forEach(item => {
    const divInput = document.createElement('div');
    divInput.className = 'input_items';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = item.id;
    input.name = item.operation;
    input.value = item.operation;
    input.className = 'input_work';
    const label = document.createElement('label');
    label.textContent = item.operation;
    label.htmlFor = item.id;
    label.className = 'label_work';
    divInput.appendChild(input);
    divInput.appendChild(label);
    element.appendChild(divInput);
  });
};

createMainWorks(works, worksBlock);


form.addEventListener('submit', (event) => {
  event.preventDefault();

  answerContainer.innerHTML = '';

  const answerForm = {
    auto: null,
    model: null,
    works: [],
  };

  const fields = Object.values(event.target);
  answerForm.auto = fields[0].value;
  answerForm.model = fields[1].value;
  const works = fields.splice(2, fields.length - 3);
  works.forEach(item => {
    if (item.checked) {
      answerForm.works.push(item.value);
    }
  });

  const matchModel = brandModelService.filter(item => {
    const isAuto = item.name === answerForm.auto;
    const isModel = item.model === answerForm.model;
    if (isAuto && isModel) {
      return item;
    }
  });


  matchModel.forEach(item => {
    const answerBlock = document.createElement('div');
    answerBlock.className = 'answer_block';

    const serviceName = document.createElement('h2');
    serviceName.textContent = 'сервис: ' + item.service;
    serviceName.className = 'service_name';
    answerBlock.appendChild(serviceName);
    console.log(serviceName, 'serviceName');

    const brandName = document.createElement('h4');
    brandName.textContent = item.name;
    brandName.className = 'auto_name';
    answerBlock.appendChild(brandName);
    console.log(brandName, 'brandName');

    const modelName = document.createElement('h4');
    modelName.textContent = item.model;
    modelName.className = 'model_name';
    answerBlock.appendChild(modelName);
    console.log(modelName, 'modelName');

    const worksBlock = document.createElement('ul');
    worksBlock.className = 'answer_works_block';

    const totalPriceBlock = document.createElement('div');
    totalPriceBlock.className = 'total_price_block';

    const spanPrice = document.createElement('span');
    spanPrice.textContent = 'общая стоимость: ';
    spanPrice.className = 'total_price'
    totalPriceBlock.append(spanPrice);

    const totalPrice = document.createElement('span');
    totalPrice.className = 'total_price_sum';

    let totalPriceSum = 0;
    item.works.forEach(element => {
      const liWork = document.createElement('li');
      const liWorkPrice = document.createElement('span');
      const workAnswer = element.operation;
      const workAnswerForm = answerForm.works.find(item => item === workAnswer);
      if (workAnswerForm) {
        liWork.textContent = element.operation + ': ';
        liWorkPrice.textContent = element.price + ' р.';
        liWork.appendChild(liWorkPrice);
        worksBlock.appendChild(liWork);
        totalPriceSum += element.price;
      }
    });
    console.log(worksBlock, 'worksBlock');
    totalPrice.textContent = totalPriceSum + ' р.';

    totalPriceBlock.append(totalPrice);
    console.log(totalPriceBlock, 'totalPriceBlock');

    answerBlock.appendChild(worksBlock);
    answerBlock.appendChild(totalPriceBlock);

    answerContainer.insertAdjacentElement("afterbegin", answerBlock);

  })
});
