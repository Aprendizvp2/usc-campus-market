import { useState } from "react";
import { supabase } from "./createClient";
import { TextField } from "@mui/material";

interface IProduct {
  name: string;
  price: string;
  typeCategory: string;
  img: string;
}

const CreateProduct = () => {
  const [form, setForm] = useState<IProduct>({
    name: "",
    price: "",
    typeCategory: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const createProduct = async () => {
    await supabase.from("products").insert({
      name: form.name,
      price: form.price,
      typeCategory: form.typeCategory,
      img: form.img,
    });
  };

  return (
    <form onSubmit={createProduct}>
      <TextField
        name="name"
        placeholder="Nombre del producto"
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        name="price"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
      />
      <TextField
        name="typeCategory"
        placeholder="Tipo de categoría"
        value={form.typeCategory}
        onChange={handleChange}
      />
      <TextField
        name="img"
        placeholder="Url de imagen"
        value={form.img}
        onChange={handleChange}
      />
      <button type="submit">Crear producto</button>
    </form>
  );
};

export default CreateProduct;