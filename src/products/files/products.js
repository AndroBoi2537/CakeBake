import cakes from "./cakeData.js";

function Cards() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 grid-flow-row sm:gap-10 gap-5 ">
      {cakes.map((cake) => {
        const { id, name, img } = cake;
        return (
          <div
            className="sm:w-full flex flex-col items-center shadow-xl"
            key={id}
          >
            <img className="w-full px-3 pt-3  " src={img} alt={name} />
            <h2 className=" p-3">{name}</h2>
          </div>
        );
      })}
    </div>
  );
}

const root = document.getElementById("root");

ReactDOM.render(<Cards />, root);
