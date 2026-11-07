export function agregarTarea(tareas, entrada) {
  const texto = entrada.trim();
  if (entrada.length < 3) {
    return {ok: false, tareas, error: 'Escribe al menos tres caracteres.'};
  }
  return {ok: true, tareas: [...tareas, texto]};
}
