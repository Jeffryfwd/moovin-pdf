import React, { useState } from 'react';
import Post from '../Services/Post';


function Home() {
    const [file, setFile] = useState(null);

    const cargarFile = (e) => {
        setFile(e.target.files[0]); // Guardamos el archivo en el estado
    }

    async function enviar(e) {
        e.preventDefault();
        try {
            if (file) {
                await Post(file);  // Enviamos el archivo al backend
                alert('Se envió el pdf al backend');
            } 
        } catch (error) {
            alert('Hubo un error al enviar el pdf al backend', error);
        }
    }

    return (
        <div className="container">
            <h3>¡Transforma tu PDF a Drive!</h3>
            <form onSubmit={enviar}>
                <label htmlFor="fileInput">Sube tu archivo PDF:</label>
                <input 
                    id="fileInput"
                    type="file"
                    onChange={cargarFile} 
                />
                <p>¡Sube tu archivo PDF y deja que nuestra plataforma lo transforme y lo lleve a un Drive como nunca antes! ¡Casi como magia, pero con más tecnología! 🔮📄🚀</p>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Home;
