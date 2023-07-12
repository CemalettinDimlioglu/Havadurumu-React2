import yagmurlu from "../../Resimler/rainy.jpg";
import bulutlu from "../../Resimler/cloud.jpg";
import sisli from "../../Resimler/foggy.jpg";
import karli from "../../Resimler/snowy.jpg";
import gokkusagi from "../../Resimler/rainbow.jpg";
import firtinali from "../../Resimler/stormy.jpg";
import gunesli from "../../Resimler/sunny.jpg";

function ResimCek({ durum }) {
  switch (durum) {
    case "Rain":
      return <img className="arkapalan-resim" src={yagmurlu} alt="yağmurlu" />;
    case "Drizzle":
      return <img className="arkapalan-resim" src={yagmurlu} alt="yağmurlu" />;
    case "Clear":
      return <img className="arkapalan-resim" src={gunesli} alt="gunesli" />;
    case "Mist":
      return <img className="arkapalan-resim" src={sisli} alt="sisli" />;
    case "Snow":
      return <img className="arkapalan-resim" src={karli} alt="karli" />;
    
    case "Storm":
      return  <img className="arkapalan-resim" src={firtinali} alt="firtinali" />
       
      
    case "Clouds":
      return <img className="arkapalan-resim" src={bulutlu} alt="bulutlu" />;
    default:
      return (
        <img className="arkapalan-resim" src={gokkusagi} alt="gokkuşagi" />
      );
  }
}

export default ResimCek;
