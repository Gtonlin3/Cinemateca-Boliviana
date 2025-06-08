export const matrizTransicion: Record<string, Record<string, number>> = {
  Bebidas: { Bebidas: 0.2, Dulces: 0.2, ComidaRapida: 0.3, Snacks: 0.3 },
  Dulces: { Bebidas: 0.4, Dulces: 0.1, ComidaRapida: 0.2, Snacks: 0.3 },
  ComidaRapida: { Bebidas: 0.3, Dulces: 0.3, ComidaRapida: 0.2, Snacks: 0.2 },
  Snacks: { Bebidas: 0.4, Dulces: 0.2, ComidaRapida: 0.3, Snacks: 0.1 }
};

export const obtenerVectorInicial = (carrito: any[]): Record<string, number> => {
  const categoriasValidas = ["Bebidas", "Dulces", "ComidaRapida", "Snacks"];
  if (carrito.length === 0) return {};

  const conteoSecciones: Record<string, number> = {};
  categoriasValidas.forEach(cat => (conteoSecciones[cat] = 0));

  carrito.forEach(item => {
    const rawSeccion = item.seccion || item.Seccion || "";
    let seccionNormalizada = rawSeccion.trim().replace(/\s+/g, '');
    if (seccionNormalizada === "ComidaRápida") seccionNormalizada = "ComidaRapida";

    if (seccionNormalizada !== "CombosEspeciales" && categoriasValidas.includes(seccionNormalizada)) {
      conteoSecciones[seccionNormalizada] += item.cantidad ?? 1;
    }
  });

  const totalProductosValidos = categoriasValidas.reduce((sum, cat) => sum + conteoSecciones[cat], 0);
  if (totalProductosValidos === 0) return {};

  const vectorInicial: Record<string, number> = {};
  categoriasValidas.forEach(cat => (vectorInicial[cat] = conteoSecciones[cat] / totalProductosValidos));

  return vectorInicial;
};

export const calcularVectorFinal = (vectorInicial: Record<string, number>): Record<string, number> => {
  const vectorFinal: Record<string, number> = {};
  Object.keys(matrizTransicion).forEach(target => {
    vectorFinal[target] = Object.keys(vectorInicial).reduce(
      (totalProb, source) => totalProb + vectorInicial[source] * matrizTransicion[source][target], 
      0
    );
  });
  return vectorFinal;
};

export const obtenerSeccionRecomendada = (vectorFinal: Record<string, number>): string => {
  const maxProb = Math.max(...Object.values(vectorFinal));
  const posiblesGanadores = Object.keys(vectorFinal).filter(seccion => vectorFinal[seccion] === maxProb);
  return posiblesGanadores[Math.floor(Math.random() * posiblesGanadores.length)];
};

export const obtenerProductosRecomendados = async (seccion: string): Promise<any[]> => {
  try {
    const url = `https://68423e50e1347494c31c37f5.mockapi.io/productosSnack`; // 🔥 URL corregida
    const res = await fetch(url);
    const productos = await res.json();

    // 🔥 Depuración: Verificar la respuesta
    console.log("Datos recibidos de MockAPI:", productos);

    // 🔥 Asegurar que productos es un array válido
    if (!Array.isArray(productos)) {
      console.error("Error: La API no devolvió un array válido.");
      return [];
    }

    // 🔥 Filtrar productos de la sección recomendada
    const productosFiltrados = productos.filter((prod: any) => prod.Seccion === seccion);

    if (productosFiltrados.length === 0) {
      console.warn('No hay productos en la sección recomendada.');
      return [];
    }

    // 🔥 Seleccionar el producto con más ventas totales
    const productoMasVendido = productosFiltrados.sort((a, b) => b.VentasTotales - a.VentasTotales)[0];

    // 🔥 Seleccionar el producto con más ventas recientes, evitando repetir el primero
    const productosRestantes = productosFiltrados.filter((prod: any) => prod.id !== productoMasVendido.id);
    const productoMasReciente = productosRestantes.length > 0 
      ? productosRestantes.sort((a, b) => b.VentasRecientes - a.VentasRecientes)[0] 
      : null;

    return [productoMasVendido, productoMasReciente].filter(p => p !== null);
  } catch (err) {
    console.error('Error obteniendo productos recomendados:', err);
    return [];
  }
};


