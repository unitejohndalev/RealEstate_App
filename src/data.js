// import house images
import House1 from './assets/img/houses/house1.svg';
import House2 from './assets/img/houses/house2.svg';
import House3 from './assets/img/houses/house3.svg';
import House4 from './assets/img/houses/house4.svg';
import House5 from './assets/img/houses/house5.svg';
import House6 from './assets/img/houses/house6.svg';
import House7 from './assets/img/houses/house7.svg';
import House8 from './assets/img/houses/house8.svg';
import House9 from './assets/img/houses/house9.svg';
import House10 from './assets/img/houses/house10.svg';
import House11 from './assets/img/houses/house11.svg';
import House12 from './assets/img/houses/house12.svg';
// import house large images
import House1Lg from './assets/img/houses/house1lg.svg';
import House2Lg from './assets/img/houses/house2lg.svg';
import House3Lg from './assets/img/houses/house3lg.svg';
import House4Lg from './assets/img/houses/house4lg.svg';
import House5Lg from './assets/img/houses/house5lg.svg';
import House6Lg from './assets/img/houses/house6lg.svg';
import House7Lg from './assets/img/houses/house7lg.svg';
import House8Lg from './assets/img/houses/house8lg.svg';
import House9Lg from './assets/img/houses/house9lg.svg';
import House10Lg from './assets/img/houses/house10lg.svg';
import House11Lg from './assets/img/houses/house11lg.svg';
import House12Lg from './assets/img/houses/house12lg.svg';



// import apartments images
import Apartment1 from './assets/img/apartments/a1.svg';
import Apartment2 from './assets/img/apartments/a2.svg';
import Apartment3 from './assets/img/apartments/a3.svg';
import Apartment4 from './assets/img/apartments/a4.svg';
import Apartment5 from './assets/img/apartments/a5.svg';
import Apartment6 from './assets/img/apartments/a6.svg';
import Apartment7 from "./assets/img/apartments/a7.svg";
import Apartment8 from "./assets/img/apartments/a8.svg";
import Apartment9 from "./assets/img/apartments/a9.svg";
import Apartment10 from "./assets/img/apartments/a10.svg";
import Apartment11 from "./assets/img/apartments/a11.svg";
import Apartment12 from "./assets/img/apartments/a12.svg";

// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.svg';
import Apartment2Lg from './assets/img/apartments/a2lg.svg';
import Apartment3Lg from './assets/img/apartments/a3lg.svg';
import Apartment4Lg from './assets/img/apartments/a4lg.svg';
import Apartment5Lg from './assets/img/apartments/a5lg.svg';
import Apartment6Lg from './assets/img/apartments/a6lg.svg';
import Apartment7Lg from "./assets/img/apartments/a7lg.svg";
import Apartment8Lg from "./assets/img/apartments/a8lg.svg";
import Apartment9Lg from "./assets/img/apartments/a9lg.svg";
import Apartment10Lg from "./assets/img/apartments/a10lg.svg";
import Apartment11Lg from "./assets/img/apartments/a11lg.svg";
import Apartment12Lg from "./assets/img/apartments/a12lg.svg";

// import agents images
import Agent1 from './assets/img/agents/agent1.svg';
import Agent2 from './assets/img/agents/agent2.svg';
import Agent3 from './assets/img/agents/agent3.svg';
import Agent4 from './assets/img/agents/agent4.svg';
import Agent5 from './assets/img/agents/agent5.svg';
import Agent6 from './assets/img/agents/agent6.svg';
import Agent7 from './assets/img/agents/agent7.svg';
import Agent8 from './assets/img/agents/agent8.svg';
import Agent9 from './assets/img/agents/agent9.svg';
import Agent10 from './assets/img/agents/agent10.svg';
import Agent11 from './assets/img/agents/agent11.svg';
import Agent12 from './assets/img/agents/agent12.svg';

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "House 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House1,
    imageLg: House1Lg,
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "110000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House2,
    imageLg: House2Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "140000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House3,
    imageLg: House3Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "170000",
    agent: {
      image: Agent3,
      name: "Anna Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House4,
    imageLg: House4Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "200000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House5,
    imageLg: House5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2015",
    price: "210000",
    agent: {
      image: Agent5,
      name: "Grovy Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House6,
    imageLg: House6Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2014",
    price: "220000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2012",
    price: "20000",
    agent: {
      image: Agent7,
      name: "Nath Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2011",
    price: "30000",
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "United States",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2011",
    price: "40000",
    agent: {
      image: Agent9,
      name: "Jessy Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: 10,
    type: "House",
    name: "House 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House7,
    imageLg: House7Lg,
    country: "Canada",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200 sq ft",
    year: "2015",
    price: "117000",
    agent: {
      image: Agent10,
      name: "Vecito Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: 11,
    type: "House",
    name: "House 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House8,
    imageLg: House8Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200 sq ft",
    year: "2019",
    price: "145000",
    agent: {
      image: Agent11,
      name: "Solin Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: 12,
    type: "House",
    name: "House 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House9,
    imageLg: House9Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 sq ft",
    year: "2015",
    price: "139000",
    agent: {
      image: Agent12,
      name: "Reyna Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: 13,
    type: "House",
    name: "House 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House10,
    imageLg: House10Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 14,
    type: "House",
    name: "House 11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House11,
    imageLg: House11Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 15,
    type: "House",
    name: "House 12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House12,
    imageLg: House12Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "Anna Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 16,
    type: "Apartment",
    name: "Apartment 16",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 17,
    type: "Apartment",
    name: "Apartment 17",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "Grovy Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 18,
    type: "Apartment",
    name: "Apartment 18",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 19,
    type: "Apartment",
    name: "Apartment 19",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment7,
    imageLg: Apartment7Lg,
    country: "Philippines",
    address: "18/F Pbcom Tower, 6795 Ayala, Salcedo Vill.",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 20,
    type: "Apartment",
    name: "Apartment 20",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment8,
    imageLg: Apartment8Lg,
    country: "Philippines",
    address: "Sen. Gil Puyat Avenue, Palanan",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "Grovy Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 21,
    type: "Apartment",
    name: "Apartment 21",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment9,
    imageLg: Apartment9Lg,
    country: "Philippines",
    address: "M. Paulino Street, 71",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 22,
    type: "Apartment",
    name: "Apartment 22",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment10,
    imageLg: Apartment10Lg,
    country: "Philippines",
    address: "P &#038; L Building1",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "Anna Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 23,
    type: "Apartment",
    name: "Apartment 23",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment11,
    imageLg: Apartment11Lg,
    country: "Philippines",
    address: "National Highway",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 24,
    type: "Apartment",
    name: "Apartment 24",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment12,
    imageLg: Apartment12Lg,
    country: "Philippines",
    address: "J And T Building",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
];