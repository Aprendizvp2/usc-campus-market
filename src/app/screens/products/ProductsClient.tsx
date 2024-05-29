/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, ChangeEvent } from "react";
import { MenuItem, TextField, Hidden } from "@mui/material";
import { supabase } from "../../crud/createClient";
import Footer from "../../components/footer/Footer";
import HeaderClient from "../../components/headerclient/HeaderClient";
import SmallHeaderClient from "../../components/smallheaderclient/SmallHeaderClient";

interface Product {
  id: string;
  name: string;
  price: string;
  typeCategory: string;
  img: string;
  created_at?: string;
}

function ProductsClient() {
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

  function handleChangeSearchText(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  function handleChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    setSelectedCategory(e.target.value);
  }

  return (
    <div>
      <Hidden smDown>
        <HeaderClient />
      </Hidden>
      <Hidden smUp>
        <SmallHeaderClient />
      </Hidden>
      <div className="px-8 sm:px-10 pt-32">
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
              <div key={e.id} className="flex flex-col h-full pt-2">
                <div className="flex flex-col items-start bg-[#0074D9] p-4 w-full h-full rounded-lg">
                  <div className="flex flex-col h-full w-full">
                    <img
                      className="w-full h-full object-cover rounded-lg mb-2 object-cover"
                      src={e.img}
                      alt="ss"
                    />
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <h2 className="text-lg text-white font-bold">
                          {e.name}
                        </h2>
                        <p className="text-white">{e.typeCategory}</p>
                      </div>
                      <p className="text-white font-medium">${e.price}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 w-full">
                    <a
                      className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] border-2 border-white px-4 py-2 mt-2 transition-colors duration-300 ease-in-out rounded-lg text-xl text-white normal-case"
                      href="https://api.whatsapp.com/send?phone=3225324244"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-center flex-col items-center">
                        <p className="">Adquirir</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsClient;
