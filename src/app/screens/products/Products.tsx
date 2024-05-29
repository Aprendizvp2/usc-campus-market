// import { Hidden } from "@mui/material";
// import Header from "../../components/header/Header";
// import SmallHeader from "../../components/smallheader/SmallHeader";
// import Footer from "../../components/footer/Footer";
// import Crud from "../../crud/Crud";
import { CreateProductFragment } from "./fragments/CreateProductFragment";
import { productType } from "@/types/product";
import { useState } from "react";
import { supabase } from "../../../createClient";

export const Products = () => {
  const [showEditForm, setShowEditForm] = useState(true);

  const createProduct = async ({
    name,
    price,
    typeCategory,
    img,
  }: productType) => {
    await supabase.from("products").insert({
      name,
      price,
      typeCategory,
      img,
    });
  };

  return (
    <div>
      <CreateProductFragment
        isOpen={showEditForm}
        onClose={() => setShowEditForm(false)}
        onSubmit={createProduct}
      />
      {/* <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="pt-28">
       <Crud /> 
      </div>
      <Footer /> */}
    </div>
  );
};
