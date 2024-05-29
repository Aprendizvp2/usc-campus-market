import { useState } from "react";
import { supabase } from "../../createClient";
import { TextField } from "@mui/material";

interface IProduct {
  id: string;
  name: string;
  price: string;
  typeCategory: string;
  img: string;
}

const EditProduct = ({ productId }: { productId: any }) => {
  const [formToUpdate, setFormToUpdate] = useState<IProduct>({
    id: "",
    name: "",
    price: "",
    typeCategory: "",
    img: "",
  });

  const handleChangeToUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormToUpdate((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const updateProduct = async () => {
    await supabase
      .from("products")
      .update({
        id: formToUpdate.id,
        name: formToUpdate.name,
        price: formToUpdate.price,
        typeCategory: formToUpdate.typeCategory,
        img: formToUpdate.img,
      })
      .eq("id", productId);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateProduct();
      }}
    >
      <TextField
        name="name"
        placeholder="Nombre del producto"
        value={formToUpdate.name}
        onChange={handleChangeToUpdate}
      />
      <TextField
        name="price"
        placeholder="Precio"
        value={formToUpdate.price}
        onChange={handleChangeToUpdate}
      />
      <TextField
        name="typeCategory"
        placeholder="Tipo de categoría"
        value={formToUpdate.typeCategory}
        onChange={handleChangeToUpdate}
      />
      <TextField
        name="img"
        placeholder="Url de imagen"
        value={formToUpdate.img}
        onChange={handleChangeToUpdate}
      />
      <button type="submit">Guardar cambios</button>
    </form>
  );
};

export default EditProduct;