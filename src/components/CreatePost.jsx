import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function CreatePost({ onClose }) {
  // Guardar los datos del formulario
  const [userName, setUserName] = useState("");
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Función que se llama cuando haces clic en "Share"
  const handleCreatePost = async () => {
    if (!userName || !caption || !imageUrl) {
      alert("Please fill in all fields");
      return;
    }

    // Insertar el post en la base de datos
    const { error } = await supabase
      .from("Post")
      .insert([{ user_name: userName, caption: caption, image_url: imageUrl }]);

    if (error) {
      alert("Error creating post");
    } else {
      alert("Post created successfully");
      onClose(); // Cerrar el pop-up
    }
  };

};

export default CreatePost;
