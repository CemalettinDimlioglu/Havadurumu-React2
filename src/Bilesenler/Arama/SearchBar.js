import react,{useState} from "react";

function SearchBar({ setHavaDurumu }) {
  const api = {
    key: "552911de23046c514cc783c3aecc7e78",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [araParametre, setAraParametre] = useState("");
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`)
        .then((veri) => veri.json())
        .then((sonuc) => {
          setAraParametre("");
          setHavaDurumu(sonuc);
          
        });
    }
  };

  return (
    <div className="arama">
      <input
        className="arama-input"
        type="text"
        placeholder="Şehir"
        onChange={(e) => setAraParametre(e.target.value)}
        value={araParametre}
        onKeyPress={search}
      />
    </div>
  );
}
export default SearchBar;