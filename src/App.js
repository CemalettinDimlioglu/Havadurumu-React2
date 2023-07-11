import "./index.css";

import Arkaplan from "./Bilesenler/Arkaplan";
import Arama from "./Bilesenler/Arama";
import Sonuc from "./Bilesenler/Sonuc";

function App() {
  return (
    <section className="uygulama">
      <Arkaplan />
      <div id="baslik">Hava Durumu</div>
      <Arama/>
      <Sonuc/>
    </section>
  );
}

export default App;
