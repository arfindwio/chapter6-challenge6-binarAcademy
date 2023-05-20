const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

const changeDateCars = (cars) => {
  let newCar = cars.map((car) => {
    let availableAt = randomDate(new Date(new Date().getTime()), new Date(2029, 11, 31));
    return { ...car, availableAt };
  });
  return newCar;
};

const filterCars = (cars, { type, date, pickupTime, pass }) => {
  return (
    cars
      // Filter available attribute
      .filter((car) => car.available === true)
      .filter((car) => {
        // Filter Driver type
        if (type === "Keyless Entry") {
          if (car.options.includes(type)) {
            return car;
          }
        } else {
          return !car.options.includes("Keyless Entry");
        }
      })
      .filter((car) => {
        // Filter date
        const dateCar = new Date(car.availableAt);
        const datePicked = new Date(date);
        if (dateCar >= datePicked) {
          return car;
        }
      })
      .filter((car) => {
        // Filter time
        let dateCar = new Date(car.availableAt).getHours();
        if (dateCar >= Number(pickupTime)) {
          return car;
        }
      })
      // filter total passenger
      .filter((car) => car.capacity >= pass)
  );
};

module.exports = { changeDateCars, filterCars };
