import test from 'node:test';
import assert from 'node:assert/strict';
import {agregarTarea} from '../src/tareas.mjs';
test('agrega un texto válido',()=>assert.deepEqual(agregarTarea([], 'sol').tareas,['sol']));
test('rechaza texto vacío',()=>assert.equal(agregarTarea([], '').ok,false));
test('rechaza tres espacios',()=>assert.equal(agregarTarea([], '   ').ok,false));
