import { useEffect, useRef, useState } from "react";
import { useAddNewDoc } from "../hooks/useAddNewDoc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const { addNewDoc, isPending, newTodo } = useAddNewDoc();
  const navigate = useNavigate();
  const title = useRef();
  const cookingTime = useRef();
  const method = useRef();
  const ingredient = useRef();
  const imageURL = useRef();

  const [ingredients, setIngredients] = useState([]);
  const [images, setImages] = useState([]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    let newIng = ingredient.current.value.trim();

    if (!ingredients.includes(newIng)) {
      setIngredients((prev) => {
        return [...prev, newIng];
      });
    } else {
      toast.error("Bunday ingredient Mavjut");
    }
    ingredient.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewDoc("recipe", {
      title: title.current.value,
      cookingTime: cookingTime.current.value + " minutes",
      method: method.current.value,
      ingredients,
      images,
    });
  };

  const handleAddImg = (e) => {
    e.preventDefault();
    // const imageUrlRegex =
    //   /\.(jpeg|jpg|gif|png|bmp|svg|JPEG|JPG|GIF|PNG|BMP|SVG)$/;
    let newImg = imageURL.current.value.trim();
    setImages((prev) => {
      return [...prev, newImg];
    });
    imageURL.current.value = "";
  };
  // console.log(images);
  useEffect(() => {
    if (!isPending && newTodo) {
      navigate("/");
    }
  }, [isPending, newTodo]);

  return (
    <div className="max-container flex flex-col items-center py-5">
      <h1 className="my-10 text-center text-4xl font-semibold">
        Create New Todo
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="form-control">
          <span className="mb-2">Title:</span>
          <input
            className="input input-bordered input-primary w-full max-w-xs"
            ref={title}
            type="text"
            placeholder="Text..."
          />
        </div>
        <div className="form-control">
          <span className="mb-2">Cooking Time:</span>
          <input
            className="input input-bordered input-primary w-full max-w-xs"
            ref={cookingTime}
            type="number"
            placeholder="Cooking Time..."
          />
        </div>
        <div className="form-control">
          <span className="mb-2">Ingredients:</span>
          <div className=" flex items-center gap-2">
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              ref={ingredient}
              type="text"
              placeholder="Ingredients..."
            />
            <button className="btn btn-accent " onClick={handleAddIngredient}>
              +
            </button>
          </div>
          <div>
            {ingredients.length > 0 &&
              ingredients.map((ing, index, ingArr) => {
                return (
                  <span key={ing}>
                    {ing} {index === ingArr.length - 1 ? "." : ","}
                  </span>
                );
              })}
          </div>
        </div>
        <div className="form-control">
          <span className="mb-2">Images URL:</span>
          <div className=" flex items-center gap-2">
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              ref={imageURL}
              type="url"
              placeholder="Images URL..."
            />
            <button className="btn btn-accent " onClick={handleAddImg}>
              +
            </button>
          </div>
          <div className="flex items-center">
            {images.length > 0 &&
              images.map((image) => {
                return (
                  <img
                    key={image}
                    className="mt-1"
                    src={image}
                    alt=""
                    width={100}
                    height={150}
                  />
                );
              })}
          </div>
        </div>
        <div className="form-control">
          <span>Method:</span>
          <textarea
            ref={method}
            className="input input-bordered input-primary w-full max-w-xs"
            name=""
            id=""
            cols="25"
            rows="5"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="btn btn-info">Create</button>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            preivew
          </button>
        </div>
      </form>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box flex w-11/12 max-w-5xl">
          <div className="carousel w-96 rounded-box">
            <div className="carousel-item w-1/2">
              {images.map((img) => {
                return <img src={img} className="w-full" />;
              })}
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p className="line-clamp-4"></p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Create;
