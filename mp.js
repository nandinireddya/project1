function loadJSON(url){
  return new promise((resolve,reject))=>
{
  return fetch(url).then(response=>
  {
    if(response.ok){
      resolve(response.json());

    }else{
      reject(new error('error - unable to load'));
    }
  })
  })
}
var mypromise=loadJSON("data.json");
mypromise.then(data => {
  console.log(data);
  career(data.career);

});
var content=document.quarySelector(".content");
function career(car) {
  var h2=document.createElement("h2");
  h2.textContent="career objective";
  content.appendChild(h2);
  var p=document.createElement("hr");
  content.appendChild(hr);
  var p=doc.createElement("p");
  p.textContent=car.data;
  content.appendChild(p);
}
