import React, { useState } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";

function Search(props) {

  const empArr = props.employees;

  console.log(empArr);

  const [state, setState] = useState ({
    search: "",
    empArr,
    results: [],
    error: ""
  });

  // useEffect(() => {
  //   API.getUsers()
  //     .then(res => setState({ employees: res.data.message }))
  //     .catch(err => console.log(err));
  // });

  const handleInputChange = event => {
    setState({ search: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.getUsers(state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setState({ results: res.data.message, error: "" });
      })
      .catch(err => setState({ error: err.message }));
  };

  return (
    <div>
      <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          employees={state.empArr}
      />
      <Table results={state.results} />
    </div>
  );
}

export default Search;

// class Search extends Component {

    // state = {
    //     search: "",
    //     employees: [],
    //     results: [],
    //     error: ""
    // };

  // componentDidMount() {
  //   API.getUsers()
  //     .then(res => this.setState({ employees: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  // handleInputChange(event) {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

//   render() {
//     return (
//       <div>
//         <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             employees={this.state.employees}
//         />
//         <SearchResults results={this.state.results} />
//       </div>
//     );
//   }

// }