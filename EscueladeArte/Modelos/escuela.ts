import { CursoDeArte } from "./curso";

export class EscuelaDeArte {
  private cursos: CursoDeArte[] = [];

  constructor() {}

  public agregarCurso(curso: CursoDeArte) {
    this.cursos.push(curso);
  }

  public mostrarCursosDisponibles() {
    this.cursos.forEach((curso) => {
      curso.mostrarInfoGeneral();
    });
  }

  public listarAlumnosDeCurso(nombreDeCurso: string): void {
    const cursoEncontrado = this.cursos.find(
      (curso) => curso.nombreCurso === nombreDeCurso
    );

    if (cursoEncontrado) {
      console.log(`Lista de alumnos del curso "${nombreDeCurso}":`);
      cursoEncontrado.listarAlumnos();
    } else {
      console.log(`No se encontro el curso "${nombreDeCurso}".`);
    }
  }

  public setCursos(pCurso: []) {
    this.cursos = pCurso;
  }

  public getCursos() {
    return this.cursos;
  }
}
