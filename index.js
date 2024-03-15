// Possible  names and occupations
const names = [
  "Sophia",
  "Liam",
  "Emma",
  "Noah",
  "Olivia",
  "William",
  "Ava",
  "James",
  "Isabella",
  "Oliver",
  "Mia",
  "Benjamin",
  "Charlotte",
  "Elijah",
  "Amelia",
  "Lucas",
  "Harper",
  "Mason",
  "Evelyn",
  "Ethan",
];

const occupations = [
  "writer",
  "teacher",
  "programmer",
  "designer",
  "consultant",
  "engineer",
  "artist",
  "doctor",
  "nurse",
  "architect",
  "chef",
  "musician",
  "photographer",
  "marketing specialist",
  "lawyer",
  "scientist",
  "accountant",
  "entrepreneur",
  "salesperson",
  "translator",
];
//Arry of freelancers
const freelancers = [
  { name: "James", price: 30, occupation: "writer" },
  { name: "Ava", price: 70, occupation: "designer" },
];
// // Render freelancers
function render() {
  const freelancersContainer = document.getElementById("freelancers");
  const freelancersElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.classList.add(
      freelancer.name,
      freelancer.occupation,
      freelancer.price
    );
    element.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
    return element;
  });
  freelancersContainer.replaceChildren(...freelancersElements);
}
// Calculate the average starting price
function calculateAveragePrice() {
  const totalPrices = freelancers.reduce(
    (acc, freelancer) => acc + freelancer.price,
    0
  );
  const averagePrice = totalPrices / freelancers.length;
  return averagePrice.toFixed(2);
}
// Update average price
function updateAveragePrice() {
  const averagePrice = calculateAveragePrice();
  const averagePriceParagraph = document.getElementById("averagePrice");
  averagePriceParagraph.textContent = `Average Starting Price: $${averagePrice}`;
}
//  Generate new freelancer
function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 1;
  const newFreelancer = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };
  freelancers.push(newFreelancer);
}
// Add new freelancer to display
function addNewFreelancer() {
  generateRandomFreelancer();
  render();
  updateAveragePrice();
}
// New freelancer 5 s
document.addEventListener("DOMContentLoaded", function () {
  render();
  updateAveragePrice();
  addNewFreelancer(); // Initial rendering
  setInterval(addNewFreelancer, 5000); // Add new freelancer every 5 seconds
});
