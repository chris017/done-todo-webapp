import { useForm } from "react-hook-form";
import useFetch from "react-fetch-hook";
import './style.css'

const TodoDoneList = () => {
  function deleteTodo(id) {
    fetch(`http://127.0.0.1:8080/api/doDone/${id}`,
      {
        method: "DELETE",
      })
      .then(function (res) { window.location.reload(); })
      .catch(function (res) { console.log(res); });
  }

  const { isLoading, data } = useFetch("http://127.0.0.1:8080/api/doDone/");
  if (isLoading) {
    return <div>Is loading!</div>
  }

  const doDone = data;
    return (
        <div class="col-md-4 d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3">
          <div class="form-container">
          <form name="todoForm" class="toDoDone">
            <div class="list-group toDo">
              <h2 class="toDoHeading">Already Done</h2>
              {doDone.map(doDone => <label class="list-group-item d-flex gap-3">
                <span class="pt-1 form-checked-content">
                  <strong>{doDone.name}</strong>
                </span>
                <button onClick={() => deleteTodo(doDone.id)} class="btn btn-outline-danger">Delete</button>
              </label>)}
            </div>
          </form>
        </div >
      </div>
    );
}

export default TodoDoneList;
