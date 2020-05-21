

       //hands shake
       function handshake()
       {
           let hands = document.getElementById('hands');
           hands.innerHTML = "&#xf4c4;";

           setTimeout(function(){
               hands.innerHTML = "&#xf2b5;";
           }, 1000);
       }

       handshake();
       setInterval(handshake, 2000);

       //battery charge animation
       function cogs(){
           let cogs=document.getElementById('cogs');

           cogs.innerHTML = "&#xf085;";

           setTimeout(function(){
               cogs.innerHTML = "&#xf013;";
           }, 1000);
           
       }

       cogs();
        setInterval(cogs, 2000);

    //    hourglass

    //battery charge animation
    function thermoTemp(){
           let thermo=document.getElementById('temp');

           thermo.innerHTML = "&#xf2c7;";

           setTimeout(function(){
               thermo.innerHTML = "&#xf2c8;";
           }, 1000);

           setTimeout(function(){
               thermo.innerHTML = "&#xf2c9;";
           }, 2000);

           setTimeout(function(){
               thermo.innerHTML = "&#xf2ca;";
           }, 3000);

           setTimeout(function(){
            thermo.innerHTML = "&#xf2cb;";
        }, 3000);


          
       }

       thermoTemp();
       setInterval(thermoTemp, 1000);
  