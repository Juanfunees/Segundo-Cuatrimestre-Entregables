import { CursoDeArte } from "./Modelos/curso";
import { EscuelaDeArte } from "./Modelos/escuela";
import { ProfesorArte } from "./Modelos/profesorArte";
import { AlumnoArte } from "./Modelos/alumno";

const escuelaDeArte = new EscuelaDeArte();

const profesorPintura = new ProfesorArte("Juan", "Perez", 51, "Rupestre");
const profesorPaisajismo = new ProfesorArte("Ana", "Gomez", 41, "Paisajismo");
const profesorFotografia = new ProfesorArte(
  "Luis",
  "Martinez",
  39,
  "Fotografía"
);

const alumno1 = new AlumnoArte("Jorge", "Garcia", 21, 3);
const alumno2 = new AlumnoArte("Maria", "Lopez", 20, 1);
const alumno3 = new AlumnoArte("Leandro", "Fernandez", 20, 2);
const alumno4 = new AlumnoArte("Juan", "Sanchez", 24, 3);
const alumno5 = new AlumnoArte("Florencia", "Maldonado", 26, 2);

const cursoPintura = new CursoDeArte("Pintura", profesorPintura);
const cursoPaisajismo = new CursoDeArte("Paisajismo", profesorPaisajismo);
const cursoFotografia = new CursoDeArte("Fotografía", profesorFotografia);

cursoFotografia.agregarAlumno(alumno1);
cursoFotografia.agregarAlumno(alumno2);
cursoPaisajismo.agregarAlumno(alumno3);
cursoPaisajismo.agregarAlumno(alumno4);
cursoPintura.agregarAlumno(alumno5);

escuelaDeArte.agregarCurso(cursoFotografia);
escuelaDeArte.agregarCurso(cursoPintura);
escuelaDeArte.agregarCurso(cursoPaisajismo);

console.log(`
🖌️🎨🎭 BIENVENIDOS A LA GALERÍA DOCENTE 🎭🎨🖌️
------ PRESENTACIÓN DE PROFESORES ------
`);

profesorPintura.presentar();
profesorPaisajismo.presentar();
profesorFotografia.presentar();
console.log("\n");

console.log(`
🎨🎒 BIENVENIDOS AL MUSEO DE MENTES BRILLANTES 🎒🎨
------ PRESENTACIÓN DE ESTUDIANTES ------
`);

alumno1.presentar();
alumno2.presentar();
alumno3.presentar();
alumno4.presentar();
alumno5.presentar();
console.log("\n");

console.log(`
🎨🎭 BIENVENIDOS AL CATALOGO DE CURSOS 🎭🎨
----------- TODA LA INFO AQUÍ -----------
`);

escuelaDeArte.mostrarCursosDisponibles();

console.log(`
🎨🎭 BIENVENIDOS A LA GALERÍA DE ALUMNOS 🎭🎨
----------- CURSOS Y ALUMNOS -----------
`);

escuelaDeArte.listarAlumnosDeCurso("Fotografía");
escuelaDeArte.listarAlumnosDeCurso("Pintura");
escuelaDeArte.listarAlumnosDeCurso("Paisajismo");
