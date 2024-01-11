import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDeleteDoc } from "../hooks/useDeleteDoc";

function TodosList({ todos }) {
  const { deletedoc } = useDeleteDoc();
  return (
    <div className="grid grid-cols-1 content-center gap-5 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
      {todos.map((todo) => {
        return (
          <Fragment key={todo.id}>
            <div className="card w-72 bg-base-100 shadow-xl md:w-72">
              <figure className="px-10 pt-10">
                {todo.images.map((image) => {
                  return (
                    <img
                      key={image}
                      src={image}
                      alt="Loading..."
                      className="h-40  rounded-xl object-cover"
                    />
                  );
                })}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>
                  <span>
                    <i className="fa-solid fa-clock"></i>
                  </span>{" "}
                  {todo.cookingTime}
                </p>
                <p className="line-clamp-3">{todo.method}</p>
                <div className="card-actions">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => deletedoc("recipe", todo.id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/recipe/${todo.id}`}
                      className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <i className="fa-solid fa-arrow-right ml-1 mt-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default TodosList;
