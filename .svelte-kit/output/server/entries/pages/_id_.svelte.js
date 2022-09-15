import { c as create_ssr_component, e as escape, d as each, b as add_attribute, s as setContext, v as validate_component, g as getContext, p as null_to_empty, j as createEventDispatcher } from "../../chunks/index-d26a41fd.js";
import { a as assets } from "../../chunks/paths-396f020f.js";
import { getData } from "../endpoints/utils.js";
import { csvParse, autoType } from "d3-dsv";
import { S as Select, a as Section } from "../../chunks/Select-270fd6e3.js";
import "d3-scale";
import "d3-delaunay";
import "robojournalist";
import "pluralize";
import "fuse.js";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links = [] } = $$props;
  let { mode = "neutral" } = $$props;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  return `<nav aria-label="${"Breadcrumbs"}"><div class="${escape(mode == "neutral" ? "breadcrumb-neutral" : "breadcrumb") + " print--hide"}"><ol class="${"breadcrumb__list"}">${each(links, (link) => {
    return `<li class="${"breadcrumb__item"}">${link.url ? `<a class="${"breadcrumb__link"}"${add_attribute("href", link.url, 0)}>${escape(link.label)}</a>` : `${escape(link.label)}`}
			</li>`;
  })}</ol></div></nav>`;
});
const Highlighted = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Highlighted content" } = $$props;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `<div class="${"nav-secondary--border-left-lg col col--md-47 col--lg-19 col--lg-offset-2 padding-left margin-top-lg--3"}"><h2 class="${"margin-top-lg--1"}">${escape(title)}</h2>
	<ul class="${"list--neutral margin-top--negative-one-fix"}">${each(links, (link) => {
    return `<li><a${add_attribute("href", link.url, 0)}${add_attribute("data-gtm-title", link.label, 0)} data-gtm-type="${"highlighted-links"}">${escape(link.label)}</a>
		</li>`;
  })}</ul></div>`;
});
var Navbox_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.ons-toc.svelte-1dyzlhu{box-sizing:border-box;display:block;overflow-wrap:break-word;margin-top:24px}.ons-toc__title.svelte-1dyzlhu{font-size:16px !important;display:block;font-weight:600;margin-block-end:18px;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;margin:0 0 18px 0;padding:0}.ons-list.svelte-1dyzlhu{display:block;list-style-image:none;list-style-position:outside;list-style-type:none;margin-block-end:27px;margin-block-start:0;margin:0 0 27px 0;margin-inline-end:0;margin-inline-start:0;padding:0;padding-inline-start:0}.ons-list__item.svelte-1dyzlhu{display:list-item;margin:0 0 9px 25px;padding:0;position:relative;font-size:16px !important}.ons-list__item.svelte-1dyzlhu::before{border-top-style:solid;border-top-width:1px;content:"";display:block;height:1px;left:0;margin-left:-25px;position:absolute;top:14px;width:15px}',
  map: null
};
const Navbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { links = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css$3);
  return `<nav class="${"ons-toc svelte-1dyzlhu"}" aria-label="${"Pages in this section"}">${title ? `<h2 class="${"ons-toc__title ons-u-fs-r--b ons-u-mb-s svelte-1dyzlhu"}">${escape(title)}</h2>` : ``}
	<ol class="${"ons-list ons-u-mb-m ons-list--dashed svelte-1dyzlhu"}">${each(links, (link) => {
    return `${link.url ? `<li class="${"ons-list__item svelte-1dyzlhu"}"><a${add_attribute("href", link.url, 0)} class="${"ons-list__link"}">${escape(link.label)}</a>
		</li>` : `<li class="${"ons-list__item svelte-1dyzlhu"}" aria-current="${"true"}">${escape(link.label)}</li>`}`;
  })}</ol>
</nav>`;
});
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background = "grey" } = $$props;
  let { label = "Last updated" } = $$props;
  let { value = "date" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div class="${["meta-wrap--thin", background == "grey" ? "meta-wrap" : ""].join(" ").trim()}"><div class="${"wrapper"}"><dl class="${"col-wrap"}"><div class="${"col padding-left--0 meta__item meta__item--no-border"}"><dt class="${"meta__term inline"}">${escape(label)}:</dt>
				<dd class="${"inline"}"><!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --></dd></div></dl></div></div>`;
});
const Titleblock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = "neutral" } = $$props;
  let { background = "grey" } = $$props;
  let { breadcrumb = null } = $$props;
  let { contents = null } = $$props;
  let { highlighted = null } = $$props;
  let { date = null } = $$props;
  let { updated = null } = $$props;
  let { hr = true } = $$props;
  setContext("mode", mode);
  setContext("background", background);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.breadcrumb === void 0 && $$bindings.breadcrumb && breadcrumb !== void 0)
    $$bindings.breadcrumb(breadcrumb);
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.updated === void 0 && $$bindings.updated && updated !== void 0)
    $$bindings.updated(updated);
  if ($$props.hr === void 0 && $$bindings.hr && hr !== void 0)
    $$bindings.hr(hr);
  return `<div class="${"page-neutral-intro " + escape(background == "grey" ? "background--gallery" : "")}"><div class="${"wrapper"}"><div class="${"col-wrap"}"><div class="${"col"}">${breadcrumb ? `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, {
    links: breadcrumb,
    mode: background == "none" ? "neutral" : mode
  }, {}, {})}` : ``}
				<div class="${[
    "col col--md-47",
    (highlighted ? "col--lg-38" : "") + " " + (!highlighted ? "col--lg-48" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
					${date ? `<p class="${"page-neutral-intro__meta margin-top--0 margin-bottom--3"}">${escape(date)}</p>` : ``}
					${contents ? `${validate_component(Navbox, "Navbox").$$render($$result, { links: contents, title: "Contents" }, {}, {})}` : ``}</div>
				${highlighted ? `${validate_component(Highlighted, "Highlighted").$$render($$result, { links: highlighted }, {}, {})}` : ``}</div></div></div>
	${slots.meta ? slots.meta({}) : ``}
	${updated ? `${validate_component(Meta, "Meta").$$render($$result, {
    label: "Last updated",
    value: updated,
    background
  }, {}, {})}` : ``}
	</div>`;
});
var Headline_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "h1.svelte-m86ur0{line-height:1}",
  map: null
};
const Headline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = getContext("mode") } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css$2);
  return `<h1 class="${escape(null_to_empty(mode == "neutral" ? "page-neutral-intro__title" : "page-intro__title")) + " svelte-m86ur0"}">${slots.default ? slots.default({}) : ``}
</h1>`;
});
const Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"wrapper margin-bottom--2"}"><div class="${"col-wrap"}"><article class="${"col col--md-40 col--lg-40 page-neutral-content__main-content margin-left-md--1"}">${slots.default ? slots.default({}) : ``}</article></div></div>`;
});
var Figure_svelte_svelte_type_style_lang = "";
const Linkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = "default" } = $$props;
  let { title = "Related links" } = $$props;
  let { id = null } = $$props;
  let { links = [] } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `${mode == "neutral" ? `<div${add_attribute("id", id, 0)} class="${"section__content--markdown section__content--markdown--neutral-article"}"><section>${title ? `<h2>${escape(title)}</h2>` : ``}
    <div class="${"markdown-box-container"}">${each(links, (link) => {
    return `<p><a${add_attribute("href", link.url, 0)}>${escape(link.label)}</a>
        <br>${escape(link.type)} | ${escape(link.meta)}
        <br>${escape(link.description)}
      </p>`;
  })}</div></section></div>` : `<div${add_attribute("id", id, 0)} class="${"tile-neutral width-md--40 margin-bottom--2"}">${title ? `<h2 class="${"tile-neutral__heading"}">${escape(title)}</h2>` : ``}
  <ul class="${"list--neutral margin-bottom--0"}">${each(links, (link) => {
    return `<li class="${"margin-bottom--3"}"><a href="${"/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/bulletins/deathsregisteredweeklyinenglandandwalesprovisional/weekending25february2022"}" class="${"tile-neutral-content__title underline-link"}">Deaths registered weekly in England and Wales, provisional</a>
    <p class="${"tile-neutral-content__meta"}">${escape(link.type)}
      <span class="${"text--aluminium"}">|</span> ${escape(link.meta)}</p>
    <p class="${"tile-neutral-content__description margin-top--0 margin-bottom--0 "}">${escape(link.description)}</p>
    </li>`;
  })}</ul></div>`}`;
});
var Select_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".selectbox.svelte-lfed90{box-sizing:border-box;margin:0;border:0}.selectbox.svelte-lfed90{--border:2px solid #206095;--borderRadius:0;--listBorderRadius:0;--itemFirstBorderRadius:0;--multiItemBorderRadius:0;--padding:0 8px;--multiSelectPadding:0 8px;--clearSelectBottom:auto;--clearSelectRight:8px;--clearSelectTop:auto;--clearSelectWidth:24px;--clearSelectColor:#206095;--borderHoverColor:#206095;--borderFocusColor:#206095;--inputColor:#206095;--itemColor:#206095;--placeholderColor:#206095;--itemIsActiveBG:#206095;--itemHoverBG:#3875d7;--itemHoverColor:white;--clearSelectColor:white;--clearSelectFocusColor:white;--clearSelectHoverColor:white;--indicatorColor:white;--multiItemActiveColor:white;--multiClearFill:white;--multiClearBG:none;--multiClearHoverBG:none;--multiItemBG:grey;--multiItemActiveBG:grey;--spinnerColor:rgba(255,255,255,0)}.selectbox, .selectbox input, .selectbox .item, .selectbox svg{cursor:pointer !important}.selectbox input:focus{cursor:default !important}.selectbox > .selectContainer{box-shadow:inset -40px 0px #206095}.selectbox.multi-selected > .selectContainer{box-shadow:none !important}.selectbox.focused > .selectContainer{outline:4px solid orange}.selectbox.selected > .selectContainer{background-color:#206095 !important}.selectbox.selected .selectedItem{color:white !important;font-weight:bold}.selectbox .selectedItem .group{display:none}.selectbox .item > .group{font-size:smaller;opacity:0.7}.selectbox .selectContainer > .multiSelectItem{color:white !important;font-weight:bold}.selectbox .selectContainer > .multiSelectItem:nth-of-type(1){background-color:var(--firstItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(2){background-color:var(--secondItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(3){background-color:var(--thirdItem) !important}.selectbox .selectContainer > .multiSelectItem:nth-of-type(4){background-color:var(--fourthItem) !important}.selectbox .indicator svg{fill:white}.selectbox .clearSelect{height:24px}.selectbox .indicator{width:20px;height:20px}.selectbox .multiSelectItem .group{display:none}",
  map: null
};
const Select_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let noOptionsMessage;
  let itemFilter;
  const searchIcon = `<svg viewBox="0 0 20 20" fill-rule="evenodd"><path d="M0,8a8,8,0,1,0,16,0a8,8,0,1,0,-16,0ZM3,8a5,5,0,1,0,10,0a5,5,0,1,0,-10,0Z"/><path d="M18,20L20,18L14,12L12,14Z"/></svg>`;
  const chevronIcon = `<svg viewBox="0 0 20 20"><path d="M1,6L19,6L10,15Z"/></svg>`;
  createEventDispatcher();
  let { id = "" } = $$props;
  let { mode = "default" } = $$props;
  let { items } = $$props;
  let { placeholder = "Select one..." } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { isSearchable = true } = $$props;
  let { autoClear = false } = $$props;
  let { idKey = "value" } = $$props;
  let { labelKey = "label" } = $$props;
  let { groupKey = null } = $$props;
  let { groupItems = false } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { fontSize = "1rem" } = $$props;
  let { height = 42 } = $$props;
  let { isMulti = false } = $$props;
  let { maxSelected = 4 } = $$props;
  let { colors = ["#206095", "#a8bd3a", "#871a5b", "#27a0cc"] } = $$props;
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
  let isFocused;
  let listOpen;
  let isWaiting;
  let handleClear;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
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
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    noOptionsMessage = isWaiting ? "Loading..." : mode == "search" && filterText < 3 ? "Enter 3 or more characters for suggestions" : `No results match ${filterText}`;
    itemFilter = Array.isArray(value) && value.length >= maxSelected || mode == "search" && filterText.length < 3 ? (label, filterText2, option) => false : (label, filterText2, option) => `${label}`.split("<")[0].toLowerCase().slice(0, filterText2.length) == filterText2.toLowerCase();
    $$rendered = `<div class="${[
      "selectbox svelte-lfed90",
      (value && isMulti ? "multi-selected" : "") + " " + (isFocused ? "focused" : "") + " " + (value && !listOpen && !isMulti ? "selected" : "")
    ].join(" ").trim()}">${validate_component(Select, "Select").$$render($$result, {
      id,
      items,
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
      isClearable: !isMulti,
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
var LayerCake_svelte_svelte_type_style_lang = "";
var Html_svelte_svelte_type_style_lang = "";
var Svg_svelte_svelte_type_style_lang = "";
var ScaledSvg_svelte_svelte_type_style_lang = "";
var Voronoi_svelte_svelte_type_style_lang = "";
var AxisX_svelte_svelte_type_style_lang$3 = "";
var AxisY_svelte_svelte_type_style_lang$3 = "";
var Legend_svelte_svelte_type_style_lang$3 = "";
var Title_svelte_svelte_type_style_lang = "";
var Footer_svelte_svelte_type_style_lang = "";
var Labels_svelte_svelte_type_style_lang = "";
var ScatterChart_svelte_svelte_type_style_lang = "";
var AxisY_svelte_svelte_type_style_lang$2 = "";
var AxisX_svelte_svelte_type_style_lang$2 = "";
var HeadLabel_svelte_svelte_type_style_lang$1 = "";
var LabelsAge_svelte_svelte_type_style_lang$1 = "";
var Line_svelte_svelte_type_style_lang$1 = "";
var Legend_svelte_svelte_type_style_lang$2 = "";
var AgeChart_svelte_svelte_type_style_lang = "";
var AxisY_svelte_svelte_type_style_lang$1 = "";
var AxisX_svelte_svelte_type_style_lang$1 = "";
var HeadLabel_svelte_svelte_type_style_lang = "";
var LabelsAge_svelte_svelte_type_style_lang = "";
var Line_svelte_svelte_type_style_lang = "";
var Legend_svelte_svelte_type_style_lang$1 = "";
var HBarChart_svelte_svelte_type_style_lang = "";
var DotPlot_svelte_svelte_type_style_lang = "";
var DotLabels_svelte_svelte_type_style_lang = "";
var AxisX_svelte_svelte_type_style_lang = "";
var AxisY_svelte_svelte_type_style_lang = "";
var Legend_svelte_svelte_type_style_lang = "";
var DotPlotChart_svelte_svelte_type_style_lang = "";
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".triangle.svelte-17aqbsc{fill:transparent;stroke:#206095;stroke-width:3;transition:all 0.8s ease-in-out}.triangle-container.svelte-17aqbsc{float:left}button.svelte-17aqbsc{color:#206095;background-color:transparent;outline:transparent;border:none;text-decoration:underline;font-weight:700;font-size:18px;margin-top:60px;cursor:pointer}button.svelte-17aqbsc:active{background-color:transparent}",
  map: null
};
async function load({ params, fetch }) {
  let id = params.id;
  let options_raw = await fetch(`${assets}/data/lad_list_2021.json`);
  let options = await options_raw.json();
  let reports_raw = await fetch(`${assets}/areareportsprgen.json`);
  await reports_raw.json();
  let template_raw = await fetch(`${assets}/template.pug`);
  let template = await template_raw.text();
  let topics_raw = await fetch(`${assets}/data/topics.json`);
  let topics = await topics_raw.json();
  let place_raw = await fetch(`${assets}/data/json/place/${id}.json`);
  let place_raw_new = await fetch(`${assets}/data/json_new/place/${id}.json`);
  let place = await place_raw.json();
  let place_new = await place_raw_new.json();
  let s = place_new.stories.map((d) => d.label.split("_"));
  s.forEach((e) => {
    if (e.length > 4) {
      e[3] = e[3] + "_" + e[4];
      e.pop();
    }
  });
  let rgncd = place_new.parent.code;
  let rgn_raw = await fetch(`${assets}/data/json/place/${rgncd}.json`);
  let rgn_raw_new = await fetch(`${assets}/data/json_new/place/${rgncd}.json`);
  let rgn = await rgn_raw.json();
  let rgn_new = await rgn_raw_new.json();
  let eng_raw = await fetch(`${assets}/data/json_new/place/E92000001.json`);
  let eng = await eng_raw.json();
  let wal_raw = await fetch(`${assets}/data/json_new/place/W92000004.json`);
  let wal = await wal_raw.json();
  let cou = place.parents[0].name == "Wales" ? wal : eng;
  let ladData_raw = await fetch("https://raw.githubusercontent.com/theojolliffe/census-data/main/laddata.csv");
  let ladData_string = await ladData_raw.text();
  let ladData = await csvParse(ladData_string, autoType);
  return {
    props: {
      options,
      topics,
      place,
      place_new,
      rgn,
      rgn_new,
      eng,
      wal,
      s,
      template,
      cou,
      ladData
    }
  };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { topics } = $$props;
  let { template } = $$props;
  let { place } = $$props;
  let { place_new } = $$props;
  let { s } = $$props;
  let { rgn } = $$props;
  let { rgn_new } = $$props;
  let { eng } = $$props;
  let { wal } = $$props;
  let { cou } = $$props;
  let { ladData } = $$props;
  process.env.NODE_ENV === "production";
  if (place.data.population.value.change.all > 8)
    ;
  else if (place.data.population.value.change.all > 3)
    ;
  else if (place.data.population.value.change.all > 0)
    ;
  else
    ;
  if (place.data.health.perc.change.good > 0)
    ;
  else if (place.data.health.perc.change.good < 0)
    ;
  var regionLU = {};
  getData("https://raw.githubusercontent.com/theojolliffe/census-data/main/csv/lists/Corresponding%20Local%20Authorities-Table%201.csv").then((res) => {
    res.forEach((d) => {
      regionLU[d["Name"]] = d["Region/Country"];
    });
  });
  var countyLU = {};
  getData("https://raw.githubusercontent.com/theojolliffe/census-data/main/csv/lists/Local_Authority_District_to_County_(April_2021)_Lookup_in_England.csv").then((res) => {
    res.forEach((d) => {
      countyLU[d["LAD21NM"]] = d["CTY21NM"];
    });
  });
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  if ($$props.template === void 0 && $$bindings.template && template !== void 0)
    $$bindings.template(template);
  if ($$props.place === void 0 && $$bindings.place && place !== void 0)
    $$bindings.place(place);
  if ($$props.place_new === void 0 && $$bindings.place_new && place_new !== void 0)
    $$bindings.place_new(place_new);
  if ($$props.s === void 0 && $$bindings.s && s !== void 0)
    $$bindings.s(s);
  if ($$props.rgn === void 0 && $$bindings.rgn && rgn !== void 0)
    $$bindings.rgn(rgn);
  if ($$props.rgn_new === void 0 && $$bindings.rgn_new && rgn_new !== void 0)
    $$bindings.rgn_new(rgn_new);
  if ($$props.eng === void 0 && $$bindings.eng && eng !== void 0)
    $$bindings.eng(eng);
  if ($$props.wal === void 0 && $$bindings.wal && wal !== void 0)
    $$bindings.wal(wal);
  if ($$props.cou === void 0 && $$bindings.cou && cou !== void 0)
    $$bindings.cou(cou);
  if ($$props.ladData === void 0 && $$bindings.ladData && ladData !== void 0)
    $$bindings.ladData(ladData);
  $$result.css.add(css);
  {
    console.log("place_new", place_new);
  }
  {
    console.log("rgn", rgn);
  }
  {
    console.log("cou", cou);
  }
  return `${$$result.head += `${$$result.title = `<title>${escape(place.name)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", place.name, 0)} data-svelte="svelte-yg0144"><meta property="${"og:description"}" content="${"This is a description of the page."}" data-svelte="svelte-yg0144"><meta name="${"description"}" content="${"This is a description of the page."}" data-svelte="svelte-yg0144"><script src="${"https://unpkg.com/rosaenlg@3.0.1/dist/rollup/rosaenlg_tiny_en_US_3.0.1_comp.js"}" data-svelte="svelte-yg0144"><\/script>`, ""}




<div class="${"promo__background--plum-gradient"}"><div class="${"wrapper"}"><div class="${"banner--half-padding"}"><p class="${"margin-top--0 margin-bottom--0 padding-bottom--0 padding-top--0 flex flex-wrap-wrap banner--vertical-center"}"><a class="${"flex"}" href="${"https://www.ons.gov.uk/census"}"><img src="${"https://cdn.ons.gov.uk/assets/images/census-logo/logo-census-2021-white-landscape.svg"}" title="${"Census 2021"}" alt="${""}" class="${"header__svg-logo margin-right--1"}" focusable="${"false"}" width="${"167"}" height="${"32"}" viewBox="${"0 0 242 44"}" aria-labelledby="${"census-logo-banner"}"></a>
				<a class="${"margin-top--0 text--white font-size--18 underline-link"}" href="${"https://www.ons.gov.uk/census"}">Data and analysis from Census 2021</a></p></div></div></div>


<div style="${"height: 50px;"}"></div>
${validate_component(Titleblock, "Titleblock").$$render($$result, { background: "none" }, {}, {
    default: () => {
      return `${validate_component(Headline, "Headline").$$render($$result, {}, {}, {
        default: () => {
          return `How life has changed in ${escape(place.name)}`;
        }
      })}
	<div style="${"height: 20px;"}"></div>
	${validate_component(Select_1, "Select").$$render($$result, {
        items: options,
        mode: "search",
        idKey: "code",
        labelKey: "name",
        placeholder: "Find another area",
        autoClear: true
      }, {}, {})}`;
    }
  })}

${validate_component(Article, "Article").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render($$result, { backlink: true, hr: true }, {}, {
        default: () => {
          return `<div style="${"height: 50px"}"></div>

	
		${``}
	

    ${place.stories.length > 6 ? `<button class="${"svelte-17aqbsc"}"><div class="${"triangle-container svelte-17aqbsc"}"><svg height="${"25"}" width="${"50"}">${`<polygon points="${"25,10 15,20 25,10 35,20"}" class="${"triangle svelte-17aqbsc"}"></polygon>`}</svg></div>
      ${escape("Read less")}</button>` : ``}
    <div style="${"height: 50px"}"></div>`;
        }
      })}

  ${validate_component(Linkbox, "Linkbox").$$render($$result, {
        mode: "neutral",
        title: "Area report data",
        links: [
          {
            label: "Dataset one title",
            url: "/",
            type: "Dataset",
            meta: "31 January 2022",
            description: "This is a description of the dataset."
          },
          {
            label: "Dataset two title",
            url: "/",
            type: "Dataset",
            meta: "16 January 2022",
            description: "This is a description of the dataset."
          }
        ]
      }, {}, {})}

  ${validate_component(Linkbox, "Linkbox").$$render($$result, {
        mode: "neutral",
        links: [
          {
            label: "Article one title",
            url: "/",
            type: "Article",
            meta: "31 January 2022",
            description: "This is a description of the article."
          },
          {
            label: "Article two title",
            url: "/",
            type: "Article",
            meta: "16 January 2022",
            description: "This is a description of the article."
          }
        ]
      }, {}, {})}`;
    }
  })}`;
});
export { U5Bidu5D as default, load };
