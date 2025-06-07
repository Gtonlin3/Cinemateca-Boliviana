export const obtenerVectorInicial = (carrito: any[]): Record<string, number> => {
  // ✅ Definimos las 4 categorías válidas (sin incluir "Combos Especiales").
  const categoriasValidas = ["Bebidas", "Dulces", "ComidaRapida", "Snacks"];

  if (carrito.length === 0) return {};

  // ✅ Inicializamos el conteo para cada categoría válida.
  const conteoSecciones: Record<string, number> = {};
  categoriasValidas.forEach(cat => {
    conteoSecciones[cat] = 0;
  });

  // ✅ Recorremos cada ítem del carrito y excluimos los de "Combos Especiales".
  carrito.forEach(item => {
    const rawSeccion = item.seccion || item.Seccion || "";
    let seccionNormalizada = rawSeccion.trim().replace(/\s+/g, ''); // 🔥 Reemplazamos espacios internos

    if (seccionNormalizada === "ComidaRápida") seccionNormalizada = "ComidaRapida"; // 🔥 Ajuste específico

    if (seccionNormalizada !== "CombosEspeciales" && categoriasValidas.includes(seccionNormalizada)) {
      const cantidadComprada = item.cantidad !== undefined ? Number(item.cantidad) : 1;
      conteoSecciones[seccionNormalizada] += cantidadComprada;
    }
  });

  // ✅ Calculamos el total de productos comprados SIN incluir "Combos Especiales".
  const totalProductosValidos = categoriasValidas.reduce((sum, cat) => sum + conteoSecciones[cat], 0);
  if (totalProductosValidos === 0) return {};

  // ✅ Construimos el vector inicial normalizado.
  const vectorInicial: Record<string, number> = {};
  categoriasValidas.forEach(cat => {
    vectorInicial[cat] = conteoSecciones[cat] / totalProductosValidos;
  });

  return vectorInicial;
};