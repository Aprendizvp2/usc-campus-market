import { Hidden } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SmallHeader from "../../components/smallheader/SmallHeader";
import "../../styles/styles.css";

function Home() {
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
            Bienvenido a USC Campus Market
          </h1>
        </div>
      </div>
      <div className="px-8 md:px-10 flex justify-center items-center flex-col">
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
      <div className="flex justify-center items-start flex-col px-8 md:px-10 w-full">
        <h1 className="pt-20 pb-8 text-4xl font-bold">
          Encuentra diferentes productos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          <img
           className="rounded-3xl w-full h-[240px]"
            src="https://www.paulinacocina.net/wp-content/uploads/2022/12/recetario-de-sandwiches-1200x800.jpg"
            alt="img"
          />
          <img
           className="rounded-3xl w-full h-[240px]"
            src="https://i.pinimg.com/originals/d1/a2/bd/d1a2bd5aeb8f4f4e0c8936477ced2706.jpg"
            alt="img"
          />
          <img
           className="rounded-3xl w-full h-[240px]"
            src="https://mejorconsalud.as.com/wp-content/uploads/2021/05/botiquin-primeros-auxilios.jpg"
            alt="img"
          />
          <img
           className="rounded-3xl w-full h-[240px]"
            src="https://www.semana.com/resizer/1VsidUm1nUDz2j_RYawa7nHycao=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/EQANV7QSLZFF3FRY7EOTXDBAPM.jpg"
            alt="img"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
