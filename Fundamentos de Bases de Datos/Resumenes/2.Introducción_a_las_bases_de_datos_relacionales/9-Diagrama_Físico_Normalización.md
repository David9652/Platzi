# Sesión 9 - Diagrama Físico: normalización

* La normalización nos ayuda a dejar todo de una forma normal, esto obedece a las 12 reglas de Edgar Codd.

* Tener una base de datos normalizada es como alcanzar el nirvana, la plenitud".

* Cada una de estas reglas se les llama forma normal (FN).

## 1FN

* Atributos atómicos, es decir, que no haya campos repetidos.

* En la siguiente tabla, se puede observar que hay claramente un campo repetido, y es materia, que, aunque una sea: "materia_1" y la otra "materia_2", al final tienen una misma naturaleza y son materias.

| Alumno | Nivel_Curso | Nombre_Curso | Materia_1 | Materia_2 |
| :------------:|:-----------:|:-----:|
| Juanito | Maestría | Data Engineering | MySQL | Python |
| Pepito  | Licenciatura | Programación | MySQL | Python |

* Cuando aplicamos la primera forma normal, agrupamos los valores de "materia_1" y "materia_2" en un nuevo campo, llamado "materia", y nos queda de la siguiente manera:

| Alumno_id | Alumno | Nivel_Curso | Nombre_Curso | Materia |
| :------------:|:-----------:||:-----------:|:-----------:|:-----------:|
| 1 | Juanito | Maestría | Data Engineering | MySQL |
| 1  | Juanito | Maestría | Data Engineering | Python |
| 2 | Pepito | Licenciatura | Programación | MySQL |
| 2 | Pepito | Licenciatura | Programación | Python |

## 2FN

* Para realizar la segunda forma normal, se debe cumplir con la **1FN** y menciona que cada campo debe depender de una clave única.

| Alumno_id | Alumno | Nivel_Curso | Nombre_Curso | Materia |
| :------------:|:-----------:||:-----------:|:-----------:|:-----------:|
| 1 | Juanito | Maestría | Data Engineering | MySQL |
| 1  | Juanito | Maestría | Data Engineering | Python |
| 2 | Pepito | Licenciatura | Programación | MySQL |
| 2 | Pepito | Licenciatura | Programación | Python |

* Como se ve en la anterior tabla, la columna del Alumno_id, se repite (No deberia ser asi porque no se podría difenciariar cada registro), es por eso que surge la necesidad (ya que hay una cardinalidad de N:N) de que "materias" sea una entidad por sí misma, donde coexistan las llaves primarias tanto de alumnos como de cada materia.

| Alumno_id | Alumno | Nivel_Curso | Nombre_Curso |
| :------------:|:-----------:||:-----------:|:-----------:|
| 1 | Juanito | Maestría | Data Engineering |
| 2 | Pepito | Licenciatura | Programación |

| Materia_id | Alumno_id | Materia |
| :------------:|:-----------:||:-----------:|
| 1 | 1 | MySQL |
| 2 | 1 | Python |
| 3 | 2 | MySQL |
| 4 | 2 | Python |

## 3FN

* Al igual que en la anterior forma normal, se debe cumplir con **1FN** y **2FN**, además, menciona que los campos que NO son claves, NO deben tener dependencias.

* En este caso, tanto Nivel_Curso, como Nombre_Curso, no generan un conflicto inicial, como si lo hacia materias, ya que eran dos por cada estudiante y además se repetían los campos. Acá es diferente, cada estudiante le corresponde un único nivel y nombre de curso, aún así, los cursos no son intrínsecos de los estudiantes (es decir no son propios por naturaleza, es algo externo). Por esta razón, cursos quedaría como una entidad aparte.

| Alumno_id | Alumno | Curso_id |
| :------------:|:-----------:||:-----------:|
| 1 | Juanito | 1 |
| 2 | Pepito | 2 |

| Curso_id | Nivel_Curso | Nombre_Curso |
| :------------:|:-----------:||:-----------:|
| 1 | Maestría | Data Engineering |
| 2 | Licenciatura | Programación |

| Materia_id | Alumno_id | Materia |
| :------------:|:-----------:||:-----------:|
| 1 | 1 | MySQL |
| 2 | 1 | Python |
| 3 | 2 | MySQL |
| 4 | 2 | Python |

## 4FN

* Exige que se cumpla **1FN**, **2FN** y **3FN**, además, indica que los campos multivaluados se deben identificar por una llave única, creándose una nueva tabla. Esto explica el por qué se crea una nueva tabla como forma de relación cuando tenemos una cardinalidad de N:N.

| Alumno_id | Alumno | Curso_id |
| :------------:|:-----------:||:-----------:|
| 1 | Juanito | 1 |
| 2 | Pepito | 2 |

| Curso_id | Nivel_Curso | Nombre_Curso |
| :------------:|:-----------:||:-----------:|
| 1 | Maestría | Data Engineering |
| 2 | Licenciatura | Programación |

| Materia_id | Materia |
| :------------:|:-----------:|
| 1 | MySQL |
| 2 | Python |

| Materia_por_Alumno_id | Materia_id | Alumno_id |
| :------------:|:-----------:||:-----------:|
| 1 | 1 | 1 |
| 2 | 2 | 1 |
| 3 | 1 | 2 |
| 4 | 2 | 2 |
