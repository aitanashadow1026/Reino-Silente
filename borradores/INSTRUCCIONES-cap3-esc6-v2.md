# INSTRUCCIONES — Cap III · esc 6 «La casa del bosque» → **v2**
> 7 oct 2026 · Modelo: `deepseek/deepseek-v4-pro` (razonador) · tarea de subagente

## Entrada
- **v1:** `borradores/cap3-escena6-v1.html` (**52 párrafos**, meta «BORRADOR v1»).
- **Feedback de Shadow:** `borradores/feedback-cap3-esc6-shadow.md` (**35 párrafos modificados**).
- ⚠️ **Numeración de Shadow = item del editor** (item 1 = meta). Es decir, «Párrafo 2» = **primer** `<p>`; «Párrafo 53» = **último** `<p>`. Mapa: item N → `<p>` nº **N−1**.

## Salida
- **`borradores/cap3-escena6-v2.html`** — mismo formato/estructura que la v1; `<title>` → «Borrador v2 — Capítulo III · Escena 6» y `scene-meta` → «Capítulo III · Escena 6 · BORRADOR v2». **Se mantienen los 52 párrafos** (no se añade ni quita ninguno): solo cambia el texto de los párrafos tocados + pulido.
- **`borradores/cap3-escena6-v2-notas.md`** — changelog: por cada párrafo tocado, «qué pidió Shadow / qué hice y por qué».

## Reglas de trabajo (obligatorias)
1. **Aplicar la intención de Shadow** en los 35 párrafos y **pulir** (tildes, puntuación, sintaxis, POV, coherencia, pacing). Shadow es novato: él aporta el contenido; nosotros lo elevamos. **Mantener su voz**: frases cortas, sensorial, sin grandilocuencia. **Corregir sus erratas gramaticales** (p. ej. «tienen una sensación» → «tiene»; «como Lira está poniendo» → «como si Lira estuviera poniendo») sin cambiar el sentido.
2. **POV estricto de Lira.** Nada de omnisciencia.
3. **Género:** el grupo son **cuatro mujeres** (Lira, Yara, Edulin, Veyra). Todo plural que las nombre va en **femenino** («las cuatro», «las demás», «las tres», «las reconoce»). Shadow ya corrige esto en varios párrafos; revisar el resto (p. ej. P47 «los reconoce» → «las reconoce»).
4. **No redoblarse:** no usar dos veces el mismo recurso/efecto en párrafos contiguos. **Máx. ~1 olor relevante** en la escena.
5. **No adelantar lore no revelado.** En particular: la casa **NO se explica** como portal (Shadow: «de momento no se van a dar más pistas»); Alem / el Infinito / «mi señora» siguen como enigma.
6. Diálogo con **rayas** (—), pensamientos y voces de talismanes con **« »**, guiones largos en incisos. Español de España.

## Los 35 cambios — versión final pulida

**P2.** (1.er párrafo)
> El bosque se cierra sin avisar. Donde el sendero se deshace, Veyra se mete entre los árboles por un paso de cabras que baja a un barranco, y las demás la siguen en fila. El terreno no invita a seguir: la tierra cede, las raíces sobresalen amenazantes, y el aire, más frío aquí abajo, se pega a la piel con una humedad de cueva.

**P3.**
> Lira baja con cuidado, la mano de Yara a ratos en su codo. No es miedo; es la sensación de entrar en un sitio que parece oculto por alguna razón. Cada vez que cree que el bosque se va a cerrar del todo, Veyra gira, aparta una rama, y el barranco se abre un palmo más.

**P4.** (ojo: quitar «Ni aldaba, ni llave…»; nuevo cierre)
> Al fondo, encajonada contra la pared de piedra, aparece una casa. Parece una casucha vieja: el tejado hundido, las vigas negras, una puerta de madera sin cerradura a la vista. Vista desde lejos, ruinosa, sin ningún valor, pero ya están allí.

**P5.** (se quita «No llama.»; «palma sobre la madera de la puerta»; ¡siguen siendo **4 puntos**! «otro punto, luego en dos puntos más» = 1+1+2)
> Veyra se planta delante y coloca la palma sobre la madera de la puerta. No busca ninguna llave. Empieza a trazar, con la yema del dedo, una runa sobre la madera: un trazo, dos, y un tercero que se enciende apenas, un rescoldo de Ceniza. La repite en otro punto, luego en dos puntos más. Tres capas en cada una, superpuestas.

**P6.**
> Lira las lee sin apenas esfuerzo. Las ve, las entiende: un trazo que cierra, otro que guarda, otro que niega el paso, un cuarto que no cierra nada, sino que reconoce. Las descifra todas con haberlas mirado una sola vez. —Cierro. Guardo. No dejo entrar. Vuelve —murmura, y no se da cuenta de que lo ha dicho en voz alta hasta que ve a las tres mirándola.

**P7.** (corregido «la importancia del hecho»)
> —Has leído bien —dice Veyra, sin sorprenderse, y hay algo parecido al reconocimiento en su voz—. Eso no lo hace cualquiera. —Y no lo convierte en un discurso; lo deja caer y sigue con lo suyo, como quien anota un dato. Edulin y Yara la miran un instante, entendiendo la importancia del hecho, pero lo dejan pasar, como ha hecho Veyra.

**P9.** (ojo: se **añade** una frase al final; el resto igual)
> Dentro, la casa parece otra; nada que ver con el exterior. Por fuera cabía entera en un mal cobertizo; por dentro se estira en un pasillo y en habitaciones que no debían caber. Lira parpadea, desconcertada, y avanza porque Veyra avanza, pisando un suelo de tablas que no cruje. Mira atrás: la puerta está cerrada, pero no ha sonado ninguna cerradura.

**P10.**
> Al fondo, el espacio se abre en una pieza que es a la vez taller y cocina: un fogón en una esquina, y en las demás, mesas llenas de artilugios a medio hacer. No son armas. Lira los revisa y no parecen tener runas de Cielo ni de Llama. Son objetos que no ha visto nunca: cristales engarzados en filo de cobre, una esfera que gira suspendida en el aire, un péndulo que dibuja algo y lo desdibuja.

**P11.** (narración **antes** del diálogo; se mantiene el resto)
> Veyra las ve mirar la sala con la boca abierta, y dice: —Hay más cosas mágicas en este mundo si te preocupas por buscarlas —mientras cuelga el hatillo y enciende el fogón con una runa simple de Ceniza—. La mayoría se conforma con el Cielo, y algunos se interesan por la Llama. A mí siempre me han parecido poco.

**P12.** (guiño de olor: ya no están en el bosque)
> Lira mira alrededor y no pregunta. La casa huele a resina vieja, nada que ver con el bosque por el que han entrado. El fogón suelta un calor manso que le sube a la cara, y por primera vez en días nota que los hombros le dejan de pesar.

**P13.**
> Cenan lo que Veyra les pone delante, un guiso caliente que sorprende por su buen sabor, y luego la noche se acomoda. Hay habitaciones de sobra, más de las que debería tener la casucha, pero nadie duerme sola.

**P14.**
> Lira y Yara se acuestan juntas, como siempre, en un camastro que cruje a cada respiración. Yara se duerme pronto, con Lira acurrucada muy cerca. Lira se queda despierta contando las vigas del techo. En la habitación de al lado, apagada, oye a Edulin y a Veyra hablar en susurros, y de vez en cuando una risa baja, cómplice, de las que no necesitan palabras.

**P15.**
> No le interesa saber qué se dicen; le basta con oír que están bien, con saber que hay un lugar donde dos viejas amigas se ríen bajito en la oscuridad. Y eso, sin saber por qué, la arropa más que la manta.

**P16.**
> Antes de dormirse se lleva la mano al pecho, donde el talismán descansa. Le da miedo quedarse dormida. Le da miedo despertar y no acordarse de esto: de la casa, de la risa baja, del cuerpo de Yara. Se aprieta contra ella y respira hondo, y se lo dice como un conjuro: «Que me acuerde mañana. Que me acuerde.»

**P19.**
> Cuando Lira y Yara entran, Veyra deja lo que tiene entre manos y sonríe. Sobre la mesa, alineados como una hilera de piezas de ajedrez, hay cuatro cristales pequeños, engarzados en filo de cuero, y cada uno brilla con una luz propia y despareja.

**P20.** («cristales de estrella»; «Veyra se queda con el suyo»)
> —Son para vosotras —dice Veyra—. Los llamo comunicadores. Los he hecho con cristales de estrella: una Ceniza especial que se forma al golpear contra el suelo. Con la receta adecuada, cada uno transmite a los demás la misma energía que capta. Los usaremos para hablar estando lejos. —Les da uno a cada cual, y Veyra se queda con el suyo, prendido al cuello.

**P21.**
> —¿Eres una maga o algo así? Siempre he pensado que los magos eran cosa de cuentos de niños —dice Yara, sopesando el cristal.

**P22.**
> —Alquimista de engranajes —dice Veyra, y la frase le sale redonda, como si fuera algo de toda la vida—. Médica y alquimista de engranajes. Hago artilugios aprovechando la sinergia entre cristales, tierras y otras energías de este mundo.

**P23.**
> Luego se vuelve hacia Edulin y saca de debajo de la mesa dos bultos alargados, envueltos en trapo. Desenvuelve el primero y se lo tiende: un bastón de madera oscurecida, con una runa de Llama incrustada que late, viva, como una brasa.

**P24.** (ojo: se quita «La forjas tú, la imbuyo yo»; el arma aún **no** está imbuida)
> —Para ti —dice—. Un arma de Llama, aún sin imbuir. Se vinculará al portador para siempre. —Edulin lo toma, y se le va la otra mano al pecho, por encima de la ropa, en un gesto que Lira no acierta a leer. No dice nada durante un instante, y a Lira le parece que le tiembla un poco el pulso, y que no es por el peso.

**P25.**
> —Podrías haberla vendido por una fortuna —dice Edulin, con un hilo de voz.

**P27.**
> El segundo bastón se lo ofrece a Lira. Es más ligero, de madera clara, con una runa que no termina de estar quieta. —Y esto es para ti, Lira. A ti no te conozco de tanto, pero el Cielo te ha puesto en este camino, un camino donde seguro necesitarás defenderte.

**P28.** (corregido «tiene»; «aún»)
> Lira lo coge. Y en cuanto sus dedos lo tocan, el bastón se calienta, y el calor le sube por el brazo y se le enrosca en el pecho, y de pronto el arma y ella son una sola cosa: la runa se enciende, se apaga, y vuelve a encenderse al ritmo de su corazón. Nunca ha tenido nada parecido. Se queda sin respiración, mirando la runa latir, con una sensación nueva que no sabe descifrar aún, como un peso pero agradable.

**P36.**
> «Qué va.» Nota cómo el bastón quiere erguirse en su mano, como si se pusiera en jarras. «A ver: ¿cómo se llama la portadora? Ya está bien de hablar con fantasmas.»

**P39.** (corregido «como si Lira estuviera…»)
> Yara, a su lado, la mira de reojo —viendo la cara de sorpresa que pone Lira— y no pregunta. Sabe lo que es tener un arma que te habla; deja que Lira se conozca con la suya.

**P40.**
> Veyra, mientras, se ha arrodillado delante de Yara y le pide los cuchillos. —Los dos, por favor, Yara —dice—. Y tú, Edulin, ayúdame. Esto no lo podré hacer sola.

**P41.**
> Edulin asiente y se coloca a su lado. Veyra deja los dos cuchillos de Llama de Yara sobre la mesa, uno junto al otro, y los mira un rato, como quien escucha. —Este —dice al fin, señalando el que no para de hablar, el que acompaña a Yara con un comentario por cada cosa que mira—. Tiene el vínculo más suelto. Le vamos a dar algo que no tiene: rastreo, si te parece bien, Yara.

**P42.**
> Yara lo toma en la mano y lo mira un instante, como si le pidiera permiso. —Veril —dice—. Es Veril. —Y le pone el nombre al cuchillo antes de que nadie lo toque, como quien presenta a alguien ante la familia.

**P43.**
> —Necesito tu mano —dice Veyra a Edulin—. Una runa de Llama de seis capas se puede complicar.

**P45.**
> —Ya está —dice Veyra, secándose la frente—. Ahora rastrea. Dale un rastro y lo seguirá hasta el fin del mundo. —Y del otro cuchillo, que no ha tocado, añade—: Este, si no te importa, se quedará como está: Llama de cuatro capas, con la facultad de oler a las personas. No tengo una Llama que se le ajuste en este momento, pero igual servirá.

**P47.** (⚠️ **no** lo tocó Shadow, pero pulido de coherencia: género → «las reconoce»)
> Recogen y parten. Veyra cierra la casa con la palma y una runa que se apaga en la madera, y el barranco, al salir, les parece menos hostil que al llegar, como si el bosque, una vez que las reconoce, aflojara el paso.

**P48.**
> Caminan hacia el sur, las cuatro, con los comunicadores al cuello y los bastones al cinto. El tirón del Cielo, que a Lira le latía bajo las costillas, se le hace más fuerte a cada paso, como si ya no tirara de ella sola, sino de algo que la precede.

**P51.**
> Nadie habla. Yara se para a su lado; Edulin y Veyra se paran detrás. Las cuatro la miran, y el viento, allí arriba, silba entre las rocas como una voz lejana.

**P52.**
> Lira da un paso, y el talismán late contra su pecho. «Ahí es», dice Alem, tan flojo como siempre, pero con una certeza nueva. «Ahí empezará todo.»

**P53.** (último)
> Y, sin apartar la vista de la montaña, echan a andar.

## Notas de canon / hilos (para `*-notas.md`, NO tocar la escena)
- **P9 (lore, NO revelar):** la casa es un **portal** a otra zona (puede estar en una ciudad) abierto con energía de **Ceniza**. De momento solo se insinúan «cosas raras al mirar por la ventana»; no se explican.
- **P12:** guiño por el **olor** → ya no están en el bosque (mismo hilo que P9).
- **P20 (lore futuro):** más adelante **Lira sabrá transmitir imagen** por los comunicadores y **sorprenderá a Veyra**.
- **P24 (canon):** el bastón de Edulin **aún no está imbuido** (antes se decía «imbuida… la forjas tú, la imbuyo yo» → se retira esa frase).
- **P52:** **Alem sabe algo** que aún no cuenta (por eso «empezará»). Es una **puerta abierta** deliberada: Alem = el protector (nota 24), la llama «mi señora». Dejar como enigma, sin explicar.

## Cómo entregar
1. Escribe `borradores/cap3-escena6-v2.html` completo (52 párrafos).
2. Escribe `borradores/cap3-escena6-v2-notas.md` con el changelog (una línea por cambio) + la sección de notas de canon.
3. Respuesta final: lista de cambios aplicados + dudas de canon que detectes.
