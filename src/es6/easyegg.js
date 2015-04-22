/*
 * eezter.js | version 0.0.1
 * (c) Travis Loncar (https://github.com/tbloncar)
 */

const keycodeMap = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause': 19,
  'capslock': 20,
  'esc': 27,
  'pageup': 33,
  'pagedown': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  '0': 48,
  '1': 49,
  '2': 50,
  '3': 51,
  '4': 52,
  '5': 53,
  '6': 54,
  '7': 55,
  '8': 56,
  '9': 57,
  'a': 65,
  'b': 66,
  'c': 67,
  'd': 68,
  'e': 69,
  'f': 70,
  'g': 71,
  'h': 72,
  'i': 73,
  'j': 74,
  'k': 75,
  'l': 76,
  'm': 77,
  'n': 78,
  'o': 79,
  'p': 80,
  'q': 81,
  'r': 82,
  's': 83,
  't': 84,
  'u': 85,
  'v': 86,
  'w': 87,
  'x': 88,
  'y': 89,
  'z': 90,
  '0numpad': 96,
  '1numpad': 97,
  '2numpad': 98,
  '3numpad': 99,
  '4numpad': 100,
  '5numpad': 101,
  '6numpad': 102,
  '7numpad': 103,
  '8numpad': 104,
  '9numpad': 105,
  'multiply': 106,
  'plus': 107,
  'minus': 109,
  'dot': 110,
  'slash1': 111,
  'f1': 112,
  'f2': 113,
  'f3': 114,
  'f4': 115,
  'f5': 116,
  'f6': 117,
  'f7': 118,
  'f8': 119,
  'f9': 120,
  'f10': 121,
  'f11': 122,
  'f12': 123,
  'equal': 187,
  'comma': 188,
  'slash': 191,
  'backslash': 220
};

let codeMap = {
  'konami': 'up|up|down|down|left|right|left|right|b|a',
  'turok': 'bewareoblivionisathand'
};

export function on(code, cb) {
  let buttons;
  let sequence = [];
  let index = 0;

  let resetSequence = function() {
    sequence = []
    index = 0;  
  };

  /* Does the code not have any delimiters?
   * Does the code not match a key name? */
  let lacksKeyName = function(c) {
    return !~c.indexOf('|') && !keycodeMap[c];
  };

  if(lacksKeyName(code)) {
    /* Does the code match a seeded code name? */
    if(codeMap[code]) {
      let registeredCode = codeMap[code];

      if(lacksKeyName(registeredCode)) {
        buttons = registeredCode.split(''); 
      } else {
        buttons = registeredCode.split('|'); 
      }
    } else {
      buttons = code.split(''); 
    }
  } else {
    buttons = code.split('|'); 
  }

  document.addEventListener('keyup', function(e) {
    let button = buttons[index];
    let expected = keycodeMap[button];

    if(e.which === expected) {
      sequence.push(button); 
      index += 1;

      if(sequence.join('|') === buttons.join('|')) {
        cb(); 
        resetSequence();
      }
    } else {
      resetSequence()
    }
  });  
}

export function register(name, code) {
  codeMap[name] = code;
}
