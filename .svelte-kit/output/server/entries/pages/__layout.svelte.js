import { g as getContext, c as create_ssr_component, a as add_styles, e as escape, b as add_attribute, d as each, f as subscribe, s as setContext, v as validate_component } from "../../chunks/index-6a0f4aab.js";
import { a as assets } from "../../chunks/paths-396f020f.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var app = "";
const themes = {
  "light": {
    "name": "light",
    "text": "#222",
    "muted": "#777",
    "pale": "#f0f0f0",
    "background": "#fff"
  },
  "dark": {
    "name": "dark",
    "text": "#fff",
    "muted": "#bbb",
    "pale": "#333",
    "background": "#222"
  }
};
[
  {
    label: "sex",
    key: "sex",
    cats: [
      { var: "SEX", code: "2", label: "female" },
      { var: "SEX", code: "1", label: "male" }
    ]
  },
  {
    label: "ethnicity",
    key: "ethnicity",
    cats: [
      { var: "ETHPUK11_T006A", code: "1-4", label: "white" },
      { var: "ETHNICITYEW", code: "1", label: "white UK", indent: 1 },
      { var: "ETHNICITYEW", code: "2", label: "white Irish", indent: 1 },
      { var: "ETHNICITYEW", code: "3", label: "white Gypsy/traveller", indent: 1 },
      { var: "ETHPUK11_T006A", code: "5-8", label: "mixed" },
      { var: "ETHNICITYEW", code: "5", label: "mixed Caribbean/white", indent: 1 },
      { var: "ETHNICITYEW", code: "6", label: "mixed African/white", indent: 1 },
      { var: "ETHNICITYEW", code: "7", label: "mixed Asian/white", indent: 1 },
      { var: "ETHPUK11_T006A", code: "9-13", label: "Asian" },
      { var: "ETHNICITYEW", code: "9", label: "Indian", indent: 1 },
      { var: "ETHNICITYEW", code: "10", label: "Pakistani", indent: 1 },
      { var: "ETHNICITYEW", code: "11", label: "Bangladeshi", indent: 1 },
      { var: "ETHNICITYEW", code: "12", label: "Chinese", indent: 1 },
      { var: "ETHPUK11_T006A", code: "14-16", label: "black" },
      { var: "ETHNICITYEW", code: "14", label: "black African", indent: 1 },
      { var: "ETHNICITYEW", code: "15", label: "black Caribbean", indent: 1 },
      { var: "ETHPUK11_T006A", code: "17-18", label: "other" },
      { var: "ETHNICITYEW", code: "17", label: "Arab", indent: 1 },
      { var: "ETHNICITYEW", code: "18", label: "other", indent: 1 }
    ]
  },
  {
    label: "country of birth",
    key: "cob",
    cats: [
      { var: "COB_T003B", code: "1-5", label: "United Kingdom" },
      { var: "COBG", indent: 1, code: "1", label: "England" },
      { var: "COBG", indent: 1, code: "2", label: "Scotland" },
      { var: "COBG", indent: 1, code: "3", label: "Northern Ireland" },
      { var: "COBG", indent: 1, code: "4", label: "Wales" },
      { var: "COBG", indent: 1, code: "5", label: "United Kingdom not otherwise specified" },
      { var: "COB_T003B", code: "6-26", label: "outside the UK" },
      { var: "COBG", indent: 1, code: "6", label: "Ireland" },
      { var: "COB_R010A", code: "7,9", indent: 1, label: "EU countries as of 2001" },
      { var: "COBG", indent: 2, code: "7", label: "Germany" },
      { var: "COBG", indent: 2, code: "9", label: "Other EU countries as of 2001" },
      { var: "COB_R010A", code: "8,10", indent: 1, label: "EU countries as of 2011" },
      { var: "COBG", indent: 2, code: "8", label: "Poland" },
      { var: "COBG", indent: 2, code: "10", label: "Other EU countries as of 2011" },
      { var: "COBG", indent: 1, code: "11", label: "Rest of Europe" },
      { var: "COB_R010A", indent: 1, code: "12-15", label: "Africa" },
      { var: "COBG", indent: 2, code: "12", label: "North Africa" },
      { var: "COBG", indent: 2, code: "13", label: "Central and Western Africa" },
      { var: "COBG", indent: 2, code: "14", label: "South and Eastern Africa" },
      { var: "COBG", indent: 2, code: "15", label: "Africa not otherwise specified" },
      { var: "COB_R010A", code: "16-23", indent: 1, label: "Middle East and Asia" },
      { var: "COBG", indent: 2, code: "16", label: "Middle East" },
      { var: "COBG", indent: 2, code: "17", label: "Eastern Asia" },
      { var: "COBG", indent: 2, code: "18", label: "Bangladesh" },
      { var: "COBG", indent: 2, code: "19", label: "India" },
      { var: "COBG", indent: 2, code: "20", label: "Pakistan" },
      { var: "COBG", indent: 2, code: "21", label: "Rest of Southern Asia" },
      { var: "COBG", indent: 2, code: "22", label: "Middle East and Asia: South-East Asia" },
      { var: "COBG", indent: 2, code: "23", label: "Middle East and Asia: Central Asia" },
      { var: "COB_R010A", code: "24-25", indent: 1, label: "The Americas and the Caribbean" },
      { var: "COBG", indent: 2, code: "24", label: "North America and the Caribbean" },
      { var: "COBG", indent: 2, code: "25", label: "Central and South America" },
      { var: "COBG", indent: 1, code: "26", label: "Antarctica, Oceania and other" }
    ]
  },
  {
    label: "religion",
    key: "religion",
    cats: [
      { var: "RELIGIONEW", code: "1", label: "no religion" },
      { var: "RELIGIONEW", code: "2", label: "Christian" },
      { var: "RELPUK11_R005A", code: "3-8", label: "other religion" },
      { var: "RELIGIONEW", code: "3", label: "Buddhist", indent: 1 },
      { var: "RELIGIONEW", code: "4", label: "Hindu", indent: 1 },
      { var: "RELIGIONEW", code: "5", label: "Jewish", indent: 1 },
      { var: "RELIGIONEW", code: "6", label: "Muslim", indent: 1 },
      { var: "RELIGIONEW", code: "7", label: "Sikh", indent: 1 },
      { var: "RELIGIONEW", code: "8", label: "other", indent: 1 },
      { var: "RELIGIONEW", code: "9", label: "not stated" }
    ]
  },
  {
    label: "English proficiency",
    key: "langprf",
    cats: [
      { var: "LANGPRF_R006A", code: "1", label: "English is main language" },
      { var: "LANGPRF_R006A", code: "2", label: "speaks English very well" },
      { var: "LANGPRF_R006A", code: "3", label: "speaks English well" },
      { var: "LANGPRF_R006A", code: "4", label: "cannot speak English well" },
      { var: "LANGPRF_R006A", code: "5", label: "speaks no English" }
    ]
  },
  {
    label: "age group",
    key: "age",
    cats: [
      { var: "AGE_T005B", code: "0-15", label: "0 to 15" },
      { var: "AGE_T005B", code: "16-49", label: "16 to 49" },
      { var: "AGE_T005B", code: "50-64", label: "50 to 64" },
      { var: "AGE_T005B", code: "65-90", label: "65 plus" }
    ]
  },
  {
    label: "arrival in UK",
    key: "yrarrpuk",
    cats: [
      { var: "YRARRPUK11_R006A", code: "1", label: "Born in the UK" },
      { var: "YRARRPUK11_R006A", code: "2", label: "Before 1981" },
      { var: "YRARRPUK11_R011A", code: "2", label: "Before 1961", indent: 1 },
      { var: "YRARRPUK11_R011A", code: "3", label: "1961-1970", indent: 1 },
      { var: "YRARRPUK11_R011A", code: "3", label: "1971-1980", indent: 1 },
      { var: "YRARRPUK11_R006A", code: "3", label: "1981-1990" },
      { var: "YRARRPUK11_R006A", code: "4", label: "1991-2000" },
      { var: "YRARRPUK11_R006A", code: "5", label: "2001-2011" },
      { var: "YRARRPUK11_R011A", code: "7", label: "2001-2003", indent: 1 },
      { var: "YRARRPUK11_R011A", code: "8", label: "2004-2006", indent: 1 },
      { var: "YRARRPUK11_R011A", code: "9", label: "2007-2009", indent: 1 },
      { var: "YRARRPUK11_R011A", code: "10", label: "2010-2011", indent: 1 }
    ]
  },
  {
    label: "passport held",
    key: "psspuk",
    cats: [
      { var: "PSSPUK_R004A", code: "1", label: "UK passport" },
      { var: "PSSPUK_R004A", code: "2-41", label: "non-UK passport" },
      { var: "PSSPUK_R011A", code: "2", indent: 1, label: "Ireland" },
      { var: "PSSPUK_R011A", code: "3-7", indent: 1, label: "EU countries as of 2001" },
      { var: "PSSPUK", code: "3", indent: 2, label: "France" },
      { var: "PSSPUK", code: "4", indent: 2, label: "Germany" },
      { var: "PSSPUK", code: "5", indent: 2, label: "Italy" },
      { var: "PSSPUK", code: "6", indent: 2, label: "Portugal" },
      { var: "PSSPUK", code: "7", indent: 2, label: "other EU countries as of 2001" },
      { var: "PSSPUK_R011A", code: "8-10", indent: 1, label: "EU countries as of 2011" },
      { var: "PSSPUK", code: "8", indent: 2, label: "Lithuania" },
      { var: "PSSPUK", code: "9", indent: 2, label: "Poland" },
      { var: "PSSPUK", code: "10", indent: 2, label: "other EU countries as of 2011" },
      { var: "PSSPUK_R011A", code: "11", indent: 1, label: "Rest of Europe" },
      { var: "PSSPUK_R011A", code: "12-20", indent: 1, label: "Africa" },
      { var: "PSSPUK_R018A", code: "12", indent: 2, label: "North Africa" },
      { var: "PSSPUK_R018A", code: "13-15", indent: 2, label: "Central and Western Africa" },
      { var: "PSSPUK", code: "13", indent: 3, label: "Ghana" },
      { var: "PSSPUK", code: "14", indent: 3, label: "Nigeria" },
      { var: "PSSPUK", code: "15", indent: 3, label: "Central Africa & other Western Africa" },
      { var: "PSSPUK_R018A", code: "16-20", indent: 2, label: "South and Eastern Africa" },
      { var: "PSSPUK", code: "16", indent: 3, label: "Kenya" },
      { var: "PSSPUK", code: "17", indent: 3, label: "Somalia" },
      { var: "PSSPUK", code: "18", indent: 3, label: "Other Eastern Africa" },
      { var: "PSSPUK", code: "19", indent: 3, label: "South Africa" },
      { var: "PSSPUK", code: "20", indent: 3, label: "Other Southern Africa" },
      { var: "PSSPUK_R011A", code: "21-31", indent: 1, label: "Middle East and Asia" },
      { var: "PSSPUK_R018A", code: "21", indent: 2, label: "Middle East" },
      { var: "PSSPUK_R018A", code: "22-23", indent: 2, label: "Eastern Asia" },
      { var: "PSSPUK", code: "22", indent: 3, label: "China" },
      { var: "PSSPUK", code: "23", indent: 3, label: "Other Eastern Asia" },
      { var: "PSSPUK_R018A", code: "24-28", indent: 2, label: "Southern Asia" },
      { var: "PSSPUK", code: "24", indent: 3, label: "Bangladesh" },
      { var: "PSSPUK", code: "25", indent: 3, label: "India" },
      { var: "PSSPUK", code: "26", indent: 3, label: "Pakistan" },
      { var: "PSSPUK", code: "27", indent: 3, label: "Sri Lanka" },
      { var: "PSSPUK", code: "28", indent: 3, label: "Other Southern Asia" },
      { var: "PSSPUK_R018A", code: "29-30", indent: 2, label: "South-East Asia" },
      { var: "PSSPUK", code: "29", indent: 3, label: "Philippines" },
      { var: "PSSPUK", code: "30", indent: 3, label: "Other South-East Asia" },
      { var: "PSSPUK_R018A", code: "31", indent: 2, label: "Central Asia" },
      { var: "PSSPUK_R011A", code: "32-37,41", indent: 1, label: "The Americas and the Caribbean" },
      { var: "PSSPUK_R018A", code: "32,33,36,37,41", indent: 2, label: "North America and the Caribbean" },
      { var: "PSSPUK", code: "32", indent: 3, label: "Canada" },
      { var: "PSSPUK", code: "33", indent: 3, label: "United States" },
      { var: "PSSPUK", code: "36", indent: 3, label: "Jamaica" },
      { var: "PSSPUK", code: "37", indent: 3, label: "Other Caribbean" },
      { var: "PSSPUK", code: "41", indent: 3, label: "British Overseas Territories" },
      { var: "PSSPUK_R018A", code: "34-35", indent: 2, label: "Central and South America" },
      { var: "PSSPUK", code: "34", indent: 3, label: "Central America" },
      { var: "PSSPUK", code: "35", indent: 3, label: "South America" },
      { var: "PSSPUK_R011A", code: "38-40", indent: 1, label: "Antarctica and Oceania" },
      { var: "PSSPUK", code: "38", indent: 2, label: "Australia" },
      { var: "PSSPUK", code: "39", indent: 2, label: "New Zealand" },
      { var: "PSSPUK", code: "40", indent: 2, label: "Other Oceania" },
      { var: "PSSPUK_R004A", code: "42", label: "no passport held" }
    ]
  },
  {
    label: "main language",
    key: "mainlangg",
    cats: [
      { var: "MAINLANGG_R003A", code: "1", label: "English (or Welsh in Wales)" },
      { var: "MAINLANGG_R003A", code: "2-9", label: "Other language" },
      { var: "MAINLANGG", code: "2", label: "Polish", indent: 1 },
      { var: "MAINLANGG", code: "3", label: "Panjabi", indent: 1 },
      { var: "MAINLANGG", code: "4", label: "Urdu", indent: 1 },
      { var: "MAINLANGG", code: "5", label: "Bengali (with Sylheti and Chatgaya)", indent: 1 },
      { var: "MAINLANGG", code: "6", label: "Gujarati", indent: 1 },
      { var: "MAINLANGG", code: "7", label: "Arabic", indent: 1 },
      { var: "MAINLANGG", code: "8", label: "French", indent: 1 },
      { var: "MAINLANGG", code: "9", label: "Other", indent: 1 }
    ]
  }
].sort((a, b) => a.label.localeCompare(b.label));
var Warning_svelte_svelte_type_style_lang = "";
const css = {
  code: ".warning.svelte-180bvkl{position:fixed;z-index:100;top:0;width:100%;color:white;background-color:#bb3333;margin-bottom:10px;padding:8px 0;font-size:1em}.spacer.svelte-180bvkl{display:block}",
  map: null
};
const Warning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<aside role="${"alert"}" class="${"warning svelte-180bvkl"}"><div class="${"wrapper middle"}"><strong>${slots.default ? slots.default({}) : ``}</strong></div></aside>
<div class="${"spacer svelte-180bvkl"}"${add_styles({ "height": `${40}px` })}></div>`;
});
const ONSHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path = "/" } = $$props;
  let { lang = "en" } = $$props;
  let { baseurl = "//www.ons.gov.uk" } = $$props;
  let menuExpanded = false;
  let searchExpanded = false;
  let menu = [
    {
      label_en: "Business, industry and trade",
      label_cy: "Busnes, diwydiant a masnach",
      url: "/businessindustryandtrade",
      expanded: false,
      children: [
        {
          label_en: "Business",
          label_cy: "Busnes",
          url: "/businessindustryandtrade/business"
        },
        {
          label_en: "Changes to business",
          label_cy: "Newidiadau i fusnesau",
          url: "/businessindustryandtrade/changestobusiness"
        },
        {
          label_en: "Construction industry",
          label_cy: "Diwydiant adeiladu",
          url: "/businessindustryandtrade/constructionindustry"
        },
        {
          label_en: "IT and internet industry",
          label_cy: "Y diwydiant TG a'r rhyngrwyd",
          url: "/businessindustryandtrade"
        },
        {
          label_en: "International trade",
          label_cy: "Masnach ryngwladol",
          url: "/businessindustryandtrade/itandinternetindustry"
        },
        {
          label_en: "Manufacturing and production industry",
          label_cy: "Y diwydiant gweithgynhyrchu a chynhyrchu",
          url: "/businessindustryandtrade/manufacturingandproductionindustry"
        },
        {
          label_en: "Retail industry",
          label_cy: "Y diwydiant manwerthu",
          url: "/businessindustryandtrade/retailindustry"
        },
        {
          label_en: "Tourism industry",
          label_cy: "Y diwydiant twristiaeth",
          url: "/businessindustryandtrade/tourismindustry"
        }
      ]
    },
    {
      label_en: "Economy",
      label_cy: "Yr economi",
      url: "/economy",
      expanded: false,
      children: [
        {
          label_en: "Economic output and productivity",
          label_cy: "Allgynnyrch economaidd a chynhyrchiant",
          url: "/economy/economicoutputandproductivity"
        },
        {
          label_en: "Environmental accounts",
          label_cy: "Cyfrifon amgylcheddol",
          url: "/economy/environmentalaccounts"
        },
        {
          label_en: "Government, public sector and taxes",
          label_cy: "Llywodraeth, y sector cyhoeddus a threthi",
          url: "/economy/governmentpublicsectorandtaxes"
        },
        {
          label_en: "Gross Domestic Product (GDP)",
          label_cy: "Cynnyrch Domestig Gros (CDG)",
          url: "/economy/grossdomesticproductgdp"
        },
        {
          label_en: "Gross Value Added (GVA)",
          label_cy: "Gwerth Ychwanegol Gros",
          url: "/economy/grossvalueaddedgva"
        },
        {
          label_en: "Inflation and price indices",
          label_cy: "Mynegeion chwyddiant a phrisiau",
          url: "/economy/inflationandpriceindices"
        },
        {
          label_en: "Investments, pensions and trusts",
          label_cy: "Buddsoddiadau, pensiynau ac ymddiriedolaethau",
          url: "/economy/investmentspensionsandtrusts"
        },
        {
          label_en: "National accounts",
          label_cy: "Cyfrifon gwladol",
          url: "/economy/nationalaccounts"
        },
        {
          label_en: "Regional accounts",
          label_cy: "Cyfrifon rhanbarthol",
          url: "/economy/regionalaccounts"
        }
      ]
    },
    {
      label_en: "Employment and labour market",
      label_cy: "Cyflogaeth a'r farchnad lafur",
      url: "/employmentandlabourmarket",
      expanded: false,
      children: [
        {
          label_en: "People in work",
          label_cy: "Pobl mewn gwaith",
          url: "/employmentandlabourmarket/peopleinwork"
        },
        {
          label_en: "People not in work",
          label_cy: "Pobl nad ydynt mewn gwaith",
          url: "/employmentandlabourmarket/peoplenotinwork"
        }
      ]
    },
    {
      label_en: "People, population and community",
      label_cy: "Pobl, y boblogaeth a chymunedau",
      url: "/peoplepopulationandcommunity",
      expanded: false,
      children: [
        {
          label_en: "Births, deaths and marriages",
          label_cy: "Genedigaethau, marwolaethau a phriodasau",
          url: "/peoplepopulationandcommunity/birthsdeathsandmarriages"
        },
        {
          label_en: "Crime and justice",
          label_cy: "Troseddu a chyfiawnder",
          url: "/peoplepopulationandcommunity/crimeandjustice"
        },
        {
          label_en: "Cultural identity",
          label_cy: "Hunaniaeth ddiwylliannol",
          url: "/peoplepopulationandcommunity/culturalidentity"
        },
        {
          label_en: "Education and childcare",
          label_cy: "Addysg a gofal plant",
          url: "/peoplepopulationandcommunity/educationandchildcare"
        },
        {
          label_en: "Elections",
          label_cy: "Etholiadau",
          url: "/peoplepopulationandcommunity/elections"
        },
        {
          label_en: "Health and social care",
          label_cy: "Iechyd a gofal cymdeithasol",
          url: "/peoplepopulationandcommunity/healthandsocialcare"
        },
        {
          label_en: "Household characteristics",
          label_cy: "Nodweddion aelwydydd",
          url: "/peoplepopulationandcommunity/householdcharacteristics"
        },
        {
          label_en: "Housing",
          label_cy: "Tai",
          url: "/peoplepopulationandcommunity/housing"
        },
        {
          label_en: "Leisure and tourism",
          label_cy: "Hamdden a thwristiaeth",
          url: "/peoplepopulationandcommunity/leisureandtourism"
        },
        {
          label_en: "Personal and household finances",
          label_cy: "Cyllid personol a chyllid aelwydydd",
          url: "/peoplepopulationandcommunity/personalandhouseholdfinances"
        },
        {
          label_en: "Population and migration",
          label_cy: "Poblogaeth ac ymfudo",
          url: "/peoplepopulationandcommunity/populationandmigration"
        },
        {
          label_en: "Well-being",
          label_cy: "Lles",
          url: "/peoplepopulationandcommunity/wellbeing"
        }
      ]
    },
    {
      label_en: "Taking part in a survey?",
      label_cy: "Cymryd rhan mewn arolwg?",
      url: "/surveys"
    },
    {
      label_en: "Release calendar",
      label_cy: "Calendar datganiadau",
      url: "/releasecalendar",
      secondary: true
    },
    {
      label_en: "Methodology",
      label_cy: "Methodoleg",
      url: "/methodology",
      secondary: true
    },
    {
      label_en: "Media",
      label_cy: "Media",
      url: "/news",
      secondary: true
    },
    {
      label_en: "About",
      label_cy: "Amdanom ni",
      url: "/aboutus",
      secondary: true
    },
    {
      label_en: "Blog",
      label_cy: "Blog",
      url: "https://blog.ons.gov.uk/",
      secondary: true
    }
  ];
  const texts = {
    "Home": "Hafan",
    "Search": "Chwilio",
    "Menu": "Dewislen",
    "Hide search": "Cuddio",
    "Office for National Statistics logo - Homepage": "Logo Swyddfa Ystadegau Gwladol - Hafan",
    "Search for a keyword(s) or time series ID": "Chwilio am allweddair neu ID cyfres amser"
  };
  function i18n(text, lang2) {
    return lang2 == "cy" && texts[text] ? texts[text] : text;
  }
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.baseurl === void 0 && $$bindings.baseurl && baseurl !== void 0)
    $$bindings.baseurl(baseurl);
  return `<header><a class="${"skiplink"}" href="${"#main"}" tabindex="${"0"}">${escape(i18n("Skip to main content", lang))}</a>
	<div id="${"pagePath"}" class="${"hide"}">${escape(path)}</div>
	<div class="${"wrapper"}"><div class="${"header col-wrap"}"><div class="${"col col--lg-one-third col--md-one-third"}"><a href="${escape(baseurl) + "/"}"><img class="${"logo"}" src="${"https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"}"${add_attribute("alt", i18n("Office for National Statistics logo - Homepage", lang), 0)}></a></div>
			<div class="${"col col--lg-two-thirds col--md-two-thirds hide--sm print--hide language--js__container"}"><div class="${"language"}">${lang == "en" ? `<span>English (EN) | </span>
					<a href="${"//cy.ons.gov.uk" + escape(path)}" class="${"language__link"}" lang="${"cy"}">Cymraeg (CY)</a>` : `<a href="${"//www.ons.gov.uk" + escape(path)}" class="${"language__link"}" lang="${"en"}">English (EN)</a>
					<span>| Cymraeg (EN)</span>`}</div></div>
			<div class="${"secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide"}"><ul class="${"secondary-nav__list js-nav-clone__list"}">${each(menu.filter((d) => d.secondary), (item) => {
    return `<li class="${"secondary-nav__item"}"><a class="${"secondary-nav__link js-nav-clone__link"}" href="${escape(baseurl) + escape(item.url)}">${escape(item["label_" + lang])}</a>
					</li>`;
  })}</ul></div></div></div>
	<div class="${"primary-nav print--hide"}"><nav aria-label="${"Header links"}"><ul class="${"nav--controls"}"><li class="${["nav--controls__item", ""].join(" ").trim()}"><a href="${"#nav-primary"}" id="${"menu-toggle"}" aria-controls="${"nav-primary"}"${add_attribute("aria-expanded", menuExpanded, 0)} class="${"nav--controls__menu"}"><span class="${"nav--controls__text"}">${escape(i18n("Menu", lang))}</span></a></li>
				<li class="${["nav--controls__item", ""].join(" ").trim()}"><a href="${"#nav-search"}" id="${"search-toggle"}" aria-controls="${"nav-search"}"${add_attribute("aria-expanded", searchExpanded, 0)} class="${"nav--controls__search"}"><span class="${"nav--controls__text"}">${escape(i18n("Search", lang))}</span></a></li></ul>
			<ul class="${["wrapper primary-nav__list", "nav-main--hidden"].join(" ").trim()}" id="${"nav-primary"}"${add_attribute("aria-expanded", menuExpanded, 0)}><li class="${"primary-nav__item js-nav"}"><a class="${"primary-nav__link col col--md-7 col--lg-9"}" href="${escape(baseurl) + "/"}" style="${"color: #e5e6e7"}">${escape(i18n("Home", lang))}</a></li>
				${each([
    ...menu.filter((d) => d.children).sort((a, b) => a["label_" + lang].localeCompare(b["label_" + lang])),
    ...menu.filter((d) => !d.children)
  ], (item, i) => {
    return `${item.children ? `<li class="${[
      "primary-nav__item js-nav js-expandable",
      item.expanded ? "js-expandable-active" : ""
    ].join(" ").trim()}"><a class="${"primary-nav__link col col--md-8 col--lg-10"}" href="${escape(baseurl) + escape(item.url)}" aria-expanded="${"false"}" aria-label="${escape(item["label_" + lang]) + " sub menu"}"><span aria-hidden="${"true"}" class="${"expansion-indicator"}"></span>
					<span class="${"submenu-title"}">${escape(item["label_" + lang])}
					</span></a>
					<ul class="${[
      "primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content jsEnhance",
      !item.expanded ? "js-nav-hidden" : ""
    ].join(" ").trim()}"${add_attribute("aria-expanded", item.expanded, 0)} aria-label="${"submenu"}"><li class="${"primary-nav__child-item js-expandable__child hide--md"}"><a class="${"primary-nav__child-link"}" tabindex="${"-1"}" href="${escape(baseurl) + escape(item.url)}">${escape(item["label_" + lang])}</a></li>
						${each([...item.children].sort((a, b) => a["label_" + lang].localeCompare(b["label_" + lang])), (child) => {
      return `<li class="${"primary-nav__child-item js-expandable__child"}"><a class="${"primary-nav__child-link"}" tabindex="${"-1"}" href="${escape(baseurl) + escape(child.url)}">${escape(child["label_" + lang])}</a>
						</li>`;
    })}</ul>
				</li>` : `<li class="${["primary-nav__item js-nav", item.secondary ? "hide--md" : ""].join(" ").trim()}"><a class="${"primary-nav__link col col--md-8 col--lg-10"}" href="${escape(baseurl) + escape(item.url)}">${escape(item["label_" + lang])}</a>
				</li>`}`;
  })}
				<li class="${"hide--md primary-nav__language"}">${lang == "en" ? `<span>English (EN) | </span>
					<a href="${"//cy.ons.gov.uk" + escape(path)}" class="${"language__link"}" lang="${"cy"}">Cymraeg (CY)</a>` : `<a href="${"//www.ons.gov.uk" + escape(path)}" class="${"language__link"}" lang="${"en"}">English (EN)</a>
					<span>| Cymraeg (EN)</span>`}</li></ul></nav></div>
	<div class="${["search print--hide", "nav-search--hidden"].join(" ").trim()}" id="${"searchBar"}"${add_attribute("aria-expanded", searchExpanded, 0)}><div class="${"wrapper"}" role="${"search"}"><form class="${"col-wrap search__form"}" action="${escape(baseurl) + "/search"}"><label class="${"search__label col col--md-23 col--lg-24"}" for="${"nav-search"}">${escape(i18n("Search for a keyword(s) or time series ID", lang))}</label>
				<input type="${"search"}" autocomplete="${"off"}" class="${"search__input col col--md-21 col--lg-32"}" id="${"nav-search"}" name="${"q"}" value="${""}">
				<button type="${"submit"}" class="${"search__button col--md-3 col--lg-3"}" id="${"nav-search-submit"}"><span class="${"visuallyhidden"}">${escape(i18n("Search", lang))}</span>
				<span class="${"icon icon-search--light"}"></span></button></form></div></div></header>`;
});
const ONSFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang = "en" } = $$props;
  let { baseurl = "//www.ons.gov.uk" } = $$props;
  const texts = {
    "Footer links": "",
    "Help": "Cymorth",
    "Accessibility": "Hygyrchedd",
    "Cookies": "Cookies",
    "Privacy": "Privacy",
    "Terms and conditions": "Telerau ac amodau",
    "About ONS": "Yngl\u0177n ag SYG",
    "What we do": "Beth rydym yn ei wneud",
    "Careers": "Gyrfaoedd",
    "Contact us": "Cysylltu \xE2 ni",
    "Freedom of Information": "Rhyddid Gwybodaeth",
    "Connect with us": "Cysylltu \xE2 ni",
    "Twitter": "Twitter",
    "Facebook": "Facebook",
    "LinkedIn": "LinkedIn",
    "Consulations": "Consulations",
    "Discussion forums": "Discussion forums",
    "Email alerts": "Rhybuddion ebost",
    "All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated": "Mae'r holl gynnwys ar gael o dan delerau'r <a href='https://www.nationalarchives.gov.uk/doc/open-government-licence-cymraeg/version/3/'>Drwydded Llywodraeth Agored f3.0"
  };
  function i18n(text, lang2) {
    return lang2 == "cy" && texts[text] ? texts[text] : text;
  }
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.baseurl === void 0 && $$bindings.baseurl && baseurl !== void 0)
    $$bindings.baseurl(baseurl);
  return `<footer class="${"print--hide margin-top--4"}"><h2 class="${"visuallyhidden"}">${escape(i18n("Footer links", lang))}</h2>
	<div class="${"footer"}"><div class="${"wrapper"}"><nav aria-label="${"Footer links"}"><div class="${"footer-nav col-wrap"}"><div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${escape(i18n("Help", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/help/accessibility"}">${escape(i18n("Accessibility", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/cookies"}">${escape(i18n("Cookies", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/help/privacynotice"}">${escape(i18n("Privacy", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/help/termsandconditions"}">${escape(i18n("Terms and conditions", lang))}</a></li></ul></div>
					<div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${escape(i18n("About ONS", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/aboutus/whatwedo"}">${escape(i18n("What we do", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/aboutus/careers"}">${escape(i18n("Careers", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/aboutus/contactus"}">${escape(i18n("Contact us", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${escape(baseurl) + "/aboutus/transparencyandgovernance/freedomofinformationfoi"}">${escape(i18n("Freedom of Information", lang))}</a></li></ul></div>
					<div class="${"col col--lg-one-third col--md-one-third"}"><h3 class="${"footer-nav__heading"}">${escape(i18n("Connect with us", lang))}</h3>
						<ul class="${"footer-nav__list"}"><li class="${"footer-nav__item"}"><a href="${"https://twitter.com/ONS"}">${escape(i18n("Twitter", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.facebook.com/ONS"}">${escape(i18n("Facebook", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.linkedin.com/company/office-for-national-statistics"}">${escape(i18n("LinkedIn", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://consultations.ons.gov.uk/"}">${escape(i18n("Consultations", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://www.statsusernet.org.uk/login"}">${escape(i18n("Discussion forums", lang))}</a></li>
							<li class="${"footer-nav__item"}"><a href="${"https://public.govdelivery.com/accounts/UKONS/subscribers/new"}">${escape(i18n("Email alerts", lang))}</a></li></ul></div></div></nav></div>
		<div class="${"wrapper"}"><div class="${"footer-license"}"><img class="${"footer-license__img"}" alt="${"OGL"}" width="${"60"}" src="${"https://cdn.ons.gov.uk/assets/images/logo-ogl-footer.svg"}">
				<p class="${"footer-license__text margin-left-sm--0"}"><!-- HTML_TAG_START -->${i18n("All content is available under the <a href='http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'>Open Government Licence v3.0</a>, except where otherwise stated", lang)}<!-- HTML_TAG_END --></p></div></div></div></footer>`;
});
let theme = "light";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let path = $page.url.pathname;
  let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";
  setContext("theme", themes[theme]);
  $$unsubscribe_page();
  return `${$$result.head += `<link rel="${"icon"}" href="${escape(assets) + "/favicon.ico"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:url"}" content="${escape(assets) + "/"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image"}" content="${escape(assets) + "/img/og.png"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image:type"}" content="${"image/png"}" data-svelte="svelte-1ttl8ld">`, ""}

${validate_component(Warning, "Warning").$$render($$result, {}, {}, {
    default: () => {
      return `WARNING! This is a prototype containing a combination of old and synthetic data. This prototype contains inaccuracies. Please do not share data from this prototype.
`;
    }
  })}

${validate_component(ONSHeader, "ONSHeader").$$render($$result, { baseurl, path, lang }, {}, {})}

<main id="${"main"}" tabindex="${"-1"}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(ONSFooter, "ONSFooter").$$render($$result, { baseurl, lang }, {}, {})}`;
});
export { _layout as default };
