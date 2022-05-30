import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "../../chunks/index-6a0f4aab.js";
import { a as assets, b as base } from "../../chunks/paths-396f020f.js";
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-content margin-bottom--2"}"><div class="${"wrapper"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-cmkrwu{font-size:1rem;margin:0;padding:0}",
  map: null
};
async function load({ fetch }) {
  let options_raw = await fetch(`${assets}/data/lad_list_2021.json`);
  let options = await options_raw.json();
  return { props: { options } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Page title</title>`, ""}<meta property="${"og:title"}" content="${"Page title"}" data-svelte="svelte-sjw3el"><meta property="${"og:description"}" content="${"This is a description of the page."}" data-svelte="svelte-sjw3el"><meta name="${"description"}" content="${"This is a description of the page."}" data-svelte="svelte-sjw3el">`, ""}

${validate_component(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `<ul>${each(options, (option) => {
        return `<li class="${"svelte-cmkrwu"}"><a href="${escape(base) + "/" + escape(option.code)}">${escape(option.name)}</a></li>`;
      })}</ul>`;
    }
  })}`;
});
export { Routes as default, load };
