<script lang="ts">
  /* variables para la api del clima */
  let ciudad = "cordoba";
  const llave = "llave oculta";

  /* esta sera una funcion asincrona */
  const capturarDatosTiempo = async () => {
    const respuesta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&limit=5&appid=${llave}`
    );
    /* ESTA FUNCION convierte lo recibido y los almacena en otra constante */
    const datoJson = await respuesta.json();
    console.log(datoJson);
  };

  capturarDatosTiempo();
</script>

<div class="container">
  <div class="row">
    <div class="col-12 col-md-6" />
    <h1>20 °C</h1>
    <h4>city: <span class="fw-bold">cordoba, AR</span></h4>
    <h4>clima: <span class="fw-bold">descripcion</span></h4>
  </div>
  <div>
    <div class="col-12 col md-6">
      <h4>temperatura maxima: <span class="fw-bold text-danger">21°C</span></h4>
      <h4>
        temperatura minima: <span class="fw-bold text-primary">18°C</span>
      </h4>
    </div>
  </div>
</div>
<h2>componente del clima</h2>
