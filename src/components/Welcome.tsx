export function Welcome() {
  return (
    <div className="welcome-container">
      <h1>¡Bienvenido a Weather App!</h1>
      <p>Esta es tu aplicación de clima</p>
      <button onClick={() => alert('¡Hola!')}>Haz clic aquí</button>
    </div>
  );
}
