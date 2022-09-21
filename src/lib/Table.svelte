<script>
    import { tweened } from "svelte/motion";
    import { cubicInOut } from "svelte/easing";

    //this is the data for each chart passed from Theo's JSON objects
    export let rows;

    //these are the variables to set in the pipeline
    export let current = "here21";
    export let comparator = "none";

    //to match the comparative charts to the main dataset
    let barsToStrokes = {
        here21: {
            none: "here21",
            region: "region21",
            country: "country21",
            ew: "ew21",
        },
        here11: {
            none: "here11",
            region: "region11",
            country: "country11",
            ew: "ew11",
        },
        hereC: {
            none: "hereC",
            region: "regionC",
            country: "countryC",
            ew: "ewC",
        },
    };

    //to populate text for the radio buttons
    let comparisons = {
        none: "",
        region: rows.regionNm,
        country: rows.countryNm,
        ew: "England and Wales",
    };

    //to set the colours (RGB)
    let currentColours = {
        hereC: [246, 96, 104],
        here21: [34, 208, 182],
        here11: [39, 160, 204],
    };

    //stores to animate the transition between selected radio buttons
    let bars = tweened(rows[current]);
    let strokes = tweened(rows[barsToStrokes[current][comparator]]);
    let colours = tweened(currentColours[current]);
    let origin = tweened(current == "hereC" ? 50 : 0);

    //to set the first suffix to the chart subtitle
    let currentWords = (c) =>
        c == "hereC"
            ? ": Change from 2011 to 2021 in percentage points (pp)"
            : c == "here21"
            ? ": Census 2021"
            : ": Census 2011";

    //when the CENSUS YEAR is changed by the user
    function onChangeChart(event) {
        bars.set(rows[current], {
            easing: cubicInOut,
            duration: 500,
        });
        colours.set(currentColours[current]);
        strokes.set(rows[barsToStrokes[current][comparator]], {
            easing: cubicInOut,
            duration: 500,
        });
        origin.set(current == "hereC" ? 50 : 0, {
            easing: cubicInOut,
            duration: 500,
        });
    }

    //when the COMPARATOR PLACE is changed by the user
    function onChangeComparison(event) {
        strokes.set(rows[barsToStrokes[current][comparator]], {
            easing: cubicInOut,
            duration: 500,
        });
    }

    //a simple function for embellishing chart value labels with "+" "-" and "pp" when CHANGE is selected
    Number.prototype.render = function () {
        let upDown = this > 0 ? "+" : this < 0 ? "-" : "";
        return upDown + Math.abs(this).toFixed(1) + "pp";
    };

    $: comparator && onChangeComparison();
    $: current && onChangeChart();

    // $: console.log('rows', rows)
</script>

{#if rows}
    <h2 class="title">
        {rows.title}
    </h2>
    <hr />
    <span class="tag">census:</span>
    <div class="controls">
        <div style="padding-top:-5px; padding-bottom:0px;">
            <div class="section-wrap">
                <span class="cluster">
                    <label for="r1"
                        ><input
                            id="r1"
                            name="chart"
                            type="radio"
                            value="here11"
                            bind:group={current}
                        />
                        2011</label
                    ></span
                >
                <span class="cluster">
                    <input
                        id="r2"
                        name="chart"
                        type="radio"
                        value="here21"
                        bind:group={current}
                    />
                    <label for="r2">2021</label></span
                >
                <span class="cluster">
                    <input
                        id="r3"
                        name="chart"
                        type="radio"
                        value="hereC"
                        bind:group={current}
                    />
                    <label for="r3">10 year change</label></span
                >
            </div>
        </div>
    </div>
    <span class="tag">comparison:</span>
    <div class="controls">
        <div style="padding-top:-5px; padding-bottom:0px;">
            <div class="section-wrap">
                <span class="cluster">
                    <input
                        id="c0"
                        name="comparison"
                        type="radio"
                        value="none"
                        bind:group={comparator}
                    />
                    <label for="c0">none</label></span
                >
                <span class="cluster">
                    <input
                        id="c1"
                        name="comparison"
                        type="radio"
                        value="region"
                        bind:group={comparator}
                    />
                    <label for="c1">{rows.regionNm}</label></span
                >
                <span
                    class="cluster"
                    class:invisible={rows.countryNm == "Wales"}
                >
                    <input
                        id="c2"
                        name="comparison"
                        type="radio"
                        value="country"
                        bind:group={comparator}
                    />
                    <label for="c2">{rows.countryNm}</label></span
                >
                <span class="cluster">
                    <input
                        id="c3"
                        name="comparison"
                        type="radio"
                        value="ew"
                        bind:group={comparator}
                        checked
                    />
                    <label for="c3">England & Wales </label></span
                >
            </div>
        </div>
    </div>
    <hr />
    <p class="subTitle">
        {rows.subTitles[rows.title][0]}
        {rows.placeNm}
        {rows.subTitles[rows.title][1]}{currentWords(current)}
        {@html comparisons[comparator] !== ""
            ? "<span style='font-weight: normal'>(compared with " +
              comparisons[comparator] +
              ")</span>"
            : ""}
    </p>
    <span
        ><div
            class="circ"
            style:background-color={"rgb(" + $colours.join(",") + ")"}
            style:display="inline-block"
        />
        {rows.placeNm}</span
    >
    <table>
        <tr class="row hide-element ">
            <th>Classification</th>
            <th>Percentage</th>
            <th>Bar</th>
        </tr>
        <tr>
            <td /><td class="pc">
                {@html current == "hereC" ? "change" : "share"}
            </td>
            <td
                ><div style="margin-left:calc( 50% - 3px )">
                    {@html current == "hereC" ? 0 : "&nbsp"}
                </div></td
            >
        </tr>

        {#each rows.keys as key, i}
            <tr class="row">
                <td class="label"><span>{key}</span></td>
                <td class="pc"
                    ><span>
                        {current == "hereC"
                            ? ($bars[i] * 100).render()
                            : ($bars[i] * 100).toFixed(1) + "%"}
                    </span>
                    <span
                        class:invisible={comparator == "none"}
                        style="font-weight: normal"
                    >
                        ({current == "hereC"
                            ? ($strokes[i] * 100).render()
                            : ($strokes[i] * 100).toFixed(1) + "%"})
                    </span>
                </td>
                <td class="bar"
                    ><div
                        class="inner"
                        style:width={current == "hereC"
                            ? +(
                                  Math.abs($bars[i]) /
                                  Math.max(
                                      ...$strokes
                                          .map((e) => Math.abs(e))
                                          .concat(
                                              $bars.map((el) => Math.abs(el))
                                          )
                                  )
                              ) *
                                  $origin +
                              "%"
                            : +(
                                  $bars[i] /
                                  Math.max(
                                      ...$strokes
                                          .map((e) => Math.abs(e))
                                          .concat(
                                              $bars.map((el) => Math.abs(el))
                                          )
                                  )
                              ) *
                                  100 -
                              $origin +
                              "%"}
                        style:background-color={"rgb(" +
                            $colours.join(",") +
                            ")"}
                        style:margin-left={current == "hereC"
                            ? $bars[i] < 0
                                ? $origin -
                                  +(
                                      Math.abs($bars[i]) /
                                      Math.max(
                                          ...$strokes
                                              .map((e) => Math.abs(e))
                                              .concat(
                                                  $bars.map((el) =>
                                                      Math.abs(el)
                                                  )
                                              )
                                      )
                                  ) *
                                      50 +
                                  "%"
                                : $origin + "%"
                            : $origin + "%"}
                    />
                    <div
                        class="comparison_container"
                        class:invisible={comparator == "none"}
                    >
                        <div
                            class="comparison"
                            style:margin-left={current == "hereC"
                                ? $strokes[i] > 0
                                    ? $origin +
                                      (Math.abs($strokes[i]) /
                                          Math.max(
                                              ...$strokes
                                                  .map((e) => Math.abs(e))
                                                  .concat(
                                                      $bars.map((el) =>
                                                          Math.abs(el)
                                                      )
                                                  )
                                          )) *
                                          $origin +
                                      "%"
                                    : $origin -
                                      (Math.abs($strokes[i]) /
                                          Math.max(
                                              ...$strokes
                                                  .map((e) => Math.abs(e))
                                                  .concat(
                                                      $bars.map((el) =>
                                                          Math.abs(el)
                                                      )
                                                  )
                                          )) *
                                          50 +
                                      "%"
                                : +(
                                      $strokes[i] /
                                      Math.max(
                                          ...$strokes
                                              .map((e) => Math.abs(e))
                                              .concat(
                                                  $bars.map((el) =>
                                                      Math.abs(el)
                                                  )
                                              )
                                      )
                                  ) *
                                      100 -
                                  $origin +
                                  "%"}
                        />
                    </div>
                </td>
            </tr>
        {/each}
    </table>
{/if}

<style>
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
    :global(body) {
        font-family: "Open Sans", sans-serif;
    }
    .circ {
        background: #f00;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .invisible {
        display: none;
    }
    .title {
        font-weight: bold;
        color: "#222222";
    }
    .subTitle {
        font-weight: 600;
        font-size: 18px;
        line-height: 23.4px;
    }
    .cluster {
        white-space: nowrap;
    }
    .tag {
        font-size: 0.8em;
    }
    hr {
        margin: 0;
        margin-top: 10px;
        color: #666;
    }
    table {
        width: 100%;
        border-spacing: 4px;
        border-collapse: collapse;
    }
    .row {
        width: 100%;
        max-height: 60px;
        padding: 0;
        overflow: hidden;
        border-bottom: 4px solid white;
    }
    .label {
        width: calc(38%);
        margin: 0;
        line-height: 16.8px;
        font-size: 14px;
        max-height: 60px;
        padding: 0;
    }
    .pc {
        text-align: right;
        width: 50px;
        font-weight: bold;
        padding-right: 1em;
    }
    .bar {
        background-color: #ececec;
        width: 50%;
        max-height: 60px;
        padding: 0;
        overflow: hidden;
    }
    .inner {
        width: 50%;
        height: 60px;
        background-color: #206095;
    }
    .comparison_container {
        position: relative;
        width: 100%;
        height: 60px;
        margin-top: -60px;
        border-right: 2px solid white;
        border-left: 2px solid white;
    }
    .comparison {
        width: 4px;
        height: 40px;
        background-color: black;
        transform: translate(-2px, 10px);
        border-radius: 2px;
    }
    .hide-element {
        border: 0;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
</style>
