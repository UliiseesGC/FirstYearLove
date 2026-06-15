export interface MonthImage {
  src: string
  date: string
}

export interface MonthData {
  id: string
  name: string
  year: number
  images: MonthImage[]
  bgImage: string
  description: string
  color: string
}

export const months: MonthData[] = [
  {
    id: "month-1",
    name: "Junio",
    year: 2025,
    images: [],
    bgImage: "images/06-junio/IMG_2087.PNG",
    description: "El comienzo de nuestra historia. El mes en que todo empezó.",
    color: "#8b1a1a",
  },
  {
    id: "month-2",
    name: "Julio",
    year: 2025,
    images: [
      { src: "images/07-julio/IMG_2409.jpeg", date: "13 de Julio" },
      { src: "images/07-julio/IMG_2424.jpeg", date: "14 de Julio" },
      { src: "images/07-julio/IMG_2444.jpeg", date: "20 de Julio" },
      { src: "images/07-julio/IMG_2451.jpeg", date: "20 de Julio" },
    ],
    bgImage: "images/07-julio/IMG_2372.jpeg",
    description: "El verano fue testigo de nuestras aventuras, risas y momentos inolvidables.",
    color: "#be123c",
  },
  {
    id: "month-3",
    name: "Agosto",
    year: 2025,
    images: [
      { src: "images/08-agosto/IMG_2718.jpeg", date: "2 de Agosto" },
      { src: "images/08-agosto/IMG_2760.jpeg", date: "2 de Agosto" },
      { src: "images/08-agosto/IMG_2964.jpeg", date: "9 de Agosto" },
      { src: "images/08-agosto/IMG_3002.jpeg", date: "10 de Agosto" },
    ],
    bgImage: "images/08-agosto/IMG_2592.jpeg",
    description: "Las estrellas de agosto brillaban, pero ninguna tanto como tus ojos.",
    color: "#e11d48",
  },
  {
    id: "month-4",
    name: "Septiembre",
    year: 2025,
    images: [
      { src: "images/09-septiembre/IMG_3837.jpeg", date: "10 de Septiembre" },
      { src: "images/09-septiembre/IMG_4424.jpeg", date: "11 de Septiembre" },
      { src: "images/09-septiembre/IMG_4554.jpeg", date: "11 de Septiembre" },
      { src: "images/09-septiembre/IMG_4662.jpeg", date: "11 de Septiembre" },
    ],
    bgImage: "images/09-septiembre/IMG_3432.PNG",
    description: "El otoño trajo colores cálidos, y nuestro amor se volvió más profundo.",
    color: "#fb7185",
  },
  {
    id: "month-5",
    name: "Octubre",
    year: 2025,
    images: [
      { src: "images/10-octubre/IMG_5654.jpeg", date: "17 de Octubre" },
      { src: "images/10-octubre/IMG_5748.jpeg", date: "25 de Octubre" },
    ],
    bgImage: "images/10-octubre/IMG_5607.jpeg",
    description: "Los días se volvieron más frescos, pero tu abrazo siempre fue mi refugio cálido.",
    color: "#f43f5e",
  },
  {
    id: "month-6",
    name: "Noviembre",
    year: 2025,
    images: [
      { src: "images/11-noviembre/IMG_5949.jpeg", date: "13 de Noviembre" },
      { src: "images/11-noviembre/IMG_5972.jpeg", date: "13 de Noviembre" },
      { src: "images/11-noviembre/IMG_6012.jpeg", date: "16 de Noviembre" },
      { src: "images/11-noviembre/IMG_6113.jpeg", date: "24 de Noviembre" },
    ],
    bgImage: "images/11-noviembre/IMG_5943.jpeg",
    description: "Mes de gratitud. Agradecí al universo cada día por haberte puesto en mi camino.",
    color: "#e11d48",
  },
  {
    id: "month-7",
    name: "Diciembre",
    year: 2025,
    images: [
      { src: "images/12-diciembre/IMG_6271.jpeg", date: "2 de Diciembre" },
      { src: "images/12-diciembre/IMG_6370.jpeg", date: "2 de Diciembre" },
      { src: "images/12-diciembre/IMG_6392.jpeg", date: "6 de Diciembre" },
      { src: "images/12-diciembre/IMG_6441.jpeg", date: "7 de Diciembre" },
    ],
    bgImage: "images/12-diciembre/IMG_6264.jpeg",
    description: "Cerramos el año con la certeza de que lo mejor estaba por venir.",
    color: "#be123c",
  },
  {
    id: "month-8",
    name: "Enero",
    year: 2026,
    images: [
      { src: "images/01-enero/IMG_6878.jpeg", date: "2 de Enero" },
      { src: "images/01-enero/IMG_6915.jpeg", date: "3 de Enero" },
      { src: "images/01-enero/IMG_6924.jpeg", date: "3 de Enero" },
      { src: "images/01-enero/IMG_6949.jpeg", date: "9 de Enero" },
    ],
    bgImage: "images/01-enero/IMG_6877.jpeg",
    description: "Un nuevo año comenzó, y mi amor por ti solo había crecido más y más.",
    color: "#9f1239",
  },
  {
    id: "month-9",
    name: "Febrero",
    year: 2026,
    images: [
      { src: "images/02-febrero/IMG_7174.jpeg", date: "4 de Febrero" },
      { src: "images/02-febrero/IMG_7189.jpeg", date: "7 de Febrero" },
      { src: "images/02-febrero/IMG_7203.jpeg", date: "7 de Febrero" },
      { src: "images/02-febrero/IMG_7231.jpeg", date: "14 de Febrero" },
    ],
    bgImage: "images/02-febrero/IMG_7098.jpeg",
    description: "San Valentín fue solo una excusa para decirte cuánto significas para mí.",
    color: "#881337",
  },
  {
    id: "month-10",
    name: "Marzo",
    year: 2026,
    images: [
      { src: "images/03-marzo/IMG_7844.jpeg", date: "23 de Marzo" },
      { src: "images/03-marzo/IMG_7849.jpeg", date: "23 de Marzo" },
      { src: "images/03-marzo/IMG_7863.jpeg", date: "28 de Marzo" },
      { src: "images/03-marzo/IMG_7865.jpeg", date: "28 de Marzo" },
    ],
    bgImage: "images/03-marzo/IMG_7626.jpeg",
    description: "La primavera llegó y contigo floreció mi corazón de una manera que nunca imaginé.",
    color: "#8b1a1a",
  },
  {
    id: "month-11",
    name: "Abril",
    year: 2026,
    images: [
      { src: "images/04-abril/IMG_7977.jpeg", date: "2 de Abril" },
      { src: "images/04-abril/IMG_7991.jpeg", date: "2 de Abril" },
      { src: "images/04-abril/IMG_7994.jpeg", date: "2 de Abril" },
      { src: "images/04-abril/IMG_7997.jpeg", date: "2 de Abril" },
    ],
    bgImage: "images/04-abril/IMG_7966.jpeg",
    description: "12 meses. 365 días. Un primer año perfecto a tu lado.",
    color: "#be123c",
  },
  {
    id: "month-12",
    name: "Mayo",
    year: 2026,
    images: [
      { src: "images/05-mayo/IMG_8356.jpeg", date: "3 de Mayo" },
      { src: "images/05-mayo/IMG_8360.jpeg", date: "3 de Mayo" },
      { src: "images/05-mayo/IMG_8374.jpeg", date: "8 de Mayo" },
      { src: "images/05-mayo/IMG_8408.jpeg", date: "16 de Mayo" },
    ],
    bgImage: "images/05-mayo/IMG_8313.jpeg",
    description: "El sol brilló más fuerte que nunca. El último mes de nuestro primer año.",
    color: "#c9a96e",
  },
  {
    id: "month-13",
    name: "Junio",
    year: 2026,
    images: [
      { src: "images/06-junio/IMG_8730.jpeg", date: "4 de Junio" },
      { src: "images/06-junio/IMG_8810.jpeg", date: "6 de Junio" },
      { src: "images/06-junio/IMG_8875.jpeg", date: "6 de Junio" },
      { src: "images/06-junio/IMG_8887.jpeg", date: "7 de Junio" },
    ],
    bgImage: "images/06-junio/IMG_8682.jpeg",
    description: "Un año después. El mismo amor, pero más grande que nunca.",
    color: "#881337",
  },
]
