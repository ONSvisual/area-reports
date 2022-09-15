import { c as create_ssr_component, a as add_styles, h as merge_ssr_styles, e as escape, b as add_attribute, i as add_classes, j as createEventDispatcher, v as validate_component, d as each } from "../../chunks/index-d26a41fd.js";
import { a as assets, b as base } from "../../chunks/paths-396f020f.js";
import { S as Select, a as Section } from "../../chunks/Select-270fd6e3.js";
var Icon_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".icon.svelte-175wki3{position:inherit;width:1em;height:1em;fill:currentColor;overflow:visible;transition:all 0.3s ease-out}.noclick.svelte-175wki3{pointer-events:none}.margin.svelte-175wki3{margin:0}.left.svelte-175wki3{margin-right:5px}.right.svelte-175wki3{margin-left:5px}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let { type = "arrow" } = $$props;
  let { rotation = 0 } = $$props;
  let { position = null } = $$props;
  let { clickable = false } = $$props;
  let { margin = false } = $$props;
  const paths = {
    arrow: "M5,13h11.2l-2.9,2.9c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l4.6-4.6c0.4-0.4,0.4-1,0-1.4l-4.6-4.6c-0.4-0.4-1-0.4-1.4,0c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l2.9,2.9H5c-0.6,0-1,0.4-1,1S4.4,13,5,13z",
    info: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
    share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
    marker: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    layers: "m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z",
    split: "M18 4v5H6V4h12m0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 13v5H6v-5h12m0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2z",
    menu: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
    close: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    chevron: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z",
    globe: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",
    pen: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
    heart: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    email: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
  };
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.clickable === void 0 && $$bindings.clickable && clickable !== void 0)
    $$bindings.clickable(clickable);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  $$result.css.add(css$4);
  style = `transform: translate(0, 15%) scale(1.5) rotate(${-rotation}deg);`;
  return `<svg class="${[
    "icon svelte-175wki3",
    (margin ? "margin" : "") + " " + (!clickable ? "noclick" : "") + " " + (position == "left" ? "left" : "") + " " + (position == "right" ? "right" : "")
  ].join(" ").trim()}" viewBox="${"0 0 24 24"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}"${add_styles(merge_ssr_styles(escape(style), { "transform": `rotate(${rotation}deg)` }))}><path${add_attribute("d", paths[type], 0)}></path></svg>`;
});
const themes = {
  "light": {
    "text": "#222",
    "muted": "#777",
    "pale": "#f0f0f0",
    "background": "#fff"
  },
  "dark": {
    "text": "#fff",
    "muted": "#bbb",
    "pale": "#333",
    "background": "#222"
  },
  "lightblue": {
    "text": "#206095",
    "muted": "#707070",
    "pale": "#f0f0f0",
    "background": "rgb(188, 207, 222)"
  },
  "lightgrey": {
    "text": "#222",
    "muted": "#707070",
    "pale": "#f0f0f0",
    "background": "#f5f5f5"
  }
};
var Media_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".grid-ms.svelte-rt6ug7{display:grid;display:-ms-grid;-ms-grid-columns:1fr;grid-template-columns:1fr;margin-top:40px}.grid.svelte-rt6ug7{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill, 100%);margin:40px 0 0 0}.grid-narrow.svelte-rt6ug7{grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)) !important}.grid-medium.svelte-rt6ug7{grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)) !important}.grid-wide.svelte-rt6ug7{grid-template-columns:repeat(auto-fill, minmax(500px, 1fr)) !important}.grid > div{min-height:inherit}.col-custom.svelte-rt6ug7{width:100%;max-width:980px;margin:0 12px}",
  map: null
};
let theme$1 = "light";
const Media = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { col = "medium" } = $$props;
  let { grid = null } = $$props;
  let { caption = null } = $$props;
  let { height = 200 } = $$props;
  let { gap = 12 } = $$props;
  let gridClass = grid ? ` grid-${grid}` : "";
  let rowHeight = !Number.isNaN(height) ? height + "px" : height;
  let gridGap = !Number.isNaN(gap) ? gap + "px" : gap;
  if ($$props.col === void 0 && $$bindings.col && col !== void 0)
    $$bindings.col(col);
  if ($$props.grid === void 0 && $$bindings.grid && grid !== void 0)
    $$bindings.grid(grid);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  $$result.css.add(css$3);
  return `<figure style="${"color: " + escape(themes[theme$1]["text"]) + "; background-color: " + escape(themes[theme$1]["background"]) + ";"}"><div class="${"col-" + escape(col) + " svelte-rt6ug7"}"><div class="${"grid" + escape(gridClass) + " svelte-rt6ug7"}" style="${"grid-gap: " + escape(gridGap) + "; min-height: " + escape(rowHeight)}">${slots.default ? slots.default({}) : ``}</div></div></figure>
${caption ? `<caption style="${"color: " + escape(themes[theme$1]["text"]) + "; background-color: " + escape(themes[theme$1]["background"]) + ";"}"><div class="${"col-" + escape(col) + " svelte-rt6ug7"}"><div class="${"caption"}"><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></div></div></caption>` : ``}`;
});
var regions = [
  {
    code: "E12000001",
    name: "North East"
  },
  {
    code: "E12000002",
    name: "North West"
  },
  {
    code: "E12000003",
    name: "Yorkshire and The Humber"
  },
  {
    code: "E12000004",
    name: "East Midlands"
  },
  {
    code: "E12000005",
    name: "West Midlands"
  },
  {
    code: "E12000006",
    name: "East of England"
  },
  {
    code: "E12000007",
    name: "London"
  },
  {
    code: "E12000008",
    name: "South East"
  },
  {
    code: "E12000009",
    name: "South West"
  },
  {
    code: "W92000004",
    name: "Wales"
  }
];
var items = [
  {
    areacd: "E07000223",
    areanm: "Adur",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000026",
    areanm: "Allerdale",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000032",
    areanm: "Amber Valley",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000224",
    areanm: "Arun",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000170",
    areanm: "Ashfield",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000105",
    areanm: "Ashford",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000200",
    areanm: "Babergh",
    regioncd: "E12000006"
  },
  {
    areacd: "E09000002",
    areanm: "Barking and Dagenham",
    regioncd: "E12000007"
  },
  {
    areacd: "E09000003",
    areanm: "Barnet",
    regioncd: "E12000007"
  },
  {
    areacd: "E08000016",
    areanm: "Barnsley",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000027",
    areanm: "Barrow-in-Furness",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000066",
    areanm: "Basildon",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000084",
    areanm: "Basingstoke and Deane",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000171",
    areanm: "Bassetlaw",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000022",
    areanm: "Bath and North East Somerset",
    regioncd: "E12000009"
  },
  {
    areacd: "E06000055",
    areanm: "Bedford",
    regioncd: "E12000006"
  },
  {
    areacd: "E09000004",
    areanm: "Bexley",
    regioncd: "E12000007"
  },
  {
    areacd: "E08000025",
    areanm: "Birmingham",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000129",
    areanm: "Blaby",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000008",
    areanm: "Blackburn with Darwen",
    regioncd: "E12000002"
  },
  {
    areacd: "E06000009",
    areanm: "Blackpool",
    regioncd: "E12000002"
  },
  {
    areacd: "W06000019",
    areanm: "Blaenau Gwent",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000033",
    areanm: "Bolsover",
    regioncd: "E12000004"
  },
  {
    areacd: "E08000001",
    areanm: "Bolton",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000136",
    areanm: "Boston",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000058",
    areanm: "Bournemouth, Christchurch and Poole",
    regioncd: "E12000009"
  },
  {
    areacd: "E06000036",
    areanm: "Bracknell Forest",
    regioncd: "E12000008"
  },
  {
    areacd: "E08000032",
    areanm: "Bradford",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000067",
    areanm: "Braintree",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000143",
    areanm: "Breckland",
    regioncd: "E12000006"
  },
  {
    areacd: "E09000005",
    areanm: "Brent",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000068",
    areanm: "Brentwood",
    regioncd: "E12000006"
  },
  {
    areacd: "W06000013",
    areanm: "Bridgend",
    regioncd: "W92000004"
  },
  {
    areacd: "E06000043",
    areanm: "Brighton and Hove",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000023",
    areanm: "Bristol",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000144",
    areanm: "Broadland",
    regioncd: "E12000006"
  },
  {
    areacd: "E09000006",
    areanm: "Bromley",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000234",
    areanm: "Bromsgrove",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000095",
    areanm: "Broxbourne",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000172",
    areanm: "Broxtowe",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000060",
    areanm: "Buckinghamshire",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000117",
    areanm: "Burnley",
    regioncd: "E12000002"
  },
  {
    areacd: "E08000002",
    areanm: "Bury",
    regioncd: "E12000002"
  },
  {
    areacd: "W06000018",
    areanm: "Caerphilly",
    regioncd: "W92000004"
  },
  {
    areacd: "E08000033",
    areanm: "Calderdale",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000008",
    areanm: "Cambridge",
    regioncd: "E12000006"
  },
  {
    areacd: "E09000007",
    areanm: "Camden",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000192",
    areanm: "Cannock Chase",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000106",
    areanm: "Canterbury",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000015",
    areanm: "Cardiff",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000028",
    areanm: "Carlisle",
    regioncd: "E12000002"
  },
  {
    areacd: "W06000010",
    areanm: "Carmarthenshire",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000069",
    areanm: "Castle Point",
    regioncd: "E12000006"
  },
  {
    areacd: "E06000056",
    areanm: "Central Bedfordshire",
    regioncd: "E12000006"
  },
  {
    areacd: "W06000008",
    areanm: "Ceredigion",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000130",
    areanm: "Charnwood",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000070",
    areanm: "Chelmsford",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000078",
    areanm: "Cheltenham",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000177",
    areanm: "Cherwell",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000049",
    areanm: "Cheshire East",
    regioncd: "E12000002"
  },
  {
    areacd: "E06000050",
    areanm: "Cheshire West and Chester",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000034",
    areanm: "Chesterfield",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000225",
    areanm: "Chichester",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000118",
    areanm: "Chorley",
    regioncd: "E12000002"
  },
  {
    areacd: "E09000001",
    areanm: "City of London",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000071",
    areanm: "Colchester",
    regioncd: "E12000006"
  },
  {
    areacd: "W06000003",
    areanm: "Conwy",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000029",
    areanm: "Copeland",
    regioncd: "E12000002"
  },
  {
    areacd: "E06000052",
    areanm: "Cornwall",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000079",
    areanm: "Cotswold",
    regioncd: "E12000009"
  },
  {
    areacd: "E06000047",
    areanm: "County Durham",
    regioncd: "E12000001"
  },
  {
    areacd: "E08000026",
    areanm: "Coventry",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000163",
    areanm: "Craven",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000226",
    areanm: "Crawley",
    regioncd: "E12000008"
  },
  {
    areacd: "E09000008",
    areanm: "Croydon",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000096",
    areanm: "Dacorum",
    regioncd: "E12000006"
  },
  {
    areacd: "E06000005",
    areanm: "Darlington",
    regioncd: "E12000001"
  },
  {
    areacd: "E07000107",
    areanm: "Dartford",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000004",
    areanm: "Denbighshire",
    regioncd: "W92000004"
  },
  {
    areacd: "E06000015",
    areanm: "Derby",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000035",
    areanm: "Derbyshire Dales",
    regioncd: "E12000004"
  },
  {
    areacd: "E08000017",
    areanm: "Doncaster",
    regioncd: "E12000003"
  },
  {
    areacd: "E06000059",
    areanm: "Dorset",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000108",
    areanm: "Dover",
    regioncd: "E12000008"
  },
  {
    areacd: "E08000027",
    areanm: "Dudley",
    regioncd: "E12000005"
  },
  {
    areacd: "E09000009",
    areanm: "Ealing",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000009",
    areanm: "East Cambridgeshire",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000040",
    areanm: "East Devon",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000085",
    areanm: "East Hampshire",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000242",
    areanm: "East Hertfordshire",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000137",
    areanm: "East Lindsey",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000011",
    areanm: "East Riding of Yorkshire",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000193",
    areanm: "East Staffordshire",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000244",
    areanm: "East Suffolk",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000061",
    areanm: "Eastbourne",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000086",
    areanm: "Eastleigh",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000030",
    areanm: "Eden",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000207",
    areanm: "Elmbridge",
    regioncd: "E12000008"
  },
  {
    areacd: "E09000010",
    areanm: "Enfield",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000072",
    areanm: "Epping Forest",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000208",
    areanm: "Epsom and Ewell",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000036",
    areanm: "Erewash",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000041",
    areanm: "Exeter",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000087",
    areanm: "Fareham",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000010",
    areanm: "Fenland",
    regioncd: "E12000006"
  },
  {
    areacd: "W06000005",
    areanm: "Flintshire",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000112",
    areanm: "Folkestone and Hythe",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000080",
    areanm: "Forest of Dean",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000119",
    areanm: "Fylde",
    regioncd: "E12000002"
  },
  {
    areacd: "E08000037",
    areanm: "Gateshead",
    regioncd: "E12000001"
  },
  {
    areacd: "E07000173",
    areanm: "Gedling",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000081",
    areanm: "Gloucester",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000088",
    areanm: "Gosport",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000109",
    areanm: "Gravesham",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000145",
    areanm: "Great Yarmouth",
    regioncd: "E12000006"
  },
  {
    areacd: "E09000011",
    areanm: "Greenwich",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000209",
    areanm: "Guildford",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000002",
    areanm: "Gwynedd",
    regioncd: "W92000004"
  },
  {
    areacd: "E09000012",
    areanm: "Hackney",
    regioncd: "E12000007"
  },
  {
    areacd: "E06000006",
    areanm: "Halton",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000164",
    areanm: "Hambleton",
    regioncd: "E12000003"
  },
  {
    areacd: "E09000013",
    areanm: "Hammersmith and Fulham",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000131",
    areanm: "Harborough",
    regioncd: "E12000004"
  },
  {
    areacd: "E09000014",
    areanm: "Haringey",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000073",
    areanm: "Harlow",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000165",
    areanm: "Harrogate",
    regioncd: "E12000003"
  },
  {
    areacd: "E09000015",
    areanm: "Harrow",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000089",
    areanm: "Hart",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000001",
    areanm: "Hartlepool",
    regioncd: "E12000001"
  },
  {
    areacd: "E07000062",
    areanm: "Hastings",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000090",
    areanm: "Havant",
    regioncd: "E12000008"
  },
  {
    areacd: "E09000016",
    areanm: "Havering",
    regioncd: "E12000007"
  },
  {
    areacd: "E06000019",
    areanm: "Herefordshire",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000098",
    areanm: "Hertsmere",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000037",
    areanm: "High Peak",
    regioncd: "E12000004"
  },
  {
    areacd: "E09000017",
    areanm: "Hillingdon",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000132",
    areanm: "Hinckley and Bosworth",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000227",
    areanm: "Horsham",
    regioncd: "E12000008"
  },
  {
    areacd: "E09000018",
    areanm: "Hounslow",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000011",
    areanm: "Huntingdonshire",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000120",
    areanm: "Hyndburn",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000202",
    areanm: "Ipswich",
    regioncd: "E12000006"
  },
  {
    areacd: "W06000001",
    areanm: "Isle of Anglesey",
    regioncd: "W92000004"
  },
  {
    areacd: "E06000046",
    areanm: "Isle of Wight",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000053",
    areanm: "Isles of Scilly",
    regioncd: "E12000009"
  },
  {
    areacd: "E09000019",
    areanm: "Islington",
    regioncd: "E12000007"
  },
  {
    areacd: "E09000020",
    areanm: "Kensington and Chelsea",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000146",
    areanm: "King's Lynn and West Norfolk",
    regioncd: "E12000006"
  },
  {
    areacd: "E06000010",
    areanm: "Kingston upon Hull",
    regioncd: "E12000003"
  },
  {
    areacd: "E09000021",
    areanm: "Kingston upon Thames",
    regioncd: "E12000007"
  },
  {
    areacd: "E08000034",
    areanm: "Kirklees",
    regioncd: "E12000003"
  },
  {
    areacd: "E08000011",
    areanm: "Knowsley",
    regioncd: "E12000002"
  },
  {
    areacd: "E09000022",
    areanm: "Lambeth",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000121",
    areanm: "Lancaster",
    regioncd: "E12000002"
  },
  {
    areacd: "E08000035",
    areanm: "Leeds",
    regioncd: "E12000003"
  },
  {
    areacd: "E06000016",
    areanm: "Leicester",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000063",
    areanm: "Lewes",
    regioncd: "E12000008"
  },
  {
    areacd: "E09000023",
    areanm: "Lewisham",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000194",
    areanm: "Lichfield",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000138",
    areanm: "Lincoln",
    regioncd: "E12000004"
  },
  {
    areacd: "E08000012",
    areanm: "Liverpool",
    regioncd: "E12000002"
  },
  {
    areacd: "E06000032",
    areanm: "Luton",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000110",
    areanm: "Maidstone",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000074",
    areanm: "Maldon",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000235",
    areanm: "Malvern Hills",
    regioncd: "E12000005"
  },
  {
    areacd: "E08000003",
    areanm: "Manchester",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000174",
    areanm: "Mansfield",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000035",
    areanm: "Medway",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000133",
    areanm: "Melton",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000187",
    areanm: "Mendip",
    regioncd: "E12000009"
  },
  {
    areacd: "W06000024",
    areanm: "Merthyr Tydfil",
    regioncd: "W92000004"
  },
  {
    areacd: "E09000024",
    areanm: "Merton",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000042",
    areanm: "Mid Devon",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000203",
    areanm: "Mid Suffolk",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000228",
    areanm: "Mid Sussex",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000002",
    areanm: "Middlesbrough",
    regioncd: "E12000001"
  },
  {
    areacd: "E06000042",
    areanm: "Milton Keynes",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000210",
    areanm: "Mole Valley",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000021",
    areanm: "Monmouthshire",
    regioncd: "W92000004"
  },
  {
    areacd: "W06000012",
    areanm: "Neath Port Talbot",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000091",
    areanm: "New Forest",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000175",
    areanm: "Newark and Sherwood",
    regioncd: "E12000004"
  },
  {
    areacd: "E08000021",
    areanm: "Newcastle upon Tyne",
    regioncd: "E12000001"
  },
  {
    areacd: "E07000195",
    areanm: "Newcastle-under-Lyme",
    regioncd: "E12000005"
  },
  {
    areacd: "E09000025",
    areanm: "Newham",
    regioncd: "E12000007"
  },
  {
    areacd: "W06000022",
    areanm: "Newport",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000043",
    areanm: "North Devon",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000038",
    areanm: "North East Derbyshire",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000012",
    areanm: "North East Lincolnshire",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000099",
    areanm: "North Hertfordshire",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000139",
    areanm: "North Kesteven",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000013",
    areanm: "North Lincolnshire",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000147",
    areanm: "North Norfolk",
    regioncd: "E12000006"
  },
  {
    areacd: "E06000061",
    areanm: "North Northamptonshire",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000024",
    areanm: "North Somerset",
    regioncd: "E12000009"
  },
  {
    areacd: "E08000022",
    areanm: "North Tyneside",
    regioncd: "E12000001"
  },
  {
    areacd: "E07000218",
    areanm: "North Warwickshire",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000134",
    areanm: "North West Leicestershire",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000057",
    areanm: "Northumberland",
    regioncd: "E12000001"
  },
  {
    areacd: "E07000148",
    areanm: "Norwich",
    regioncd: "E12000006"
  },
  {
    areacd: "E06000018",
    areanm: "Nottingham",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000219",
    areanm: "Nuneaton and Bedworth",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000135",
    areanm: "Oadby and Wigston",
    regioncd: "E12000004"
  },
  {
    areacd: "E08000004",
    areanm: "Oldham",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000178",
    areanm: "Oxford",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000009",
    areanm: "Pembrokeshire",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000122",
    areanm: "Pendle",
    regioncd: "E12000002"
  },
  {
    areacd: "E06000031",
    areanm: "Peterborough",
    regioncd: "E12000006"
  },
  {
    areacd: "E06000026",
    areanm: "Plymouth",
    regioncd: "E12000009"
  },
  {
    areacd: "E06000044",
    areanm: "Portsmouth",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000023",
    areanm: "Powys",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000123",
    areanm: "Preston",
    regioncd: "E12000002"
  },
  {
    areacd: "E06000038",
    areanm: "Reading",
    regioncd: "E12000008"
  },
  {
    areacd: "E09000026",
    areanm: "Redbridge",
    regioncd: "E12000007"
  },
  {
    areacd: "E06000003",
    areanm: "Redcar and Cleveland",
    regioncd: "E12000001"
  },
  {
    areacd: "E07000236",
    areanm: "Redditch",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000211",
    areanm: "Reigate and Banstead",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000016",
    areanm: "Rhondda Cynon Taf",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000124",
    areanm: "Ribble Valley",
    regioncd: "E12000002"
  },
  {
    areacd: "E09000027",
    areanm: "Richmond upon Thames",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000166",
    areanm: "Richmondshire",
    regioncd: "E12000003"
  },
  {
    areacd: "E08000005",
    areanm: "Rochdale",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000075",
    areanm: "Rochford",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000125",
    areanm: "Rossendale",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000064",
    areanm: "Rother",
    regioncd: "E12000008"
  },
  {
    areacd: "E08000018",
    areanm: "Rotherham",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000220",
    areanm: "Rugby",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000212",
    areanm: "Runnymede",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000176",
    areanm: "Rushcliffe",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000092",
    areanm: "Rushmoor",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000017",
    areanm: "Rutland",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000167",
    areanm: "Ryedale",
    regioncd: "E12000003"
  },
  {
    areacd: "E08000006",
    areanm: "Salford",
    regioncd: "E12000002"
  },
  {
    areacd: "E08000028",
    areanm: "Sandwell",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000168",
    areanm: "Scarborough",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000188",
    areanm: "Sedgemoor",
    regioncd: "E12000009"
  },
  {
    areacd: "E08000014",
    areanm: "Sefton",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000169",
    areanm: "Selby",
    regioncd: "E12000003"
  },
  {
    areacd: "E07000111",
    areanm: "Sevenoaks",
    regioncd: "E12000008"
  },
  {
    areacd: "E08000019",
    areanm: "Sheffield",
    regioncd: "E12000003"
  },
  {
    areacd: "E06000051",
    areanm: "Shropshire",
    regioncd: "E12000005"
  },
  {
    areacd: "E06000039",
    areanm: "Slough",
    regioncd: "E12000008"
  },
  {
    areacd: "E08000029",
    areanm: "Solihull",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000246",
    areanm: "Somerset West and Taunton",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000012",
    areanm: "South Cambridgeshire",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000039",
    areanm: "South Derbyshire",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000025",
    areanm: "South Gloucestershire",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000044",
    areanm: "South Hams",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000140",
    areanm: "South Holland",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000141",
    areanm: "South Kesteven",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000031",
    areanm: "South Lakeland",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000149",
    areanm: "South Norfolk",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000179",
    areanm: "South Oxfordshire",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000126",
    areanm: "South Ribble",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000189",
    areanm: "South Somerset",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000196",
    areanm: "South Staffordshire",
    regioncd: "E12000005"
  },
  {
    areacd: "E08000023",
    areanm: "South Tyneside",
    regioncd: "E12000001"
  },
  {
    areacd: "E06000045",
    areanm: "Southampton",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000033",
    areanm: "Southend-on-Sea",
    regioncd: "E12000006"
  },
  {
    areacd: "E09000028",
    areanm: "Southwark",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000213",
    areanm: "Spelthorne",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000240",
    areanm: "St Albans",
    regioncd: "E12000006"
  },
  {
    areacd: "E08000013",
    areanm: "St. Helens",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000197",
    areanm: "Stafford",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000198",
    areanm: "Staffordshire Moorlands",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000243",
    areanm: "Stevenage",
    regioncd: "E12000006"
  },
  {
    areacd: "E08000007",
    areanm: "Stockport",
    regioncd: "E12000002"
  },
  {
    areacd: "E06000004",
    areanm: "Stockton-on-Tees",
    regioncd: "E12000001"
  },
  {
    areacd: "E06000021",
    areanm: "Stoke-on-Trent",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000221",
    areanm: "Stratford-on-Avon",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000082",
    areanm: "Stroud",
    regioncd: "E12000009"
  },
  {
    areacd: "E08000024",
    areanm: "Sunderland",
    regioncd: "E12000001"
  },
  {
    areacd: "E07000214",
    areanm: "Surrey Heath",
    regioncd: "E12000008"
  },
  {
    areacd: "E09000029",
    areanm: "Sutton",
    regioncd: "E12000007"
  },
  {
    areacd: "E07000113",
    areanm: "Swale",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000011",
    areanm: "Swansea",
    regioncd: "W92000004"
  },
  {
    areacd: "E06000030",
    areanm: "Swindon",
    regioncd: "E12000009"
  },
  {
    areacd: "E08000008",
    areanm: "Tameside",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000199",
    areanm: "Tamworth",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000215",
    areanm: "Tandridge",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000045",
    areanm: "Teignbridge",
    regioncd: "E12000009"
  },
  {
    areacd: "E06000020",
    areanm: "Telford and Wrekin",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000076",
    areanm: "Tendring",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000093",
    areanm: "Test Valley",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000083",
    areanm: "Tewkesbury",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000114",
    areanm: "Thanet",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000102",
    areanm: "Three Rivers",
    regioncd: "E12000006"
  },
  {
    areacd: "E06000034",
    areanm: "Thurrock",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000115",
    areanm: "Tonbridge and Malling",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000027",
    areanm: "Torbay",
    regioncd: "E12000009"
  },
  {
    areacd: "W06000020",
    areanm: "Torfaen",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000046",
    areanm: "Torridge",
    regioncd: "E12000009"
  },
  {
    areacd: "E09000030",
    areanm: "Tower Hamlets",
    regioncd: "E12000007"
  },
  {
    areacd: "E08000009",
    areanm: "Trafford",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000116",
    areanm: "Tunbridge Wells",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000077",
    areanm: "Uttlesford",
    regioncd: "E12000006"
  },
  {
    areacd: "W06000014",
    areanm: "Vale of Glamorgan",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000180",
    areanm: "Vale of White Horse",
    regioncd: "E12000008"
  },
  {
    areacd: "E08000036",
    areanm: "Wakefield",
    regioncd: "E12000003"
  },
  {
    areacd: "E08000030",
    areanm: "Walsall",
    regioncd: "E12000005"
  },
  {
    areacd: "E09000031",
    areanm: "Waltham Forest",
    regioncd: "E12000007"
  },
  {
    areacd: "E09000032",
    areanm: "Wandsworth",
    regioncd: "E12000007"
  },
  {
    areacd: "E06000007",
    areanm: "Warrington",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000222",
    areanm: "Warwick",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000103",
    areanm: "Watford",
    regioncd: "E12000006"
  },
  {
    areacd: "E07000216",
    areanm: "Waverley",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000065",
    areanm: "Wealden",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000241",
    areanm: "Welwyn Hatfield",
    regioncd: "E12000006"
  },
  {
    areacd: "E06000037",
    areanm: "West Berkshire",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000047",
    areanm: "West Devon",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000127",
    areanm: "West Lancashire",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000142",
    areanm: "West Lindsey",
    regioncd: "E12000004"
  },
  {
    areacd: "E06000062",
    areanm: "West Northamptonshire",
    regioncd: "E12000004"
  },
  {
    areacd: "E07000181",
    areanm: "West Oxfordshire",
    regioncd: "E12000008"
  },
  {
    areacd: "E07000245",
    areanm: "West Suffolk",
    regioncd: "E12000006"
  },
  {
    areacd: "E09000033",
    areanm: "Westminster",
    regioncd: "E12000007"
  },
  {
    areacd: "E08000010",
    areanm: "Wigan",
    regioncd: "E12000002"
  },
  {
    areacd: "E06000054",
    areanm: "Wiltshire",
    regioncd: "E12000009"
  },
  {
    areacd: "E07000094",
    areanm: "Winchester",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000040",
    areanm: "Windsor and Maidenhead",
    regioncd: "E12000008"
  },
  {
    areacd: "E08000015",
    areanm: "Wirral",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000217",
    areanm: "Woking",
    regioncd: "E12000008"
  },
  {
    areacd: "E06000041",
    areanm: "Wokingham",
    regioncd: "E12000008"
  },
  {
    areacd: "E08000031",
    areanm: "Wolverhampton",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000237",
    areanm: "Worcester",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000229",
    areanm: "Worthing",
    regioncd: "E12000008"
  },
  {
    areacd: "W06000006",
    areanm: "Wrexham",
    regioncd: "W92000004"
  },
  {
    areacd: "E07000238",
    areanm: "Wychavon",
    regioncd: "E12000005"
  },
  {
    areacd: "E07000128",
    areanm: "Wyre",
    regioncd: "E12000002"
  },
  {
    areacd: "E07000239",
    areanm: "Wyre Forest",
    regioncd: "E12000005"
  },
  {
    areacd: "E06000014",
    areanm: "York",
    regioncd: "E12000003"
  }
];
var Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".short.svelte-19u0sv3{min-height:85vh}.v-padded.svelte-19u0sv3{box-sizing:border-box;padding:40px 0}",
  map: null
};
let theme = "light";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgimage = null } = $$props;
  let { bgcolor = null } = $$props;
  let { bgfixed = false } = $$props;
  let { center = true } = $$props;
  let { short = false } = $$props;
  let style = "";
  if (bgimage) {
    style += `background-image: url(${bgimage});`;
  } else {
    style += "background-image: none;";
  }
  if (bgfixed) {
    style += " background-attachment: fixed;";
  }
  if ($$props.bgimage === void 0 && $$bindings.bgimage && bgimage !== void 0)
    $$bindings.bgimage(bgimage);
  if ($$props.bgcolor === void 0 && $$bindings.bgcolor && bgcolor !== void 0)
    $$bindings.bgcolor(bgcolor);
  if ($$props.bgfixed === void 0 && $$bindings.bgfixed && bgfixed !== void 0)
    $$bindings.bgfixed(bgfixed);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.short === void 0 && $$bindings.short && short !== void 0)
    $$bindings.short(short);
  $$result.css.add(css$2);
  return `<header style="${"color: " + escape(themes[theme]["text"]) + "; background-color: " + escape(bgcolor ? bgcolor : themes[theme]["background"]) + "; " + escape(style)}" class="${["svelte-19u0sv3", short ? "short" : ""].join(" ").trim()}"><div class="${[
    "v-padded col-wide middle svelte-19u0sv3",
    (short ? "short" : "") + " " + (!short ? "height-full" : "")
  ].join(" ").trim()}" style="${"position: relative"}"><div${add_classes((center ? "center" : "").trim())}>${slots.default ? slots.default({}) : ``}</div></div></header>`;
});
var Select_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".selectbox.svelte-1w33mjb{box-sizing:border-box;margin:0;border:0}.selectbox.svelte-1w33mjb{--border:2px solid var(--borderColor, #206095);--borderRadius:0;--listBorderRadius:0;--itemFirstBorderRadius:0;--multiItemBorderRadius:0;--padding:0 8px;--multiSelectPadding:0 8px;--clearSelectBottom:auto;--clearSelectRight:8px;--clearSelectTop:auto;--clearSelectWidth:24px;--clearSelectColor:#206095;--borderHoverColor:var(--borderColor, #206095);--borderFocusColor:var(--borderColor, #206095);--inputColor:#206095;--itemColor:#206095;--placeholderColor:#206095;--itemIsActiveBG:#206095;--itemHoverBG:#3875d7;--itemHoverColor:white;--clearSelectColor:white;--clearSelectFocusColor:white;--clearSelectHoverColor:white;--indicatorColor:white;--multiItemActiveColor:white;--multiClearFill:white;--multiClearBG:none;--multiClearHoverBG:none;--multiItemBG:grey;--multiItemActiveBG:grey;--spinnerColor:rgba(255,255,255,0)}.selectbox, .selectbox input, .selectbox .item, .selectbox svg{cursor:pointer !important}.selectbox input:focus{cursor:default !important}.selectbox > .selectContainer{box-shadow:inset -40px 0px #206095}.selectbox.multi-selected > .selectContainer{box-shadow:none !important}.selectbox.focused > .selectContainer{outline:4px solid orange}.selectbox.selected > .selectContainer{background-color:#206095 !important}.selectbox.selected .selectedItem{color:white !important;font-weight:bold}.selectbox .selectedItem .group{display:none}.selectbox .item > .group{font-size:smaller;opacity:0.7}.selectbox .selectContainer > .multiSelectItem{color:white !important;font-weight:bold}.selectbox .selectContainer > .multiSelectItem:nth-of-type(1){background-color:var(--firstItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(2){background-color:var(--secondItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(3){background-color:var(--thirdItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(4){background-color:var(--fourthItem) !important}.selectbox .indicator svg{fill:white}.selectbox .clearSelect{height:24px}.selectbox .clearSelect:focus{outline:4px solid orange}.selectbox .indicator{width:20px;height:20px;line-height:1}.selectbox .multiSelectItem .group{display:none}",
  map: null
};
const Select_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let noOptionsMessage;
  let itemFilter;
  const searchIcon = `<svg viewBox="0 0 20 20" fill-rule="evenodd"><path d="M0,8a8,8,0,1,0,16,0a8,8,0,1,0,-16,0ZM3,8a5,5,0,1,0,10,0a5,5,0,1,0,-10,0Z"/><path d="M18,20L20,18L14,12L12,14Z"/></svg>`;
  const chevronIcon = `<svg viewBox="0 0 20 20"><path d="M1,6L19,6L10,15Z"/></svg>`;
  createEventDispatcher();
  let { id = "" } = $$props;
  let { container = void 0 } = $$props;
  let { mode = "default" } = $$props;
  let { items: items2 } = $$props;
  let { placeholder = "Select one..." } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { isSearchable = true } = $$props;
  let { isClearable = true } = $$props;
  let { autoClear = false } = $$props;
  let { idKey = "value" } = $$props;
  let { labelKey = "label" } = $$props;
  let { groupKey = null } = $$props;
  let { groupItems = false } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { fontSize = "1em" } = $$props;
  let { height = 42 } = $$props;
  let { isMulti = false } = $$props;
  let { maxSelected = 4 } = $$props;
  let { colors = ["#206095", "#a8bd3a", "#871a5b", "#27a0cc"] } = $$props;
  let { darkMode = false } = $$props;
  let { borderColor = darkMode ? "white" : "#206095" } = $$props;
  const getOptionLabel = groupKey && !groupItems ? (option) => `${option[labelKey]} <span class="group">${option[groupKey]}</span>` : (option) => option[labelKey];
  let { getSelectionLabel = (option) => {
    if (option)
      return getOptionLabel(option);
    else
      return null;
  } } = $$props;
  const groupBy = groupItems && groupKey ? (item) => item[groupKey] : void 0;
  const indicatorSvg = mode == "search" ? searchIcon : chevronIcon;
  const containerStyles = `--inputFontSize: ${fontSize}; --groupTitleFontSize: ${fontSize}; --height: ${height}px; font-size: ${fontSize};`;
  const ariaValues = (values) => `${values}, selected.`;
  const ariaListOpen = (label, count) => `You are currently focused on ${label}. There are ${count} results available.`;
  const ariaFocused = () => `Select is focused, type to refine list, press down to open the menu.`;
  let el;
  let isFocused;
  let listOpen;
  let isWaiting;
  let handleClear;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.items === void 0 && $$bindings.items && items2 !== void 0)
    $$bindings.items(items2);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.autoClear === void 0 && $$bindings.autoClear && autoClear !== void 0)
    $$bindings.autoClear(autoClear);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.labelKey === void 0 && $$bindings.labelKey && labelKey !== void 0)
    $$bindings.labelKey(labelKey);
  if ($$props.groupKey === void 0 && $$bindings.groupKey && groupKey !== void 0)
    $$bindings.groupKey(groupKey);
  if ($$props.groupItems === void 0 && $$bindings.groupItems && groupItems !== void 0)
    $$bindings.groupItems(groupItems);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.maxSelected === void 0 && $$bindings.maxSelected && maxSelected !== void 0)
    $$bindings.maxSelected(maxSelected);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.darkMode === void 0 && $$bindings.darkMode && darkMode !== void 0)
    $$bindings.darkMode(darkMode);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    noOptionsMessage = isWaiting ? "Loading..." : mode == "search" && filterText.length < 3 ? "Enter 3 or more characters for suggestions" : `No results match ${filterText}`;
    itemFilter = Array.isArray(value) && value.length >= maxSelected || mode == "search" && filterText.length < 3 ? (label, filterText2, option) => false : (label, filterText2, option) => `${label}`.split("<")[0].toLowerCase().slice(0, filterText2.length) == filterText2.toLowerCase();
    $$rendered = `<div class="${[
      "selectbox svelte-1w33mjb",
      (value && isMulti ? "multi-selected" : "") + " " + (isFocused ? "focused" : "") + " " + (value && !listOpen && !isMulti ? "selected" : "")
    ].join(" ").trim()}"${add_attribute("this", el, 0)}>${validate_component(Select, "Select").$$render($$result, {
      id,
      container,
      items: items2,
      placeholder,
      isMulti,
      isSearchable,
      groupBy,
      loadOptions,
      getSelectionLabel,
      getOptionLabel,
      itemFilter,
      ariaValues,
      ariaListOpen,
      ariaFocused,
      noOptionsMessage,
      indicatorSvg,
      containerStyles,
      optionIdentifier: idKey,
      showIndicator: true,
      isClearable: !isClearable ? false : !isMulti,
      isFocused,
      value,
      listOpen,
      filterText,
      isWaiting,
      handleClear
    }, {
      isFocused: ($$value) => {
        isFocused = $$value;
        $$settled = false;
      },
      value: ($$value) => {
        value = $$value;
        $$settled = false;
      },
      listOpen: ($$value) => {
        listOpen = $$value;
        $$settled = false;
      },
      filterText: ($$value) => {
        filterText = $$value;
        $$settled = false;
      },
      isWaiting: ($$value) => {
        isWaiting = $$value;
        $$settled = false;
      },
      handleClear: ($$value) => {
        handleClear = $$value;
        $$settled = false;
      }
    }, {})}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
var lookup = {
  "E07000223": "Adur",
  "E07000026": "Allerdale",
  "E07000032": "Amber Valley",
  "E07000224": "Arun",
  "E07000170": "Ashfield",
  "E07000105": "Ashford",
  "E07000200": "Babergh",
  "E09000002": "Barking and Dagenham",
  "E09000003": "Barnet",
  "E08000016": "Barnsley",
  "E07000027": "Barrow-in-Furness",
  "E07000066": "Basildon",
  "E07000084": "Basingstoke and Deane",
  "E07000171": "Bassetlaw",
  "E06000022": "Bath and North East Somerset",
  "E06000055": "Bedford",
  "E09000004": "Bexley",
  "E08000025": "Birmingham",
  "E07000129": "Blaby",
  "E06000008": "Blackburn with Darwen",
  "E06000009": "Blackpool",
  "W06000019": "Blaenau Gwent",
  "E07000033": "Bolsover",
  "E08000001": "Bolton",
  "E07000136": "Boston",
  "E06000058": "Bournemouth, Christchurch and Poole",
  "E06000036": "Bracknell Forest",
  "E08000032": "Bradford",
  "E07000067": "Braintree",
  "E07000143": "Breckland",
  "E09000005": "Brent",
  "E07000068": "Brentwood",
  "W06000013": "Bridgend",
  "E06000043": "Brighton and Hove",
  "E06000023": "Bristol",
  "E07000144": "Broadland",
  "E09000006": "Bromley",
  "E07000234": "Bromsgrove",
  "E07000095": "Broxbourne",
  "E07000172": "Broxtowe",
  "E06000060": "Buckinghamshire",
  "E07000117": "Burnley",
  "E08000002": "Bury",
  "W06000018": "Caerphilly",
  "E08000033": "Calderdale",
  "E07000008": "Cambridge",
  "E09000007": "Camden",
  "E07000192": "Cannock Chase",
  "E07000106": "Canterbury",
  "W06000015": "Cardiff",
  "E07000028": "Carlisle",
  "W06000010": "Carmarthenshire",
  "E07000069": "Castle Point",
  "E06000056": "Central Bedfordshire",
  "W06000008": "Ceredigion",
  "E07000130": "Charnwood",
  "E07000070": "Chelmsford",
  "E07000078": "Cheltenham",
  "E07000177": "Cherwell",
  "E06000049": "Cheshire East",
  "E06000050": "Cheshire West and Chester",
  "E07000034": "Chesterfield",
  "E07000225": "Chichester",
  "E07000118": "Chorley",
  "E09000001": "City of London",
  "E07000071": "Colchester",
  "W06000003": "Conwy",
  "E07000029": "Copeland",
  "E06000052": "Cornwall",
  "E07000079": "Cotswold",
  "E06000047": "County Durham",
  "E08000026": "Coventry",
  "E07000163": "Craven",
  "E07000226": "Crawley",
  "E09000008": "Croydon",
  "E07000096": "Dacorum",
  "E06000005": "Darlington",
  "E07000107": "Dartford",
  "W06000004": "Denbighshire",
  "E06000015": "Derby",
  "E07000035": "Derbyshire Dales",
  "E08000017": "Doncaster",
  "E06000059": "Dorset",
  "E07000108": "Dover",
  "E08000027": "Dudley",
  "E09000009": "Ealing",
  "E07000009": "East Cambridgeshire",
  "E07000040": "East Devon",
  "E07000085": "East Hampshire",
  "E07000242": "East Hertfordshire",
  "E07000137": "East Lindsey",
  "E06000011": "East Riding of Yorkshire",
  "E07000193": "East Staffordshire",
  "E07000244": "East Suffolk",
  "E07000061": "Eastbourne",
  "E07000086": "Eastleigh",
  "E07000030": "Eden",
  "E07000207": "Elmbridge",
  "E09000010": "Enfield",
  "E07000072": "Epping Forest",
  "E07000208": "Epsom and Ewell",
  "E07000036": "Erewash",
  "E07000041": "Exeter",
  "E07000087": "Fareham",
  "E07000010": "Fenland",
  "W06000005": "Flintshire",
  "E07000112": "Folkestone and Hythe",
  "E07000080": "Forest of Dean",
  "E07000119": "Fylde",
  "E08000037": "Gateshead",
  "E07000173": "Gedling",
  "E07000081": "Gloucester",
  "E07000088": "Gosport",
  "E07000109": "Gravesham",
  "E07000145": "Great Yarmouth",
  "E09000011": "Greenwich",
  "E07000209": "Guildford",
  "W06000002": "Gwynedd",
  "E09000012": "Hackney",
  "E06000006": "Halton",
  "E07000164": "Hambleton",
  "E09000013": "Hammersmith and Fulham",
  "E07000131": "Harborough",
  "E09000014": "Haringey",
  "E07000073": "Harlow",
  "E07000165": "Harrogate",
  "E09000015": "Harrow",
  "E07000089": "Hart",
  "E06000001": "Hartlepool",
  "E07000062": "Hastings",
  "E07000090": "Havant",
  "E09000016": "Havering",
  "E06000019": "Herefordshire",
  "E07000098": "Hertsmere",
  "E07000037": "High Peak",
  "E09000017": "Hillingdon",
  "E07000132": "Hinckley and Bosworth",
  "E07000227": "Horsham",
  "E09000018": "Hounslow",
  "E07000011": "Huntingdonshire",
  "E07000120": "Hyndburn",
  "E07000202": "Ipswich",
  "W06000001": "Isle of Anglesey",
  "E06000046": "Isle of Wight",
  "E06000053": "Isles of Scilly",
  "E09000019": "Islington",
  "E09000020": "Kensington and Chelsea",
  "E07000146": "King's Lynn and West Norfolk",
  "E06000010": "Kingston upon Hull",
  "E09000021": "Kingston upon Thames",
  "E08000034": "Kirklees",
  "E08000011": "Knowsley",
  "E09000022": "Lambeth",
  "E07000121": "Lancaster",
  "E08000035": "Leeds",
  "E06000016": "Leicester",
  "E07000063": "Lewes",
  "E09000023": "Lewisham",
  "E07000194": "Lichfield",
  "E07000138": "Lincoln",
  "E08000012": "Liverpool",
  "E06000032": "Luton",
  "E07000110": "Maidstone",
  "E07000074": "Maldon",
  "E07000235": "Malvern Hills",
  "E08000003": "Manchester",
  "E07000174": "Mansfield",
  "E06000035": "Medway",
  "E07000133": "Melton",
  "E07000187": "Mendip",
  "W06000024": "Merthyr Tydfil",
  "E09000024": "Merton",
  "E07000042": "Mid Devon",
  "E07000203": "Mid Suffolk",
  "E07000228": "Mid Sussex",
  "E06000002": "Middlesbrough",
  "E06000042": "Milton Keynes",
  "E07000210": "Mole Valley",
  "W06000021": "Monmouthshire",
  "W06000012": "Neath Port Talbot",
  "E07000091": "New Forest",
  "E07000175": "Newark and Sherwood",
  "E08000021": "Newcastle upon Tyne",
  "E07000195": "Newcastle-under-Lyme",
  "E09000025": "Newham",
  "W06000022": "Newport",
  "E07000043": "North Devon",
  "E07000038": "North East Derbyshire",
  "E06000012": "North East Lincolnshire",
  "E07000099": "North Hertfordshire",
  "E07000139": "North Kesteven",
  "E06000013": "North Lincolnshire",
  "E07000147": "North Norfolk",
  "E06000061": "North Northamptonshire",
  "E06000024": "North Somerset",
  "E08000022": "North Tyneside",
  "E07000218": "North Warwickshire",
  "E07000134": "North West Leicestershire",
  "E06000057": "Northumberland",
  "E07000148": "Norwich",
  "E06000018": "Nottingham",
  "E07000219": "Nuneaton and Bedworth",
  "E07000135": "Oadby and Wigston",
  "E08000004": "Oldham",
  "E07000178": "Oxford",
  "W06000009": "Pembrokeshire",
  "E07000122": "Pendle",
  "E06000031": "Peterborough",
  "E06000026": "Plymouth",
  "E06000044": "Portsmouth",
  "W06000023": "Powys",
  "E07000123": "Preston",
  "E06000038": "Reading",
  "E09000026": "Redbridge",
  "E06000003": "Redcar and Cleveland",
  "E07000236": "Redditch",
  "E07000211": "Reigate and Banstead",
  "W06000016": "Rhondda Cynon Taf",
  "E07000124": "Ribble Valley",
  "E09000027": "Richmond upon Thames",
  "E07000166": "Richmondshire",
  "E08000005": "Rochdale",
  "E07000075": "Rochford",
  "E07000125": "Rossendale",
  "E07000064": "Rother",
  "E08000018": "Rotherham",
  "E07000220": "Rugby",
  "E07000212": "Runnymede",
  "E07000176": "Rushcliffe",
  "E07000092": "Rushmoor",
  "E06000017": "Rutland",
  "E07000167": "Ryedale",
  "E08000006": "Salford",
  "E08000028": "Sandwell",
  "E07000168": "Scarborough",
  "E07000188": "Sedgemoor",
  "E08000014": "Sefton",
  "E07000169": "Selby",
  "E07000111": "Sevenoaks",
  "E08000019": "Sheffield",
  "E06000051": "Shropshire",
  "E06000039": "Slough",
  "E08000029": "Solihull",
  "E07000246": "Somerset West and Taunton",
  "E07000012": "South Cambridgeshire",
  "E07000039": "South Derbyshire",
  "E06000025": "South Gloucestershire",
  "E07000044": "South Hams",
  "E07000140": "South Holland",
  "E07000141": "South Kesteven",
  "E07000031": "South Lakeland",
  "E07000149": "South Norfolk",
  "E07000179": "South Oxfordshire",
  "E07000126": "South Ribble",
  "E07000189": "South Somerset",
  "E07000196": "South Staffordshire",
  "E08000023": "South Tyneside",
  "E06000045": "Southampton",
  "E06000033": "Southend-on-Sea",
  "E09000028": "Southwark",
  "E07000213": "Spelthorne",
  "E07000240": "St Albans",
  "E08000013": "St. Helens",
  "E07000197": "Stafford",
  "E07000198": "Staffordshire Moorlands",
  "E07000243": "Stevenage",
  "E08000007": "Stockport",
  "E06000004": "Stockton-on-Tees",
  "E06000021": "Stoke-on-Trent",
  "E07000221": "Stratford-on-Avon",
  "E07000082": "Stroud",
  "E08000024": "Sunderland",
  "E07000214": "Surrey Heath",
  "E09000029": "Sutton",
  "E07000113": "Swale",
  "W06000011": "Swansea",
  "E06000030": "Swindon",
  "E08000008": "Tameside",
  "E07000199": "Tamworth",
  "E07000215": "Tandridge",
  "E07000045": "Teignbridge",
  "E06000020": "Telford and Wrekin",
  "E07000076": "Tendring",
  "E07000093": "Test Valley",
  "E07000083": "Tewkesbury",
  "E07000114": "Thanet",
  "E07000102": "Three Rivers",
  "E06000034": "Thurrock",
  "E07000115": "Tonbridge and Malling",
  "E06000027": "Torbay",
  "W06000020": "Torfaen",
  "E07000046": "Torridge",
  "E09000030": "Tower Hamlets",
  "E08000009": "Trafford",
  "E07000116": "Tunbridge Wells",
  "E07000077": "Uttlesford",
  "W06000014": "Vale of Glamorgan",
  "E07000180": "Vale of White Horse",
  "E08000036": "Wakefield",
  "E08000030": "Walsall",
  "E09000031": "Waltham Forest",
  "E09000032": "Wandsworth",
  "E06000007": "Warrington",
  "E07000222": "Warwick",
  "E07000103": "Watford",
  "E07000216": "Waverley",
  "E07000065": "Wealden",
  "E07000241": "Welwyn Hatfield",
  "E06000037": "West Berkshire",
  "E07000047": "West Devon",
  "E07000127": "West Lancashire",
  "E07000142": "West Lindsey",
  "E06000062": "West Northamptonshire",
  "E07000181": "West Oxfordshire",
  "E07000245": "West Suffolk",
  "E09000033": "Westminster",
  "E08000010": "Wigan",
  "E06000054": "Wiltshire",
  "E07000094": "Winchester",
  "E06000040": "Windsor and Maidenhead",
  "E08000015": "Wirral",
  "E07000217": "Woking",
  "E06000041": "Wokingham",
  "E08000031": "Wolverhampton",
  "E07000237": "Worcester",
  "E07000229": "Worthing",
  "W06000006": "Wrexham",
  "E07000238": "Wychavon",
  "E07000128": "Wyre",
  "E07000239": "Wyre Forest",
  "E06000014": "York"
};
var App_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');body{font-family:'Open Sans', sans-serif}label.svelte-1iad7dh{margin:20px 0 4px 0;font-weight:bold}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items2 = [];
  Object.keys(lookup).forEach((e, i) => items2[i] = { "areacd": e, "areanm": lookup[e] });
  let { selected: selected2, label, id } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected2 !== void 0)
    $$bindings.selected(selected2);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<form><label style="${"color: white;"}"${add_attribute("for", id, 0)} class="${"svelte-1iad7dh"}">${escape(label)}</label>
	${validate_component(Select_1, "Select").$$render($$result, {
    id,
    idKey: "areacd",
    labelKey: "areanm",
    items: items2,
    value: selected2,
    darkMode: true
  }, {}, {})}
</form>`;
});
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-content margin-bottom--2"}"><div class="${"wrapper"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
async function load({ fetch }) {
  let options_raw = await fetch(`${assets}/data/lad_list_2021.json`);
  let options = await options_raw.json();
  return { props: { options } };
}
let selected = null;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `${validate_component(Header, "Header").$$render($$result, {
    bgimage: base + "/img/bg-map.png",
    bgcolor: "#206095",
    bgfixed: true,
    theme: "light",
    center: false,
    short: true
  }, {}, {
    default: () => {
      return `<h1 style="${"color: white; font-size: 54px; font-weight: bold;line-height: 1.5;"}">How the area where you live is changing: Census 2021
    </h1>

  <p style="${"color: white; margin-top: 20px; font-size: 21px;"}">28 November 2022</p>
  <br> <br>

  <p class="${"text-big"}" style="${"color: white; margin-top: 5px; font-size: 30px;line-height: 1.5;"}">Latest Census data captures changes seen across local authority areas in England and Wales. Some areas changed drastically in the decade between the last two censuses, while the change is more subtle in other areas. Find out how your area has changed.
  </p>

  <br>

  <div class="${"ons-field"}">${validate_component(App, "Dropdown").$$render($$result, {
        selected,
        id: "mainSelect",
        label: "Select a local authority"
      }, {}, {})}</div>`;
    }
  })}

<div class="${"col-wide"}">${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<h2>All versions of this article
	</h2>
	<p>${validate_component(Icon, "Icon").$$render($$result, {
        type: "chevron",
        rotation: 0
      }, {}, {})}
	  <button class="${"btn-text"}">${escape("Show")} list of local authorities</button></p>`;
    }
  })}

<div${add_classes("visually-hidden".trim())}>${validate_component(Media, "Media").$$render($$result, { col: "wide", grid: "narrow" }, {}, {
    default: () => {
      return `${each([...regions].sort((a, b) => a.code.localeCompare(b.code)), (region) => {
        return `<div class="${"text-small"}"><strong>${escape(region.name)}</strong><br>
		  ${each(items.filter((d) => d.regioncd == region.code), (place) => {
          return `<a href="${escape(base) + "/" + escape(place.areacd) + "/"}" sveltekit:reload>${escape(place.areanm)}</a><br>`;
        })}
		</div>`;
      })}`;
    }
  })}</div></div>

<hr>

${validate_component(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `<ul>${each(options, (option) => {
        return `<li><a href="${escape(base) + "/" + escape(option.code)}">${escape(option.name)}</a></li>`;
      })}</ul>`;
    }
  })}





`;
});
export { Routes as default, load };
