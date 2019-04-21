let adultImg = document.querySelector('#adult-img');
let ninImg = document.querySelector('#nin-img');
let libImg = document.querySelector('#lib-img');
let centralImg = document.querySelector('#central-img');
let avImg = document.querySelector('.avfi');
let optionTxt = document.querySelector('#option-txt');
let imgTxt = document.querySelectorAll('.imgtxt');
let freeTxt = document.querySelector('.free-txt');
let topicName = document.querySelector('#topic-name');
let topicBtn = document.querySelector('#topic-btn');
let nextBtn = document.querySelector('#next-btn');
let resBtn = document.querySelector('#restart-btn');
let topicTxt = '';

adultImg.addEventListener('click', function () {

    if (adultImg.src === 'https://i.ibb.co/Ctz4tnd/adultf.png') {
        optionTxt.innerHTML = "¡Muy bien! Ahora elige el tema que más te llame la atención. <br> OJO: Ten en cuenta que hay muchisimos más temas en el juego real pero son limitados a 3 en este demo."
        adultImg.src = 'https://i.ibb.co/HqhGLNX/adultb2.png';
        ninImg.src = 'https://i.ibb.co/crp9rRT/adultb3.png';
        libImg.src = 'https://i.ibb.co/F35sLgD/adultb4.png';
        imgTxt.forEach(function(e){
            e.style.display = 'none';
        });
    }else if(adultImg.src === 'https://i.ibb.co/HqhGLNX/adultb2.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/e22a384d74df49668c8f802900bdb5d6-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
    }else if(adultImg.src === 'https://i.ibb.co/j8S9gZP/ninb2.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/3a98b930e83cfc6d3c1f1d81ddcb5937-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
    }else if(adultImg.src === 'https://i.ibb.co/99W0dqP/tlb.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/32c1881c75583b9264f41edcdee11b2f-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
        freeTxt.innerHTML = topicTxt;
    }
});

ninImg.addEventListener('click', function () {

    if(ninImg.src === 'https://i.ibb.co/Lpy1rrd/ninf.png'){
        optionTxt.innerHTML = "¡Muy bien! Ahora elige el tema que más te llame la atención. <br> OJO: Ten en cuenta que hay muchisimos más temas en el juego real pero son limitados a 3 en este demo."
        adultImg.src = 'https://i.ibb.co/j8S9gZP/ninb2.png';
        ninImg.src = 'https://i.ibb.co/syTf7BQ/ninb4.png';
        libImg.src = 'https://i.ibb.co/MBZ8FFD/ninb3.png';
        imgTxt.forEach(function(e){
            e.style.display = 'none';
        });
    }else if(ninImg.src === 'https://i.ibb.co/crp9rRT/adultb3.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/21/8e2051003b3d304b85ba4a8367630a0e-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
    }else if(ninImg.src === 'https://i.ibb.co/syTf7BQ/ninb4.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/21/d2e6047ff3e093e45f6323e8d573b989-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
    }else if(ninImg.src === 'https://i.ibb.co/99W0dqP/tlb.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/32c1881c75583b9264f41edcdee11b2f-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
        freeTxt.innerHTML = topicTxt;
    }
    
});

libImg.addEventListener('click', function(){

    if(libImg.src === 'https://i.ibb.co/C5YTZH0/tlf.png'){
        optionTxt.innerHTML = "¡Muy bien! Ahora piensa en el tema libre que quieras y escribelo en el campo de texto debajo, clickea 'ok' y luego clickea cualquiera de las imagenes <br> <br> OJO: En el juego normalmente se escribiria el tema en el espacio en blanco dentro de la tarjeta, pero por temas de espacio en este demo aparecerá en un lugar diferente.";
        adultImg.src = 'https://i.ibb.co/99W0dqP/tlb.png';
        ninImg.src = 'https://i.ibb.co/99W0dqP/tlb.png';
        libImg.src = 'https://i.ibb.co/99W0dqP/tlb.png';
        imgTxt.forEach(function(e){
            e.style.display = 'none';
        });
        topicName.style.display = 'block';
        topicBtn.style.display = 'block';
    }else if(libImg.src === 'https://i.ibb.co/F35sLgD/adultb4.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/21/ba16fb848c4a1958ed60ab6ac67ba450-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
    }else if(libImg.src === 'https://i.ibb.co/MBZ8FFD/ninb3.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/21/c80172d804e2837d4f8703880d120caf-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
    }else if(libImg.src === 'https://i.ibb.co/99W0dqP/tlb.png'){
        centralImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/32c1881c75583b9264f41edcdee11b2f-full.png';
        adultImg.style.display = 'none';
        ninImg.style.display = 'none';
        libImg.style.display = 'none';
        avImg.style.display = 'block';
        nextBtn.style.display = 'block';
        optionTxt.innerHTML = "Excelente. Ahora presta atención al tablero, es hora de comenzar a jugar. Para el primer paso: ME EXPRESO, toma unos segundos para reflexionar y pensar sobre el tema y luego procede a hacer el paso. <br> <br> PASO 1: ME EXPRESO: <br> <br> Cada jugador comenzando con el menor del grupo comienza a expresar sus ideas sobre el tema, mientras uno se expresa los demás permanecen en silencio, no hay conversación ni diálogo. <br><br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7."
        freeTxt.innerHTML = topicTxt;
    }

});

topicBtn.addEventListener('click', function(){
    topicTxt = 'Tema: ' + topicName.value;
    topicName.style.display = 'none';
    topicBtn.style.display = 'none';
});

nextBtn.addEventListener('click', function(){
    stepsBtn();
});

resBtn.addEventListener('click', function(){
    location.reload();
});

function stepsBtn(){
    if(avImg.src === 'https://cdn1.imggmi.com/uploads/2019/4/18/e08ecfcf98a2530835d63b466a34129b-full.png'){
        avImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/be617897d0d136a9bb6c25cb9c08243a-full.png';
        avImg.style.top = '-5%';
        avImg.style.left = '2%';
        optionTxt.innerHTML = 'PASO 2: ESCUCHO <br> <br> Cada jugador tiene que decir lo que le llamó más la atención de lo que expresó cada jugador, mientras un jugador habla los demás permanecen en silencio. No hay conversación no diálogo. <br> <br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7.';
    }else if(avImg.src === 'https://cdn1.imggmi.com/uploads/2019/4/18/be617897d0d136a9bb6c25cb9c08243a-full.png'){
        avImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/e877e97812f100c1ef2f6391983b0ca0-full.png';
        avImg.style.top = '-8%';
        avImg.style.left = '-1%';
        optionTxt.innerHTML = 'PASO 3: DIALOGAMOS <br> <br> Acá se realiza un diálogo entre los jugadores donde primero hacen aclaraciones mutuas respecto al tema y luego van reafirmando lo que comparten o no comparten e integran aquellas coincidencias significativas de manera de alcanzar una comprensión mayor frente al tema. <br> <br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7.';
    }else if(avImg.src === 'https://cdn1.imggmi.com/uploads/2019/4/18/e877e97812f100c1ef2f6391983b0ca0-full.png'){
        avImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/8e4a5159fe7a96ffa2426d0984b9481f-full.png';
        avImg.style.top = '-11%';
        avImg.style.left = '-4%';
        optionTxt.innerHTML = 'PASO 4: TOMAMOS POSTURA <br> <br> Los jugadores conversan espontáneamente para ponerse de acuerdo y tomar una postura como grupo acerca del tema. Lo fundamental es que cada uno opine como un miembro personalizado del grupo y se haga cargo de lo dicho y decidido entre todos.  <br> <br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7.';
    }else if(avImg.src === 'https://cdn1.imggmi.com/uploads/2019/4/18/8e4a5159fe7a96ffa2426d0984b9481f-full.png'){
        avImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/878c344e580b08dc8ed0649fe59f7475-full.png';
        avImg.style.top = '-8%';
        avImg.style.left = '-8%';
        optionTxt.innerHTML = 'PASO 5: TOMAMOS ACCIONES <br> <br> Este paso es decisivo, se trata de tomar acción sobre la postura del grupo frente al tema, para ello, los jugadores tienen que proponer y realizar una acción concreta acerca del tema elegido y a la postura que han tomado. Así, cada jugador se hace responsable de una parte de lo decidido por el grupo (su parte).<br> <br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7.';
    }else if(avImg.src === 'https://cdn1.imggmi.com/uploads/2019/4/18/878c344e580b08dc8ed0649fe59f7475-full.png'){
        avImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/c1e003974bee16cfd37d81f9d74fecc0-full.png';
        avImg.style.top = '-6%';
        avImg.style.left = '-9%';
        optionTxt.innerHTML = 'PASO 6: EVALUAMOS <br> <br> En secreto, cada jugador se evalúa así mismo y evalúa al grupo. La evaluación es el signo más fehaciente de que cada uno ha participado del tema y lo ha hecho formando parte del grupo. Cuando cada jugador haya realizado la evaluación, calculan el promedio de nota de la "autoevaluación" y el promedio de "nota del grupo" (ver manual). <br> <br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7.';
    }else if(avImg.src === 'https://cdn1.imggmi.com/uploads/2019/4/18/c1e003974bee16cfd37d81f9d74fecc0-full.png'){
        avImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/acbdfa5a545e8018491f1e59be939077-full.png';
        avImg.style.top = '-1%';
        avImg.style.left = '-7%';
        optionTxt.innerHTML = 'PASO 7: PROCESAMOS CONFLICTOS <br> <br> Los jugadores que tengan una o más tarjetas de "SUPERAR" en el paso 7 tienen que leerla en voz alta y explicar al grupo el por qué respondió "no". <br> <br> De acuerdo a ello, el grupo comenta y propone formas de resolver el conflicto. Es el grupo completo quien decide si lo ha superado. Luego continúa el siguiente jugador y se hace lo mismo hasta que se hayan resuelto todas las tarjetas en conflicto.<br> <br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7.';
    }else if(avImg.src === 'https://cdn1.imggmi.com/uploads/2019/4/18/acbdfa5a545e8018491f1e59be939077-full.png'){
        avImg.src = 'https://cdn1.imggmi.com/uploads/2019/4/18/3b8fb48dc75eb37e147dd9dcefdad599-full.png';
        avImg.style.top = '1%';
        avImg.style.left = '-3.5%';
        optionTxt.innerHTML = 'PASO 8: CELEBRAMOS <br> <br> Cada jugador tiene que "expresar" al grupo, lo que opina o siente acerca del tema elegido. Luego continua el segundo jugador, después el tercero y así hasta el último jugador. Mientras un jugador se expresa los demás están en silencio. En este paso no hay conversación, ni diálogo.  <br> <br> Luego se leen las tarjetas de CULTIVAR y SUPERAR y cada jugador responde con si o no. En caso de que respondan con un no quedan en conflicto para luego procesarlas en el paso 7.';
        nextBtn.style.display = 'none';
        resBtn.style.display = 'block';
    }
}