import { CursoDeArte } from "./curso";

export class EscuelaDeArte {
  private cursos: CursoDeArte[] = [];

  public agregarCurso(curso: CursoDeArte) {
    const existe = this.cursos.some((c) => c.nombreCurso === curso.nombreCurso);
    if (existe) {
      console.log(`⚠️ El curso ${curso.nombreCurso} ya está registrado.`);
      return;
    }
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
      console.log(`No se encontró el curso "${nombreDeCurso}".`);
    }
  }

  public setCursos(pCurso: []) {
    this.cursos = pCurso;
  }

  public getCursos() {
    return this.cursos;
  }
}
