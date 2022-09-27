import { csvParse, autoType } from "d3-dsv";
import "robojournalist";
async function getData(url) {
  let response = await fetch(url);
  let string = await response.text();
  let data = csvParse(string, autoType);
  return data;
}
let chains = {
  "Very good or good health": [
    "Very bad or bad health",
    "Fair health"
  ],
  "Very bad or bad health": [
    "Very good or good health",
    "Fair health"
  ],
  "White": [
    "Black, Black British, Black Welsh, Caribbean or African",
    "Asian, Asian British or Asian Welsh"
  ],
  "Black, Black British, Black Welsh, Caribbean or African": [
    "White",
    "Asian, Asian British or Asian Welsh"
  ],
  "Asian, Asian British or Asian Welsh": [
    "White",
    "Black, Black British, Black Welsh, Caribbean or African"
  ],
  "Private rented": [
    "Rented from council or Local Authority",
    "Owns outright or with a mortgage or loan"
  ],
  "Rented from council or Local Authority": [
    "Private rented",
    "Owns outright or with a mortgage or loan"
  ],
  "Owns outright or with a mortgage or loan": [
    "Private rented",
    "Rented from council or Local Authority"
  ],
  "Economically active (including full-time students): In employment: Employee": [
    "Economically active (including full-time students): Unemployed",
    "Economically active (including full-time students): In employment: Self-employed"
  ],
  "Economically active (including full-time students): In employment: Self-employed": [
    "Economically active (including full-time students): In employment: Employee",
    "Economically active (including full-time students): Unemployed"
  ],
  "Economically active (including full-time students): Unemployed": [
    "Economically active (including full-time students): In employment: Employee",
    "Economically active (including full-time students): In employment: Self-employed"
  ],
  "Economically inactive: Retired": [
    "Economically active (including full-time students): In employment: Employee",
    "Economically active (including full-time students): Unemployed"
  ],
  "Economically inactive (including full-time students): Student": [
    "Economically active (including full-time students): In employment: Employee",
    "Economically active (including full-time students): Unemployed"
  ],
  "Single family household: Couple family household: No children": [
    "Single family household: Couple family household: Dependent children",
    "Single family household: Couple family household: All children non-dependent",
    "Single family household: Lone parent household"
  ],
  "Single family household: Couple family household: Dependent children": [
    "Single family household: Couple family household: No children",
    "Single family household: Couple family household: All children non-dependent"
  ],
  "Single family household: Couple family household: All children non-dependent": [
    "Single family household: Couple family household: Dependent children",
    "Single family household: Couple family household: No children"
  ],
  "Single family household: Lone parent household": [
    "Single family household: Couple family household: Dependent children",
    "Single family household: Couple family household: All children non-dependent"
  ],
  "Never married and never registered a civil partnership": [
    "Married or in a registered civil partnership",
    "Divorced or civil partnership dissolved"
  ],
  "Married or in a registered civil partnership": [
    "Never married and never registered a civil partnership",
    "Divorced or civil partnership dissolved"
  ],
  "Divorced or civil partnership dissolved": [
    "Married or in a registered civil partnership",
    "Never married and never registered a civil partnership"
  ],
  "Provides 50 or more hours unpaid care a week": [
    "Provides 20 to 49 hours unpaid care a week",
    "Provides no unpaid care"
  ],
  "Provides 20 to 49 hours unpaid care a week": [
    "Provides 50 or more hours unpaid care a week",
    "Provides no unpaid care"
  ],
  "Provides 19 or less hours unpaid care a week": [
    "Provides 20 to 49 hours unpaid care a week",
    "Provides 50 or more hours unpaid care a week"
  ],
  "Part-time: 15 hours or less worked": [
    "Full-time: 49 or more hours worked",
    "Full-time: 31 to 48 hours worked"
  ],
  "Full-time: 49 or more hours worked": [
    "Part-time: 15 hours or less worked",
    "Full-time: 31 to 48 hours worked"
  ],
  "Disabled under the Equality Act": [
    "Not disabled under the Equality Act"
  ],
  "Not disabled under the Equality Act": [
    "Disabled under the Equality Act"
  ],
  "British only identity": [
    "English only identity",
    "English and British only identity"
  ],
  "Welsh only identity": [
    "Welsh and British only identity",
    "British only identity"
  ],
  "Welsh and British only identity": [
    "Welsh only identity",
    "British only identity"
  ],
  "English only identity": [
    "English and British only identity",
    "British only identity"
  ],
  "English and British only identity": [
    "English only identity",
    "British only identity"
  ],
  "Non-UK identity only": [
    "UK identity and non-UK identity",
    "British only identity"
  ]
};
let array = ["South East", "South West", "West Midlands", "East Midlands", "North East", "North West", "East of England"];
function regionThe(place, nt) {
  if (place == "East") {
    place = place + " of England";
  }
  return !array.includes(place) | nt == "NT" ? place : "The " + place;
}
function uncap1(string) {
  if (string.slice(0, 3) == "The") {
    return string.charAt(0).toLowerCase() + string.slice(1);
  } else {
    return string;
  }
}
function drop(x, d, r) {
  let int = Math.abs(x);
  let pos = x < 0 ? d : r;
  let nuLu = { 1: "", 2: "second-", 3: "third-", 4: "fourth-", 5: "fifth-" };
  let word = nuLu[int];
  return word + pos;
}
let num_word = { "quarter of a million": 25e4, "half a million": 5e5, "three quarters of a million": 75e4, "one million": 1e6 };
let frac_word = { "one in two": 0.5, "one in three": 0.333, "one in four": 0.25, "one in five": 0.2, "one in six": 0.167, "one in seven": 0.143, "one in eight": 0.125, "one in nine": 0.111, "1 in 10": 0.1, "1 in 11": 0.09, "1 in 12": 0.083, "1 in 13": 0.077, "1 in 14": 0.071, "1 in 15": 0.067, "1 in 16": 0.063, "1 in 17": 0.059, "1 in 18": 0.056, "1 in 19": 0.053, "1 in 20": 0.05, "1 in 25": 0.04, "1 in 30": 0.033, "1 in 40": 0.025, "1 in 50": 0.02, "2 in 10": 0.2, "3 in 10": 0.3, "4 in 10": 0.4, "6 in 10": 0.6, "7 in 10": 0.7, "8 in 10": 0.8, "9 in 10": 0.9, "all": 1 };
function get_word(num, dict) {
  if (dict == "frac") {
    dict = frac_word;
  } else if (dict == "num") {
    dict = num_word;
  }
  let OverUnder;
  let lowest = 2e6;
  let lowest_label;
  for (const label in dict) {
    if (Math.abs(num - dict[label]) < lowest) {
      lowest = Math.abs(num - dict[label]);
      lowest_label = label;
      if (num - dict[label] == 0) {
        OverUnder = "about";
      } else if (num - dict[label] > 0) {
        OverUnder = "just over";
      } else if (num - dict[label] < 0) {
        OverUnder = "just under";
      }
    }
  }
  return [OverUnder, lowest_label];
}
function figs(x, f) {
  if (f != 3) {
    f = 2;
  }
  let digits = Math.pow(10, f);
  let rounded = Math.abs(Math.round(x / digits) * digits);
  let text = "around";
  if (Math.abs(x) < Math.abs(rounded)) {
    if (Math.round(Math.random()) == 1) {
      text = "almost ";
    } else {
      text = "just under ";
    }
  } else {
    if (Math.round(Math.random()) == 1) {
      text = "about ";
    } else {
      text = "just over ";
    }
  }
  return [text, rounded];
}
function prev(s, place, i, type) {
  if (type == "rl") {
    type = "_rank_local";
  } else if (type == "r") {
    type = "_rank";
  } else {
    type = "";
  }
  return place.data[s[i][0]][s[i][1] + type][2001][s[i][3]];
}
function cur(s, place, i, type) {
  if (type == "rl") {
    type = "_rank_local";
  } else if (type == "r") {
    type = "_rank";
  } else {
    type = "";
  }
  return place.data[s[i][0]][s[i][1] + type][2011][s[i][3]];
}
function cha(s, place, i, type) {
  if (type == "rl") {
    type = "_rank_local";
  } else if (type == "r") {
    type = "_rank";
  } else {
    type = "";
  }
  let out;
  try {
    out = Math.round(place.data[s[i][0]][s[i][1] + type]["change"][s[i][3]] * 10) / 10;
  } catch (err) {
    console.log(err.message);
  }
  return out;
}
function qui(n) {
  return Math.ceil(5 * n / 331);
}
function otherEst(s, place, i, hiLo, type) {
  if (typeof hiLo === "number" & hiLo < 0) {
    hiLo = "highest";
  } else if (typeof hiLo === "number") {
    hiLo = "lowest";
  }
  let optAr = Object.assign({}, place.data[s[i][0]][s[i][1] + "_rank_local"][type]);
  let l = new Set(chains[s[i][3]]);
  for (let prop of Object.keys(optAr)) {
    if (!l.has(prop)) {
      delete optAr[prop];
    }
  }
  let optArKey;
  if (Object.keys(optAr).length > 1) {
    if (hiLo == "lowest") {
      for (let [k, v] of Object.entries(optAr)) {
        if (v > 0) {
          delete optAr[k];
        }
      }
      if (optAr.length > 0) {
        optArKey = Object.keys(optAr).reduce((a, b) => optAr[a] > optAr[b] ? a : b);
      } else {
        optArKey = void 0;
      }
    }
    if (hiLo == "highest") {
      for (let [k, v] of Object.entries(optAr)) {
        if (v < 0) {
          delete optAr[k];
        }
      }
      if (optAr.length > 0) {
        optArKey = Object.keys(optAr).reduce((a, b) => optAr[a] < optAr[b] ? a : b);
      } else {
        optArKey = void 0;
      }
    }
  } else {
    optArKey = Object.keys(optAr);
  }
  return optArKey;
}
function otherRank(s, place, i, t = "r") {
  let locExt = "";
  if (t == "rl") {
    locExt = "_local";
  }
  return place.data[s[i][0]][s[i][1] + "_rank" + locExt]["change"][otherEst(s, place, i, cha(s, place, i, t), "change")];
}
function ud(n, w1, w2) {
  if (n < 0) {
    return w2;
  } else {
    return w1;
  }
}
function sign(x, y) {
  if (Math.sign(x) == Math.sign(y)) {
    return true;
  } else {
    return false;
  }
}
var ones = ["", "", "second-", "third-", "fourth-", "fifth-", "sixth-", "seventh-", "eighth-", "ninth-"];
var nuwords = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
function nuword(x) {
  if (x < 10) {
    return nuwords[x];
  } else {
    return x;
  }
}
function suffixer(int) {
  let ord2;
  if (int == 12) {
    ord2 = "twelfth";
  } else if (int > 10 & int < 20) {
    ord2 = int + "th";
  } else {
    let mod = Math.round(int) % 10;
    ord2 = mod == 1 ? int + "st" : mod == 2 ? int + "nd" : mod == 3 ? int + "rd" : int + "th";
  }
  return ord2;
}
function ord(x) {
  let ordin;
  if (Math.abs(x) < 10) {
    ordin = ones[Math.abs(x)];
  } else {
    ordin = suffixer(Math.abs(x)) + "-";
  }
  return ordin;
}
var ageBandLU = {
  "0 - 4": ["children under the age of five years", "under five years"],
  "5 - 9": ["children between the ages of five and nine years", "between five and nine years"],
  "10 - 15": ["people between the ages of 10 and 15 years", "between 10 and 15 years"],
  "16 - 19": ["people between the ages of 16 and 19 years", "between 16 and 19 years"],
  "20 - 24": ["people between the ages of 20 and 24 years", "between 20 and 24 years"],
  "25 - 34": ["people between the ages of 25 and 34 years", "between 25 and 34 years"],
  "35 - 49": ["people between the ages of 35 and 49 years", "between 35 and 49 years"],
  "50 - 64": ["people between the ages of 50 and 64 years", "between 50 and 64 years"],
  "65 - 74": ["people between the ages of 65 and 74 years", "between 65 and 74 years"],
  "75 - 84": ["people between the ages of 75 and 84 years", "between 75 and 84 years"],
  "85 - 115": ["people between the ages of 85 and 115 years", "between 85 and 115 years"]
};
function eq(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}
function udord(n, w1, w2) {
  let w = ud(n, w1, w2);
  let nu = ord(n);
  return nu + w;
}
function adv(x, y) {
  let w;
  let d = x - y;
  let perc = d / y * 100;
  if (Math.abs(perc) > 7) {
    w = "";
  } else if (Math.abs(perc) > 3) {
    w = "";
  } else {
    w = "slightly";
  }
  return w;
}
function uds(n, w1, w2, w3) {
  if (n < -1) {
    return w2;
  } else if (n > 1) {
    return w1;
  } else {
    return w3;
  }
}
function pcnoprint(x) {
  if (Math.abs(x) < 10) {
    return Math.round(x * 10) / 10;
  } else {
    return Math.round(x);
  }
}
async function getPhotos(limit, page) {
  const res = await fetch(`https://picsum.photos/v2/list?limit=${limit}&page=${page}`);
  return res.json();
}
function randomQ(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function aspectQ(srcWidth, srcHeight, maxWidth, maxHeight) {
  let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: Math.round(srcWidth * ratio), height: Math.round(srcHeight * ratio) };
}
export { adv, ageBandLU, aspectQ, cha, chains, cur, drop, eq, figs, getData, getPhotos, get_word, nuword, ord, otherEst, otherRank, pcnoprint, prev, qui, randomQ, regionThe, sign, ud, udord, uds, uncap1 };
