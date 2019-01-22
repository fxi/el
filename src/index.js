/* jshint esversion:6 */
export {buel};

function buel(type, ...opt) {
  var el = document.createElement(type);
  var item;
  opt.forEach(o => {
    /**
     * Object part buel("div",{Object})
     */
    if (isObject(o)) {
      Object.keys(o).forEach(a => {
        item = o[a];
        if (
          a == 'on' &&
          isArray(item) &&
          isString(item[0]) &&
          isFunction(item[1])
        ) {
          el.addEventListener(item[0], item[1]);
        } else if (a == 'on' && isObject(item)) {
          Object.keys(item).forEach(i => {
            if (isFunction(item[i])) {
              el.addEventListener(i, item[i]);
            }
          });
        } else if (a == 'innerText' && isString(item)) {
          el.innerText = item;
        } else if ((a == 'dataset' || a == 'style') && isObject(item)) {
          Object.keys(item).forEach(i => {
            el[a][i] = item[i];
          });
        } else if (a == 'class' && isArray(item)) {
          item.forEach(c => el.classList.add(c));
        } else {
          el.setAttribute(a, o[a]);
        }
      });
    }
    /**
     * Array part buel("div",[Array])
     */
    if (isArray(o)) {
      o.forEach(elChildren => {
        if (isElement(elChildren)) {
          el.appendChild(elChildren);
        }
      });
    }
    /**
     * Element part buel("div",>Element>)
     */
    if (isElement(o)) {
      el.appendChild(o);
    }
    /**
     * HTML part buel("div",>Element>)
     */
    if (isHTML(o)) {
      el.innerHTML = o;
    } else if (isStringRange(o)) {
      el.innerText = o;
    }
  });

  return el;
}

/**
 * Test if entry is an aray
 * @param {Array} item
 */
function isObject(item) {
  return !!item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Test if entry is an aray
 * @param {Array} item array
 */
function isArray(item) {
  return !!item && typeof item === 'object' && Array.isArray(item);
}

/**
 * Test if entry is JSON
 * @param {String} String to test
 */
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

/**
 * Test if entry is numeric
 * @param {String|Number} n string or number to test
 */
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Test if string contain HTML
 * @param {String} n string to test
 * @note https://stackoverflow.com/questions/15458876/check-if-a-string-is-html-or-not#answer-36773193
 */
function isHTML(str) {
  var test = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
  return test(str);
}

/**
 * Test if entry is string
 * @param {String} str string to test
 */
function isString(str) {
  return typeof str === 'string';
}
/**
 * Test if entry is function
 * @param {Function} fun Function to test
 */
function isFunction(fun) {
  return fun instanceof Function;
}

/**
 * Check if an object is a html element
 * @param {Object} obj object to test
 */
function isElement(obj) {
  return obj instanceof Element;
}
