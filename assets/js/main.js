//CICLO FOR()ciclos permiten repetir
//Las partes de la función:
//"for"
//Hay que empezar declarando variable, pej. "i" y desde dónde queremos que empiece (desde 0, o desde 1, etc)
// ";"
// cuantas veces vamos a ejecutar nuestro ciclo. Pej. si queremos ejecutarlo 10 veces, pondremos: i será <= 10 (podríamos preguntarnos: "mientras que...")
// después de la condición,ponemos ";"
//qué queremos que pase en cada ejecucicón. Normalmente la variable va a incrementar (i++)
// for( i = 0; i<=10; i++ )


//EJERCICIO Lev1_1 FOR loop Hello World
// Schreibe eine for-Schleife. 
// Sie soll genau 10 mal in der Konsole “Hello World + Nummer” ausgeben soll. 
for (i=1; i<= 10; i++) {
    console.log("Hello world" + i);
}



//EJERCICIO Lev1_2 FOR loop Array
// Erstelle einen Array mit den Zahlen 0-10 mit Hilfe einer Schleife.
// Wenn wir mit Arrays arbeiten, müssen wir das Array initialisieren (let numArray = [];).
// Verwende den Befehl push() im Schleifenkörper.
// Gib numArray in der Konsole aus.
let numArray = [];
for (i = 0; i <= 10; i++) {
    console.log(numArray.push(i));
}
console.log(numArray);




//EJERCICIO lev1_4 FOR loop Namen
// Deklariere einen Array names mit den Werten: "Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio".
let Namen = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]
// Dann verwende eine for Schleife um alle Namen in der Konsole anzuzeigen.
for (i = 0; i<= Namen.length; i++) {
    console.log(Namen[i]);
}



//EJERCICIO Lev1_6 FOR loop Array
// Wir wollen ein Array von Bildern erstellen und die Dateinamen sollten von image_1.jpg bis image_100.jpg ausgeben.
// Deklariere die Variable retArray als leeres Array. Schreibe eine for-Schleife. Nutze den push() Befehl.
let retArray = [];
for (i=1; i<=100; i++) {
    console.log("image_" + retArray.push(i) + ".jpg");
}



//EJERCICIO lev1_7 DO WHILE. Primero ejecuta código y luego nos hace una comprobación
// Erstelle einen Loop mit do...while. Es sollen die Nummern von 1 bis 5 im Dokument ausgeben werden.
let x = 1;

do {
    document.write("Éste es el número " + x + "<br/>");
    x++;
} while (x<=5);




//EJERCICIO lev1_8 DO WHILE
// Erstelle einen Loop mit do...while.
// Es sollen alle gerade Zahlen bis 20 im Dokument ausgeben werden.

let y = 2;

do {
    document.write(y++ + "<br>");
    y++
} while (y <= 20);