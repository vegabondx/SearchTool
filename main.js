import { get, set } from 'https://cdn.jsdelivr.net/npm/idb-keyval@6/+esm';

searchUrbanDict = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
  chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + query + "&title=Special%3ASearch&go=Go"});
};

chrome.contextMenus.create({
  title: "Search in UrbanDictionary",
  contexts:["selection"],
  onclick: searchUrbanDict
});

searchWikipedia = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + query + "&title=Special%3ASearch&go=Go"});
};

chrome.contextMenus.create({
  title: "Search in Wikipedia",
  contexts:["selection"],
  onclick: searchWikipedia
});

searchLocal = function(word){
  get(word).then((val) => console.log(val));
};


chrome.contextMenus.create({
  title: "Search in local",
  contexts:["selection"],
  onclick: searchLocal
});

setLocal = function(word){
set(word,"there")};

chrome.contextMenus.create({
  title: "Set in local",
  contexts:["selection"],
  onclick: setLocal
});



