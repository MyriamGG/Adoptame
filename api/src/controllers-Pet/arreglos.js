const diseases = [
    {name: "parvovirosis", severity: 5},
    {name: "moquillo", severity: 5 },
    {name: "hepatitis infecciosa", severity: 5 },
    {name: "laringotraqueitis infecciosa", severity: 5},
    {name: "gastroenteritis por coronavirus", severity: 5},
    {name: "rabia", severity: 5},
    {name: "Otitis", severity: 2},
    {name: "Conjuntivitis", severity: 3},
    {name: "Leucemia felina", severity: 5},
    {name: "Panleucopenia felina", severity: 5},
    {name: "Inmunodeficiencia felina", severity: 4},
    {name: "Peritonitis", severity: 5},
    {name: "Problemas gastrointestinales", severity: 4},
    {name: "Cistitis", severity: 4},
    {name: "Alergia", severity: 3}
];
const locations = [
    "Buenos Aires",
    "Ciudad Autónoma de Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego", 
    "Antártida e Islas del Atlántico Sur",
    "Tucumán"];
const vaccines = [
    "primera vacuna polivalente (séxtuple)",
    "segunda dosis de polivalente (el adenovirus, el moquillo, la parainfluenza y el parvovirus)",
    "refuerzo de la polivalente",
    "refuerzo de la polivalente",
    "refuerzo contra la rabia",
    "hepatitis canina",
    "Bordetella bronchiseptica",
    "Borrelia burgdorferi",
    "bacterias leptospira",
    "triple felina ( contra la rinotraqueitis viral felina, el calicivirus felino y la panceleucopenia felina (moquillo))",
    "desparasitado"
];

module.exports = {
    diseases,
    vaccines,
    locations
}