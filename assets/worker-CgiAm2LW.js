(function(){"use strict";let a;onmessage=e=>{switch(e.data.action){case"set-speed":clearInterval(a),t(e.data.value);break;case"pause":clearInterval(a);break}};function t(e){a=setInterval(function(){postMessage("")},e||1e3)}})();
