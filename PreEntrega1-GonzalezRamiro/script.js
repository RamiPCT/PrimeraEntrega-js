// Función para generar un animal aleatorio
function generarAnimalOculto(listaAnimales) {
    const indice = Math.floor(Math.random() * listaAnimales.length);
    return listaAnimales[indice];
}

// Función para seleccionar la dificultad
function seleccionarDificultad() {
    const dificultad = prompt("Selecciona la dificultad:\n1. Fácil (Animales comunes)\n2. Medio (Animales variados)\n3. Difícil (Animales poco conocidos)");
    switch (dificultad) {
        case "1":
            return { lista: ["perro", "gato", "vaca", "pato", "conejo"], intentos: 10 };
        case "2":
            return { lista: ["jirafa", "oso", "tigre", "elefante", "canguro"], intentos: 7 };
        case "3":
            return { lista: ["ciervo", "ornitorrinco", "pingüino", "ballena", "carpincho"], intentos: 5 };
        default:
            alert("Dificultad no válida. Se selecciona Medio por defecto.");
            return { lista: ["jirafa", "oso", "tigre", "elefante", "canguro"], intentos: 7 };
    }
}

// Función para dar una pista basada en la longitud del nombre del animal
function darPista(animalOculto, intento) {
    if (intento.length < animalOculto.length) {
        alert("El animal oculto tiene un nombre más largo.");
    } else if (intento.length > animalOculto.length) {
        alert("El animal oculto tiene un nombre más corto.");
    } else {
        alert("El nombre tiene la misma cantidad de letras, pero es diferente.");
    }
}

// Función para iniciar el juego
function iniciarJuego() {
    const configuracion = seleccionarDificultad();
    const animalOculto = generarAnimalOculto(configuracion.lista);
    let intentosRestantes = configuracion.intentos;

    alert(`¡Comienza el juego! Tienes ${intentosRestantes} intentos para adivinar el animal.`);

    while (intentosRestantes > 0) {
        const intento = prompt("Adivina el animal:").toLowerCase();

        if (intento === null) {
            alert("Juego cancelado. ¡Gracias por intentarlo!");
            return;
        }

        if (intento === animalOculto) {
            alert(`¡Correcto! Adivinaste el animal: ${animalOculto}`);
            if (confirm("¿Quieres jugar de nuevo?")) {
                iniciarJuego();
            } else {
                alert("¡Gracias por jugar!");
            }
            return;
        } else {
            intentosRestantes--;
            if (intentosRestantes > 0) {
                darPista(animalOculto, intento);
                alert(`Incorrecto. Te quedan ${intentosRestantes} intentos.`);
            } else {
                alert(`¡Te quedaste sin intentos! El animal era: ${animalOculto}`);
                if (confirm("¿Quieres jugar de nuevo?")) {
                    iniciarJuego();
                } else {
                    alert("¡Gracias por jugar!");
                }
            }
        }
    }
}

// Verificar si el jugador quiere comenzar
if (confirm("¿Quieres jugar a 'Adivina el animal'?")) {
    iniciarJuego();
} else {
    alert("¡Hasta luego!");
}
