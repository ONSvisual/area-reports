import { c as create_ssr_component, e as escape, d as each, b as add_attribute, s as setContext, v as validate_component, g as getContext, p as null_to_empty, j as createEventDispatcher, q as noop, r as safe_not_equal, f as subscribe, t as run_all, u as is_function, w as set_store_value, a as add_styles, x as assign, y as now, z as loop, A as identity$1, m as missing_component, o as globals } from "../../chunks/index-128ceddb.js";
import "archieml";
import { a as assets } from "../../chunks/paths-396f020f.js";
import { getData, uncap1, regionThe } from "../endpoints/utils.js";
import { csvParse, autoType } from "d3-dsv";
import { S as Select, a as Section } from "../../chunks/Select-5e542a35.js";
import { scaleLinear, scaleSqrt, scaleSymlog, scaleOrdinal, scaleBand } from "d3-scale";
import { Delaunay } from "d3-delaunay";
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
const css$v = {
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
  $$result.css.add(css$v);
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
const css$u = {
  code: "h1.svelte-m86ur0{line-height:1}",
  map: null
};
const Headline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = getContext("mode") } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css$u);
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
const css$t = {
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
  $$result.css.add(css$t);
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
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
function canBeZero(val) {
  if (val === 0) {
    return true;
  }
  return val;
}
function makeAccessor(acc) {
  if (!canBeZero(acc))
    return null;
  if (Array.isArray(acc)) {
    return (d) => acc.map((k) => {
      return typeof k !== "function" ? d[k] : k(d);
    });
  } else if (typeof acc !== "function") {
    return (d) => d[acc];
  }
  return acc;
}
function fromEntries(iter) {
  const obj = {};
  for (const pair of iter) {
    if (Object(pair) !== pair) {
      throw new TypeError("iterable for fromEntries should yield objects");
    }
    const { "0": key, "1": val } = pair;
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: val
    });
  }
  return obj;
}
function filterObject(obj, comparisonObj = {}) {
  return fromEntries(Object.entries(obj).filter(([key, value]) => {
    return value !== void 0 && comparisonObj[key] === void 0;
  }));
}
function calcExtents(data, fields) {
  if (!Array.isArray(data)) {
    throw new TypeError("The first argument of calcExtents() must be an array. If you got this error using the <LayerCake> component, consider passing a flat array to the `flatData` prop. More info: https://layercake.graphics/guide/#flatdata");
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  }
  const extents = {};
  const keys = Object.keys(fields);
  const kl = keys.length;
  let i;
  let j;
  let k;
  let s;
  let min;
  let max;
  let acc;
  let val;
  const dl = data.length;
  for (i = 0; i < kl; i += 1) {
    s = keys[i];
    acc = fields[s];
    min = null;
    max = null;
    for (j = 0; j < dl; j += 1) {
      val = acc(data[j]);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          if (val[k] !== void 0 && val[k] !== null && Number.isNaN(val[k]) === false) {
            if (min === null || val[k] < min) {
              min = val[k];
            }
            if (max === null || val[k] > max) {
              max = val[k];
            }
          }
        }
      } else if (val !== void 0 && val !== null && Number.isNaN(val) === false) {
        if (min === null || val < min) {
          min = val;
        }
        if (max === null || val > max) {
          max = val;
        }
      }
    }
    extents[s] = [min, max];
  }
  return extents;
}
function partialDomain(domain = [], directive) {
  if (Array.isArray(directive) === true) {
    return directive.map((d, i) => {
      if (d === null) {
        return domain[i];
      }
      return d;
    });
  }
  return domain;
}
function calcDomain(s) {
  return function domainCalc([$extents, $domain]) {
    return $extents ? partialDomain($extents[s], $domain) : $domain;
  };
}
var defaultScales = {
  x: scaleLinear,
  y: scaleLinear,
  z: scaleLinear,
  r: scaleSqrt
};
function findScaleType(scale2) {
  if (scale2.constant) {
    return "symlog";
  }
  if (scale2.base) {
    return "log";
  }
  if (scale2.exponent) {
    if (scale2.exponent() === 0.5) {
      return "sqrt";
    }
    return "pow";
  }
  return "other";
}
function identity(d) {
  return d;
}
function log(sign) {
  return (x) => Math.log(sign * x);
}
function exp(sign) {
  return (x) => sign * Math.exp(x);
}
function symlog(c) {
  return (x) => Math.sign(x) * Math.log1p(Math.abs(x / c));
}
function symexp(c) {
  return (x) => Math.sign(x) * Math.expm1(Math.abs(x)) * c;
}
function pow(exponent) {
  return function powFn(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}
function getPadFunctions(scale2) {
  const scaleType = findScaleType(scale2);
  if (scaleType === "log") {
    const sign = Math.sign(scale2.domain()[0]);
    return { lift: log(sign), ground: exp(sign), scaleType };
  }
  if (scaleType === "pow") {
    const exponent = 1;
    return { lift: pow(exponent), ground: pow(1 / exponent), scaleType };
  }
  if (scaleType === "sqrt") {
    const exponent = 0.5;
    return { lift: pow(exponent), ground: pow(1 / exponent), scaleType };
  }
  if (scaleType === "symlog") {
    const constant = 1;
    return { lift: symlog(constant), ground: symexp(constant), scaleType };
  }
  return { lift: identity, ground: identity, scaleType };
}
function padScale(scale2, padding) {
  if (typeof scale2.range !== "function") {
    throw new Error("Scale method `range` must be a function");
  }
  if (typeof scale2.domain !== "function") {
    throw new Error("Scale method `domain` must be a function");
  }
  if (!Array.isArray(padding)) {
    return scale2.domain();
  }
  if (scale2.domain().length !== 2) {
    console.warn("[LayerCake] The scale is expected to have a domain of length 2 to use padding. Are you sure you want to use padding? Your scale's domain is:", scale2.domain());
  }
  if (scale2.range().length !== 2) {
    console.warn("[LayerCake] The scale is expected to have a range of length 2 to use padding. Are you sure you want to use padding? Your scale's range is:", scale2.range());
  }
  const { lift, ground } = getPadFunctions(scale2);
  const d0 = scale2.domain()[0];
  const isTime = Object.prototype.toString.call(d0) === "[object Date]";
  const [d1, d2] = scale2.domain().map((d) => {
    return isTime ? lift(d.getTime()) : lift(d);
  });
  const [r1, r2] = scale2.range();
  const paddingLeft = padding[0] || 0;
  const paddingRight = padding[1] || 0;
  const step = (d2 - d1) / (Math.abs(r2 - r1) - paddingLeft - paddingRight);
  return [d1 - paddingLeft * step, paddingRight * step + d2].map((d) => {
    return isTime ? ground(new Date(d)) : ground(d);
  });
}
function calcBaseRange(s, width, height, reverse, percentRange) {
  let min;
  let max;
  if (percentRange === true) {
    min = 0;
    max = 100;
  } else {
    min = s === "r" ? 1 : 0;
    max = s === "y" ? height : s === "r" ? 25 : width;
  }
  return reverse === true ? [max, min] : [min, max];
}
function getDefaultRange(s, width, height, reverse, range, percentRange) {
  return !range ? calcBaseRange(s, width, height, reverse, percentRange) : typeof range === "function" ? range({ width, height }) : range;
}
function createScale(s) {
  return function scaleCreator([$scale, $extents, $domain, $padding, $nice, $reverse, $width, $height, $range, $percentScale]) {
    if ($extents === null) {
      return null;
    }
    const defaultRange = getDefaultRange(s, $width, $height, $reverse, $range, $percentScale);
    const scale2 = $scale === defaultScales[s] ? $scale() : $scale.copy();
    scale2.domain(partialDomain($extents[s], $domain)).range(defaultRange);
    if ($padding) {
      scale2.domain(padScale(scale2, $padding));
    }
    if ($nice === true) {
      if (typeof scale2.nice === "function") {
        scale2.nice();
      } else {
        console.error(`[Layer Cake] You set \`${s}Nice: true\` but the ${s}Scale does not have a \`.nice\` method. Ignoring...`);
      }
    }
    return scale2;
  };
}
function createGetter([$acc, $scale]) {
  return (d) => {
    const val = $acc(d);
    if (Array.isArray(val)) {
      return val.map((v) => $scale(v));
    }
    return $scale(val);
  };
}
function getRange([$scale]) {
  if (typeof $scale === "function") {
    if (typeof $scale.range === "function") {
      return $scale.range();
    }
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
var defaultReverses = {
  x: false,
  y: true,
  z: false,
  r: false
};
var LayerCake_svelte_svelte_type_style_lang = "";
const css$s = {
  code: ".layercake-container.svelte-vhzpsp,.layercake-container.svelte-vhzpsp *{box-sizing:border-box}.layercake-container.svelte-vhzpsp{width:100%;height:100%}",
  map: null
};
const LayerCake = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let context;
  let $_config, $$unsubscribe__config;
  let $_custom, $$unsubscribe__custom;
  let $_rScale, $$unsubscribe__rScale;
  let $_zScale, $$unsubscribe__zScale;
  let $_yScale, $$unsubscribe__yScale;
  let $_xScale, $$unsubscribe__xScale;
  let $_rRange, $$unsubscribe__rRange;
  let $_zRange, $$unsubscribe__zRange;
  let $_yRange, $$unsubscribe__yRange;
  let $_xRange, $$unsubscribe__xRange;
  let $_rPadding, $$unsubscribe__rPadding;
  let $_zPadding, $$unsubscribe__zPadding;
  let $_yPadding, $$unsubscribe__yPadding;
  let $_xPadding, $$unsubscribe__xPadding;
  let $_rReverse, $$unsubscribe__rReverse;
  let $_zReverse, $$unsubscribe__zReverse;
  let $_yReverse, $$unsubscribe__yReverse;
  let $_xReverse, $$unsubscribe__xReverse;
  let $_rNice, $$unsubscribe__rNice;
  let $_zNice, $$unsubscribe__zNice;
  let $_yNice, $$unsubscribe__yNice;
  let $_xNice, $$unsubscribe__xNice;
  let $_rDomain, $$unsubscribe__rDomain;
  let $_zDomain, $$unsubscribe__zDomain;
  let $_yDomain, $$unsubscribe__yDomain;
  let $_xDomain, $$unsubscribe__xDomain;
  let $_r, $$unsubscribe__r;
  let $_z, $$unsubscribe__z;
  let $_y, $$unsubscribe__y;
  let $_x, $$unsubscribe__x;
  let $_padding, $$unsubscribe__padding;
  let $_flatData, $$unsubscribe__flatData;
  let $_data, $$unsubscribe__data;
  let $_extents, $$unsubscribe__extents;
  let $_containerHeight, $$unsubscribe__containerHeight;
  let $_containerWidth, $$unsubscribe__containerWidth;
  let $_percentRange, $$unsubscribe__percentRange;
  let $width_d, $$unsubscribe_width_d;
  let $height_d, $$unsubscribe_height_d;
  let $aspectRatio_d, $$unsubscribe_aspectRatio_d;
  let { ssr = false } = $$props;
  let { pointerEvents = true } = $$props;
  let { position = "relative" } = $$props;
  let { percentRange = false } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { containerWidth = width || 100 } = $$props;
  let { containerHeight = height || 100 } = $$props;
  let { element = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { z = void 0 } = $$props;
  let { r = void 0 } = $$props;
  let { data = [] } = $$props;
  let { xDomain = void 0 } = $$props;
  let { yDomain = void 0 } = $$props;
  let { zDomain = void 0 } = $$props;
  let { rDomain = void 0 } = $$props;
  let { xNice = false } = $$props;
  let { yNice = false } = $$props;
  let { zNice = false } = $$props;
  let { rNice = false } = $$props;
  let { xReverse = defaultReverses.x } = $$props;
  let { yReverse = defaultReverses.y } = $$props;
  let { zReverse = defaultReverses.z } = $$props;
  let { rReverse = defaultReverses.r } = $$props;
  let { xPadding = void 0 } = $$props;
  let { yPadding = void 0 } = $$props;
  let { zPadding = void 0 } = $$props;
  let { rPadding = void 0 } = $$props;
  let { xScale = defaultScales.x } = $$props;
  let { yScale = defaultScales.y } = $$props;
  let { zScale = defaultScales.z } = $$props;
  let { rScale = defaultScales.r } = $$props;
  let { xRange = void 0 } = $$props;
  let { yRange = void 0 } = $$props;
  let { zRange = void 0 } = $$props;
  let { rRange = void 0 } = $$props;
  let { padding = {} } = $$props;
  let { extents = {} } = $$props;
  let { flatData = void 0 } = $$props;
  let { custom = {} } = $$props;
  let isMounted = false;
  const config = {};
  const _percentRange = writable(percentRange);
  $$unsubscribe__percentRange = subscribe(_percentRange, (value) => $_percentRange = value);
  const _containerWidth = writable(containerWidth);
  $$unsubscribe__containerWidth = subscribe(_containerWidth, (value) => $_containerWidth = value);
  const _containerHeight = writable(containerHeight);
  $$unsubscribe__containerHeight = subscribe(_containerHeight, (value) => $_containerHeight = value);
  const _extents = writable(filterObject(extents));
  $$unsubscribe__extents = subscribe(_extents, (value) => $_extents = value);
  const _data = writable(data);
  $$unsubscribe__data = subscribe(_data, (value) => $_data = value);
  const _flatData = writable(flatData || data);
  $$unsubscribe__flatData = subscribe(_flatData, (value) => $_flatData = value);
  const _padding = writable(padding);
  $$unsubscribe__padding = subscribe(_padding, (value) => $_padding = value);
  const _x = writable(makeAccessor(x));
  $$unsubscribe__x = subscribe(_x, (value) => $_x = value);
  const _y = writable(makeAccessor(y));
  $$unsubscribe__y = subscribe(_y, (value) => $_y = value);
  const _z = writable(makeAccessor(z));
  $$unsubscribe__z = subscribe(_z, (value) => $_z = value);
  const _r = writable(makeAccessor(r));
  $$unsubscribe__r = subscribe(_r, (value) => $_r = value);
  const _xDomain = writable(xDomain);
  $$unsubscribe__xDomain = subscribe(_xDomain, (value) => $_xDomain = value);
  const _yDomain = writable(yDomain);
  $$unsubscribe__yDomain = subscribe(_yDomain, (value) => $_yDomain = value);
  const _zDomain = writable(zDomain);
  $$unsubscribe__zDomain = subscribe(_zDomain, (value) => $_zDomain = value);
  const _rDomain = writable(rDomain);
  $$unsubscribe__rDomain = subscribe(_rDomain, (value) => $_rDomain = value);
  const _xNice = writable(xNice);
  $$unsubscribe__xNice = subscribe(_xNice, (value) => $_xNice = value);
  const _yNice = writable(yNice);
  $$unsubscribe__yNice = subscribe(_yNice, (value) => $_yNice = value);
  const _zNice = writable(zNice);
  $$unsubscribe__zNice = subscribe(_zNice, (value) => $_zNice = value);
  const _rNice = writable(rNice);
  $$unsubscribe__rNice = subscribe(_rNice, (value) => $_rNice = value);
  const _xReverse = writable(xReverse);
  $$unsubscribe__xReverse = subscribe(_xReverse, (value) => $_xReverse = value);
  const _yReverse = writable(yReverse);
  $$unsubscribe__yReverse = subscribe(_yReverse, (value) => $_yReverse = value);
  const _zReverse = writable(zReverse);
  $$unsubscribe__zReverse = subscribe(_zReverse, (value) => $_zReverse = value);
  const _rReverse = writable(rReverse);
  $$unsubscribe__rReverse = subscribe(_rReverse, (value) => $_rReverse = value);
  const _xPadding = writable(xPadding);
  $$unsubscribe__xPadding = subscribe(_xPadding, (value) => $_xPadding = value);
  const _yPadding = writable(yPadding);
  $$unsubscribe__yPadding = subscribe(_yPadding, (value) => $_yPadding = value);
  const _zPadding = writable(zPadding);
  $$unsubscribe__zPadding = subscribe(_zPadding, (value) => $_zPadding = value);
  const _rPadding = writable(rPadding);
  $$unsubscribe__rPadding = subscribe(_rPadding, (value) => $_rPadding = value);
  const _xRange = writable(xRange);
  $$unsubscribe__xRange = subscribe(_xRange, (value) => $_xRange = value);
  const _yRange = writable(yRange);
  $$unsubscribe__yRange = subscribe(_yRange, (value) => $_yRange = value);
  const _zRange = writable(zRange);
  $$unsubscribe__zRange = subscribe(_zRange, (value) => $_zRange = value);
  const _rRange = writable(rRange);
  $$unsubscribe__rRange = subscribe(_rRange, (value) => $_rRange = value);
  const _xScale = writable(xScale);
  $$unsubscribe__xScale = subscribe(_xScale, (value) => $_xScale = value);
  const _yScale = writable(yScale);
  $$unsubscribe__yScale = subscribe(_yScale, (value) => $_yScale = value);
  const _zScale = writable(zScale);
  $$unsubscribe__zScale = subscribe(_zScale, (value) => $_zScale = value);
  const _rScale = writable(rScale);
  $$unsubscribe__rScale = subscribe(_rScale, (value) => $_rScale = value);
  const _config = writable(config);
  $$unsubscribe__config = subscribe(_config, (value) => $_config = value);
  const _custom = writable(custom);
  $$unsubscribe__custom = subscribe(_custom, (value) => $_custom = value);
  const activeGetters_d = derived([_x, _y, _z, _r], ([$x, $y, $z, $r]) => {
    const obj = {};
    if ($x) {
      obj.x = $x;
    }
    if ($y) {
      obj.y = $y;
    }
    if ($z) {
      obj.z = $z;
    }
    if ($r) {
      obj.r = $r;
    }
    return obj;
  });
  const padding_d = derived([_padding, _containerWidth, _containerHeight], ([$padding]) => {
    const defaultPadding = { top: 0, right: 0, bottom: 0, left: 0 };
    return Object.assign(defaultPadding, $padding);
  });
  const box_d = derived([_containerWidth, _containerHeight, padding_d], ([$containerWidth, $containerHeight, $padding]) => {
    const b = {};
    b.top = $padding.top;
    b.right = $containerWidth - $padding.right;
    b.bottom = $containerHeight - $padding.bottom;
    b.left = $padding.left;
    b.width = b.right - b.left;
    b.height = b.bottom - b.top;
    if (b.width <= 0 && isMounted === true) {
      console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?");
    }
    if (b.height <= 0 && isMounted === true) {
      console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?");
    }
    return b;
  });
  const width_d = derived([box_d], ([$box]) => {
    return $box.width;
  });
  $$unsubscribe_width_d = subscribe(width_d, (value) => $width_d = value);
  const height_d = derived([box_d], ([$box]) => {
    return $box.height;
  });
  $$unsubscribe_height_d = subscribe(height_d, (value) => $height_d = value);
  const extents_d = derived([_flatData, activeGetters_d, _extents], ([$flatData, $activeGetters, $extents]) => {
    const getters = filterObject($activeGetters, $extents);
    if (Object.keys(getters).length > 0) {
      return {
        ...calcExtents($flatData, getters),
        ...$extents
      };
    } else {
      return {};
    }
  });
  const xDomain_d = derived([extents_d, _xDomain], calcDomain("x"));
  const yDomain_d = derived([extents_d, _yDomain], calcDomain("y"));
  const zDomain_d = derived([extents_d, _zDomain], calcDomain("z"));
  const rDomain_d = derived([extents_d, _rDomain], calcDomain("r"));
  const xScale_d = derived([
    _xScale,
    extents_d,
    xDomain_d,
    _xPadding,
    _xNice,
    _xReverse,
    width_d,
    height_d,
    _xRange,
    _percentRange
  ], createScale("x"));
  const xGet_d = derived([_x, xScale_d], createGetter);
  const yScale_d = derived([
    _yScale,
    extents_d,
    yDomain_d,
    _yPadding,
    _yNice,
    _yReverse,
    width_d,
    height_d,
    _yRange,
    _percentRange
  ], createScale("y"));
  const yGet_d = derived([_y, yScale_d], createGetter);
  const zScale_d = derived([
    _zScale,
    extents_d,
    zDomain_d,
    _zPadding,
    _zNice,
    _zReverse,
    width_d,
    height_d,
    _zRange,
    _percentRange
  ], createScale("z"));
  const zGet_d = derived([_z, zScale_d], createGetter);
  const rScale_d = derived([
    _rScale,
    extents_d,
    rDomain_d,
    _rPadding,
    _rNice,
    _rReverse,
    width_d,
    height_d,
    _rRange,
    _percentRange
  ], createScale("r"));
  const rGet_d = derived([_r, rScale_d], createGetter);
  const xRange_d = derived([xScale_d], getRange);
  const yRange_d = derived([yScale_d], getRange);
  const zRange_d = derived([zScale_d], getRange);
  const rRange_d = derived([rScale_d], getRange);
  const aspectRatio_d = derived([width_d, height_d], ([$width, $height]) => {
    return $width / $height;
  });
  $$unsubscribe_aspectRatio_d = subscribe(aspectRatio_d, (value) => $aspectRatio_d = value);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.percentRange === void 0 && $$bindings.percentRange && percentRange !== void 0)
    $$bindings.percentRange(percentRange);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0)
    $$bindings.containerWidth(containerWidth);
  if ($$props.containerHeight === void 0 && $$bindings.containerHeight && containerHeight !== void 0)
    $$bindings.containerHeight(containerHeight);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.z === void 0 && $$bindings.z && z !== void 0)
    $$bindings.z(z);
  if ($$props.r === void 0 && $$bindings.r && r !== void 0)
    $$bindings.r(r);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.xDomain === void 0 && $$bindings.xDomain && xDomain !== void 0)
    $$bindings.xDomain(xDomain);
  if ($$props.yDomain === void 0 && $$bindings.yDomain && yDomain !== void 0)
    $$bindings.yDomain(yDomain);
  if ($$props.zDomain === void 0 && $$bindings.zDomain && zDomain !== void 0)
    $$bindings.zDomain(zDomain);
  if ($$props.rDomain === void 0 && $$bindings.rDomain && rDomain !== void 0)
    $$bindings.rDomain(rDomain);
  if ($$props.xNice === void 0 && $$bindings.xNice && xNice !== void 0)
    $$bindings.xNice(xNice);
  if ($$props.yNice === void 0 && $$bindings.yNice && yNice !== void 0)
    $$bindings.yNice(yNice);
  if ($$props.zNice === void 0 && $$bindings.zNice && zNice !== void 0)
    $$bindings.zNice(zNice);
  if ($$props.rNice === void 0 && $$bindings.rNice && rNice !== void 0)
    $$bindings.rNice(rNice);
  if ($$props.xReverse === void 0 && $$bindings.xReverse && xReverse !== void 0)
    $$bindings.xReverse(xReverse);
  if ($$props.yReverse === void 0 && $$bindings.yReverse && yReverse !== void 0)
    $$bindings.yReverse(yReverse);
  if ($$props.zReverse === void 0 && $$bindings.zReverse && zReverse !== void 0)
    $$bindings.zReverse(zReverse);
  if ($$props.rReverse === void 0 && $$bindings.rReverse && rReverse !== void 0)
    $$bindings.rReverse(rReverse);
  if ($$props.xPadding === void 0 && $$bindings.xPadding && xPadding !== void 0)
    $$bindings.xPadding(xPadding);
  if ($$props.yPadding === void 0 && $$bindings.yPadding && yPadding !== void 0)
    $$bindings.yPadding(yPadding);
  if ($$props.zPadding === void 0 && $$bindings.zPadding && zPadding !== void 0)
    $$bindings.zPadding(zPadding);
  if ($$props.rPadding === void 0 && $$bindings.rPadding && rPadding !== void 0)
    $$bindings.rPadding(rPadding);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.zScale === void 0 && $$bindings.zScale && zScale !== void 0)
    $$bindings.zScale(zScale);
  if ($$props.rScale === void 0 && $$bindings.rScale && rScale !== void 0)
    $$bindings.rScale(rScale);
  if ($$props.xRange === void 0 && $$bindings.xRange && xRange !== void 0)
    $$bindings.xRange(xRange);
  if ($$props.yRange === void 0 && $$bindings.yRange && yRange !== void 0)
    $$bindings.yRange(yRange);
  if ($$props.zRange === void 0 && $$bindings.zRange && zRange !== void 0)
    $$bindings.zRange(zRange);
  if ($$props.rRange === void 0 && $$bindings.rRange && rRange !== void 0)
    $$bindings.rRange(rRange);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.extents === void 0 && $$bindings.extents && extents !== void 0)
    $$bindings.extents(extents);
  if ($$props.flatData === void 0 && $$bindings.flatData && flatData !== void 0)
    $$bindings.flatData(flatData);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  $$result.css.add(css$s);
  {
    if (x)
      config.x = x;
  }
  {
    if (y)
      config.y = y;
  }
  {
    if (z)
      config.z = z;
  }
  {
    if (r)
      config.r = r;
  }
  {
    if (xDomain)
      config.xDomain = xDomain;
  }
  {
    if (yDomain)
      config.yDomain = yDomain;
  }
  {
    if (zDomain)
      config.zDomain = zDomain;
  }
  {
    if (rDomain)
      config.rDomain = rDomain;
  }
  {
    if (xRange)
      config.xRange = xRange;
  }
  {
    if (yRange)
      config.yRange = yRange;
  }
  {
    if (zRange)
      config.zRange = zRange;
  }
  {
    if (rRange)
      config.rRange = rRange;
  }
  set_store_value(_percentRange, $_percentRange = percentRange, $_percentRange);
  set_store_value(_containerWidth, $_containerWidth = containerWidth, $_containerWidth);
  set_store_value(_containerHeight, $_containerHeight = containerHeight, $_containerHeight);
  set_store_value(_extents, $_extents = filterObject(extents), $_extents);
  set_store_value(_data, $_data = data, $_data);
  set_store_value(_flatData, $_flatData = flatData || data, $_flatData);
  set_store_value(_padding, $_padding = padding, $_padding);
  set_store_value(_x, $_x = makeAccessor(x), $_x);
  set_store_value(_y, $_y = makeAccessor(y), $_y);
  set_store_value(_z, $_z = makeAccessor(z), $_z);
  set_store_value(_r, $_r = makeAccessor(r), $_r);
  set_store_value(_xDomain, $_xDomain = xDomain, $_xDomain);
  set_store_value(_yDomain, $_yDomain = yDomain, $_yDomain);
  set_store_value(_zDomain, $_zDomain = zDomain, $_zDomain);
  set_store_value(_rDomain, $_rDomain = rDomain, $_rDomain);
  set_store_value(_xNice, $_xNice = xNice, $_xNice);
  set_store_value(_yNice, $_yNice = yNice, $_yNice);
  set_store_value(_zNice, $_zNice = zNice, $_zNice);
  set_store_value(_rNice, $_rNice = rNice, $_rNice);
  set_store_value(_xReverse, $_xReverse = xReverse, $_xReverse);
  set_store_value(_yReverse, $_yReverse = yReverse, $_yReverse);
  set_store_value(_zReverse, $_zReverse = zReverse, $_zReverse);
  set_store_value(_rReverse, $_rReverse = rReverse, $_rReverse);
  set_store_value(_xPadding, $_xPadding = xPadding, $_xPadding);
  set_store_value(_yPadding, $_yPadding = yPadding, $_yPadding);
  set_store_value(_zPadding, $_zPadding = zPadding, $_zPadding);
  set_store_value(_rPadding, $_rPadding = rPadding, $_rPadding);
  set_store_value(_xRange, $_xRange = xRange, $_xRange);
  set_store_value(_yRange, $_yRange = yRange, $_yRange);
  set_store_value(_zRange, $_zRange = zRange, $_zRange);
  set_store_value(_rRange, $_rRange = rRange, $_rRange);
  set_store_value(_xScale, $_xScale = xScale, $_xScale);
  set_store_value(_yScale, $_yScale = yScale, $_yScale);
  set_store_value(_zScale, $_zScale = zScale, $_zScale);
  set_store_value(_rScale, $_rScale = rScale, $_rScale);
  set_store_value(_custom, $_custom = custom, $_custom);
  set_store_value(_config, $_config = config, $_config);
  context = {
    activeGetters: activeGetters_d,
    width: width_d,
    height: height_d,
    percentRange: _percentRange,
    aspectRatio: aspectRatio_d,
    containerWidth: _containerWidth,
    containerHeight: _containerHeight,
    x: _x,
    y: _y,
    z: _z,
    r: _r,
    custom: _custom,
    data: _data,
    xNice: _xNice,
    yNice: _yNice,
    zNice: _zNice,
    rNice: _rNice,
    xReverse: _xReverse,
    yReverse: _yReverse,
    zReverse: _zReverse,
    rReverse: _rReverse,
    xPadding: _xPadding,
    yPadding: _yPadding,
    zPadding: _zPadding,
    rPadding: _rPadding,
    padding: padding_d,
    flatData: _flatData,
    extents: extents_d,
    xDomain: xDomain_d,
    yDomain: yDomain_d,
    zDomain: zDomain_d,
    rDomain: rDomain_d,
    xRange: xRange_d,
    yRange: yRange_d,
    zRange: zRange_d,
    rRange: rRange_d,
    config: _config,
    xScale: xScale_d,
    xGet: xGet_d,
    yScale: yScale_d,
    yGet: yGet_d,
    zScale: zScale_d,
    zGet: zGet_d,
    rScale: rScale_d,
    rGet: rGet_d
  };
  {
    setContext("LayerCake", context);
  }
  $$unsubscribe__config();
  $$unsubscribe__custom();
  $$unsubscribe__rScale();
  $$unsubscribe__zScale();
  $$unsubscribe__yScale();
  $$unsubscribe__xScale();
  $$unsubscribe__rRange();
  $$unsubscribe__zRange();
  $$unsubscribe__yRange();
  $$unsubscribe__xRange();
  $$unsubscribe__rPadding();
  $$unsubscribe__zPadding();
  $$unsubscribe__yPadding();
  $$unsubscribe__xPadding();
  $$unsubscribe__rReverse();
  $$unsubscribe__zReverse();
  $$unsubscribe__yReverse();
  $$unsubscribe__xReverse();
  $$unsubscribe__rNice();
  $$unsubscribe__zNice();
  $$unsubscribe__yNice();
  $$unsubscribe__xNice();
  $$unsubscribe__rDomain();
  $$unsubscribe__zDomain();
  $$unsubscribe__yDomain();
  $$unsubscribe__xDomain();
  $$unsubscribe__r();
  $$unsubscribe__z();
  $$unsubscribe__y();
  $$unsubscribe__x();
  $$unsubscribe__padding();
  $$unsubscribe__flatData();
  $$unsubscribe__data();
  $$unsubscribe__extents();
  $$unsubscribe__containerHeight();
  $$unsubscribe__containerWidth();
  $$unsubscribe__percentRange();
  $$unsubscribe_width_d();
  $$unsubscribe_height_d();
  $$unsubscribe_aspectRatio_d();
  return `


${ssr === true || typeof window !== "undefined" ? `<div class="${"layercake-container svelte-vhzpsp"}"${add_styles({
    position,
    "top": position === "absolute" ? "0" : null,
    "right": position === "absolute" ? "0" : null,
    "bottom": position === "absolute" ? "0" : null,
    "left": position === "absolute" ? "0" : null,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${add_attribute("this", element, 0)}>${slots.default ? slots.default({
    element,
    width: $width_d,
    height: $height_d,
    aspectRatio: $aspectRatio_d,
    containerWidth: $_containerWidth,
    containerHeight: $_containerHeight
  }) : ``}</div>` : ``}`;
});
var Html_svelte_svelte_type_style_lang = "";
const css$r = {
  code: "div.svelte-1bu60uu,slot.svelte-1bu60uu{position:absolute;top:0;left:0}",
  map: null
};
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $padding, $$unsubscribe_padding;
  let { element = void 0 } = $$props;
  let { zIndex = void 0 } = $$props;
  let { pointerEvents = void 0 } = $$props;
  const { padding } = getContext("LayerCake");
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  $$result.css.add(css$r);
  $$unsubscribe_padding();
  return `


<div class="${"layercake-layout-html svelte-1bu60uu"}"${add_styles({
    "z-index": zIndex,
    "pointer-events": pointerEvents === false ? "none" : null,
    "top": $padding.top + "px",
    "right": $padding.right + "px",
    "bottom": $padding.bottom + "px",
    "left": $padding.left + "px"
  })}${add_attribute("this", element, 0)}>${slots.default ? slots.default({ element }) : ``}
</div>`;
});
var Svg_svelte_svelte_type_style_lang = "";
const css$q = {
  code: "svg.svelte-u84d8d{position:absolute;top:0;left:0;overflow:visible}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $containerWidth, $$unsubscribe_containerWidth;
  let $containerHeight, $$unsubscribe_containerHeight;
  let $padding, $$unsubscribe_padding;
  let { element = void 0 } = $$props;
  let { innerElement = void 0 } = $$props;
  let { zIndex = void 0 } = $$props;
  let { pointerEvents = void 0 } = $$props;
  let { viewBox = void 0 } = $$props;
  const { containerWidth, containerHeight, padding } = getContext("LayerCake");
  $$unsubscribe_containerWidth = subscribe(containerWidth, (value) => $containerWidth = value);
  $$unsubscribe_containerHeight = subscribe(containerHeight, (value) => $containerHeight = value);
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.innerElement === void 0 && $$bindings.innerElement && innerElement !== void 0)
    $$bindings.innerElement(innerElement);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css$q);
  $$unsubscribe_containerWidth();
  $$unsubscribe_containerHeight();
  $$unsubscribe_padding();
  return `

<svg class="${"layercake-layout-svg svelte-u84d8d"}"${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", $containerWidth, 0)}${add_attribute("height", $containerHeight, 0)}${add_styles({
    "z-index": zIndex,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${add_attribute("this", element, 0)}><defs>${slots.defs ? slots.defs({ element }) : ``}</defs><g class="${"layercake-layout-svg_g"}" transform="${"translate(" + escape($padding.left) + ", " + escape($padding.top) + ")"}"${add_attribute("this", innerElement, 0)}>${slots.default ? slots.default({ element }) : ``}</g></svg>`;
});
var ScaledSvg_svelte_svelte_type_style_lang = "";
function flatten(list) {
  if (Array.isArray(list) && Array.isArray(list[0])) {
    let flat = [];
    const l = list.length;
    for (let i = 0; i < l; i += 1) {
      flat = flat.concat(list[i]);
    }
    return flat;
  }
  return list;
}
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity$1, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const seed = 1;
const randomness1 = 5;
const randomness2 = 2;
class AccurateBeeswarm {
  constructor(items, radiusFun, xFun, padding, yOffset) {
    this.items = items;
    this.radiusFun = radiusFun;
    this.xFun = xFun;
    this.padding = padding;
    this.yOffset = yOffset;
    this.tieBreakFn = this._sfc32(2654435769, 608135816, 3084996962, seed);
    this.maxR = Math.max(...items.map((d) => radiusFun(d)));
    this.rng = this._sfc32(1, 2, 3, seed);
  }
  calculateYPositions() {
    let all = this.items.map((d, i) => ({
      datum: d,
      originalIndex: i,
      x: this.xFun(d),
      r: this.radiusFun(d) + this.padding,
      y: null,
      placed: false
    })).sort((a, b) => a.x - b.x);
    all.forEach(function(d, i) {
      d.index = i;
    });
    let tieBreakFn = this.tieBreakFn;
    all.forEach(function(d) {
      d.tieBreaker = tieBreakFn(d.x);
    });
    let allSortedByPriority = [...all].sort((a, b) => {
      let key_a = this.radiusFun(a.datum) + a.tieBreaker * randomness1;
      let key_b = this.radiusFun(b.datum) + b.tieBreaker * randomness1;
      if (key_a != key_b)
        return key_b - key_a;
      return a.x - b.x;
    });
    for (let item of allSortedByPriority) {
      item.placed = true;
      item.y = this._getBestYPosition(item, all);
    }
    all.sort((a, b) => a.originalIndex - b.originalIndex);
    return all.map((d) => ({
      x: d.x,
      y: d.y + this.yOffset,
      r: this.radiusFun(d.datum)
    }));
  }
  _sfc32(a, b, c, d) {
    let rng = function() {
      a >>>= 0;
      b >>>= 0;
      c >>>= 0;
      d >>>= 0;
      var t = a + b | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = c << 21 | c >>> 11;
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    };
    for (let i = 0; i < 10; i++) {
      rng();
    }
    return rng;
  }
  _getBestYPosition(item, all) {
    let forbiddenIntervals = [];
    for (let step of [-1, 1]) {
      let xDist;
      let r = item.r;
      for (let i = item.index + step; i >= 0 && i < all.length && (xDist = Math.abs(item.x - all[i].x)) < r + this.maxR; i += step) {
        let other = all[i];
        if (!other.placed)
          continue;
        let sumOfRadii = r + other.r;
        if (xDist >= r + other.r)
          continue;
        let yDist = Math.sqrt(sumOfRadii * sumOfRadii - xDist * xDist);
        let forbiddenInterval = [other.y - yDist, other.y + yDist];
        forbiddenIntervals.push(forbiddenInterval);
      }
    }
    if (forbiddenIntervals.length == 0) {
      return item.r * (this.rng() - 0.5) * randomness2;
    }
    let candidatePositions = forbiddenIntervals.flat();
    candidatePositions.push(0);
    candidatePositions.sort((a, b) => {
      let abs_a = Math.abs(a);
      let abs_b = Math.abs(b);
      if (abs_a < abs_b)
        return -1;
      if (abs_a > abs_b)
        return 1;
      return a - b;
    });
    for (let i = 0; i < candidatePositions.length; i++) {
      let position = candidatePositions[i];
      if (forbiddenIntervals.every((interval) => position <= interval[0] || position >= interval[1])) {
        return position;
      }
    }
  }
}
const SetCoords = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yScale, $$unsubscribe_yScale;
  let $xScale, $$unsubscribe_xScale;
  let $yRange, $$unsubscribe_yRange;
  let $xGet, $$unsubscribe_xGet;
  let $rRange, $$unsubscribe_rRange;
  let $rGet, $$unsubscribe_rGet;
  let $yGet, $$unsubscribe_yGet;
  let $width, $$unsubscribe_width;
  let $r, $$unsubscribe_r;
  let $y, $$unsubscribe_y;
  let $x, $$unsubscribe_x;
  let $custom, $$unsubscribe_custom;
  let $data, $$unsubscribe_data;
  const { data, x, y, r, xGet, yGet, rGet, xScale, yScale, yRange, rRange, custom, width } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_x = subscribe(x, (value) => $x = value);
  $$unsubscribe_y = subscribe(y, (value) => $y = value);
  $$unsubscribe_r = subscribe(r, (value) => $r = value);
  $$unsubscribe_xGet = subscribe(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  $$unsubscribe_rGet = subscribe(rGet, (value) => $rGet = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$unsubscribe_yRange = subscribe(yRange, (value) => $yRange = value);
  $$unsubscribe_rRange = subscribe(rRange, (value) => $rRange = value);
  $$unsubscribe_custom = subscribe(custom, (value) => $custom = value);
  $$unsubscribe_width = subscribe(width, (value) => $width = value);
  let coords = $custom.coords;
  let type = $custom.type;
  let prevWidth = $width;
  function setCoords(data2, custom2, x2, y2, r2, width2) {
    let mode = custom2.mode;
    let padding = custom2.padding;
    let duration = custom2.animation && width2 == prevWidth ? custom2.duration : 0;
    prevWidth = width2;
    let newcoords;
    if (type == "bar") {
      newcoords = data2.map((d, i) => d.map((e, j) => {
        return {
          x: mode == "default" || mode == "grouped" || (mode == "comparison" || mode == "stacked") && i == 0 ? 0 : mode == "stacked" ? x2(data2[i - 1][j]) : x2(e),
          y: mode == "grouped" ? $yGet(e) + i * (1 / data2.length) * $yScale.bandwidth() : $yGet(e),
          w: mode == "default" || mode == "grouped" || (mode == "comparison" || mode == "stacked") && i == 0 ? x2(e) : mode == "stacked" ? x2(e) - x2(data2[i - 1][j]) : 0,
          h: mode == "grouped" ? $yScale.bandwidth() / data2.length : $yScale.bandwidth()
        };
      }));
    } else if (type == "column") {
      newcoords = data2.map((d, i) => d.map((e, j) => {
        return {
          x: mode == "grouped" && $xScale.bandwidth ? $xGet(e) + i * (1 / data2.length) * $xScale.bandwidth() : mode == "grouped" ? $xGet(e)[0] + i * (1 / data2.length) * Math.max(0, $xGet(e)[1] - $xGet(e)[0]) : $xScale.bandwidth ? $xGet(e) : $xGet(e)[0],
          y: y2(e),
          w: mode == "grouped" && $xScale.bandwidth ? $xScale.bandwidth() / data2.length : mode == "grouped" ? Math.max(0, $xGet(e)[1] - $xGet(e)[0]) / data2.length : $xScale.bandwidth ? $xScale.bandwidth() : Math.max(0, $xGet(e)[1] - $xGet(e)[0]),
          h: mode == "default" || mode == "grouped" || (mode == "comparison" || mode == "stacked") && i == 0 ? y2(e) : mode == "stacked" ? y2(e) - y2(data2[i - 1][j]) : 0
        };
      }));
    } else if (type == "scatter") {
      let rVal = (d) => r2 ? $rGet(d) : $rRange[0];
      newcoords = y2 ? data2.map((d) => ({ x: x2(d), y: y2(d), r: rVal(d) })) : new AccurateBeeswarm(data2, (d) => rVal(d), (d) => $xGet(d), padding, $yRange[0] / 2).calculateYPositions().map((d) => ({
        x: $xScale.invert(d.x),
        y: $yScale.invert(d.y),
        r: d.r
      }));
    } else if (type == "line") {
      newcoords = data2.map((d) => d.map((e) => {
        return { x: x2(e), y: y2(e) };
      }));
    }
    coords.set(newcoords, { duration });
  }
  {
    setCoords($data, $custom, $x, $y, $r, $width);
  }
  $$unsubscribe_yScale();
  $$unsubscribe_xScale();
  $$unsubscribe_yRange();
  $$unsubscribe_xGet();
  $$unsubscribe_rRange();
  $$unsubscribe_rGet();
  $$unsubscribe_yGet();
  $$unsubscribe_width();
  $$unsubscribe_r();
  $$unsubscribe_y();
  $$unsubscribe_x();
  $$unsubscribe_custom();
  $$unsubscribe_data();
  return ``;
});
const Scatter_svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $custom, $$unsubscribe_custom;
  let $coords, $$unsubscribe_coords;
  let $data, $$unsubscribe_data;
  let $xScale, $$unsubscribe_xScale;
  let $yScale, $$unsubscribe_yScale;
  let $z, $$unsubscribe_z;
  let $zGet, $$unsubscribe_zGet;
  let $zRange, $$unsubscribe_zRange;
  const { data, z, xScale, yScale, zGet, zRange, custom } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_z = subscribe(z, (value) => $z = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$unsubscribe_zGet = subscribe(zGet, (value) => $zGet = value);
  $$unsubscribe_zRange = subscribe(zRange, (value) => $zRange = value);
  $$unsubscribe_custom = subscribe(custom, (value) => $custom = value);
  let { hovered = null } = $$props;
  let { placeLabel = null } = $$props;
  let { selected = null } = $$props;
  let { highlighted = [] } = $$props;
  let { overlayFill = false } = $$props;
  let coords = $custom.coords;
  $$unsubscribe_coords = subscribe(coords, (value) => $coords = value);
  let idKey = $custom.idKey;
  let colorHover = $custom.colorHover ? $custom.colorHover : "orange";
  let colorSelect = $custom.colorSelect ? $custom.colorSelect : "black";
  let colorHighlight = $custom.colorHighlight ? $custom.colorHighlight : "black";
  let lineWidth = $custom.lineWidth ? $custom.lineWidth : 2;
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.placeLabel === void 0 && $$bindings.placeLabel && placeLabel !== void 0)
    $$bindings.placeLabel(placeLabel);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.overlayFill === void 0 && $$bindings.overlayFill && overlayFill !== void 0)
    $$bindings.overlayFill(overlayFill);
  $$unsubscribe_custom();
  $$unsubscribe_coords();
  $$unsubscribe_data();
  $$unsubscribe_xScale();
  $$unsubscribe_yScale();
  $$unsubscribe_z();
  $$unsubscribe_zGet();
  $$unsubscribe_zRange();
  return `${$coords.length == $data.length ? `<g class="${"scatter-group"}">${each($coords, (d, i) => {
    return `<circle class="${""}"${add_attribute("cx", $xScale(d.x), 0)}${add_attribute("cy", $yScale(d.y), 0)}${add_attribute("r", d.r, 0)}${add_attribute("fill", $z ? $zGet($data[i]) : $zRange[0], 0)}></circle>`;
  })}${idKey && (hovered || selected || highlighted[0]) ? `${each($coords, (d, i) => {
    return `${[hovered, selected, ...highlighted].includes($data[i][idKey]) ? `${placeLabel == $data[i]["unique"] ? `<circle class${add_attribute("cx", $xScale(d.x), 0)}${add_attribute("cy", $yScale(d.y), 0)}${add_attribute("r", d.r, 0)}${add_attribute("fill", overlayFill && $data[i][idKey] == selected ? colorSelect : overlayFill & highlighted.includes($data[i][idKey]) ? colorHighlight : "none", 0)}${add_attribute("stroke", $data[i][idKey] == hovered ? colorHover : $data[i][idKey] == selected ? colorSelect : colorHighlight, 0)}${add_attribute("stroke-width", $data[i][idKey] == hovered || $data[i][idKey] == selected || highlighted.includes($data[i][idKey]) ? lineWidth : 0, 0)}></circle>` : ``}` : ``}`;
  })}` : ``}</g>` : ``}`;
});
var Voronoi_svelte_svelte_type_style_lang = "";
const css$p = {
  code: ".voronoi-cell.svelte-169satm{fill:none;stroke:none;pointer-events:all}",
  map: null
};
const Voronoi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let coordsArray;
  let voronoi;
  let $height, $$unsubscribe_height;
  let $width, $$unsubscribe_width;
  let $yScale, $$unsubscribe_yScale;
  let $xScale, $$unsubscribe_xScale;
  let $coords, $$unsubscribe_coords;
  let $custom, $$unsubscribe_custom;
  let $data, $$unsubscribe_data;
  const { data, width, height, custom, xScale, yScale } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_width = subscribe(width, (value) => $width = value);
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  $$unsubscribe_custom = subscribe(custom, (value) => $custom = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  createEventDispatcher();
  let { hover: hover2 = false } = $$props;
  let { hovered = null } = $$props;
  let { select = false } = $$props;
  let { selected = null } = $$props;
  let coords = $custom.coords;
  $$unsubscribe_coords = subscribe(coords, (value) => $coords = value);
  $custom.idKey;
  if ($$props.hover === void 0 && $$bindings.hover && hover2 !== void 0)
    $$bindings.hover(hover2);
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$p);
  coordsArray = Array.isArray($coords) ? $coords.map((d) => [$xScale(d.x), $yScale(d.y)]) : [];
  voronoi = Delaunay.from(coordsArray).voronoi([0, 0, $width, $height]);
  $$unsubscribe_height();
  $$unsubscribe_width();
  $$unsubscribe_yScale();
  $$unsubscribe_xScale();
  $$unsubscribe_coords();
  $$unsubscribe_custom();
  $$unsubscribe_data();
  return `${$coords.length == $data.length ? `${voronoi ? `<g class="${"voronoi-group"}">${each($data, (d, i) => {
    return `<path class="${"voronoi-cell svelte-169satm"}"${add_attribute("d", voronoi.renderCell(i), 0)}></path>`;
  })}</g>` : ``}` : ``}`;
});
var AxisX_svelte_svelte_type_style_lang$3 = "";
const css$o = {
  code: ".tick.svelte-r9f2bw.svelte-r9f2bw{font-size:.8em}.tick.svelte-r9f2bw .tick-mark.svelte-r9f2bw,.tick.tick-0.svelte-r9f2bw line.svelte-r9f2bw{stroke-dasharray:0}.dashed.svelte-r9f2bw.svelte-r9f2bw{stroke-dasharray:2}.axis.snapTicks.svelte-r9f2bw .tick:last-child text.svelte-r9f2bw{transform:translateX(3px)}.axis.snapTicks.svelte-r9f2bw .tick.tick-0 text.svelte-r9f2bw{transform:translateX(-3px)}",
  map: null
};
const AxisX$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $xScale, $$unsubscribe_xScale;
  let $yRange, $$unsubscribe_yRange;
  let $height, $$unsubscribe_height;
  const { width, height, xScale, yRange } = getContext("LayerCake");
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yRange = subscribe(yRange, (value) => $yRange = value);
  let { gridlines = true } = $$props;
  let { tickDashed = false } = $$props;
  let { tickMarks = false } = $$props;
  let { tickColor = "#bbb" } = $$props;
  let { textColor = "#666" } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { snapTicks = false } = $$props;
  let { ticks = void 0 } = $$props;
  let { xTick = void 0 } = $$props;
  let { yTick = 16 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  function textAnchor(i) {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  }
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.tickDashed === void 0 && $$bindings.tickDashed && tickDashed !== void 0)
    $$bindings.tickDashed(tickDashed);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0)
    $$bindings.tickMarks(tickMarks);
  if ($$props.tickColor === void 0 && $$bindings.tickColor && tickColor !== void 0)
    $$bindings.tickColor(tickColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  $$result.css.add(css$o);
  isBandwidth = typeof $xScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $xScale.domain() : typeof ticks === "function" ? ticks($xScale.ticks()) : $xScale.ticks(ticks);
  $$unsubscribe_xScale();
  $$unsubscribe_yRange();
  $$unsubscribe_height();
  return `<g class="${["axis x-axis svelte-r9f2bw", snapTicks ? "snapTicks" : ""].join(" ").trim()}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(tick) + " svelte-r9f2bw"}" transform="${"translate(" + escape($xScale(tick)) + "," + escape($yRange[0]) + ")"}">${gridlines !== false ? `<line class="${["gridline svelte-r9f2bw", tickDashed ? "dashed" : ""].join(" ").trim()}"${add_attribute("y1", $height * -1, 0)} y2="${"0"}" x1="${"0"}" x2="${"0"}" style="${"stroke: " + escape(tickColor)}"></line>` : ``}${tickMarks === true ? `<line class="${"tick-mark svelte-r9f2bw"}"${add_attribute("y1", 0, 0)}${add_attribute("y2", 6, 0)}${add_attribute("x1", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${add_attribute("x2", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)} style="${"stroke: " + escape(tickColor)}"></line>` : ``}<text${add_attribute("x", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${add_attribute("y", yTick, 0)}${add_attribute("dx", dxTick, 0)}${add_attribute("dy", dyTick, 0)}${add_attribute("text-anchor", textAnchor(i), 0)} style="${"fill: " + escape(textColor)}" class="${"svelte-r9f2bw"}">${escape(i == tickVals.length - 1 ? prefix + formatTick(tick) + suffix : formatTick(tick))}</text></g>`;
  })}</g>`;
});
var AxisY_svelte_svelte_type_style_lang$3 = "";
const css$n = {
  code: ".tick.svelte-f7wn4m.svelte-f7wn4m{font-size:.8em}.dashed.svelte-f7wn4m.svelte-f7wn4m{stroke-dasharray:2}.tick.tick-0.svelte-f7wn4m line.svelte-f7wn4m{stroke-dasharray:0}",
  map: null
};
const AxisY$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $yScale, $$unsubscribe_yScale;
  let $padding, $$unsubscribe_padding;
  let $xRange, $$unsubscribe_xRange;
  const { padding, xRange, yScale } = getContext("LayerCake");
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  $$unsubscribe_xRange = subscribe(xRange, (value) => $xRange = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  let { ticks = 4 } = $$props;
  let { tickMarks = false } = $$props;
  let { gridlines = true } = $$props;
  let { tickDashed = false } = $$props;
  let { tickColor = "#bbb" } = $$props;
  let { textColor = "#666" } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { xTick = 0 } = $$props;
  let { yTick = 0 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = -4 } = $$props;
  let { textAnchor = "start" } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0)
    $$bindings.tickMarks(tickMarks);
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.tickDashed === void 0 && $$bindings.tickDashed && tickDashed !== void 0)
    $$bindings.tickDashed(tickDashed);
  if ($$props.tickColor === void 0 && $$bindings.tickColor && tickColor !== void 0)
    $$bindings.tickColor(tickColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.textAnchor === void 0 && $$bindings.textAnchor && textAnchor !== void 0)
    $$bindings.textAnchor(textAnchor);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  $$result.css.add(css$n);
  isBandwidth = typeof $yScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $yScale.domain() : typeof ticks === "function" ? ticks($yScale.ticks()) : $yScale.ticks(ticks);
  $$unsubscribe_yScale();
  $$unsubscribe_padding();
  $$unsubscribe_xRange();
  return `<g class="${"axis y-axis"}" transform="${"translate(" + escape(-$padding.left) + ", 0)"}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(tick) + " svelte-f7wn4m"}" transform="${"translate(" + escape($xRange[0] + (isBandwidth ? $padding.left : 0)) + ", " + escape($yScale(tick)) + ")"}">${gridlines !== false ? `<line class="${["gridline svelte-f7wn4m", tickDashed ? "dashed" : ""].join(" ").trim()}" x2="${"100%"}"${add_attribute("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)} style="${"stroke: " + escape(tickColor)}"></line>` : ``}${tickMarks === true ? `<line class="${"tick-mark svelte-f7wn4m"}" x1="${"0"}"${add_attribute("x2", isBandwidth ? -6 : 6, 0)}${add_attribute("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)} style="${"stroke: " + escape(tickColor)}"></line>` : ``}<text${add_attribute("x", xTick, 0)}${add_attribute("y", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("dx", isBandwidth ? -4 : dxTick, 0)}${add_attribute("dy", isBandwidth ? 4 : dyTick, 0)} style="${"text-anchor:" + escape(isBandwidth ? "end" : textAnchor) + "; fill: " + escape(textColor)}">${escape(i == tickVals.length - 1 ? prefix + formatTick(tick) + suffix : formatTick(tick))}</text></g>`;
  })}</g>`;
});
var Legend_svelte_svelte_type_style_lang$3 = "";
const css$m = {
  code: "ul.legend.svelte-1w19nmy.svelte-1w19nmy.svelte-1w19nmy{margin:0;padding:0}ul.legend.svelte-1w19nmy li.svelte-1w19nmy.svelte-1w19nmy{display:inline;font-size:.8em}ul.legend.svelte-1w19nmy li.svelte-1w19nmy+li.svelte-1w19nmy{margin-left:8px}.bullet.svelte-1w19nmy.svelte-1w19nmy.svelte-1w19nmy{display:inline-block;vertical-align:middle}.round.svelte-1w19nmy.svelte-1w19nmy.svelte-1w19nmy{border-radius:50%}",
  map: null
};
const Legend$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { domain = null } = $$props;
  let { colors = null } = $$props;
  let { line = false } = $$props;
  let { comparison = false } = $$props;
  let { horizontal = true } = $$props;
  let { markerWidth = 2.5 } = $$props;
  let { markerLength = 13 } = $$props;
  let { round = false } = $$props;
  if ($$props.domain === void 0 && $$bindings.domain && domain !== void 0)
    $$bindings.domain(domain);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.comparison === void 0 && $$bindings.comparison && comparison !== void 0)
    $$bindings.comparison(comparison);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  if ($$props.markerLength === void 0 && $$bindings.markerLength && markerLength !== void 0)
    $$bindings.markerLength(markerLength);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  $$result.css.add(css$m);
  return `${Array.isArray(domain) && Array.isArray(colors) ? `<ul class="${"legend svelte-1w19nmy"}">${each(domain, (label, i) => {
    return `<li class="${"svelte-1w19nmy"}"><div class="${["bullet svelte-1w19nmy", round ? "round" : ""].join(" ").trim()}" style="${"background-color: " + escape(colors[i]) + "; width: " + escape(!horizontal && (line || comparison && i != 0) ? markerWidth : markerLength) + "px; height: " + escape(horizontal && (line || comparison && i != 0) ? markerWidth : markerLength) + "px"}"></div>
        ${escape(label)}
      </li>`;
  })}</ul>` : ``}`;
});
var Title_svelte_svelte_type_style_lang = "";
const css$l = {
  code: ".title.svelte-b06b69{font-size:1.1em;font-weight:bold;margin-bottom:10px}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$l);
  return `<div class="${"title svelte-b06b69"}">${slots.default ? slots.default({}) : ``}</div>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$k = {
  code: ".footer.svelte-7jvwfp{font-size:.8em;color:grey;margin-top:5px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$k);
  return `<div class="${"footer svelte-7jvwfp"}">${slots.default ? slots.default({}) : ``}</div>`;
});
var Labels_svelte_svelte_type_style_lang = "";
const css$j = {
  code: ".label.svelte-gjdahk{font-size:0.8em}.label-bold.svelte-gjdahk{font-size:0.8em;font-weight:600}",
  map: null
};
const Labels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $custom, $$unsubscribe_custom;
  let $coords, $$unsubscribe_coords;
  let $data, $$unsubscribe_data;
  let $xScale, $$unsubscribe_xScale;
  let $yScale, $$unsubscribe_yScale;
  const { data, xScale, yScale, custom } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$unsubscribe_custom = subscribe(custom, (value) => $custom = value);
  let { hovered = null } = $$props;
  let { placeLabel = null } = $$props;
  let { selected = null } = $$props;
  let coords = $custom.coords;
  $$unsubscribe_coords = subscribe(coords, (value) => $coords = value);
  let idKey = $custom.idKey;
  let labelKey = $custom.labelKey;
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.placeLabel === void 0 && $$bindings.placeLabel && placeLabel !== void 0)
    $$bindings.placeLabel(placeLabel);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$j);
  $$unsubscribe_custom();
  $$unsubscribe_coords();
  $$unsubscribe_data();
  $$unsubscribe_xScale();
  $$unsubscribe_yScale();
  return `${$coords.length == $data.length ? `<g class="${"label-group"}">${$coords[0] && $coords[0].x ? `${each($coords, (d, i) => {
    return `${[hovered, selected].includes($data[i][idKey]) ? `${placeLabel == $data[i]["unique"] ? `<rect fill="${"rgba(255,255,255,0.8)"}"${add_attribute("x", $xScale(d.x), 0)}${add_attribute("y", $yScale(d.y), 0)} transform="${"translate(5,-45)"}" width="${"150"}" height="${"50"}" rx="${"15"}"></rect>
		<text class="${"label-bold svelte-gjdahk"}" transform="${"translate(10,-25)"}" fill="${"#333"}"${add_attribute("x", $xScale(d.x), 0)}${add_attribute("y", $yScale(d.y), 0)}>${escape(placeLabel)}</text>
		<text class="${"label svelte-gjdahk"}" transform="${"translate(10,-5)"}" fill="${"#333"}"${add_attribute("x", $xScale(d.x), 0)}${add_attribute("y", $yScale(d.y), 0)}>${escape(Math.round($data[i][labelKey] * 10) / 10)}</text>
		<text class="${"label svelte-gjdahk"}" transform="${"translate(55,-5)"}"${add_attribute("fill", Math.round($data[i]["change"] * 10) / 10 < 0 ? "#FF0000" : "#228C22", 0)}${add_attribute("x", $xScale(d.x), 0)}${add_attribute("y", $yScale(d.y), 0)}>${escape("(" + (Math.round($data[i]["change"] * 10) / 10 < 0 ? "" : "+") + Math.round($data[i]["change"] * 10) / 10 + ")")}</text>` : ``}` : ``}`;
  })}` : `${$coords[0] && $coords[0][0] && $coords[0][0].x ? `${each($coords, (d, i) => {
    return `${[hovered, selected].includes($data[i][0][idKey]) ? `<text class="${"label svelte-gjdahk"}" transform="${"translate(2,3)"}" filter="${"url(#bgfill)"}" fill="${"#333"}"${add_attribute("x", $xScale(d[d.length - 1].x), 0)}${add_attribute("y", $yScale(d[d.length - 1].y), 0)}>${escape($data[i][0][labelKey])}</text>` : ``}`;
  })}` : ``}`}</g>` : ``}`;
});
var ScatterChart_svelte_svelte_type_style_lang = "";
const css$i = {
  code: ".chart-container.svelte-1dnlmiu{width:100%}",
  map: null
};
let hover = true;
function domGet(data, key, min, max) {
  let vals = data.map((d) => d[key]);
  return [
    min ? min : vals[0] ? Math.min(...vals) : -1,
    max ? max : vals[0] ? Math.max(...vals) : 1
  ];
}
const ScatterChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let zDomain;
  let $yDomain, $$unsubscribe_yDomain;
  let { data } = $$props;
  let { height = 250 } = $$props;
  let { animation = false } = $$props;
  let { duration = 800 } = $$props;
  let { xKey = "x" } = $$props;
  let { yKey: yKey2 = null } = $$props;
  let { zKey = null } = $$props;
  let { rKey = null } = $$props;
  let { idKey = xKey } = $$props;
  let { labelKey = idKey } = $$props;
  let { xScale = "linear" } = $$props;
  let { yScale = "linear" } = $$props;
  let { xFormatTick = (d) => d } = $$props;
  let { yFormatTick = (d) => d } = $$props;
  let { xMax = null } = $$props;
  let { xMin = null } = $$props;
  let { yMax = null } = $$props;
  let { yMin = null } = $$props;
  let { xAxis = true } = $$props;
  let { yAxis = true } = $$props;
  let { xTicks = 4 } = $$props;
  let { yTicks = 4 } = $$props;
  let { textColor = "#666" } = $$props;
  let { tickColor = "#ccc" } = $$props;
  let { tickDashed = false } = $$props;
  let { title = null } = $$props;
  let { footer = null } = $$props;
  let { legend = false } = $$props;
  let { snapTicks = false } = $$props;
  let { padding = { top: 0, bottom: 20, left: 35, right: 0 } } = $$props;
  let { buffer = 5 } = $$props;
  let { color = null } = $$props;
  let { colors = color ? [color] : [
    "#3C388E",
    "#DF0667",
    "#00A3A6",
    "#206095",
    "#A8BD3A",
    "#003C57",
    "#27A0CC",
    "#118C7B",
    "#F66068",
    "#746CB1",
    "#22D0B6",
    "lightgrey"
  ] } = $$props;
  let { r = 4 } = $$props;
  let { interactive = true } = $$props;
  let { xPrefix = "" } = $$props;
  let { xSuffix = "" } = $$props;
  let { yPrefix = "" } = $$props;
  let { ySuffix = "" } = $$props;
  let { colorHover = "orange" } = $$props;
  let { select = false } = $$props;
  let { selected = null } = $$props;
  let { colorSelect = "black" } = $$props;
  let { highlighted = [] } = $$props;
  let { colorHighlight = "black" } = $$props;
  let { overlayFill = false } = $$props;
  let hovered = null;
  let placeLabel = true;
  const tweenOptions = { duration, easing: cubicInOut };
  const coords = tweened(void 0, tweenOptions);
  const distinct = (d, i, arr) => arr.indexOf(d) == i;
  function xDomUpdate(data2, key, min, max) {
    let newDom = domGet(data2, key, min, max);
    if (newDom[0] != xDom[0] || newDom[1] != xDom[1]) {
      xDomain.set(newDom);
      xDom = newDom;
    }
  }
  function yDomUpdate(data2, key, min, max) {
    let newDom = key ? domGet(data2, key, min, max) : yDom;
    if (newDom[0] != yDom[0] || newDom[1] != yDom[1]) {
      yDomain.set(newDom, { duration: animation ? duration : 0 });
      yDom = newDom;
    }
  }
  let xDom = domGet(data, xKey, xMin, xMax);
  const xDomain = tweened(xDom, tweenOptions);
  let yDom = domGet(data, yKey2, yMin, yMax);
  const yDomain = tweened(yDom, tweenOptions);
  $$unsubscribe_yDomain = subscribe(yDomain, (value) => $yDomain = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.xKey === void 0 && $$bindings.xKey && xKey !== void 0)
    $$bindings.xKey(xKey);
  if ($$props.yKey === void 0 && $$bindings.yKey && yKey2 !== void 0)
    $$bindings.yKey(yKey2);
  if ($$props.zKey === void 0 && $$bindings.zKey && zKey !== void 0)
    $$bindings.zKey(zKey);
  if ($$props.rKey === void 0 && $$bindings.rKey && rKey !== void 0)
    $$bindings.rKey(rKey);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.labelKey === void 0 && $$bindings.labelKey && labelKey !== void 0)
    $$bindings.labelKey(labelKey);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.xFormatTick === void 0 && $$bindings.xFormatTick && xFormatTick !== void 0)
    $$bindings.xFormatTick(xFormatTick);
  if ($$props.yFormatTick === void 0 && $$bindings.yFormatTick && yFormatTick !== void 0)
    $$bindings.yFormatTick(yFormatTick);
  if ($$props.xMax === void 0 && $$bindings.xMax && xMax !== void 0)
    $$bindings.xMax(xMax);
  if ($$props.xMin === void 0 && $$bindings.xMin && xMin !== void 0)
    $$bindings.xMin(xMin);
  if ($$props.yMax === void 0 && $$bindings.yMax && yMax !== void 0)
    $$bindings.yMax(yMax);
  if ($$props.yMin === void 0 && $$bindings.yMin && yMin !== void 0)
    $$bindings.yMin(yMin);
  if ($$props.xAxis === void 0 && $$bindings.xAxis && xAxis !== void 0)
    $$bindings.xAxis(xAxis);
  if ($$props.yAxis === void 0 && $$bindings.yAxis && yAxis !== void 0)
    $$bindings.yAxis(yAxis);
  if ($$props.xTicks === void 0 && $$bindings.xTicks && xTicks !== void 0)
    $$bindings.xTicks(xTicks);
  if ($$props.yTicks === void 0 && $$bindings.yTicks && yTicks !== void 0)
    $$bindings.yTicks(yTicks);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.tickColor === void 0 && $$bindings.tickColor && tickColor !== void 0)
    $$bindings.tickColor(tickColor);
  if ($$props.tickDashed === void 0 && $$bindings.tickDashed && tickDashed !== void 0)
    $$bindings.tickDashed(tickDashed);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.footer === void 0 && $$bindings.footer && footer !== void 0)
    $$bindings.footer(footer);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.buffer === void 0 && $$bindings.buffer && buffer !== void 0)
    $$bindings.buffer(buffer);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.r === void 0 && $$bindings.r && r !== void 0)
    $$bindings.r(r);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.xPrefix === void 0 && $$bindings.xPrefix && xPrefix !== void 0)
    $$bindings.xPrefix(xPrefix);
  if ($$props.xSuffix === void 0 && $$bindings.xSuffix && xSuffix !== void 0)
    $$bindings.xSuffix(xSuffix);
  if ($$props.yPrefix === void 0 && $$bindings.yPrefix && yPrefix !== void 0)
    $$bindings.yPrefix(yPrefix);
  if ($$props.ySuffix === void 0 && $$bindings.ySuffix && ySuffix !== void 0)
    $$bindings.ySuffix(ySuffix);
  if ($$props.colorHover === void 0 && $$bindings.colorHover && colorHover !== void 0)
    $$bindings.colorHover(colorHover);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.colorSelect === void 0 && $$bindings.colorSelect && colorSelect !== void 0)
    $$bindings.colorSelect(colorSelect);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.colorHighlight === void 0 && $$bindings.colorHighlight && colorHighlight !== void 0)
    $$bindings.colorHighlight(colorHighlight);
  if ($$props.overlayFill === void 0 && $$bindings.overlayFill && overlayFill !== void 0)
    $$bindings.overlayFill(overlayFill);
  $$result.css.add(css$i);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      xDomUpdate(data, xKey, xMin, xMax);
    }
    {
      yDomUpdate(data, yKey2, yMin, yMax);
    }
    zDomain = zKey ? data.map((d) => d[zKey]).filter(distinct) : null;
    $$rendered = `



${title ? `${validate_component(Title, "Title").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(title)}`;
      }
    })}` : ``}
${slots.options ? slots.options({}) : ``}
<div class="${"chart-container svelte-1dnlmiu"}" style="${"height: " + escape(typeof height == "number" ? height + "px" : height)}">${validate_component(LayerCake, "LayerCake").$$render($$result, {
      padding,
      x: xKey,
      y: yKey2,
      z: zKey,
      r: rKey,
      xScale: xScale == "log" ? scaleSymlog() : scaleLinear(),
      yScale: yScale == "log" ? scaleSymlog() : scaleLinear(),
      zScale: scaleOrdinal(),
      xDomain: xDom,
      yDomain: $yDomain,
      zDomain,
      zRange: colors,
      rRange: Array.isArray(r) ? r : [r, r],
      data,
      xPadding: [buffer, buffer],
      yPadding: yKey2 ? [buffer, buffer] : null,
      custom: {
        type: "scatter",
        idKey,
        labelKey,
        coords,
        colorSelect,
        colorHover,
        colorHighlight,
        padding: 1,
        animation,
        duration
      }
    }, {}, {
      default: ({ width }) => {
        return `${width > 80 ? `
		${validate_component(SetCoords, "SetCoords").$$render($$result, {}, {}, {})}
    ${slots.back ? slots.back({}) : ``}
		${validate_component(Svg, "Svg").$$render($$result, { pointerEvents: interactive }, {}, {
          default: () => {
            return `${xAxis ? `${validate_component(AxisX$3, "AxisX").$$render($$result, {
              ticks: xTicks,
              formatTick: xFormatTick,
              snapTicks,
              prefix: xPrefix,
              suffix: xSuffix,
              textColor,
              tickColor,
              tickDashed
            }, {}, {})}` : ``}
      ${yAxis && yKey2 ? `${validate_component(AxisY$3, "AxisY").$$render($$result, {
              ticks: yTicks,
              formatTick: yFormatTick,
              prefix: yPrefix,
              suffix: ySuffix,
              textColor,
              tickColor,
              tickDashed
            }, {}, {})}` : ``}
			${validate_component(Scatter_svg, "Scatter").$$render($$result, {
              selected,
              hovered,
              placeLabel,
              highlighted,
              overlayFill
            }, {}, {})}
			${select || hover ? `${validate_component(Voronoi, "Voronoi").$$render($$result, {
              select,
              hover,
              highlighted,
              selected,
              hovered
            }, {
              selected: ($$value) => {
                selected = $$value;
                $$settled = false;
              },
              hovered: ($$value) => {
                hovered = $$value;
                $$settled = false;
              }
            }, {})}` : ``}
			${`${validate_component(Labels, "Labels").$$render($$result, { hovered, placeLabel, selected }, {}, {})}`}
			${slots.svg ? slots.svg({}) : ``}`;
          }
        })}
	  ${slots.front ? slots.front({}) : ``}` : ``}`;
      }
    })}</div>
${legend && zDomain ? `${validate_component(Legend$3, "Legend").$$render($$result, {
      domain: zDomain,
      colors,
      markerLength: 13,
      round: true
    }, {}, {})}` : ``}
${footer ? `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(footer)}`;
      }
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_yDomain();
  return $$rendered;
});
var AxisY_svelte_svelte_type_style_lang$2 = "";
const css$h = {
  code: ".tick.svelte-1ypvook.svelte-1ypvook{font-size:12px;font-weight:200}.tick.svelte-1ypvook line.svelte-1ypvook{stroke-dasharray:2}.tick.tick-0.svelte-1ypvook line.svelte-1ypvook{stroke-dasharray:0}.baseline.svelte-1ypvook.svelte-1ypvook{stroke-dasharray:0 !important}",
  map: null
};
const AxisY$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $yScale, $$unsubscribe_yScale;
  let $padding, $$unsubscribe_padding;
  let $xRange, $$unsubscribe_xRange;
  const { padding, xRange, xScale, yScale } = getContext("LayerCake");
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  $$unsubscribe_xRange = subscribe(xRange, (value) => $xRange = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  let { ticks = 4 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { gridlines = false } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { xTick = 0 } = $$props;
  let { yTick = 0 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = -4 } = $$props;
  let { textAnchor = "start" } = $$props;
  let { lineColor = "#aaa" } = $$props;
  let { textColor = "#666" } = $$props;
  let { solid = false } = $$props;
  let { nu } = $$props;
  let { topics } = $$props;
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.textAnchor === void 0 && $$bindings.textAnchor && textAnchor !== void 0)
    $$bindings.textAnchor(textAnchor);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.nu === void 0 && $$bindings.nu && nu !== void 0)
    $$bindings.nu(nu);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  $$result.css.add(css$h);
  isBandwidth = typeof $yScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $yScale.domain() : $yScale.ticks(ticks);
  $$unsubscribe_yScale();
  $$unsubscribe_padding();
  $$unsubscribe_xRange();
  return `${nu == 0 ? `<g class="${"axis y-axis"}" transform="${"translate(" + escape(-$padding.left) + ", 0)"}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(tick) + " svelte-1ypvook"}" transform="${"translate(" + escape($xRange[0] + (isBandwidth ? $padding.left : 0)) + ", " + escape($yScale(tick)) + ")"}">${gridlines !== false ? `<line x2="${"100%"}"${add_attribute("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("stroke", lineColor, 0)} class="${["svelte-1ypvook", solid ? "baseline" : ""].join(" ").trim()}"></line>` : ``}<text${add_attribute("x", xTick - 10, 0)}${add_attribute("y", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0) - 3, 0)}${add_attribute("dx", isBandwidth ? 3 : dxTick, 0)}${add_attribute("dy", isBandwidth ? 4 : dyTick, 0)}${add_attribute("fill", textColor, 0)} style="${"text-anchor:" + escape(isBandwidth ? "end" : textAnchor) + ";"}">${escape(topics[tick].label)}</text></g>`;
  })}</g>` : ``}`;
});
var AxisX_svelte_svelte_type_style_lang$2 = "";
const css$g = {
  code: ".tick.svelte-ej8ad5{font-size:14px;font-weight:200}.baseline.svelte-ej8ad5{stroke-dasharray:0 !important}",
  map: null
};
const AxisX$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $xScale, $$unsubscribe_xScale;
  let $height, $$unsubscribe_height;
  const { data, width, height, xScale, yScale, yRange } = getContext("LayerCake");
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  let { gridlines = true } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { baseline = false } = $$props;
  let { flipped = false } = $$props;
  let { snapTicks = false } = $$props;
  let { ticks = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { xTick = void 0 } = $$props;
  let { yTick = 15 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = 0 } = $$props;
  let { lineColor = "#aaa" } = $$props;
  let { textColor = "#666" } = $$props;
  let { solid = false } = $$props;
  let { xTickCal } = $$props;
  function textAnchor(i) {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  }
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.baseline === void 0 && $$bindings.baseline && baseline !== void 0)
    $$bindings.baseline(baseline);
  if ($$props.flipped === void 0 && $$bindings.flipped && flipped !== void 0)
    $$bindings.flipped(flipped);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.xTickCal === void 0 && $$bindings.xTickCal && xTickCal !== void 0)
    $$bindings.xTickCal(xTickCal);
  $$result.css.add(css$g);
  isBandwidth = typeof $xScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $xScale.domain() : $xScale.ticks(ticks);
  $$unsubscribe_xScale();
  $$unsubscribe_height();
  return `<g class="${"axis x-axis"}"><g class="${"tick svelte-ej8ad5"}" transform="${"translate(" + escape($xScale(xTickCal)) + "," + escape($height) + ")"}"><line${add_attribute("y1", $height * -1, 0)}${add_attribute("y2", $height * -1 + $height, 0)} x1="${"0"}" x2="${"0"}"${add_attribute("stroke", lineColor, 0)} class="${["svelte-ej8ad5", solid ? "baseline" : ""].join(" ").trim()}"></line><text${add_attribute("x", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${add_attribute("y", yTick, 0)}${add_attribute("dx", textAnchor(xTickCal) == "start" ? dxTick - 2 : textAnchor(xTickCal) == "end" ? dxTick + 2 : dxTick, 0)}${add_attribute("dy", dyTick, 0)}${add_attribute("text-anchor", textAnchor(xTickCal), 0)}${add_attribute("fill", lineColor, 0)}>${escape(xTickCal + "%")}</text></g>${baseline === true ? `<line class="${"baseline svelte-ej8ad5"}"${add_attribute("y1", $height, 0)} y2="${"0"}" x1="${"0"}" x2="${"0"}"${add_attribute("stroke", lineColor, 0)}></line>` : ``}</g>`;
});
var HeadLabel_svelte_svelte_type_style_lang$1 = "";
const css$f = {
  code: "div.svelte-16861pb{font-size:14px;line-height:1.4}",
  map: null
};
const HeadLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { labels } = $$props;
  let { nu } = $$props;
  getContext("LayerCake");
  labels[nu].split(" ");
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.nu === void 0 && $$bindings.nu && nu !== void 0)
    $$bindings.nu(nu);
  $$result.css.add(css$f);
  return `

<rect x="${"0"}" y="${"0"}" width="${"140"}" height="${"20"}" fill="${"none"}"></rect>

<foreignObject x="${"5"}" y="${"-50"}" width="${"100"}" height="${"40"}"><div style="${"position: absolute; bottom: 0;"}" class="${"svelte-16861pb"}">${escape(labels[nu])}</div></foreignObject>`;
});
var LabelsAge_svelte_svelte_type_style_lang$1 = "";
const css$e = {
  code: ".label-bold.svelte-gjdahk{font-size:0.8em;font-weight:600}",
  map: null
};
const LabelsAge$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yGet, $$unsubscribe_yGet;
  const { data, xScale, yScale, xDomain, y, xGet, yGet, Domain, custom } = getContext("LayerCake");
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  let { hovered = null } = $$props;
  let { ageLabel = null } = $$props;
  let { topics } = $$props;
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.ageLabel === void 0 && $$bindings.ageLabel && ageLabel !== void 0)
    $$bindings.ageLabel(ageLabel);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  $$result.css.add(css$e);
  $$unsubscribe_yGet();
  return `${ageLabel.detail ? `${ageLabel.detail.data ? `<g class="${"label-group"}"><rect fill="${"rgba(255,255,255,0.9)"}"${add_attribute("x", -20, 0)}${add_attribute("y", $yGet(ageLabel.detail.data) + (ageLabel.detail.data.g == 2021 ? 10 : 0) - 10, 0)} transform="${"translate(5,-25)"}" width="${"170"}" height="${"25"}" rx="${"15"}"></rect><text class="${"label-bold svelte-gjdahk"}" transform="${"translate(0,-7)"}" fill="${"#333"}"${add_attribute("x", 10, 0)}${add_attribute("y", $yGet(ageLabel.detail.data) + (ageLabel.detail.data.g == 2021 ? 10 : 0) - 10, 0)}>${escape(topics[ageLabel.detail.data.x].label + ": " + Math.round(ageLabel.detail.data.y * 10) / 10 + "% in " + ageLabel.detail.data.g)}</text></g>` : ``}` : ``}`;
});
var Line_svelte_svelte_type_style_lang$1 = "";
const Bar$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  let $xScale, $$unsubscribe_xScale;
  let $yGet, $$unsubscribe_yGet;
  let $yScale, $$unsubscribe_yScale;
  let $xGet, $$unsubscribe_xGet;
  const { data, xGet, yGet, xScale, yScale } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xGet = subscribe(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  createEventDispatcher();
  let { hovered = null } = $$props;
  let hov;
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  $$unsubscribe_data();
  $$unsubscribe_xScale();
  $$unsubscribe_yGet();
  $$unsubscribe_yScale();
  $$unsubscribe_xGet();
  return `<g class="${"bar-group"}">${each($data, (e, j) => {
    return `${each(e, (d, i) => {
      return `<rect class="${"group-rect"}"${add_attribute("data-id", i, 0)}${add_attribute("x", $xScale.range()[0], 0)}${add_attribute("y", j % 2 == 0 ? $yGet(d) : $yGet(d) + (34.5 - $data[0].length * 2.5), 0)}${add_attribute("rx", 5, 0)}${add_attribute("height", $yScale.bandwidth() / 2.3, 0)}${add_attribute("width", $xGet(d) + 3, 0)}${add_attribute("fill", j % 2 == 0 ? "#DF0667" : "#3C388E", 0)}${add_attribute("stroke", d == hov ? "orange" : "white", 0)}${add_attribute("stroke-width", d == hov ? "3" : "2", 0)}></rect>`;
    })}`;
  })}</g>`;
});
const SmallMultipleWrapper_percent_range$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yDom;
  let { data } = $$props;
  let { labels } = $$props;
  let { nu } = $$props;
  let { fullExtents } = $$props;
  let { scale: scale2 } = $$props;
  let { extentGetters } = $$props;
  let { xTickCal } = $$props;
  let { topics } = $$props;
  let { xMax } = $$props;
  let hovered = null;
  let ageLabel = true;
  calcExtents(data, extentGetters);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.nu === void 0 && $$bindings.nu && nu !== void 0)
    $$bindings.nu(nu);
  if ($$props.fullExtents === void 0 && $$bindings.fullExtents && fullExtents !== void 0)
    $$bindings.fullExtents(fullExtents);
  if ($$props.scale === void 0 && $$bindings.scale && scale2 !== void 0)
    $$bindings.scale(scale2);
  if ($$props.extentGetters === void 0 && $$bindings.extentGetters && extentGetters !== void 0)
    $$bindings.extentGetters(extentGetters);
  if ($$props.xTickCal === void 0 && $$bindings.xTickCal && xTickCal !== void 0)
    $$bindings.xTickCal(xTickCal);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  if ($$props.xMax === void 0 && $$bindings.xMax && xMax !== void 0)
    $$bindings.xMax(xMax);
  yDom = data[0].map((d) => d.x);
  {
    if (yDom[0]) {
      yDom = yDom.reverse();
    }
  }
  return `${validate_component(LayerCake, "LayerCake").$$render($$result, {
    ssr: true,
    padding: { top: 40, right: 6, bottom: 2, left: 60 },
    x: "y",
    y: "x",
    data,
    xScale: scaleLinear(),
    yScale: scaleBand().paddingInner([0.05]).round(true),
    xDomain: [0, xMax + 1],
    yDomain: yDom,
    height: 300
  }, {}, {
    default: () => {
      return `
  ${validate_component(Svg, "Svg").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(HeadLabel, "HeadLabel").$$render($$result, { labels, nu }, {}, {})}
    ${validate_component(AxisY$2, "AxisY").$$render($$result, { nu, topics }, {}, {})}
    ${validate_component(AxisX$2, "AxisX").$$render($$result, { xTickCal }, {}, {})}
    ${validate_component(Bar$1, "Bar").$$render($$result, {}, {}, {})}
    ${validate_component(LabelsAge$1, "LabelsAge").$$render($$result, { hovered, ageLabel, topics }, {}, {})}`;
        }
      })}`;
    }
  })}`;
});
var Legend_svelte_svelte_type_style_lang$2 = "";
const css$d = {
  code: "ul.legend.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{margin:0;padding:0}ul.legend.svelte-o1q0c0 li.svelte-o1q0c0.svelte-o1q0c0{display:inline;font-size:.8em}ul.legend.svelte-o1q0c0 li.svelte-o1q0c0+li.svelte-o1q0c0{margin-left:8px}.bullet.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{display:inline-block;vertical-align:middle;border-radius:50%}.round.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{border-radius:50%}",
  map: null
};
const Legend$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { domain = null } = $$props;
  let { colors = null } = $$props;
  let { line = false } = $$props;
  let { comparison = false } = $$props;
  let { horizontal = true } = $$props;
  let { markerWidth = 2.5 } = $$props;
  let { markerLength = 13 } = $$props;
  let { round = false } = $$props;
  if ($$props.domain === void 0 && $$bindings.domain && domain !== void 0)
    $$bindings.domain(domain);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.comparison === void 0 && $$bindings.comparison && comparison !== void 0)
    $$bindings.comparison(comparison);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  if ($$props.markerLength === void 0 && $$bindings.markerLength && markerLength !== void 0)
    $$bindings.markerLength(markerLength);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  $$result.css.add(css$d);
  return `
  <ul class="${"legend svelte-o1q0c0"}">${each(domain, (label, i) => {
    return `<li class="${"svelte-o1q0c0"}"><div class="${["bullet svelte-o1q0c0", round ? "round" : ""].join(" ").trim()}" style="${"background-color: " + escape(colors[i]) + "; width: " + escape(!horizontal && (line || comparison && i != 0) ? markerWidth : markerLength) + "px; height: " + escape(horizontal && (line || comparison && i != 0) ? markerWidth : markerLength) + "px"}"></div>
        ${escape(label)}
      </li>`;
  })}</ul>
`;
});
var AgeChart_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".group-container.svelte-5oxew{height:300px;width:100%}.chart-container.svelte-5oxew{position:relative;display:inline-block;width:30%;height:100%}",
  map: null
};
let scale$1 = "individual";
const AgeChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { chartData } = $$props;
  let { labels } = $$props;
  let { xTickCal } = $$props;
  let { xMax } = $$props;
  let { topics } = $$props;
  const extentGetters = { x: (d) => d.x, y: (d) => d.y };
  const fullExtents = calcExtents(flatten(chartData), extentGetters);
  chartData.sort((a, b) => {
    return b[b.length - 1].y - a[a.length - 1].y;
  });
  if ($$props.chartData === void 0 && $$bindings.chartData && chartData !== void 0)
    $$bindings.chartData(chartData);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.xTickCal === void 0 && $$bindings.xTickCal && xTickCal !== void 0)
    $$bindings.xTickCal(xTickCal);
  if ($$props.xMax === void 0 && $$bindings.xMax && xMax !== void 0)
    $$bindings.xMax(xMax);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  $$result.css.add(css$c);
  return `<div class="${"group-container svelte-5oxew"}">${each(chartData, (data, i) => {
    return `<div class="${"chart-container svelte-5oxew"}">${validate_component(SmallMultipleWrapper_percent_range$1, "SmallMultipleWrapper").$$render($$result, {
      data,
      fullExtents,
      scale: scale$1,
      extentGetters,
      nu: i,
      labels,
      xTickCal,
      xMax,
      topics
    }, {}, {})}
    </div>`;
  })}</div>

${validate_component(Legend$2, "Legend").$$render($$result, {
    domain: [2001, 2011],
    colors: ["#DF0667", "#3C388E"]
  }, {}, {})}`;
});
var AxisY_svelte_svelte_type_style_lang$1 = "";
const css$b = {
  code: ".tick.svelte-1ypvook.svelte-1ypvook{font-size:12px;font-weight:200}.tick.svelte-1ypvook line.svelte-1ypvook{stroke-dasharray:2}.tick.tick-0.svelte-1ypvook line.svelte-1ypvook{stroke-dasharray:0}.baseline.svelte-1ypvook.svelte-1ypvook{stroke-dasharray:0 !important}",
  map: null
};
const AxisY$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $yScale, $$unsubscribe_yScale;
  let $padding, $$unsubscribe_padding;
  let $xRange, $$unsubscribe_xRange;
  const { padding, xRange, xScale, yScale } = getContext("LayerCake");
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  $$unsubscribe_xRange = subscribe(xRange, (value) => $xRange = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  let { ticks = 4 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { gridlines = false } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { xTick = 0 } = $$props;
  let { yTick = 0 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = -4 } = $$props;
  let { textAnchor = "start" } = $$props;
  let { lineColor = "#aaa" } = $$props;
  let { textColor = "#666" } = $$props;
  let { solid = false } = $$props;
  let { nu } = $$props;
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.textAnchor === void 0 && $$bindings.textAnchor && textAnchor !== void 0)
    $$bindings.textAnchor(textAnchor);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.nu === void 0 && $$bindings.nu && nu !== void 0)
    $$bindings.nu(nu);
  $$result.css.add(css$b);
  isBandwidth = typeof $yScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $yScale.domain() : $yScale.ticks(ticks);
  $$unsubscribe_yScale();
  $$unsubscribe_padding();
  $$unsubscribe_xRange();
  return `${nu == 0 ? `<g class="${"axis y-axis"}" transform="${"translate(" + escape(-$padding.left) + ", 0)"}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(tick) + " svelte-1ypvook"}" transform="${"translate(" + escape($xRange[0] + (isBandwidth ? $padding.left : 0)) + ", " + escape($yScale(tick)) + ")"}">${gridlines !== false ? `<line x2="${"100%"}"${add_attribute("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("stroke", lineColor, 0)} class="${["svelte-1ypvook", solid ? "baseline" : ""].join(" ").trim()}"></line>` : ``}<text${add_attribute("x", xTick - 10, 0)}${add_attribute("y", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0) - 3, 0)}${add_attribute("dx", isBandwidth ? 3 : dxTick, 0)}${add_attribute("dy", isBandwidth ? 4 : dyTick, 0)}${add_attribute("fill", textColor, 0)} style="${"text-anchor:" + escape(isBandwidth ? "end" : textAnchor) + ";"}">${i == tickVals.length - 1 ? `${escape(prefix)}${escape(formatTick(tick))}${escape(suffix)}` : `${escape(formatTick(tick))}`}</text></g>`;
  })}</g>` : ``}`;
});
var AxisX_svelte_svelte_type_style_lang$1 = "";
const css$a = {
  code: ".tick.svelte-ej8ad5{font-size:14px;font-weight:200}.baseline.svelte-ej8ad5{stroke-dasharray:0 !important}",
  map: null
};
const AxisX$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $xScale, $$unsubscribe_xScale;
  let $height, $$unsubscribe_height;
  const { data, width, height, xScale, yScale, yRange } = getContext("LayerCake");
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  let { gridlines = true } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { baseline = false } = $$props;
  let { flipped = false } = $$props;
  let { snapTicks = false } = $$props;
  let { ticks = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { xTick = void 0 } = $$props;
  let { yTick = 15 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = 0 } = $$props;
  let { lineColor = "#aaa" } = $$props;
  let { textColor = "#666" } = $$props;
  let { solid = false } = $$props;
  function textAnchor(i) {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  }
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.baseline === void 0 && $$bindings.baseline && baseline !== void 0)
    $$bindings.baseline(baseline);
  if ($$props.flipped === void 0 && $$bindings.flipped && flipped !== void 0)
    $$bindings.flipped(flipped);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  $$result.css.add(css$a);
  isBandwidth = typeof $xScale.bandwidth === "function";
  tickVals = $xScale.ticks(4);
  $$unsubscribe_xScale();
  $$unsubscribe_height();
  return `<g class="${"axis x-axis"}">${each(tickVals, (tick, i) => {
    return `${i != 0 ? `<g class="${"tick svelte-ej8ad5"}" transform="${"translate(" + escape($xScale(tick)) + "," + escape($height) + ")"}"><line${add_attribute("y1", $height * -1, 0)}${add_attribute("y2", $height * -1 + $height, 0)} x1="${"0"}" x2="${"0"}"${add_attribute("stroke", lineColor, 0)} class="${["svelte-ej8ad5", solid ? "baseline" : ""].join(" ").trim()}"></line><text${add_attribute("x", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${add_attribute("y", yTick, 0)}${add_attribute("dx", textAnchor(tick) == "start" ? dxTick - 2 : textAnchor(tick) == "end" ? dxTick + 2 : dxTick, 0)}${add_attribute("dy", dyTick, 0)}${add_attribute("text-anchor", textAnchor(tick), 0)}${add_attribute("fill", lineColor, 0)}>${escape(tick + "%")}</text></g>` : ``}`;
  })}${baseline === true ? `<line class="${"baseline svelte-ej8ad5"}"${add_attribute("y1", $height, 0)} y2="${"0"}" x1="${"0"}" x2="${"0"}"${add_attribute("stroke", lineColor, 0)}></line>` : ``}</g>`;
});
var HeadLabel_svelte_svelte_type_style_lang = "";
var LabelsAge_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".label-bold.svelte-gjdahk{font-size:0.8em;font-weight:600}",
  map: null
};
const LabelsAge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $yGet, $$unsubscribe_yGet;
  const { data, xScale, yScale, xDomain, y, xGet, yGet, Domain, custom } = getContext("LayerCake");
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  let { hovered = null } = $$props;
  let { ageLabel = null } = $$props;
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.ageLabel === void 0 && $$bindings.ageLabel && ageLabel !== void 0)
    $$bindings.ageLabel(ageLabel);
  $$result.css.add(css$9);
  $$unsubscribe_yGet();
  return `${ageLabel.detail ? `${ageLabel.detail.data ? `<g class="${"label-group"}"><rect fill="${"rgba(255,255,255,0.9)"}"${add_attribute("x", -20, 0)}${add_attribute("y", $yGet(ageLabel.detail.data) + (ageLabel.detail.data.g == 2021 ? 10 : 0) - 10, 0)} transform="${"translate(5,-25)"}" width="${"270"}" height="${"25"}" rx="${"15"}"></rect><text class="${"label-bold svelte-gjdahk"}" transform="${"translate(0,-7)"}" fill="${"#333"}"${add_attribute("x", 10, 0)}${add_attribute("y", $yGet(ageLabel.detail.data) + (ageLabel.detail.data.g == 2021 ? 10 : 0) - 10, 0)}>${escape(ageLabel.detail.data.x + ": " + Math.round(ageLabel.detail.data.y * 10) / 10 + "%")}</text></g>` : ``}` : ``}`;
});
var Line_svelte_svelte_type_style_lang = "";
const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  let $xScale, $$unsubscribe_xScale;
  let $yGet, $$unsubscribe_yGet;
  let $yScale, $$unsubscribe_yScale;
  let $xGet, $$unsubscribe_xGet;
  const { data, xGet, yGet, xScale, yScale } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xGet = subscribe(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  createEventDispatcher();
  let { hovered = null } = $$props;
  let hov;
  let dataAr = [
    $data.filter((d) => d[0]["g"] == 2001)[0],
    $data.filter((d) => d[0]["g"] == 2011)[0]
  ];
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  {
    console.log("$data.length", $data.filter((d) => d[0]["g"] == 2001));
  }
  $$unsubscribe_data();
  $$unsubscribe_xScale();
  $$unsubscribe_yGet();
  $$unsubscribe_yScale();
  $$unsubscribe_xGet();
  return `<g class="${"bar-group"}">${each(dataAr, (e, j) => {
    return `${each(e, (d, i) => {
      return `<rect class="${"group-rect"}"${add_attribute("data-id", i, 0)}${add_attribute("x", $xScale.range()[0], 0)}${add_attribute("y", j % 2 == 0 ? $yGet(d) : $yGet(d) + (34.5 - $data[0].length * 2.5), 0)}${add_attribute("rx", 5, 0)}${add_attribute("height", $yScale.bandwidth() / 2.3, 0)}${add_attribute("width", $xGet(d) + 3, 0)}${add_attribute("fill", j % 2 == 0 ? "#DF0667" : "#3C388E", 0)}${add_attribute("stroke", d == hov ? "orange" : "white", 0)}${add_attribute("stroke-width", d == hov ? "3" : "2", 0)}></rect>`;
    })}`;
  })}</g>

`;
});
const SmallMultipleWrapper_percent_range = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { labels } = $$props;
  let { nu } = $$props;
  let { fullExtents } = $$props;
  let { scale: scale2 } = $$props;
  let { extentGetters } = $$props;
  let hovered = null;
  let ageLabel = true;
  calcExtents(data, extentGetters);
  console.log("data", data[0].map((d) => d.x));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.nu === void 0 && $$bindings.nu && nu !== void 0)
    $$bindings.nu(nu);
  if ($$props.fullExtents === void 0 && $$bindings.fullExtents && fullExtents !== void 0)
    $$bindings.fullExtents(fullExtents);
  if ($$props.scale === void 0 && $$bindings.scale && scale2 !== void 0)
    $$bindings.scale(scale2);
  if ($$props.extentGetters === void 0 && $$bindings.extentGetters && extentGetters !== void 0)
    $$bindings.extentGetters(extentGetters);
  return `${validate_component(LayerCake, "LayerCake").$$render($$result, {
    ssr: true,
    padding: { top: 40, right: 6, bottom: 2, left: 60 },
    x: "y",
    y: "x",
    data,
    xScale: scaleLinear(),
    yScale: scaleBand().paddingInner([0.05]).round(true),
    xDomain: [0, 100],
    yDomain: data[0].map((d) => d.x).reverse(),
    height: 300
  }, {}, {
    default: () => {
      return `
  ${validate_component(Svg, "Svg").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(AxisY$1, "AxisY").$$render($$result, { nu }, {}, {})}
    ${validate_component(AxisX$1, "AxisX").$$render($$result, {}, {}, {})}
    ${validate_component(Bar, "Bar").$$render($$result, {}, {}, {})}
    ${validate_component(LabelsAge, "LabelsAge").$$render($$result, { hovered, ageLabel }, {}, {})}`;
        }
      })}`;
    }
  })}`;
});
var Legend_svelte_svelte_type_style_lang$1 = "";
const css$8 = {
  code: "ul.legend.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{margin:0;padding:0}ul.legend.svelte-o1q0c0 li.svelte-o1q0c0.svelte-o1q0c0{display:inline;font-size:.8em}ul.legend.svelte-o1q0c0 li.svelte-o1q0c0+li.svelte-o1q0c0{margin-left:8px}.bullet.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{display:inline-block;vertical-align:middle;border-radius:50%}.round.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{border-radius:50%}",
  map: null
};
const Legend$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { domain = null } = $$props;
  let { colors = null } = $$props;
  let { line = false } = $$props;
  let { comparison = false } = $$props;
  let { horizontal = true } = $$props;
  let { markerWidth = 2.5 } = $$props;
  let { markerLength = 13 } = $$props;
  let { round = false } = $$props;
  if ($$props.domain === void 0 && $$bindings.domain && domain !== void 0)
    $$bindings.domain(domain);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.comparison === void 0 && $$bindings.comparison && comparison !== void 0)
    $$bindings.comparison(comparison);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  if ($$props.markerLength === void 0 && $$bindings.markerLength && markerLength !== void 0)
    $$bindings.markerLength(markerLength);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  $$result.css.add(css$8);
  return `
  <ul class="${"legend svelte-o1q0c0"}">${each(domain, (label, i) => {
    return `<li class="${"svelte-o1q0c0"}"><div class="${["bullet svelte-o1q0c0", round ? "round" : ""].join(" ").trim()}" style="${"background-color: " + escape(colors[i]) + "; width: " + escape(!horizontal && (line || comparison && i != 0) ? markerWidth : markerLength) + "px; height: " + escape(horizontal && (line || comparison && i != 0) ? markerWidth : markerLength) + "px"}"></div>
        ${escape(label)}
      </li>`;
  })}</ul>
`;
});
var HBarChart_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".group-container.svelte-t0sykq{height:300px;width:100%}.chart-container.svelte-t0sykq{position:relative;display:inline-block;width:100%;height:100%}",
  map: null
};
let scale = "individual";
const HBarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { labels } = $$props;
  const extentGetters = { x: (d) => d.x, y: (d) => d.y };
  const fullExtents = calcExtents(flatten(data), extentGetters);
  data.sort((a, b) => {
    return b[b.length - 1].y - a[a.length - 1].y;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  $$result.css.add(css$7);
  return `<div class="${"group-container svelte-t0sykq"}"><div class="${"chart-container svelte-t0sykq"}">${validate_component(SmallMultipleWrapper_percent_range, "SmallMultipleWrapper").$$render($$result, {
    data,
    fullExtents,
    scale,
    extentGetters,
    nu: 0,
    labels
  }, {}, {})}</div></div>

${validate_component(Legend$1, "Legend").$$render($$result, {
    domain: [2001, 2011],
    colors: ["#DF0667", "#3C388E"]
  }, {}, {})}`;
});
var DotPlot_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "circle.svelte-1mc14eq{stroke:none}",
  map: null
};
const DotPlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let midHeight;
  let $yScale, $$unsubscribe_yScale;
  let $data, $$unsubscribe_data;
  let $xGet, $$unsubscribe_xGet;
  let $yGet, $$unsubscribe_yGet;
  let $zScale, $$unsubscribe_zScale;
  let $config, $$unsubscribe_config;
  const { data, xGet, yGet, yScale, zScale, config } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xGet = subscribe(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$unsubscribe_zScale = subscribe(zScale, (value) => $zScale = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  let { r = 7 } = $$props;
  if ($$props.r === void 0 && $$bindings.r && r !== void 0)
    $$bindings.r(r);
  $$result.css.add(css$6);
  midHeight = $yScale.bandwidth() / 2;
  $$unsubscribe_yScale();
  $$unsubscribe_data();
  $$unsubscribe_xGet();
  $$unsubscribe_yGet();
  $$unsubscribe_zScale();
  $$unsubscribe_config();
  return `<g class="${"dot-plot"}">${each($data, (row) => {
    return `<g class="${"dot-row"}"><defs><linearGradient id="${"myGradient"}" gradientTransform="${"rotate(0)"}"><stop offset="${"5%"}" stop-color="${"#3C388E10"}"></stop><stop offset="${"95%"}" stop-color="${"#3C388E80"}"></stop></linearGradient></defs><defs><linearGradient id="${"myGradientRev"}" gradientTransform="${"rotate(0)"}"><stop offset="${"5%"}" stop-color="${"#3C388E80"}"></stop><stop offset="${"95%"}" stop-color="${"#3C388E10"}"></stop></linearGradient></defs><rect${add_attribute("x", Math.min(...$xGet(row)), 0)}${add_attribute("y", $yGet(row) + midHeight - 7, 0)}${add_attribute("width", Math.max(...$xGet(row)) - Math.min(...$xGet(row)), 0)} height="${"14"}"${add_attribute("fill", row[2021] - row[2011] > 0 ? "url('#myGradient')" : "url('#myGradientRev')", 0)} opacity="${"0.85"}"></rect>${each($xGet(row), (circleX, i) => {
      return `<circle${add_attribute("cx", circleX, 0)}${add_attribute("cy", $yGet(row) + midHeight, 0)}${add_attribute("r", r, 0)}${add_attribute("fill", $zScale($config.x[i]), 0)} class="${"svelte-1mc14eq"}"></circle>`;
    })}</g>`;
  })}</g>`;
});
var DotLabels_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".label.svelte-1cj7kw2{position:absolute;font-size:13px;line-height:1.2;max-width:60px}.above.svelte-1cj7kw2{transform:translate(0, -100%)translateY(-8px)translateX(-4px)}.below.svelte-1cj7kw2{transform:translate(0, 0)translateY(6px)translateX(-4px)}",
  map: null
};
const DotLabels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let midHeight;
  let $yScale, $$unsubscribe_yScale;
  let $data, $$unsubscribe_data;
  let $xGet, $$unsubscribe_xGet;
  let $yGet, $$unsubscribe_yGet;
  const { data, xGet, yGet, yScale, zScale, config } = getContext("LayerCake");
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_xGet = subscribe(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = subscribe(yGet, (value) => $yGet = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  $$result.css.add(css$5);
  midHeight = $yScale.bandwidth() / 2;
  $$unsubscribe_yScale();
  $$unsubscribe_data();
  $$unsubscribe_xGet();
  $$unsubscribe_yGet();
  return `${each($data, (row) => {
    return `${each($xGet(row), (circleX, i) => {
      return `<div class="${"label " + escape(i == 2 ? "below" : "above") + " svelte-1cj7kw2"}" style="${"top:" + escape($yGet(row) + midHeight) + "px; left:" + escape(circleX) + "px;"}">${escape(i == 0 ? "least deprived" : i == 1 ? "most deprived" : "average")}</div>`;
    })}`;
  })}`;
});
var AxisX_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".tick.svelte-1u7vzrc.svelte-1u7vzrc{font-size:14px;font-weight:200}line.svelte-1u7vzrc.svelte-1u7vzrc,.tick.svelte-1u7vzrc line.svelte-1u7vzrc{stroke-dasharray:2}.baseline.svelte-1u7vzrc.svelte-1u7vzrc{stroke-dasharray:0 !important}",
  map: null
};
const AxisX = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $xScale, $$unsubscribe_xScale;
  let $yRange, $$unsubscribe_yRange;
  let $height, $$unsubscribe_height;
  const { data, width, height, xScale, yScale, yRange } = getContext("LayerCake");
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  $$unsubscribe_xScale = subscribe(xScale, (value) => $xScale = value);
  $$unsubscribe_yRange = subscribe(yRange, (value) => $yRange = value);
  let { gridlines = true } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { baseline = false } = $$props;
  let { flipped = false } = $$props;
  let { snapTicks = false } = $$props;
  let { ticks = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { xTick = void 0 } = $$props;
  let { yTick = 15 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = 0 } = $$props;
  let { lineColor = "#aaa" } = $$props;
  let { textColor = "#666" } = $$props;
  let { solid = false } = $$props;
  function textAnchor(i) {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  }
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.baseline === void 0 && $$bindings.baseline && baseline !== void 0)
    $$bindings.baseline(baseline);
  if ($$props.flipped === void 0 && $$bindings.flipped && flipped !== void 0)
    $$bindings.flipped(flipped);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  $$result.css.add(css$4);
  isBandwidth = typeof $xScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $xScale.domain() : $xScale.ticks(ticks);
  $$unsubscribe_xScale();
  $$unsubscribe_yRange();
  $$unsubscribe_height();
  return `<g class="${"axis x-axis"}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(tick) + " svelte-1u7vzrc"}" transform="${"translate(" + escape($xScale(tick)) + "," + escape($yRange[0]) + ")"}">${gridlines !== false ? `<line${add_attribute("y1", $height * -1, 0)}${add_attribute("y2", dyTick, 0)} x1="${"0"}" x2="${"0"}"${add_attribute("stroke", lineColor, 0)} class="${["svelte-1u7vzrc", solid ? "baseline" : ""].join(" ").trim()}"></line>` : ``}<text${add_attribute("x", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${add_attribute("y", flipped ? $height * -1 - 6 : yTick, 0)}${add_attribute("dx", textAnchor(i) == "start" ? dxTick - 2 : textAnchor(i) == "end" ? dxTick + 2 : dxTick, 0)}${add_attribute("dy", dyTick, 0)}${add_attribute("text-anchor", textAnchor(i), 0)}${add_attribute("fill", textColor, 0)}>${i == tickVals.length - 1 ? `${escape(prefix)}${escape(formatTick(tick))}${escape(suffix)}` : `${escape(formatTick(tick))}`}</text></g>`;
  })}${baseline === true ? `<line class="${"baseline svelte-1u7vzrc"}"${add_attribute("y1", $height, 0)} y2="${"0"}" x1="${"0"}" x2="${"0"}"${add_attribute("stroke", lineColor, 0)}></line>` : ``}</g>`;
});
var AxisY_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".tick.svelte-e79qfe.svelte-e79qfe{font-size:14px;font-weight:200}.tick.svelte-e79qfe line.svelte-e79qfe{stroke-dasharray:2}.tick.tick-0.svelte-e79qfe line.svelte-e79qfe{stroke-dasharray:0}.baseline.svelte-e79qfe.svelte-e79qfe{stroke-dasharray:0 !important}",
  map: null
};
const AxisY = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $yScale, $$unsubscribe_yScale;
  let $padding, $$unsubscribe_padding;
  let $xRange, $$unsubscribe_xRange;
  const { padding, xRange, xScale, yScale } = getContext("LayerCake");
  $$unsubscribe_padding = subscribe(padding, (value) => $padding = value);
  $$unsubscribe_xRange = subscribe(xRange, (value) => $xRange = value);
  $$unsubscribe_yScale = subscribe(yScale, (value) => $yScale = value);
  let { ticks = 4 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { gridlines = true } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { xTick = 0 } = $$props;
  let { yTick = 0 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = -4 } = $$props;
  let { textAnchor = "start" } = $$props;
  let { lineColor = "#aaa" } = $$props;
  let { textColor = "#666" } = $$props;
  let { solid = false } = $$props;
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks !== void 0)
    $$bindings.ticks(ticks);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.textAnchor === void 0 && $$bindings.textAnchor && textAnchor !== void 0)
    $$bindings.textAnchor(textAnchor);
  if ($$props.lineColor === void 0 && $$bindings.lineColor && lineColor !== void 0)
    $$bindings.lineColor(lineColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  $$result.css.add(css$3);
  isBandwidth = typeof $yScale.bandwidth === "function";
  tickVals = Array.isArray(ticks) ? ticks : isBandwidth ? $yScale.domain() : $yScale.ticks(ticks);
  $$unsubscribe_yScale();
  $$unsubscribe_padding();
  $$unsubscribe_xRange();
  return `<g class="${"axis y-axis"}" transform="${"translate(" + escape(-$padding.left) + ", 0)"}">${each(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + escape(tick) + " svelte-e79qfe"}" transform="${"translate(" + escape($xRange[0] + (isBandwidth ? $padding.left : 0)) + ", " + escape($yScale(tick)) + ")"}">${gridlines !== false ? `<line x2="${"100%"}"${add_attribute("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("stroke", lineColor, 0)} class="${["svelte-e79qfe", solid ? "baseline" : ""].join(" ").trim()}"></line>` : ``}<text${add_attribute("x", xTick, 0)}${add_attribute("y", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${add_attribute("dx", isBandwidth ? 3 : dxTick, 0)}${add_attribute("dy", isBandwidth ? 4 : dyTick, 0)}${add_attribute("fill", textColor, 0)} style="${"text-anchor:" + escape(isBandwidth ? "end" : textAnchor) + ";"}">${i == tickVals.length - 1 ? `${escape(prefix)}${escape(formatTick(tick))}${escape(suffix)}` : `${escape(formatTick(tick))}`}</text></g>`;
  })}</g>`;
});
var Legend_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.legend.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{margin:0;padding:0}ul.legend.svelte-o1q0c0 li.svelte-o1q0c0.svelte-o1q0c0{display:inline;font-size:.8em}ul.legend.svelte-o1q0c0 li.svelte-o1q0c0+li.svelte-o1q0c0{margin-left:8px}.bullet.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{display:inline-block;vertical-align:middle;border-radius:50%}.round.svelte-o1q0c0.svelte-o1q0c0.svelte-o1q0c0{border-radius:50%}",
  map: null
};
const Legend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { domain = null } = $$props;
  let { colors = null } = $$props;
  let { line = false } = $$props;
  let { comparison = false } = $$props;
  let { horizontal = true } = $$props;
  let { markerWidth = 2.5 } = $$props;
  let { markerLength = 13 } = $$props;
  let { round = false } = $$props;
  if ($$props.domain === void 0 && $$bindings.domain && domain !== void 0)
    $$bindings.domain(domain);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.comparison === void 0 && $$bindings.comparison && comparison !== void 0)
    $$bindings.comparison(comparison);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  if ($$props.markerLength === void 0 && $$bindings.markerLength && markerLength !== void 0)
    $$bindings.markerLength(markerLength);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  $$result.css.add(css$2);
  return `
  <ul class="${"legend svelte-o1q0c0"}">${each(domain, (label, i) => {
    return `<li class="${"svelte-o1q0c0"}"><div class="${["bullet svelte-o1q0c0", round ? "round" : ""].join(" ").trim()}" style="${"background-color: " + escape(colors[i]) + "; width: " + escape(!horizontal && (line || comparison && i != 0) ? markerWidth : markerLength) + "px; height: " + escape(horizontal && (line || comparison && i != 0) ? markerWidth : markerLength) + "px"}"></div>
        ${escape(label)}
      </li>`;
  })}</ul>
`;
});
var DotPlotChart_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".chart-container.svelte-ivcd9i{width:100%;height:100%}",
  map: null
};
const yKey = "label";
const DotPlotChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { height = 400 } = $$props;
  let { labels = false } = $$props;
  const xKey = Object.keys(data[0]).filter((d) => d !== yKey);
  const seriesColors = ["#DF0667", "#3C388E", "#2166ac", "#b2182b", "grey"];
  data.forEach((d) => {
    xKey.forEach((name) => {
      d[name] = +d[name];
    });
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  $$result.css.add(css$1);
  return `<div class="${"chart-container svelte-ivcd9i"}" style="${"height: " + escape(height) + "px"}">${validate_component(LayerCake, "LayerCake").$$render($$result, {
    padding: { right: 0, bottom: 20, left: 0 },
    x: xKey,
    y: yKey,
    yScale: scaleBand().paddingInner([0.05]).round(true),
    yDomain: data.map((d) => d[yKey]),
    xPadding: [15, 0],
    zScale: scaleOrdinal(),
    zDomain: xKey,
    zRange: seriesColors,
    data
  }, {}, {
    default: () => {
      return `${validate_component(Svg, "Svg").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(AxisX, "AxisX").$$render($$result, {}, {}, {})}
			${validate_component(AxisY, "AxisY").$$render($$result, { gridlines: false }, {}, {})}
			${validate_component(DotPlot, "DotPlot").$$render($$result, {}, {}, {})}`;
        }
      })}
		${labels ? `${validate_component(Html, "Html").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DotLabels, "DotLabels").$$render($$result, {}, {}, {})}`;
        }
      })}` : ``}`;
    }
  })}</div>
${validate_component(Legend, "Legend").$$render($$result, { domain: xKey, colors: seriesColors }, {}, {})}`;
});
var _id__svelte_svelte_type_style_lang = "";
const { Object: Object_1 } = globals;
const css = {
  code: ".triangle.svelte-9h2wls{fill:transparent;stroke:#206095;stroke-width:3;transition:all 0.8s ease-in-out}.triangle-container.svelte-9h2wls{float:left}button.svelte-9h2wls{color:#206095;background-color:transparent;outline:transparent;border:none;text-decoration:underline;font-weight:700;font-size:18px;margin-top:60px;cursor:pointer}button.svelte-9h2wls:active{background-color:transparent}",
  map: null
};
async function load({ params, fetch }) {
  let id = params.id;
  let options_raw = await fetch(`${assets}/data/lad_list_2021.json`);
  let options = await options_raw.json();
  let reports_raw = await fetch(`${assets}/areareportsprgen.json`);
  let reports = await reports_raw.json();
  let prodResults = reports[id].split(`<div id="esc123"></div>`);
  let template_raw = await fetch(`${assets}/template.pug`);
  let template = await template_raw.text();
  let topics_raw = await fetch(`${assets}/data/topics.json`);
  let topics = await topics_raw.json();
  let place_raw = await fetch(`${assets}/data/json/place/${id}.json`);
  let place = await place_raw.json();
  let s = place.stories.map((d) => d.label.split("_"));
  s.forEach((e) => {
    if (e.length > 4) {
      e[3] = e[3] + "_" + e[4];
      e.pop();
    }
  });
  let rgncd = place.parents[0].code;
  let rgn_raw = await fetch(`${assets}/data/json/place/${rgncd}.json`);
  let rgn = await rgn_raw.json();
  let eng_raw = await fetch(`${assets}/data/json/place/E92000001.json`);
  let eng = await eng_raw.json();
  let wal_raw = await fetch(`${assets}/data/json/place/W92000004.json`);
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
      rgn,
      eng,
      wal,
      s,
      template,
      prodResults,
      cou,
      ladData
    }
  };
}
function fbp(x) {
  return Number.parseFloat(Number.parseFloat(0.714 * x).toPrecision(2));
}
function swap(array, indexA, indexB) {
  var tmp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tmp;
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { topics } = $$props;
  let { template } = $$props;
  let { place } = $$props;
  let { s } = $$props;
  let { rgn } = $$props;
  let { eng } = $$props;
  let { wal } = $$props;
  let { prodResults } = $$props;
  let { cou } = $$props;
  let { ladData } = $$props;
  console.log("topics", topics);
  const production = process.env.NODE_ENV === "production";
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
  function makeProps(i) {
    let s2 = place.stories[i].label.split("_");
    if (s2.length > 4) {
      s2[3] = s2[3] + "_" + s2[4];
      s2.pop();
    }
    if (["religion", "agemed", "ethnicity", "care", "disability"].includes(s2[0])) {
      let dtrans = function(d, g) {
        let a = [];
        let t;
        if (s2[0] == "agemed") {
          t = "age10yr";
        } else {
          t = s2[0];
        }
        Object.keys(d.data[t].perc[g]).forEach((e) => {
          a.push({ "x": e, "y": d.data[t].perc[g][e], g });
        });
        if (s2[0] == "religion") {
          a = a.filter((d2) => d2["x"] != "Religionnotstated");
          const findOther = (e) => e["x"] == "Otherreligion";
          swap(a, a.findIndex(findOther), a.length - 1);
        }
        if (s2[0] == "ethnicity") {
          const findOther2 = (e) => e["x"] == "other";
          swap(a, a.findIndex(findOther2), a.length - 1);
        }
        return a;
      };
      let chartData;
      if (rgn.name == "Wales") {
        chartData = [
          [dtrans(cou, 2001), dtrans(cou, 2011)],
          [
            dtrans(place.nearbyArea.nearTops, 2001),
            dtrans(place.nearbyArea.nearTops, 2011)
          ],
          [dtrans(place, 2001), dtrans(place, 2011)]
        ];
      } else {
        chartData = [
          [dtrans(cou, 2001), dtrans(cou, 2011)],
          [dtrans(rgn, 2001), dtrans(rgn, 2011)],
          [dtrans(place, 2001), dtrans(place, 2011)]
        ];
      }
      let xTickCal = Math.round((Math.max(...chartData.flat().flat().map((d) => d.y)) - 5) / 10) * 10;
      let xMax = Math.round((Math.max(...chartData.flat().flat().map((d) => d.y)) - 5) / 10) * 10;
      let props = {
        legend: true,
        height: 120,
        chartData,
        labels: rgn.name == "Wales" ? [cou.name, place.nearbyArea.nearTops.name, place.name] : [cou.name, rgn.name, place.name],
        xKey: "value",
        yKey: "year",
        xTickCal,
        xMax,
        topics: topics[s2[0]]
      };
      return props;
    } else if (["care"].includes(s2[0])) {
      let chartData = [];
      let dates = [2001, 2011];
      dates.forEach((d) => {
        let tar = [];
        if (d != "change") {
          Object.keys(place.data[s2[0]].perc[d]).forEach((e) => {
            if (e != "all" & e != "noCare") {
              tar.push({
                g: +d,
                x: topics[s2[0]][e]["label"],
                y: place.data[s2[0]].perc[d][e]
              });
            }
          });
          chartData.push(tar);
        }
      });
      let props = {
        legend: true,
        height: 120,
        data: chartData,
        labels: [cou.name, rgn.name, place.name],
        xKey: "year",
        yKey: "value",
        zKey: "group"
      };
      return props;
    } else if (place.stories[i].type.includes("size")) {
      if (s2[0] == "population") {
        if (rgn.name != "Wales") {
          return {
            height: 120,
            data: [
              {
                label: eng.name,
                2001: fbp(eng.data.density.value[2001].all),
                2011: fbp(eng.data.density.value[2011].all)
              },
              {
                label: rgn.name,
                2001: fbp(rgn.data.density.value[2001].all),
                2011: fbp(rgn.data.density.value[2011].all)
              },
              {
                label: place.name,
                2001: fbp(place.data.density.value[2001].all),
                2011: fbp(place.data.density.value[2011].all)
              }
            ]
          };
        } else {
          return {
            height: 120,
            data: [
              {
                label: rgn.name,
                2001: fbp(rgn.data.density.value[2001].all),
                2011: fbp(rgn.data.density.value[2011].all)
              },
              {
                label: place.nearbyArea.nearTops.name,
                2001: fbp(place.nearbyArea.nearTops.data.density.value[2001].all),
                2011: fbp(place.nearbyArea.nearTops.name.data.density.value[2011].all)
              },
              {
                label: place.name,
                2001: fbp(place.data.density.value[2001].all),
                2011: fbp(place.data.density.value[2011].all)
              }
            ]
          };
        }
      } else {
        if (rgn.name == "Wales") {
          return {
            legend: true,
            height: 120,
            data: [
              {
                label: rgn.name,
                2001: rgn.data[s2[0]][s2[1]][2001][s2[3]],
                2011: rgn.data[s2[0]][s2[1]][2011][s2[3]]
              },
              {
                label: place.nearbyArea.nearTops.name,
                2001: place.nearbyArea.nearTops.data[s2[0]][s2[1]][2001][s2[3]],
                2011: place.nearbyArea.nearTops.data[s2[0]][s2[1]][2011][s2[3]]
              },
              {
                label: place.name,
                2001: place.data[s2[0]][s2[1]][2001][s2[3]],
                2011: place.data[s2[0]][s2[1]][2011][s2[3]]
              }
            ]
          };
        } else {
          return {
            legend: true,
            height: 120,
            data: [
              {
                label: eng.name,
                2001: eng.data[s2[0]][s2[1]][2001][s2[3]],
                2011: eng.data[s2[0]][s2[1]][2011][s2[3]]
              },
              {
                label: place.parents[0].name,
                2001: rgn.data[s2[0]][s2[1]][2001][s2[3]],
                2011: rgn.data[s2[0]][s2[1]][2011][s2[3]]
              },
              {
                label: place.name,
                2001: place.data[s2[0]][s2[1]][2001][s2[3]],
                2011: place.data[s2[0]][s2[1]][2011][s2[3]]
              }
            ]
          };
        }
      }
    } else {
      var chartdata;
      if (s2[0] == "population") {
        s2[0] = "density";
        s2[3] = "all";
      }
      chartdata = ladData.filter((d) => d["parent"] == place.parents[0].name & d.topic == s2[0] + "_" + s2[3]);
      chartdata = chartdata.map((d) => ({
        "change": d["change"],
        "value": s2[0] == "density" ? 0.714 * parseFloat(d[2011]) : parseFloat(d[2011]),
        "unique": d["lad"],
        "id": d["parent"]
      }));
      chartdata.forEach((item, i2) => {
        if (item.unique == place.name) {
          item.id = place.name;
        } else if (item.id == place.parents[0].name) {
          item.id = "Rest of " + uncap1(regionThe(place.parents[0].name));
        } else {
          item.id = "Rest of England";
        }
      });
      chartdata.push({
        change: +cou.data[s2[0]][s2[1]]["change"][s2[3]],
        value: +cou.data[s2[0]][s2[1]]["2011"][s2[3]],
        unique: "Average across " + cou.name,
        id: "Average across " + cou.name
      });
      return {
        mode: "stacked",
        line: false,
        legend: true,
        data: chartdata,
        xKey: "value",
        yKey: null,
        rKey: "change",
        r: [3, 9],
        zKey: "id"
      };
    }
  }
  function chartType(i) {
    let s2 = place.stories[i].label.split("_");
    if (s2.length > 4) {
      s2[3] = s2[3] + "_" + s2[4];
      s2.pop();
    }
    if (["religion", "agemed", "ethnicity", "care", "disability"].includes(s2[0])) {
      return AgeChart;
    } else if (["care"].includes(s2[0])) {
      return HBarChart;
    } else if (place.stories[i].type.includes("size")) {
      return DotPlotChart;
    } else {
      return ScatterChart;
    }
  }
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.topics === void 0 && $$bindings.topics && topics !== void 0)
    $$bindings.topics(topics);
  if ($$props.template === void 0 && $$bindings.template && template !== void 0)
    $$bindings.template(template);
  if ($$props.place === void 0 && $$bindings.place && place !== void 0)
    $$bindings.place(place);
  if ($$props.s === void 0 && $$bindings.s && s !== void 0)
    $$bindings.s(s);
  if ($$props.rgn === void 0 && $$bindings.rgn && rgn !== void 0)
    $$bindings.rgn(rgn);
  if ($$props.eng === void 0 && $$bindings.eng && eng !== void 0)
    $$bindings.eng(eng);
  if ($$props.wal === void 0 && $$bindings.wal && wal !== void 0)
    $$bindings.wal(wal);
  if ($$props.prodResults === void 0 && $$bindings.prodResults && prodResults !== void 0)
    $$bindings.prodResults(prodResults);
  if ($$props.cou === void 0 && $$bindings.cou && cou !== void 0)
    $$bindings.cou(cou);
  if ($$props.ladData === void 0 && $$bindings.ladData && ladData !== void 0)
    $$bindings.ladData(ladData);
  $$result.css.add(css);
  {
    console.log("place", place);
  }
  {
    console.log("rgn", rgn);
  }
  {
    console.log("cou", cou);
  }
  return `${$$result.head += `${$$result.title = `<title>${escape(place.name)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", place.name, 0)} data-svelte="svelte-yg0144"><meta property="${"og:description"}" content="${"This is a description of the page."}" data-svelte="svelte-yg0144"><meta name="${"description"}" content="${"This is a description of the page."}" data-svelte="svelte-yg0144"><script src="${"https://unpkg.com/rosaenlg@3.0.1/dist/rollup/rosaenlg_tiny_en_US_3.0.1_comp.js"}" data-svelte="svelte-yg0144"><\/script>`, ""}

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

	${!production ? `${``}` : `${each(prodResults, (res, i) => {
            return `<!-- HTML_TAG_START -->${res}<!-- HTML_TAG_END -->
			<div style="${"width: 100%"}">${i < place.stories.length ? `${makeProps(i) ? `${validate_component(chartType(i) || missing_component, "svelte:component").$$render($$result, Object_1.assign(makeProps(i)), {}, {})}` : ``}` : ``}
			</div>`;
          })}`}

    ${place.stories.length > 6 ? `<button class="${"svelte-9h2wls"}"><div class="${"triangle-container svelte-9h2wls"}"><svg height="${"25"}" width="${"50"}">${`<polygon points="${"25,10 15,20 25,10 35,20"}" class="${"triangle svelte-9h2wls"}"></polygon>`}</svg></div>
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
