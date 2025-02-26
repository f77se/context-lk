export type Address = {
  id: string; // random uuid
  street: string; // a street name
  streetno: string; // a street number
};

export type AddressDetail = {
  id: string; // uuid from the last array
  a: boolean; // randomize
  b: boolean; // randomize
  speed: number; // between 1000 and 9999
};

export const addresses = [
  {
    id: "97964e30-6086-4ba6-b899-66a33068e940",
    street: "Chestnut Lane",
    streetno: "106",
  },
  {
    id: "8352bfd8-e47b-45d3-b5df-37fcc27c4663",
    street: "Beech Street",
    streetno: "18",
  },
  {
    id: "90853d23-9089-4387-b3c9-95db41ce5813",
    street: "Birch Way",
    streetno: "36",
  },
  {
    id: "ea8751f3-2464-460f-818b-64c8f8ab897b",
    street: "Chestnut Lane",
    streetno: "109",
  },
  {
    id: "866ed524-1248-40b9-88b9-ff4b54d00553",
    street: "Maple Drive",
    streetno: "69",
  },
  {
    id: "4e1a2534-33c0-4cf3-a2e9-04402a1942ab",
    street: "Poplar Grove",
    streetno: "23",
  },
  {
    id: "4441f2ef-b827-4b01-bb26-ae034a09c1bf",
    street: "Sycamore Terrace",
    streetno: "48",
  },
  {
    id: "18e2adc2-882a-4a2f-bd72-8ef901e84b07",
    street: "Hemlock Crescent",
    streetno: "49",
  },
  {
    id: "28c988d0-e60f-43b3-96b6-2ae87e70c10a",
    street: "Main Street",
    streetno: "193",
  },
  {
    id: "45787ef1-9147-40f2-9e08-09f1eaddcc9d",
    street: "Walnut Drive",
    streetno: "13",
  },
  {
    id: "435dd7f9-ace7-4e52-9ff8-e9c3bd7b12f4",
    street: "Cypress Avenue",
    streetno: "148",
  },
  {
    id: "5743d1f9-6fc6-4b1a-ab66-6266a6d1b149",
    street: "Hickory Place",
    streetno: "94",
  },
  {
    id: "79b883d6-df8d-46b3-aa75-194d41a02231",
    street: "Hickory Place",
    streetno: "178",
  },
  {
    id: "ac26bd1d-f02e-4d31-a1fe-7603e24a041c",
    street: "Spruce Court",
    streetno: "70",
  },
  {
    id: "99731fb1-cc74-4540-b1cc-eebfa7aa1cfa",
    street: "Cypress Avenue",
    streetno: "195",
  },
  {
    id: "7cead3c0-03f0-45c0-bba1-48cb87198909",
    street: "Oak Avenue",
    streetno: "4",
  },
  {
    id: "1fe5e5eb-c745-4028-92d8-f3516f091473",
    street: "Oak Avenue",
    streetno: "113",
  },
  {
    id: "978e4a8e-43e9-4a1b-b6af-f89c97e71fce",
    street: "Spruce Court",
    streetno: "12",
  },
  {
    id: "51e0b92a-5ad9-41f7-8fc0-4a9403f2485e",
    street: "Sequoia Road",
    streetno: "20",
  },
  {
    id: "de0b0576-5c23-48a2-8852-288092c0b395",
    street: "Larch Lane",
    streetno: "8",
  },
  {
    id: "e0409c34-13d7-47e7-a28b-daee7c6f12aa",
    street: "Larch Lane",
    streetno: "110",
  },
  {
    id: "f00b49fa-5b0d-47dd-a80e-af873f277d19",
    street: "Hemlock Crescent",
    streetno: "21",
  },
  {
    id: "1e23e107-2712-4c4b-b6c7-a546dffc6c5a",
    street: "Pine Road",
    streetno: "131",
  },
  {
    id: "aade7509-cc09-4fb1-8533-eafbd7977357",
    street: "Aspen Circle",
    streetno: "122",
  },
  {
    id: "f829d37a-bc5e-4a59-ad1c-04cf11174215",
    street: "Birch Way",
    streetno: "23",
  },
  {
    id: "918d77eb-7264-4dc7-bc60-e423b844e7e3",
    street: "Poplar Grove",
    streetno: "119",
  },
  {
    id: "5ae51aa7-ee22-4d0e-91e1-d9e67abd9c7f",
    street: "Hazel Lane",
    streetno: "5",
  },
  {
    id: "4bcef976-56ae-4d49-b1d2-ae134343c90e",
    street: "Cedar Lane",
    streetno: "26",
  },
  {
    id: "ac1f0ebd-3712-4191-a4dc-2780c160ae1d",
    street: "Pine Road",
    streetno: "87",
  },
  {
    id: "153436e1-5430-4997-8d24-6c5e2a6ac2ba",
    street: "Juniper Court",
    streetno: "34",
  },
];

const addressDetails: AddressDetail[] = [
  {
    id: "97964e30-6086-4ba6-b899-66a33068e940",
    a: false,
    b: true,
    speed: 9353,
  },
  {
    id: "8352bfd8-e47b-45d3-b5df-37fcc27c4663",
    a: true,
    b: false,
    speed: 5138,
  },
  {
    id: "90853d23-9089-4387-b3c9-95db41ce5813",
    a: true,
    b: true,
    speed: 7343,
  },
  {
    id: "ea8751f3-2464-460f-818b-64c8f8ab897b",
    a: true,
    b: false,
    speed: 7887,
  },
  {
    id: "866ed524-1248-40b9-88b9-ff4b54d00553",
    a: true,
    b: false,
    speed: 8985,
  },
  {
    id: "4e1a2534-33c0-4cf3-a2e9-04402a1942ab",
    a: true,
    b: true,
    speed: 9551,
  },
  {
    id: "4441f2ef-b827-4b01-bb26-ae034a09c1bf",
    a: false,
    b: true,
    speed: 1074,
  },
  {
    id: "18e2adc2-882a-4a2f-bd72-8ef901e84b07",
    a: false,
    b: false,
    speed: 4479,
  },
  {
    id: "28c988d0-e60f-43b3-96b6-2ae87e70c10a",
    a: false,
    b: false,
    speed: 4469,
  },
  {
    id: "45787ef1-9147-40f2-9e08-09f1eaddcc9d",
    a: false,
    b: true,
    speed: 4866,
  },
  {
    id: "435dd7f9-ace7-4e52-9ff8-e9c3bd7b12f4",
    a: false,
    b: true,
    speed: 2945,
  },
  {
    id: "5743d1f9-6fc6-4b1a-ab66-6266a6d1b149",
    a: false,
    b: true,
    speed: 8332,
  },
  {
    id: "79b883d6-df8d-46b3-aa75-194d41a02231",
    a: true,
    b: false,
    speed: 7820,
  },
  {
    id: "ac26bd1d-f02e-4d31-a1fe-7603e24a041c",
    a: true,
    b: true,
    speed: 9280,
  },
  {
    id: "99731fb1-cc74-4540-b1cc-eebfa7aa1cfa",
    a: false,
    b: true,
    speed: 9649,
  },
  {
    id: "7cead3c0-03f0-45c0-bba1-48cb87198909",
    a: false,
    b: false,
    speed: 8274,
  },
  {
    id: "1fe5e5eb-c745-4028-92d8-f3516f091473",
    a: true,
    b: false,
    speed: 8932,
  },
  {
    id: "978e4a8e-43e9-4a1b-b6af-f89c97e71fce",
    a: false,
    b: true,
    speed: 5552,
  },
  {
    id: "51e0b92a-5ad9-41f7-8fc0-4a9403f2485e",
    a: true,
    b: false,
    speed: 1264,
  },
  {
    id: "de0b0576-5c23-48a2-8852-288092c0b395",
    a: false,
    b: false,
    speed: 1321,
  },
  {
    id: "e0409c34-13d7-47e7-a28b-daee7c6f12aa",
    a: true,
    b: false,
    speed: 2336,
  },
  {
    id: "f00b49fa-5b0d-47dd-a80e-af873f277d19",
    a: true,
    b: false,
    speed: 2848,
  },
  {
    id: "1e23e107-2712-4c4b-b6c7-a546dffc6c5a",
    a: true,
    b: true,
    speed: 1156,
  },
  {
    id: "aade7509-cc09-4fb1-8533-eafbd7977357",
    a: false,
    b: false,
    speed: 7351,
  },
  {
    id: "f829d37a-bc5e-4a59-ad1c-04cf11174215",
    a: true,
    b: false,
    speed: 4535,
  },
  {
    id: "918d77eb-7264-4dc7-bc60-e423b844e7e3",
    a: true,
    b: true,
    speed: 6677,
  },
  {
    id: "5ae51aa7-ee22-4d0e-91e1-d9e67abd9c7f",
    a: true,
    b: true,
    speed: 7763,
  },
  {
    id: "4bcef976-56ae-4d49-b1d2-ae134343c90e",
    a: true,
    b: false,
    speed: 2667,
  },
  {
    id: "ac1f0ebd-3712-4191-a4dc-2780c160ae1d",
    a: true,
    b: false,
    speed: 2523,
  },
  {
    id: "153436e1-5430-4997-8d24-6c5e2a6ac2ba",
    a: true,
    b: false,
    speed: 6312,
  },
];
