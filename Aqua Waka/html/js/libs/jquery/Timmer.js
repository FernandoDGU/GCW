//Timmer
        var n = 0;
        var interval; //tiene el reloj interno
        var isPaused = false; //Para la pausa

                    var l = document.getElementById("timming");
                    interval=window.setInterval(function(){
                        if(!isPaused)
                        {
                            //l.innerHTML = n;
                            if(n > 9)
                            {
                                 document.getElementById("timming").innerHTML = "00:" + n;
                            }
                            else
                            {
                                 document.getElementById("timming").innerHTML = "00:0" + n;
                            }
                           
                            if(n==40) //40 segundos para jugar
                            {
                                //alert("perdiste"); //mandar alert de Youlose
                                //console.log(puntos);
                                document.getElementById("timming").innerHTML = "00:00";
                                detener();               
                            }
                            n++;
                        }
                        },1000);

                    function detener() //Lo hace 0
                    {
                        clearInterval(intervalo);
                    }

                    function PausaGame()
                    {
                        isPaused=true;
                    }

                    function PlayGame()
                    {
                        isPaused = false;
                        console.log("quepedo");
                    }  