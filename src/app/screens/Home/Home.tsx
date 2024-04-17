import { Hidden } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SmallHeader from "../../components/smallheader/SmallHeader";
import "../../styles/styles.css";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <div className="bg-main">
        <div className="flex justify-center items-center px-8 md:px-20">
          <h1 className="pt-80 text-4xl sm:text-5xl md:text-8xl text-white text-center w-5/6 font-bold">
            Bienvenido a Usc Campus Market
          </h1>
        </div>
      </div>
      <div className="px-8 md:px-20 flex justify-center items-center flex-col">
        <h1 className="pt-20 pb-8 text-4xl font-bold text-center">
          Tu Fuente de Productos Esenciales
        </h1>
        <p className="text-xl text-justify">
          Desde deliciosos refrigerios y tentadores postres hasta herramientas
          esenciales para tus clases, todo está al alcance de tu mano en el
          Mercado Universitario. ¿Buscas algo rápido para comer entre clases?
          Tenemos una selección de opciones sabrosas y convenientes. ¿Necesitas
          suministros para tus clases de laboratorio o materiales de estudio? No
          te preocupes, también los tenemos aquí.
        </p>
      </div>
      <div className="flex justify-center items-start flex-col px-8 md:px-20 w-full">
        <h1 className="pt-20 pb-8 text-4xl font-bold">
          Encuentra diferentes productos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          <div className="bg-[#0074D9] h-40 rounded-md">h</div>
          <div className="bg-[#0074D9] h-40 rounded-md">h</div>
          <div className="bg-[#0074D9] h-40 rounded-md">h</div>
          <div className="bg-[#0074D9] h-40 rounded-md">h</div>
          <div className="bg-[#0074D9] h-40 rounded-md">h</div>
          <div className="bg-[#0074D9] h-40 rounded-md">h</div>
          <div className="bg-[#0074D9] h-40 rounded-md">h</div>
          <div className="bg-[#0074D9] h-40 rounded-md">h</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
