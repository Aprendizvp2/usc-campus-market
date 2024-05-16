import { Hidden } from "@mui/material";
import Header from "../../components/header/Header";
import SmallHeader from "../../components/smallheader/SmallHeader";
import Footer from "../../components/footer/Footer";
import Crud from "../../crud/Crud";

function Products() {
  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="pt-28">
        <Crud />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
