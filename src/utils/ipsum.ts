const tokens = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet,",
  "consectetur",
  "adipiscing",
  "elit,",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua.",
  "Scelerisque",
  "felis",
  "imperdiet",
  "proin",
  "fermentum",
  "leo",
  "vel",
  "orci.",
  "Velit",
  "scelerisque",
  "in",
  "dictum",
  "non",
  "consectetur.",
  "Eget",
  "aliquet",
  "nibh",
  "praesent",
  "tristique",
  "magna.",
  "Sit",
  "amet",
  "mattis",
  "vulputate",
  "enim",
  "nulla",
  "aliquet",
  "porttitor",
  "lacus",
  "luctus.",
  "In",
  "mollis",
  "nunc",
  "sed",
  "id",
  "semper",
  "risus",
  "in",
  "hendrerit.",
  "Proin",
  "fermentum",
  "leo",
  "vel",
  "orci",
  "porta",
  "non",
  "pulvinar.",
  "Imperdiet",
  "dui",
  "accumsan",
  "sit",
  "amet",
  "nulla",
  "facilisi.",
  "Gravida",
  "in",
  "fermentum",
  "et",
  "sollicitudin",
  "ac",
  "orci.",
  "Donec",
  "adipiscing",
  "tristique",
  "risus",
  "nec",
  "feugiat.",
  "Tempus",
  "imperdiet",
  "nulla",
  "malesuada",
  "pellentesque",
  "elit.",
  "Sit",
  "amet",
  "mauris",
  "commodo",
  "quis",
  "imperdiet.",
  "Urna",
  "nec",
  "tincidunt",
  "praesent",
  "semper",
  "feugiat",
  "nibh",
  "sed",
  "pulvinar.",
  "Enim",
  "sit",
  "amet",
  "venenatis",
  "urna.",
  "Aliquet",
  "risus",
  "feugiat",
  "in",
  "ante",
  "metus",
  "dictum",
  "at",
  "tempor.",
  "Facilisis",
  "magna",
  "etiam",
  "tempor",
  "orci",
  "eu",
  "lobortis",
  "elementum",
  "nibh.",
  "Egestas",
  "erat",
  "imperdiet",
  "sed",
  "euismod.",
  "Lorem",
  "donec",
  "massa",
  "sapien",
  "faucibus.",
  "Vitae",
  "et",
  "leo",
  "duis",
  "ut",
  "diam",
  "quam",
  "nulla.",
];

export const ipsum = (end = 100, start = 0) =>
  tokens.slice(start, end).join(" ");
