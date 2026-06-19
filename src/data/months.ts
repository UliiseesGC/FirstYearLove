export interface MonthImage {
  src: string
  date: string
  description?: string
}

export interface MonthData {
  id: string
  name: string
  year: number
  images: MonthImage[]
  bgImage: string
  description: string
  subtext: string
  color: string
}

export const months: MonthData[] = [
  {
    id: "month-1",
    name: "Junio",
    year: 2025,
    images: [
      { src: "/images/06-junio/IMG_8964-2.jpg", date: "2 de Junio", description: "El comienzo de nuestra historia." },
      { src: "/images/06-junio/IMG_8965-2.jpg", date: "2 de Junio", description: "El mes en que todo empezó." },
      { src: "/images/06-junio/IMG_8966-2.jpg", date: "6 de Junio", description: "Aquel junio que cambió mi vida" },
      { src: "/images/06-junio/IMG_8967-2.jpg", date: "8 de Junio", description: "para siempre." },
    ],
    bgImage: "/images/06-junio/IMG_8964-2.jpg",
    description: "El comienzo de nuestra historia. El mes en que todo empezó.",
    subtext: "El mes donde comenzó todo. Aquí empezó nuestra historia de amor.",
    color: "#8b1a1a",
  },
  {
    id: "month-2",
    name: "Julio",
    year: 2025,
    images: [
      { src: "/images/07-julio/IMG_2409.jpeg", date: "13 de Julio", description: "El verano fue testigo de nuestras aventuras," },
      { src: "/images/07-julio/IMG_2451.jpeg", date: "20 de Julio", description: "risas y momentos inolvidables." },
    ],
    bgImage: "/images/07-julio/IMG_2372.jpeg",
    description: "El verano fue testigo de nuestras aventuras, risas y momentos inolvidables.",
    subtext: "Un verano lleno de aventuras y momentos que atesoro con todo mi corazón.",
    color: "#be123c",
  },
  {
    id: "month-3",
    name: "Agosto",
    year: 2025,
    images: [
      { src: "/images/08-agosto/IMG_2718.jpeg", date: "2 de Agosto", description: "Las estrellas de agosto brillaban," },
      { src: "/images/08-agosto/IMG_2760.jpeg", date: "2 de Agosto", description: "pero ninguna tanto como tus ojos." },
      { src: "/images/08-agosto/IMG_2964.jpeg", date: "9 de Agosto", description: "Cada noche a tu lado" },
      { src: "/images/08-agosto/IMG_3002.jpeg", date: "10 de Agosto", description: "fue un sueño hecho realidad." },
    ],
    bgImage: "/images/08-agosto/IMG_2592.jpeg",
    description: "Las estrellas de agosto brillaban, pero ninguna tanto como tus ojos.",
    subtext: "Noches estrelladas y días de sol. Cada momento a tu lado fue mágico.",
    color: "#e11d48",
  },
  {
    id: "month-4",
    name: "Septiembre",
    year: 2025,
    images: [
      { src: "/images/09-septiembre/IMG_4424.jpeg", date: "11 de Septiembre", description: "El otoño trajo colores cálidos," },
      { src: "/images/09-septiembre/IMG_4554.jpeg", date: "11 de Septiembre", description: "y nuestro amor se volvió más profundo." },
      { src: "/images/09-septiembre/IMG_4662.jpeg", date: "11 de Septiembre", description: "Cada día a tu lado" },
      { src: "/images/09-septiembre/IMG_4911.jpeg", date: "12 de Septiembre", description: "es un regalo del corazón." },
    ],
    bgImage: "/images/09-septiembre/IMG_3432.PNG",
    description: "El otoño trajo colores cálidos, y nuestro amor se volvió más profundo.",
    subtext: "El otoño nos trajo colores nuevos y un amor que crecía día con día.",
    color: "#fb7185",
  },
  {
    id: "month-5",
    name: "Octubre",
    year: 2025,
    images: [
      { src: "/images/10-octubre/IMG_5654.jpeg", date: "17 de Octubre", description: "Los días se volvieron más frescos," },
      { src: "/images/10-octubre/IMG_5748.jpeg", date: "25 de Octubre", description: "pero tu abrazo siempre fue mi refugio cálido." },
    ],
    bgImage: "/images/10-octubre/IMG_5607.jpeg",
    description: "Los días se volvieron más frescos, pero tu abrazo siempre fue mi refugio cálido.",
    subtext: "Los días se volvieron fríos pero tu amor siempre me mantuvo cálido.",
    color: "#f43f5e",
  },
  {
    id: "month-6",
    name: "Noviembre",
    year: 2025,
    images: [
      { src: "/images/11-noviembre/IMG_5949.jpeg", date: "13 de Noviembre", description: "Mes de gratitud." },
      { src: "/images/11-noviembre/IMG_5972.jpeg", date: "13 de Noviembre", description: "Agradecí al universo cada día" },
      { src: "/images/11-noviembre/IMG_6012.jpeg", date: "16 de Noviembre", description: "por haberte puesto" },
      { src: "/images/11-noviembre/IMG_6113.jpeg", date: "24 de Noviembre", description: "en mi camino." },
    ],
    bgImage: "/images/11-noviembre/IMG_5943.jpeg",
    description: "Mes de gratitud. Agradecí al universo cada día por haberte puesto en mi camino.",
    subtext: "Un mes para agradecer. Y yo agradezco cada día por tenerte.",
    color: "#e11d48",
  },
  {
    id: "month-7",
    name: "Diciembre",
    year: 2025,
    images: [
      { src: "/images/12-diciembre/IMG_6271.jpeg", date: "2 de Diciembre", description: "Cerramos el año" },
      { src: "/images/12-diciembre/IMG_6370.jpeg", date: "2 de Diciembre", description: "con la certeza" },
      { src: "/images/12-diciembre/IMG_6392.jpeg", date: "6 de Diciembre", description: "de que lo mejor" },
      { src: "/images/12-diciembre/IMG_6441.jpeg", date: "7 de Diciembre", description: "estaba por venir." },
    ],
    bgImage: "/images/12-diciembre/IMG_6264.jpeg",
    description: "Cerramos el año con la certeza de que lo mejor estaba por venir.",
    subtext: "Cerramos el año juntos, con la promesa de un futuro brillante.",
    color: "#be123c",
  },
  {
    id: "month-8",
    name: "Enero",
    year: 2026,
    images: [
      { src: "/images/01-enero/IMG_6878.jpeg", date: "2 de Enero", description: "Un nuevo año comenzó," },
      { src: "/images/01-enero/IMG_6915.jpeg", date: "3 de Enero", description: "y mi amor por ti" },
      { src: "/images/01-enero/IMG_6924.jpeg", date: "3 de Enero", description: "solo había crecido" },
      { src: "/images/01-enero/IMG_6949.jpeg", date: "9 de Enero", description: "más y más." },
    ],
    bgImage: "/images/01-enero/IMG_6877.jpeg",
    description: "Un nuevo año comenzó, y mi amor por ti solo había crecido más y más.",
    subtext: "Un nuevo año, el mismo amor. Cada día a tu lado es un regalo.",
    color: "#9f1239",
  },
  {
    id: "month-9",
    name: "Febrero",
    year: 2026,
    images: [
      { src: "/images/02-febrero/IMG_7174.jpeg", date: "4 de Febrero", description: "San Valentín fue solo una excusa" },
      { src: "/images/02-febrero/IMG_7189.jpeg", date: "7 de Febrero", description: "para decirte" },
      { src: "/images/02-febrero/IMG_7203.jpeg", date: "7 de Febrero", description: "cuánto significas" },
      { src: "/images/02-febrero/IMG_7231.jpeg", date: "14 de Febrero", description: "para mí." },
    ],
    bgImage: "/images/02-febrero/IMG_7098.jpeg",
    description: "San Valentín fue solo una excusa para decirte cuánto significas para mí.",
    subtext: "El mes del amor. Pero contigo, todos los meses son especiales.",
    color: "#881337",
  },
  {
    id: "month-10",
    name: "Marzo",
    year: 2026,
    images: [
      { src: "/images/03-marzo/IMG_7844.jpeg", date: "23 de Marzo", description: "La primavera llegó" },
      { src: "/images/03-marzo/IMG_7849.jpeg", date: "23 de Marzo", description: "y contigo floreció mi corazón" },
      { src: "/images/03-marzo/IMG_7863.jpeg", date: "28 de Marzo", description: "de una manera" },
      { src: "/images/03-marzo/IMG_7865.jpeg", date: "28 de Marzo", description: "que nunca imaginé." },
    ],
    bgImage: "/images/03-marzo/IMG_7626.jpeg",
    description: "La primavera llegó y contigo floreció mi corazón de una manera que nunca imaginé.",
    subtext: "La primavera llegó y con ella, un amor que florece más cada día.",
    color: "#8b1a1a",
  },
  {
    id: "month-11",
    name: "Abril",
    year: 2026,
    images: [
      { src: "/images/04-abril/IMG_7977.jpeg", date: "2 de Abril", description: "12 meses." },
      { src: "/images/04-abril/IMG_7991.jpeg", date: "2 de Abril", description: "365 días." },
      { src: "/images/04-abril/IMG_7994.jpeg", date: "2 de Abril", description: "Un primer año perfecto" },
      { src: "/images/04-abril/IMG_7997.jpeg", date: "2 de Abril", description: "a tu lado." },
    ],
    bgImage: "/images/04-abril/IMG_7966.jpeg",
    description: "12 meses. 365 días. Un primer año perfecto a tu lado.",
    subtext: "Doce meses. Un año. Una vida entera para amarte.",
    color: "#be123c",
  },
  {
    id: "month-12",
    name: "Mayo",
    year: 2026,
    images: [
      { src: "/images/05-mayo/IMG_8356.jpeg", date: "3 de Mayo", description: "El sol brilló más fuerte que nunca." },
      { src: "/images/05-mayo/IMG_8360.jpeg", date: "3 de Mayo", description: "El último mes" },
      { src: "/images/05-mayo/IMG_8374.jpeg", date: "8 de Mayo", description: "de nuestro" },
      { src: "/images/05-mayo/IMG_8408.jpeg", date: "16 de Mayo", description: "primer año." },
    ],
    bgImage: "/images/05-mayo/IMG_8313.jpeg",
    description: "El sol brilló más fuerte que nunca. El último mes de nuestro primer año.",
    subtext: "El último mes de nuestro primer año. Pero esto es solo el comienzo.",
    color: "#c9a96e",
  },
  {
    id: "month-13",
    name: "Junio",
    year: 2026,
    images: [
      { src: "/images/06-junio/IMG_8810.jpeg", date: "6 de Junio", description: "Un año después." },
      { src: "/images/06-junio/IMG_8875.jpeg", date: "6 de Junio", description: "El mismo amor," },
      { src: "/images/06-junio/IMG_8887.jpeg", date: "7 de Junio", description: "pero más grande que nunca." },
    ],
    bgImage: "/images/06-junio/IMG_8682.jpeg",
    description: "Un año después. El mismo amor, pero más grande que nunca.",
    subtext: "Un año después. El mismo amor, pero infinitamente más grande.",
    color: "#881337",
  },
]
