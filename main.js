(function(){
  // Journey: hovering or focusing a year updates the centre photo
  var rows=[].slice.call(document.querySelectorAll('.yr'));
  var ph=document.getElementById('stagePh'),fig=document.getElementById('stageFig'),yr=document.getElementById('stageYear'),pl=document.getElementById('stagePlace');
  function show(r){
    rows.forEach(function(x){x.classList.toggle('on',x===r)});
    var y=r.querySelector('.y').textContent,c=r.dataset.cap;
    fig.textContent='The road so far · '+y; yr.textContent=y; pl.textContent=c;
  }
  rows.forEach(function(r){r.addEventListener('mouseenter',function(){show(r)});r.addEventListener('focus',function(){show(r)});});

  // Copy email
  var b=document.getElementById('copyEmail'),h=document.getElementById('copyHint'),t=document.getElementById('emailText');
  b.addEventListener('click',function(){
    function done(m){h.textContent=m;setTimeout(function(){h.textContent='Copy'},2200)}
    function fb(){var r=document.createRange();r.selectNodeContents(t);var s=getSelection();s.removeAllRanges();s.addRange(r);done('Selected, press Ctrl+C')}
    try{navigator.clipboard.writeText(t.textContent).then(function(){done('Copied')},fb)}catch(e){fb()}
  });
})();
