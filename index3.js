function loadSON(url){
  return new promise( (reslove,reject) => {
  return fetch(url).then( response) => {
    if(response.ok){
      reslove(response.json());
    }else{
      reject(new error('error - unable to load'));
    }
  })
})
}
        var mypromise=loadJSON("data.json");
        mypromise.then( data => {
          cansole.log(data);
          career(data.carrer);
        } );
        var content=document.queryselector(".content");
        function carrer(car){
          var h2=document.createElemt("h2");
          h2.textContent="carrer objective";
          content.appendChild(h2);
        }
