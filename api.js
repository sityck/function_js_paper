// JavaScript Document
document.write("<script type='text/javascript' src='cross-fetch-3.0.2/dist/cross-fetch.js'></script>");
// Or just: import 'cross-fetch/polyfill';
function jsonRpc(url, {method, id, params}) {
	var payload = {id, jsonrpc: '2.0', method, params};
	return fetch(url,{
    body: JSON.stringify(payload),
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  }).then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  });
}