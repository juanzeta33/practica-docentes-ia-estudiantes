import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {agregarTarea} from './tareas.mjs';
import './style.css';
function App(){
 const [texto,setTexto]=useState(''),[tareas,setTareas]=useState([]),[mensaje,setMensaje]=useState(null);
 function enviar(e){e.preventDefault();const r=agregarTarea(tareas,texto);setMensaje({ok:r.ok,texto:r.ok?'Tarea agregada.':r.error});if(r.ok){setTareas(r.tareas);setTexto('');}}
 return <main><header><span>PROF. JUAN ZAMORA</span><span className="badge">PRÁCTICA DEL ESTUDIANTE</span></header><h1>Mis tareas</h1><p>Regla: mínimo tres caracteres después de quitar<br/>los espacios de los extremos.</p><form onSubmit={enviar} noValidate><label>Nueva tarea<input name="tarea" value={texto} onChange={e=>setTexto(e.target.value)} placeholder="Preparar la clase" autoComplete="off"/></label><button type="submit">Agregar tarea</button></form>{mensaje&&<div className={'mensaje '+(mensaje.ok?'ok':'error')} role="status">{mensaje.texto}</div>}<div className="list-title">Lista <span>{tareas.length} tarea{tareas.length===1?'':'s'}</span></div>{tareas.length===0?<div className="empty">Todavía no hay tareas.</div>:<ul>{tareas.map((t,i)=><li key={i}><span className="dot"/>{t||<em>(texto vacío)</em>}</li>)}</ul>}<footer>Datos de ejemplo · estado en memoria · sin servidor</footer></main>;
}
createRoot(document.getElementById('root')).render(<App/>);
