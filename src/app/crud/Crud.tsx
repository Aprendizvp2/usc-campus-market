/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { supabase } from "./createClient";
import { Button, MenuItem, TextField } from "@mui/material";

interface Product {
  id: string;
  name: string;
  price: string;
  typeCategory: string;
  img: string;
}

function Crud() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [form, setForm] = useState<Product>({
    id: "",
    name: "",
    price: "",
    typeCategory: "",
    img: "",
  });
  const [formToUpdate, setFormToUpdate] = useState<Product>({
    id: "",
    name: "",
    price: "",
    typeCategory: "",
    img: "",
  });

  useEffect(() => {
    fetchProducts();
  }, [searchText, selectedCategory]);

  async function fetchProducts() {
    let { data } = await supabase.from("products").select("*");
    data = data || [];

    if (searchText) {
      const searchLowerCase = searchText.toLowerCase();
      data = data.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLowerCase) ||
          product.price.toLowerCase().includes(searchLowerCase)
      );
    }

    if (selectedCategory !== "Todas") {
      data = data.filter(
        (product) => product.typeCategory === selectedCategory
      );
    }

    setProducts(data);
  }

  function handleChangeSearchText(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleChangeToUpdate(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormToUpdate((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function createProduct() {
    await supabase.from("products").insert({
      name: form.name,
      price: form.price,
      typeCategory: form.typeCategory,
      img: form.img,
    });

    fetchProducts();
  }

  async function deleteProduct(productId: string) {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", productId);

    fetchProducts();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }
  }

  function displayProduct(productId: string) {
    products.map((product) => {
      if (product.id === productId) {
        setFormToUpdate({
          id: product.id,
          name: product.name,
          price: product.price,
          typeCategory: product.typeCategory,
          img: product.img,
        });
        setShowEditForm(true);
      }
    });
  }

  async function updateProduct(productId: string) {
    const { data, error } = await supabase
      .from("products")
      .update({
        id: formToUpdate.id,
        name: formToUpdate.name,
        price: formToUpdate.price,
        typeCategory: formToUpdate.typeCategory,
        img: formToUpdate.img,
      })
      .eq("id", productId);

    fetchProducts();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
    }

    setFormToUpdate({
      id: "",
      name: "",
      price: "",
      typeCategory: "",
      img: "",
    });

    setShowEditForm(false);
  }

  function handleChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    setSelectedCategory(e.target.value);
  }

  return (
    <div className="px-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <TextField
          name="search"
          className="w-[40%]"
          placeholder="Buscar por nombre o precio"
          value={searchText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeSearchText(e)
          }
        />
        <TextField
          select
          name="category"
          className="w-[40%]"
          label="Categoría"
          value={selectedCategory}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeCategory(e)
          }
        >
          <MenuItem value="Todas">Todas</MenuItem>
          <MenuItem value="Equipamiento médico">Equipamiento médico</MenuItem>
          <MenuItem value="Vestimenta">Vestimenta</MenuItem>
          <MenuItem value="Alimentos">Alimentos</MenuItem>
        </TextField>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-2">
        {products.length === 0 ? (
          <div>No se encontraron productos.</div>
        ) : (
          products.map((e) => (
            <div key={e.id} className="flex flex-col h-full">
              <div className="flex flex-col items-start bg-[#0074D9] p-4 w-full h-full rounded-lg">
                <div className="flex flex-col h-full w-full">
                  <img
                    className="w-full h-full rounded-lg mb-2 object-cover"
                    src={e.img}
                    alt="ss"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="text-lg text-white font-bold">{e.name}</h2>
                      <p className="text-white">{e.typeCategory}</p>
                    </div>
                    <p className="text-white font-medium">${e.price}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 w-full">
                  <button
                    className="bg-yellow-500 rounded-lg border-yellow-500 hover:border-yellow-500 border-2 px-2 py-2 text-xl text-white normal-case"
                    onClick={() => displayProduct(e.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 rounded-lg border-red-500 hover:border-red-500 border-2 px-2 py-2 text-xl text-white normal-case"
                    onClick={() => deleteProduct(e.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="pt-4">
        <form onSubmit={createProduct}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <TextField
              name="name"
              placeholder="Nombre del producto"
              value={form.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <TextField
              name="price"
              placeholder="Precio"
              value={form.price}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <TextField
              name="typeCategory"
              placeholder="Tipo de categoría"
              value={form.typeCategory}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <TextField
              name="img"
              placeholder="Url de imagen"
              value={form.img}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
          </div>
          <button
            className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] border-2 border-[#0074D9] px-4 py-2 mt-2 transition-colors duration-300 ease-in-out rounded-lg text-xl text-white normal-case"
            type="submit"
          >
            Crear producto
          </button>
        </form>
        {showEditForm && (
          <div className="pt-4">
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                updateProduct(formToUpdate.id);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                <TextField
                  name="name"
                  placeholder="Nombre del producto"
                  value={formToUpdate.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeToUpdate(e)
                  }
                />
                <TextField
                  name="price"
                  placeholder="Precio"
                  value={formToUpdate.price}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeToUpdate(e)
                  }
                />
                <TextField
                  name="typeCategory"
                  placeholder="Tipo de categoría"
                  value={formToUpdate.typeCategory}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeToUpdate(e)
                  }
                />
                <TextField
                  name="img"
                  placeholder="Url de imagen"
                  value={formToUpdate.img}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeToUpdate(e)
                  }
                />
              </div>
              <button
                className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] border-2 border-[#0074D9] px-4 py-2 mt-2 transition-colors duration-300 ease-in-out rounded-lg text-xl text-white normal-case"
                type="submit"
              >
                Guardar cambios
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Crud;
