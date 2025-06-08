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