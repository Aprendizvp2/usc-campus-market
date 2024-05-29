/* eslint-disable react-hooks/exhaustive-deps */
import { Hidden, TextField, MenuItem } from "@mui/material";
import SmallHeader from "../../components/smallheader/SmallHeader";
import Footer from "../../components/footer/Footer";
import { ChangeEvent, useEffect, useState } from "react";
import { supabase } from "../../crud/createClient";
import HeaderAdmin from "../../components/headeradmin/HeaderAdmin";

interface Product {
  id: string;
  name: string;
  price: string;
  typeCategory: string;
  img: string;
  created_at?: string;
}

function ProductsAdmin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  useEffect(() => {
    fetchProducts();
  }, [searchText, selectedCategory]);

  async function fetchProducts() {
    let { data } = await supabase.from("product").select("*");
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

  async function deleteProduct(productId: string) {
    const { data, error } = await supabase
      .from("product")
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

  function handleChangeSearchText(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  function handleChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    setSelectedCategory(e.target.value);
  }

  return (
    <div>
      <Hidden smDown>
        <HeaderAdmin />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="pt-32 px-8 sm:px-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <TextField
            name="search"
            className="w-full"
            placeholder="Buscar por nombre o precio"
            value={searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeSearchText(e)
            }
          />
          <TextField
            select
            name="category"
            className="w-full"
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
        <div className="relative overflow-x-auto pt-4">
          {products.length === 0 ? (
            <div>No se encontraron productos.</div>
          ) : (
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs text-gray-700 border-2 border-[#0074D9] uppercase bg-[#0074D9] dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-base">
                    Imagen
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Nombre del producto
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Precio
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Tipo de categoría
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Fecha de creación
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((e) => (
                  <tr
                    key={e.id}
                    className="bg-white border-2 border-[#0074D9] bg-gray-200"
                  >
                    <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                      <img
                        className="w-28 h-28 object-cover rounded-lg mb-2 object-cover"
                        src={e.img}
                        alt={e.name}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <h2 className="text-base text-black">{e.name}</h2>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-black text-base font-medium">
                        ${e.price}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-black text-base">{e.typeCategory}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-black text-base font-medium">
                        {e.created_at}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-red-500 rounded-lg border-red-500 hover:border-red-500 border-2 px-2 py-2 text-xl text-white normal-case"
                        onClick={() => deleteProduct(e.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsAdmin;
