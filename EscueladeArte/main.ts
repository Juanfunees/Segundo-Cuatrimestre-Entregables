import { CursoDeArte } from "./Modelos/curso";
import { EscuelaDeArte } from "./Modelos/escuela";
import { ProfesorArte } from "./Modelos/profesorArte";
import { AlumnoArte } from "./Modelos/alumno";
import { Identidad } from "./Modelos/identidad";

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

console.log(`\n🖌️🎨🎭 BIENVENIDOS A LA GALERÍA DE IDENTIDADES 🎭🎨🖌️`);
const comunidad: Identidad[] = [
  profesorPintura,
  profesorPaisajismo,
  profesorFotografia,
  alumno1,
  alumno2,
  alumno3,
  alumno4,
  alumno5,
];
comunidad.forEach((miembro) => miembro.presentar());

console.log(
  "\n🎨🎭 BIENVENIDOS AL CATÁLOGO DE CURSOS 🎭🎨\n----------- TODA LA INFO AQUÍ -----------"
);
escuelaDeArte.mostrarCursosDisponibles();

console.log("\n🎨🎭 GALERÍA DE ALUMNOS POR CURSO 🎭🎨");
escuelaDeArte.listarAlumnosDeCurso("Fotografía");
escuelaDeArte.listarAlumnosDeCurso("Pintura");
escuelaDeArte.listarAlumnosDeCurso("Paisajismo");
