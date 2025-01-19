// Data source: https://open.toronto.ca/dataset/street-tree-data/

type RawTree = [string, number, number];

type Tree = {
  key: string;
  name: string;
  lat: number;
  lng: number;
};

const trees: RawTree[] = [
    ["Molles", -16.3988, -71.5369],
    ["Eucalipto", -16.4005, -71.5358],
    ["Pino Andino", -16.4021, -71.5382],
    ["Capulí", -16.3999, -71.5376],
    ["Aliso", -16.4017, -71.5347],
    ["Ciprés", -16.3983, -71.5352],
    ["Queñua", -16.3992, -71.5365],
    ["Molle Serrano", -16.4003, -71.5381],
    ["Tarata", -16.4012, -71.5359],
    ["Chachacomo", -16.3998, -71.5348],
    ["Eucalipto Blanco", -16.4014, -71.5372],
    ["Aliso Andino", -16.4001, -71.5367],
    ["Queñua Serrana", -16.3985, -71.5375],
    ["Polylepis", -16.4009, -71.5363],
    ["Tara", -16.3997, -71.5345],
    ["Molle Costeño", -16.4011, -71.5380],
    ["Tumbo", -16.3982, -71.5354],
    ["Muña", -16.4006, -71.5378],
    ["Aliso Blanco", -16.3989, -71.5362],
    ["Chachacoma", -16.4010, -71.5349],
    ["Kiswar", -16.3995, -71.5374],
    ["Lúcumo", -16.4004, -71.5357],
    ["Sauco", -16.3990, -71.5366],
    ["Nogal", -16.3987, -71.5346],
    ["Molle Rojo", -16.4015, -71.5361],
    ["Capulí Andino", -16.3996, -71.5355],
    ["Tara Serrana", -16.4002, -71.5383],
    ["Chachacoma Serrana", -16.3984, -71.5368],
    ["Ciprés Blanco", -16.4007, -71.5353],
    ["Molle Alto", -16.3986, -71.5371],
    ["Muña Andina", -16.4013, -71.5364],
    ["Queñua Costeño", -16.3994, -71.5384],
    ["Capulí Blanco", -16.4000, -71.5344]
  ];

const formatted: Tree[] = trees.map(([name, lat, lng]) => ({
  name,
  lat,
  lng,
  key: JSON.stringify({ name, lat, lng }),
}));

export default formatted;