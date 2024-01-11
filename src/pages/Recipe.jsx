import { Link, useParams } from "react-router-dom";
import { useDelecteDoc } from "../hooks/useGetAdocument";
import { useState } from "react";
function Recipe() {
  const { id } = useParams();
  const { getDocument } = useDelecteDoc();
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  getDocument("recipe", id)
    .then((data) => {
      setDocument(data);
    })
    .catch((error) => {
      setError(error);
    });

  return (
    <div className=" flex justify-center py-7 ">
      {document && (
        <div className=" flex gap-10 rounded-xl bg-slate-100">
          <div className="">
            <div className="carousel carousel-center h-[500px] max-w-[300px] space-x-4 rounded-box bg-neutral p-4">
              <div className="carousel-item">
                {document.images.map((image) => {
                  return (
                    <img
                      key={image}
                      src={image}
                      className="rounded-box object-cover"
                      width={300}
                      height={200}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="prose-sm flex  w-[500px] flex-col  p-3">
            <h1 className="text-center font-serif font-bold">
              {document.title}
            </h1>
            <h5 className="font-bold">Igridients:</h5>
            <p>{document.ingredients + " "}</p>
            <h5 className="font-bold">Method:</h5>
            <p>{document.method}</p>
            <p className="font-bold">
              Cocet Time:{" "}
              <span className="font-normal">{document.cookingTime}</span>
            </p>
            <Link className="btn btn-accent" to="/">
              Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipe;
