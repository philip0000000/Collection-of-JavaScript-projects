// ==UserScript==
// @name     convert to medieval runes by philip0000000
// @version  1
// @grant    none
// @include *
// ==/UserScript==

function translateToRunes(text) {
  const runeMap = {
    'a': 'ᛆ', 'b': 'ᛒ', 'c': 'ᛌ', 'd': 'ᛑ', 'e': 'ᛂ', 'f': 'ᚠ', 'g': 'ᚵ',
    'h': 'ᛡ', 'i': 'ᛁ', 'j': 'ᛂ', 'k': 'ᚴ', 'l': 'ᛚ', 'm': 'ᛉ', 'n': 'ᚿ',
    'o': 'ᚮ', 'p': 'ᛔ', 'q': 'ᚴ', 'r': 'ᚱ', 's': 'ᛍ', 't': 'ᛐ', 'u': 'ᚢ',
    'v': 'ᚡ', 'w': 'ᚡ', 'x': 'ᚴ', 'y': 'ᛦ', 'ä': 'ᛆ', 'ö': 'ᚯ'
  };

  return text.split('').map(character => runeMap[character.toLowerCase()] || character).join('');
}

function translateAllTextNodes(node) {
  // Skip <script> elements and other elements you don't want to translate
  if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE')
    return;
  
  if (node.nodeType === 3) { // Text node
    node.nodeValue = translateToRunes(node.nodeValue);
  } else {
    node.childNodes.forEach(translateAllTextNodes);
  }
}

// Apply the translation to the entire document
translateAllTextNodes(document.body);

// https://valhyr.com/pages/rune-converter
// translateToRunes("abcdefghijklmnopqrstuvwxyzåäö");
// ᛆᛒᛌᛑᛂᚠᚵᛡᛁᛂᚴᛚᛉᚿᚮᛔᚴᚱᛍᛐᚢᚡᚡᚴᛦzåᛆᚯ
