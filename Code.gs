"use strict";

var _ = lodash.load(); 

function stringify(obj) {
  if (_. isEmpty(obj)) return "";
  var str = [];
  Object.keys(obj).map(function(key) {
    if (typeof obj[key] !== "undefined") str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  })
  return str.join('&');
}

function parse(queryString){
  var obj = {};
  if (queryString.match("[?]")) var queryString = queryString.split("?")[1];
  var queryArray = queryString.split('&');
  for (var i=0; i<queryArray.length; i++) {
    var a = queryArray[i].split('=');
    obj[a[0]] = decodeURIComponent(a[1]);
  }
  return obj;
}
