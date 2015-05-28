(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var qsa = require('./qsa');

qsa('.js__collapse-toggle').forEach(function (el) {
  el.addEventListener('click', function () {
    var myId = el.getAttribute('data-target'),
      myElement = document.getElementById(myId),
      collapsers,
      nCollapsers;

    if ($(myElement).hasClass('in')) {
      $(myElement).collapse('hide');
    } else {
      collapsers = $('.js__collapse').filter(function (i, el) {
        return el.id !== myId;
      })
      .filter('.in');
      nCollapsers = collapsers.length;

      if (nCollapsers === 0) {
        $(myElement).collapse('show');
      } else {
        collapsers.each(function (i, el) {
          $(el).collapse('hide');
          $(el).on('hidden.bs.collapse', function () {
            if (--nCollapsers === 0) {
              $(myElement).collapse('show');
            }
          });
        });
      }
    }
  });
});

},{"./qsa":4}],2:[function(require,module,exports){
'use strict';

require('./popover');
require('./collapse');

},{"./collapse":1,"./popover":3}],3:[function(require,module,exports){
'use strict';

var qsa = require('./qsa'),
  allPopovers = [];

function isHidden(el) {
  return el.style.display === 'none';
}

function hide(el) {
  el.style.display = 'none';
  el.style.visibility = 'hidden';
}

function show(el) {
  el.style.display = '';
  el.style.visibility = 'visible';
}

function toggleHiddenState(el) {
  if (isHidden(el)) {
    show(el);
  } else {
    hide(el);
  }
}

qsa('.js__popover-toggle').forEach(function (el) {
  var popover = document.getElementById(el.getAttribute('data-popover-id'));

  // WOW
  popover.style.display = 'none';
  popover.style.visibility = 'hidden';

  allPopovers.push(popover);

  el.addEventListener('click', function () {
    allPopovers.forEach(function (pv) {
      if (pv !== popover) {
        hide(pv);
      }
    });

    toggleHiddenState(popover);
  });
});

},{"./qsa":4}],4:[function(require,module,exports){
'use strict';

module.exports = function (selector) {
  var elementsArray,
    selection;

  selection = document.querySelectorAll(selector);
  elementsArray = new Array(selection.length);
  for (var i = 0; i < selection.length; i++) {
    elementsArray[i] = selection[i];
  }

  return elementsArray;
};

},{}]},{},[2]);
