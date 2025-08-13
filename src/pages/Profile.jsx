import React, { useEffect, useState } from 'react';
import './Profile.css';               // Estilos específicos para el perfil
import { supabase } from '../supabaseClient';  // Importa conexión a Supabase

const Profile = () => {
    // Estado para guardar los posts del usuario
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Función para traer posts del usuario desde Supabase
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('Post')                 // Tabla 'Post' en la base de datos
                .select('*')                  // Selecciona todas las columnas
                .eq('user_name', 'Dog_wolff') // Filtra solo los posts del usuario 'Dog_wolff'
                .order('created_at', { ascending: false });  // Ordena por fecha, más recientes primero

            if (error) {
                // Si hay error, mostrarlo en consola
                console.error('Error al obtener posts:', error);
            } else {
                // Si todo bien, guardar los posts en el estado
                setPosts(data);
            }
        };

        // Llamar a la función para traer posts cuando el componente se monte
        fetchPosts();
    }, []); // [] para que solo se ejecute una vez al montar el componente

    return (
        <div className="profilePage">
            {/* Encabezado del perfil */}
            <div className="profileHeader">
                {/* Imagen del perfil */}
                <img
                    src="https://i.pinimg.com/736x/74/a7/bf/74a7bf3e184a689c975cc5a4b43bcb79.jpg"
                    className="profileImgLarge"
                />
                <div className="profileInfo">
                    {/* Nombre de usuario */}
                    <h2 className="username">Dog_wolff</h2>
                    {/* Estadísticas del perfil */}
                    <div className="stats">
                        <span><b>{posts.length}</b> posts</span>
                        <span><b>828</b> followers</span>
                        <span><b>163</b> following</span>
                    </div>
                    {/* Biografía */}
                    <p className="bio">developer web jr | I love coffee ☕</p>
                </div>
            </div>

            {/* Sección de publicaciones en forma de grid */}
            <div className="profilePosts">
                {/* Mapeamos los posts para mostrar la imagen de cada uno */}
                {posts.map((post) => (
                    <div key={post.id} className="postItem">
                        <img src={post.image_url} alt="post" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
