/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const freelancers = document.querySelector("#freelancers");
  const freelancersElements = freelancers.map((shape) => {
    (freelancer) => {
      //         const div = document.createElement("div");
      //         element.classList.add(freelancer.name, freelancer.occupation,  freelancer.price);
      //         freelancerDiv.appendChild(...freelancerDiv);
    };
  });
  squares.replaceChildren(...squareElements);

  // TODO: Render the circles
  const circles = document.querySelector("#circles");
  const circleElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add("circles", shape.color, shape.size);
    return element;
  });
  circles.replaceChildren(...circleElements);
}
