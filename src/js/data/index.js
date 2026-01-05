// REGISTRO CENTRALIZADO DE MÓDULOS
// Importa todos los módulos de datos y los exporta en un solo objeto

import { modulo1Data } from './modulo-1.js';
import { modulo2Data } from './modulo-2.js';
import { modulo3Data } from './modulo-3.js';
import { modulo4Data } from './modulo-4.js';
import { modulo5Data } from './modulo-5.js';
import { modulo6Data } from './modulo-6.js';
import { modulo7Data } from './modulo-7.js';
import { modulo8Data } from './modulo-8.js';
import { modulo9Data } from './modulo-9.js';
import { modulo10Data } from './modulo-10.js';

/**
 * Objeto que contiene todos los módulos del curso
 * La clave es el ID del módulo (1, 2, 3...)
 */
export const modulos = {
  1: modulo1Data,
  2: modulo2Data,
  3: modulo3Data,
  4: modulo4Data,
  5: modulo5Data,
  6: modulo6Data,
  7: modulo7Data,
  8: modulo8Data,
  9: modulo9Data,
  10: modulo10Data,
};

/**
 * Obtiene los datos de un módulo por su ID
 * @param {number} moduloId - ID del módulo
 * @returns {Object|null} Datos del módulo o null si no existe
 */
export function getModulo(moduloId) {
  return modulos[moduloId] || null;
}

/**
 * Obtiene los datos de una clase específica
 * @param {number} moduloId - ID del módulo
 * @param {number} claseId - ID de la clase
 * @returns {Object|null} Datos de la clase o null si no existe
 */
export function getClase(moduloId, claseId) {
  const modulo = getModulo(moduloId);
  if (!modulo) return null;
  return modulo.clases.find(c => c.id === claseId) || null;
}

/**
 * Obtiene todas las clases de un módulo
 * @param {number} moduloId - ID del módulo  
 * @returns {Array} Array de clases o array vacío
 */
export function getClasesDelModulo(moduloId) {
  const modulo = getModulo(moduloId);
  return modulo ? modulo.clases : [];
}
