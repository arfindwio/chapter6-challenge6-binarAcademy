const fetchCarsSuccess = (cars) => {
  return {
    type: "FETCH_CARS_SUCCESS",
    payload: cars,
  };
};
const fetchCarsRequest = () => {
  return {
    type: "FETCH_CARS_REQUEST",
  };
};
const fetchCarsFailure = (error) => {
  return {
    type: "FETCH_CARS_FAILURE",
    payload: error,
  };
};

const fetchUsers = (filter) => {
  return (dispatch) => {
    dispatch(fetchCarsRequest);
    fetch("http://localhost:8000/api/v1/cars", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(filter),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw Error("Fetch Failed");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(fetchCarsSuccess(data));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchCarsFailure(errorMsg));
      });
  };
};

const fetchCarsData = () => {
  return (dispatch) => {
    fetch(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchCarsSuccess(data)))
      .catch((err) => console.error(err));
  };
};

module.exports = { fetchUsers, fetchCarsData };
