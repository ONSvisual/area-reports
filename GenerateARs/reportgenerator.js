const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

let params = {id: "E07000223"}

var pluralize = require('pluralize')

var Fuse = require('fuse.js');

const rosaenlgPug = require('rosaenlg');

let reportsobj = {}

const ordinal = i => {
	if (i < 10) {
		return [
			'',
			'first',
			'second',
			'third',
			'fourth',
			'fifth',
			'sixth',
			'seventh',
			'eighth',
			'ninth'
		][i];
	}

	const j = i % 10;
	const k = i % 100;
	if (j === 1 && k !== 11) {
		return i + 'st';
	}

	if (j === 2 && k !== 12) {
		return i + 'nd';
	}

	if (j === 3 && k !== 13) {
		return i + 'rd';
	}

	return i + 'th';
};

const ordinalExcludingFirst = i => {
	if (i === 1) {
		return '';
	}
	return ordinal(i) + ' ';
};

const numberWord = i => {
	if (i === Math.floor(i) && i >= 1 && i <= 9) {
		return [
			'',
			'one',
			'two',
			'three',
			'four',
			'five',
			'six',
			'seven',
			'eight',
			'nine'
		][i];
	}

	return i;
};

const addAOrAn = n => {
	n = String(n);
	const useAn = n === '11' || n === '18' || n[0] === '8' || n[0] === 'e';
	return useAn ? 'an ' + n : 'a ' + n;
};

// https://stackoverflow.com/a/2901298/3347737
const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const possessive = s => {
	if (s[s.length - 1] === 's') {
		return s + '\'';
	}

	return s + '\'s';
};

const robojournalist = (template, dict) => {
	// This is based on Douglas Crockford's old json_parse https://github.com/douglascrockford/JSON-js/blob/03157639c7a7cddd2e9f032537f346f1a87c0f6d/json_parse.js

	if (typeof template !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof template}`);
	}

	let at = 1;
	let ch = template.charAt(0);

	const getCh = function () {
		// Just to keep xo happy
		return ch;
	};

	const error = function (m) {
		throw JSON.stringify({
			name: 'Robo-journalist error',
			message: m,
			at,
			text: template
		});
	};

	const next = function (c) {
		// If a c parameter is provided, verify that it matches the current character.
		if (c && c !== ch) {
			error('Expected \'' + c + '\' instead of \'' + ch + '\'');
		}

		// Get the next character. When there are no more characters,
		// return the empty string.
		ch = template.charAt(at);
		at += 1;
		return ch;
	};

	const getValue = function (key) {
		const parts = key.split('.');
		let d = dict;
		for (const part of parts) {
			try {
				d = d[part];
			} catch {
				error(`${key} is not in the data dictionary.`);
			}
		}

		return d;
	};

	const rpn = function (key) {
		const tokens = key.split(' ');
		const binaryOperators = {
			'+': (a, b) => a + b,
			'-': (a, b) => a - b,
			'*': (a, b) => a * b,
			'/': (a, b) => a / b,
			'<': (a, b) => a < b,
			'>': (a, b) => a > b,
			'<=': (a, b) => a <= b,
			'>=': (a, b) => a >= b,
			'===': (a, b) => a === b
		};
		const unaryOperators = {
			'\'': a => possessive(a),
			',': a => numberWithCommas(a),
			'.-2': a => (a / 100).toFixed(0) * 100,
			'.-1': a => (a / 10).toFixed(0) * 10,
			'.0': a => a.toFixed(0),
			'.1': a => a.toFixed(1),
			'.2': a => a.toFixed(2),
			'~abs': a => Math.abs(a),
			'~ord': a => ordinal(Number(a)),
			'~ord\'': a => ordinalExcludingFirst(Number(a)),
			'~word': a => numberWord(Number(a)),
			'~aan': a => addAOrAn(a)
		};
		const stack = [];
		for (const token of tokens) {
			if (/^-?\d+$/.test(token)) {
				// An integer literal
				stack.push(Number(token));
			} else if (token in binaryOperators) {
				const b = Number(stack.pop());
				const a = Number(stack.pop());
				stack.push(binaryOperators[token](a, b));
			} else if (token in unaryOperators) {
				const a = stack.pop();
				stack.push(unaryOperators[token](a));
			} else if (token.charAt(0) === '^') {
				stack[stack.length - 1] = getValue(token.slice(1))(stack[stack.length - 1]);
			} else {
				stack.push(getValue(token));
			}
		}

		if (stack.length !== 1) {
			error('Invalid RPN');
		}

		return stack[0];
	};

	const eitherOr = function (which) {
		next('?');
		const first = parse();
		next(':');
		const second = parse();
		next('}');
		return which ? first : second;
	};

	const braced = function () {
		next('{');
		if (ch === ':') {
			// {:} adds a colon to the output
			next(':');
			next('}');
			return ':';
		}

		if (ch === '?') {
			// {?} adds a colon to the output
			next('?');
			next('}');
			return '?';
		}

		let varName = '';
		while (getCh()) {
			if (ch === '}') {
				next('}');
				return rpn(varName);
			}

			if (ch === '?') {
				return eitherOr(rpn(varName));
			}

			varName += ch;
			next();
		}

		error('Braces not closed');
	};

	const parse = function () {
		let result = '';
		while (getCh()) {
			if (ch === ':' || ch === '}') {
				return result;
			}

			if (ch === '{') {
				result += braced();
				continue;
			}

			result += ch;
			next();
		}

		return result;
	};

	const result = parse();
	if (ch !== '') {
		error(`Didn't expect '${ch}'`);
	}

	return result;
};



async function getData(url) {

    const d3dsv = await import("d3-dsv");

    let response = await fetch(url);
    let string = await response.text();
    let data = await d3dsv.csvParse(string, d3dsv.autoType);
    return data;
}

  let chains = {
    'good': ['bad', 'fair'],
    'bad': ['good', 'fair'],
    'white': ['black', 'asian'],
    'black': ['white', 'asian'],
    'asian': ['white', 'black'],
    'rented_private': ['rented_social', 'owned'],
    'rented_social': ['rented_private', 'owned'],
    'owned': ['rented_private', 'rented_social'],
    'student': ['employee', 'unemployed', 'self-employed'],
    'self-employed': ['employee', 'unemployed', 'student'],
    'employee': ['unemployed', 'self-employed', 'student',],
    'unemployed': ['employee', 'self-employed', 'student'],
    'car_van': ['bus', 'train_metro', 'foot', 'home'],
    'bus': ['car_van', 'train_metro', 'foot', 'home'],
    'train_metro': ['bus', 'car_van', 'foot', 'home'],
    'foot': ['bus', 'train_metro', 'car_van', 'home'],
    'home': ['bus', 'train_metro', 'foot', 'car_van'],
    'OnePerson': ['Cohabiting', 'Married'],
    'Cohabiting': ['OnePerson', 'Married'],
    'LoneParent': ['Married', 'Cohabiting'],
    'Christian': ['Muslim', 'Noreligion'],
    'Muslim': ['Christian', 'Noreligion'],
    'Noreligion': ['Christian', 'Muslim'],
    'Buddhist': ['Hindu', 'Sikh'],
    'Hindu': ['Sikh', 'Buddhist'],
    'Jewish': ['Christian', 'Muslim'],
    'Sikh': ['Hindu', 'Buddhist'],
    'Single': ['Married', 'Seperated'],
    'Married': ['Single', 'Seperated'],
    'Seperated': ['Married', 'Single'],
    '40PlushoursWeek': ['20to49hoursWeek'],
    '20to49hoursWeek': ['40PlushoursWeek'],
    'Kids': ['NoKids', 'NonDepKids'],
    'NoKids': ['Kids', 'NonDepKids'],
    'NonDepKids': ['Kids', 'NoKids'],
    'Male1-15': ['Male49plus'],
    'Male49plus': ['Male1-15'],
    'Female1-15': ['Female49plus'],
    'Female49plus': ['Female1-15'],
    'notDisabled': ['lot', 'little'],
    'lot': ['little', 'notDisabled'],
    'little': ['lot', 'notDisabled'],
  }
  
  let array = ['South East', 'South West', 'West Midlands', 'East Midlands', 'North East', 'North West']
  function regionThe(place, nt) {
    if (place=="East") { place = place + "of England"}
    return ((!array.includes(place))|(nt=="NT")) ? place : 'The ' + place;
  }
  
  function uncap1(string) {
      if (string.slice(0, 3)=="The") {
          return string.charAt(0).toLowerCase() + string.slice(1);
      } else { return string }
  }
  
  
  function drop(x, d, r) {
    let int = Math.abs(x)
    let mod = Math.round(int) % 10;
    let suff = mod == 1 ? 'st' : mod == 2 ? 'nd' : mod == 3 ? 'rd' : 'th';
    let pos = x < 0 ? d: r
    let nuLu = {1: '', 2: 'second-', 3: 'third-', 4: 'fourth-', 5: 'fifth-'}
    let word = nuLu[int]
    return word + pos
  }
  
  
  let num_word = {'quarter of a million': 250000, 'half a million': 500000, 'three quarters of a million': 750000, 'one million': 1000000};
  
  let frac_word = {'one in two': 0.5, 'one in three': 0.333, 'one in four': 0.25, 'one in five': 0.2, 'one in six': 0.167, 'one in seven': 0.143, 'one in eight': 0.125, 'one in nine': 0.111, '1 in 10': 0.1,'1 in 11' : 0.09, '1 in 12' : 0.083, '1 in 13' : 0.077, '1 in 14' : 0.071, '1 in 15' : 0.067, '1 in 16' : 0.063, '1 in 17' : 0.059, '1 in 18' : 0.056, '1 in 19' : 0.053, '1 in 20': 0.05, '1 in 25': 0.04, '1 in 30': 0.033, '1 in 40': 0.025, '1 in 50': 0.02,'2 in 10': 0.2, '3 in 10': 0.3, '4 in 10': 0.4, '6 in 10': 0.6, '7 in 10': 0.7, '8 in 10': 0.8, '9 in 10': 0.9, 'all': 1.0};
  
  
  function get_word(num, dict) {
    if (dict == "frac") {
      dict = frac_word
    } else if (dict == "num") {
      dict = num_word
    }
    let OverUnder;
    let lowest = 2000000;
    let lowest_label;
    for (const label in dict) {
      if (Math.abs(num-dict[label])<lowest) {
        lowest = Math.abs(num-dict[label]) 
        lowest_label = label
        if (num-dict[label]==0) {
          OverUnder = "about"; 
        }
        else if (num-dict[label]>0) {
          OverUnder = "just over";
        }
        else if (num-dict[label]<0) {
          OverUnder = "just under";
        } } }
    return [OverUnder, lowest_label]
  }
  
  function figs(x, f) {
    if (f!=3) {
      f = 2
    }
    let sigfig;
    if (x<1000) {
      sigfig = Number.parseFloat(Number.parseFloat(x).toPrecision(1))
    }
    else {
      sigfig = Number.parseFloat(Number.parseFloat(x).toPrecision(f))
    }
    let text = 'about';
  
  
    if ( Math.abs(x) < Math.abs(sigfig) ) {
      if (Math.round(Math.random())==1) {
        text = "almost "
      } else {
        text = "just under "
      }
    }
    else {
      if (Math.round(Math.random())==1) {
        text = "about "
      } else {
        text = "just over "
      }
    }
  
    return [text, sigfig];
  }
  
  
  function prev(s, place, i, type) {
    if (type=="rl") {
      type = "_rank_local"
    } else if (type=="r") {
      type = "_rank"
    } else {
      type = ""
    }
    return place.data[s[i][0]][s[i][1]+type][2001][s[i][3]]
  }
  function cur(s, place, i, type) {
    if (type=="rl") {
      type = "_rank_local"
    } else if (type=="r") {
      type = "_rank"
    } else {
      type = ""
    }
    return place.data[s[i][0]][s[i][1]+type][2011][s[i][3]]
  }
  
  function cha(s, place, i, type) {
    if (type=="rl") {
      type = "_rank_local"
    } else if (type=="r") {
      type = "_rank"
    } else {
      type = ""
    }
    let out
    try {
      out = Math.round(place.data[s[i][0]][s[i][1]+type]['change'][s[i][3]]*10)/10
    }
    catch(err) {
      console.log(err.message);
    }
    return out
  }
  
  function qui(n) {
    return Math.ceil(5*n/331)
  }
  
  function otherEst(s, place, i, hiLo, type) {
    if (typeof hiLo==="number" & hiLo<0) {
      hiLo = "highest"
    } else if (typeof hiLo==="number") {
      hiLo = "lowest"
    }
    
    let optAr = Object.assign({}, place.data[s[i][0]][s[i][1]+'_rank_local'][type]);
    let l = new Set(chains[s[i][3]])
  
    for (let prop of Object.keys(optAr)) {
      if (!l.has(prop)) {
        delete optAr[prop];
      }
    }
    let optArKey
    if (Object.keys(optAr).length>1) {
      if (hiLo=='lowest') {
        for (let [k, v] of Object.entries(optAr)) {
          if (v > 0) {
            delete optAr[k];
          }
        }
        if (optAr.length>0) {
          optArKey = Object.keys(optAr).reduce((a, b) => optAr[a] > optAr[b] ? a : b);
        } else {
          optArKey = undefined
        }
        
      }
      if (hiLo=='highest') {
        for (let [k, v] of Object.entries(optAr)) {
          if (v < 0) {
            delete optAr[k];
          }
        }
        if (optAr.length>0) {
          optArKey = Object.keys(optAr).reduce((a, b) => optAr[a] < optAr[b] ? a : b);
        } else {
          optArKey = undefined
        }
      }
    } else {
      optArKey = Object.keys(optAr)
    }
    return optArKey
  }
  
  function otherRank(s, place, i, t="r") {
    let locExt = ""
    if (t=="rl") {
      locExt = "_local"
    }
    return place.data[s[i][0]][s[i][1]+'_rank'+locExt]['change'][otherEst(s, place, i, cha(s, place, i, t), 'change')]
  }
  
  function ud(n, w1, w2) { if (n<0) { return w2 } else { return w1 } }
  // var city
  // if (parent=="London") {
  //   city = "city"
  // } else {
  //   city = "region"
  // }
  
  function sign(x, y) {
    if (Math.sign(x) == Math.sign(y)) {
      return true
    } else {
      return false
    }
  }
  
  
  var ones = ['', '', 'second-', 'third-', 'fourth-', 'fifth-', 'sixth-', 'seventh-', 'eighth-', 'ninth-'];
  
  var nuwords = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  function nuword(x) {
    if (x<10) {
      return nuwords[x]
    } else {
      return x
    }
  }
  
  function suffixer(int) {
    let ord
    if (int==12) {
      ord = 'twelfth'
    } else if ((int>10)&(int<20)) {
      ord = int+"th"
    } else {
      let mod = Math.round(int) % 10;
      ord = mod == 1 ? int+'st' : mod == 2 ? int+'nd' : mod == 3 ? int+'rd' : int+'th';
    }
    return ord
  }
  
  function ord(x) {
    let ordin
    if (Math.abs(x)<10) {
      ordin = ones[Math.abs(x)]
    } else {
      ordin = suffixer(Math.abs(x))+"-"
    }
    return ordin
  }
  
  var ageBandLU = {
    '0-9': ['children under the age of nine years', 'under nine years'],
    '10-19': ['people between the ages of 10 and 19 years','between 10 and 19 years'],
    '20-29': ['people between the ages of 20 and 29 years', 'between 20 and 29 years'],
    '30-39': ['people between the ages of 30 and 39 years','between 30 and 39 years'],
    '40-49': ['people between the ages of 40 and 49 years','between 40 and 49 years'],
    '50-59': ['people between the ages of 50 and 59 years','between 50 and 59 years'],
    '60-69': ['people between the ages of 60 and 69 years','between 60 and 69 years'],
    '70-79': ['people between the ages of 70 and 79 years', 'between 70 and 79 years'],
    '80plus': ['people aged 80 years or over', 'over the age of 80 years']
  }
  function eq(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
  }
  function udord(n, w1, w2) {
    let w = ud(n, w1, w2)
    let nu = ord(n)
    return nu+w
  }
  
  function adv(x, y) {
    let w
    let d = x-y
    let perc = (d/y)*100
    if (Math.abs(perc)>7) {
      w = ''
    } else if (Math.abs(perc)>3) {
      w = ''
    } else {
      w = 'slightly'
    }
    return w
  }
  
  function uds(n, w1, w2, w3) {
     if (n<-1) { 
       return w2 
      } else if (n>1) { 
        return w1 
      } else {
        return w3
      }
    }


async function load() {

    // let id = params.id;

    let options_raw = fs.readFileSync(`/Users/theojolliffe/Documents/area-reports/static/data/lad_list_2021.json`);
    let options = JSON.parse(options_raw);

    let ladcodes = options.map(e => e.code)

    var regionLU = {};
    // Data load functions
    getData("https://raw.githubusercontent.com/theojolliffe/census-data/main/csv/lists/Corresponding%20Local%20Authorities-Table%201.csv").then(res => {
        res.forEach(d => {
            regionLU[d['Name']] = d['Region/Country'];
        });
    });

    var countyLU = {};
    // Data load functions
    getData("https://raw.githubusercontent.com/theojolliffe/census-data/main/csv/lists/Local_Authority_District_to_County_(April_2021)_Lookup_in_England.csv").then(res => {
        res.forEach(d => {
            countyLU[d['LAD21NM']] = d['CTY21NM'];
        });
    });

    var ladData
    var ladLoaded = false
    // Data load functions
    getData("https://raw.githubusercontent.com/theojolliffe/census-data/main/laddata.csv").then(res => {
        res.forEach(d => {
            d.code = d[""];
            delete d[""];
        });
        ladData = res
        ladLoaded = true
    });

    for (const id of ladcodes) {

        // let topics_raw = fs.readFileSync(`./topics.json`);
        let topics_raw = fs.readFileSync( `/Users/theojolliffe/Documents/area-reports/static/data/topics.json` )
        let topics = JSON.parse(topics_raw);
    
        let place_raw = fs.readFileSync(`/Users/theojolliffe/Documents/area-reports/static/data/json/place/${id}.json`);
        let place = JSON.parse(place_raw);
        console.log('place.name', place.name)
        let s = place.stories.map(d => d.label.split("_"))
        s.forEach(e => {
        if (e.length>4) {
            e[3] = e[3]+"_"+e[4]
            e.pop()
        }
        });
        let rgncd = place.parents[0].code
        let rgn_raw = fs.readFileSync(`/Users/theojolliffe/Documents/area-reports/static/data/json/place/${rgncd}.json`);
        let rgn = JSON.parse(rgn_raw);
        let eng_raw = fs.readFileSync(`/Users/theojolliffe/Documents/area-reports/static/data/json/place/E92000001.json`);
        let eng = JSON.parse(eng_raw);
        let wal_raw = fs.readFileSync(`/Users/theojolliffe/Documents/area-reports/static/data/json/place/W92000004.json`);
        let wal = JSON.parse(wal_raw);
    
        var health, expand, cou, props;
    
        // Define the word to describe population change in standfirst
        if (place.data.population.value.change.all>8) {
        expand = "expanded"
        } else if (place.data.population.value.change.all>3) {
        expand = "grew"
        } else if (place.data.population.value.change.all>0) {
        expand = "did not change much"
        } else {
        expand = "shrunk"
        } 
        // Define the word to describe health change in standfirst
        if (place.data.health.perc.change.good>0) {
        health = "improved"
        } else if (place.data.health.perc.change.good<0) {
        health = "deteriorated"
        }
    

        const findOne = (haystack, arr) => {
            return arr.some(v => haystack.includes(v));
        };
    
        let grewSyn = {
            1: "expanded",
            2: "grew",
            3: "grew",
            4: "remained relatively stable",
            5: "fell"
        };
    
        var more = true;
    
    
        function fuzz(w1, w2) {
            const options = {
                includeScore: true
            }
            const fuse = new Fuse([w1], options)
            const result = fuse.search(w2)
            if (result.length>0) {
                return false
            } else {
                return true
            }
        }
    
        function iterate(obj, pname) {
            Object.keys(obj).forEach(key => {
                if (typeof obj[key] === 'object') {
                    iterate(obj[key], pname)
                } else {
                    obj[key] = robojournalist(obj[key], {
                        health, health,
                        expanded: expand,
                        plcname: pname,
                    })
                }
            })
        }
    
        var o = JSON.parse(JSON.stringify(topics));
        iterate(o, place.name)
    
        function topic(i, top) {
        let ttop
        if (top) {
            ttop = top
        } else {
            ttop = s[i][3]
        }
        return o[s[i][0]][ttop]
        }
    
        let sf = []
            let changeMag = 0
            place.stories.forEach(e => {
                if ((sf.length<4)&(Math.abs(e['value'])>3)) {
                    sf.push(e['label'].split("_"))
                    changeMag = changeMag+Math.abs(e['value'])
                }
            });
    
        cou = place.parents[0].name=="Wales"?wal:eng
    
    
        let arearep = rosaenlgPug.renderFile('/Users/theojolliffe/Documents/area-reports/static/template.pug', {
            language: 'en_US',
            place: place,
            data: place.data,
            cou: cou,
            // replace eng with country data (inc Wales)
            eng: eng,
            rgn: rgn,
            uncap1: uncap1,
            regionThe: regionThe,
            parent: uncap1(regionThe(place.parents[0].name)),
            parentNT: uncap1(regionThe(place.parents[0].name, "NT")),
            s: s,
            sf: sf,
            stories: place.stories,
            priorities: place.Priorities,
            grewSyn: grewSyn,
            // locRankCha: locRankCha,
            // natRankCha: natRankCha,
            // locRankCur: locRankCur,
            // natRankCur: natRankCur,
            hiRank: place.hiRank,
            topic: topic,
            topics: o,
            chains: chains,
            country: place.parents[0].name=="Wales"?"Wales":"England",
            get_word: get_word,
            figs: figs,
            otherEst: otherEst,
            cur: cur,
            cha: cha,
            qui: qui,
            // cap,cap,
            otherRank: otherRank,
            ud: ud,
            drop, drop,
            ord: ord,
            ageBandLU: ageBandLU,
            eq: eq,
            nuword: nuword,
            sign: sign,
            udord: udord, 
            near: place.nearbyArea.nearTops,
            simi: place.similar,
            adv: adv,
            uds: uds,
            more: more,
            pluralize, pluralize,
            countyLU: countyLU,
            fuzz: fuzz,
            prev: prev,
            regionLU: regionLU,
            findOne: findOne
        });

        reportsobj[id] = arearep;
    }
    fs.writeFileSync('/Users/theojolliffe/Documents/area-reports/static/areareportsprgen.json', JSON.stringify(reportsobj));
}
load()
