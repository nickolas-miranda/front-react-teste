

let mechanicPos = { lat: -23.551, lng: -46.630 };

// Pequeno movimento aleatório a cada atualização
export default function getMechanicLocation() {
  const offset = 0.0003; // mov. máximo por atualização

  mechanicPos = {
    lat: mechanicPos.lat + (Math.random() * offset - offset / 2),
    lng: mechanicPos.lng + (Math.random() * offset - offset / 2),
  };

  return Promise.resolve(mechanicPos);
}
