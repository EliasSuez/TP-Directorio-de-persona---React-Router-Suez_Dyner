import React, { useState } from 'react';

function FormularioContacto() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: null }); 
    setSuccess(false); 
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    let nuevosErrores = {};

    if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!form.apellido.trim()) nuevosErrores.apellido = 'El apellido es obligatorio';
    if (!form.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!validarEmail(form.email)) {
      nuevosErrores.email = 'El formato del email es inválido';
    }
    if (!form.edad.trim()) {
      nuevosErrores.edad = 'La edad es obligatoria';
    } else if (isNaN(form.edad) || Number(form.edad) <= 0) {
      nuevosErrores.edad = 'La edad debe ser un número positivo';
    }

    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setSuccess(true);
      setForm({ nombre: '', apellido: '', email: '', edad: '' });
    }
  };

  return (
    <div style={{
      maxWidth: 800,
      margin: '2rem auto',
      padding: '1.5rem',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#222'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1a73e8' }}>Contacto</h2>

      <form onSubmit={manejarEnvio} noValidate>
        {success && (
          <p style={{ color: 'green', marginBottom: '1rem', fontWeight: 'bold' }}>
            ¡Formulario enviado con éxito!
          </p>
        )}

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="nombre" style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={manejarCambio}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: errors.nombre ? '1.5px solid red' : '1px solid #ccc'
            }}
          />
          {errors.nombre && <p style={{ color: 'red', marginTop: '0.3rem' }}>{errors.nombre}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="apellido" style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={form.apellido}
            onChange={manejarCambio}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: errors.apellido ? '1.5px solid red' : '1px solid #ccc'
            }}
          />
          {errors.apellido && <p style={{ color: 'red', marginTop: '0.3rem' }}>{errors.apellido}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={manejarCambio}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: errors.email ? '1.5px solid red' : '1px solid #ccc'
            }}
          />
          {errors.email && <p style={{ color: 'red', marginTop: '0.3rem' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="edad" style={{ display: 'block', fontWeight: '600', marginBottom: '0.3rem' }}>
            Edad
          </label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={form.edad}
            onChange={manejarCambio}
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: errors.edad ? '1.5px solid red' : '1px solid #ccc'
            }}
            min="1"
          />
          {errors.edad && <p style={{ color: 'red', marginTop: '0.3rem' }}>{errors.edad}</p>}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.7rem',
            backgroundColor: '#1a73e8',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormularioContacto;
