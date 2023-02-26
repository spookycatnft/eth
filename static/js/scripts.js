$(document).ready(function() {
    $('#claimButton').click(function() {
        $('#claimButton').text('Connecting...');
    });
    $('#num').text(localStorage.getItem('hgfdsghnu,ol'));
    let timerInterval;
    let time = 0;
     
    function updateTime() {
      var rnd = Math.floor(Math.random() * (15 - 4)) + 15;
      
      time = time + rnd;
      if(time > 9954){
        time = 9954;
      }
      let secs = time;
    
      
    document.querySelector('#num').innerHTML = `${secs}`;
    }
     var rnd2 = Math.floor(Math.random() * (6000 - 3001)) + 6000;
    function startTimer() {
        
      timerInterval = setInterval(updateTime, rnd2);
    };
     
    function stopTimer() {
      clearInterval(timerInterval);
    }
    
    window.onbeforeunload = function(event){
      localStorage.setItem('hgfdsghnu,ol', time);
    }
     
    window.addEventListener('load', () => {
      time = parseInt(localStorage.getItem('hgfdsghnu,ol'));
      if(isNaN(time)) time = 0
      startTimer()
    }, false );
});
