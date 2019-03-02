browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);

function logURL(requestDetails)
{
  if (requestDetails.url.startsWith("http://127.0.0.1:2345/report?")){
    return
  }
  //console.log("Loading: " + requestDetails.url); 
  
  oReq = new XMLHttpRequest();
  oReq.open("post", "http://127.0.0.1:2345/report?" + requestDetails.url, true);
  oReq.send();
}