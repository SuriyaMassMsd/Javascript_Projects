const choose = prompt("Enter Your fruitName")

const fruitName = [
  "Apple",
  "Banana",
  "Orange",
  "Blueberry",
  "Avocado",
  "Kiwi",
  "Pineapple",
  "Watermelon",
  "Mango",
  "Grapefruit",
];

if (choose === "" || !isNaN(choose)) {
  alert("enter valid input");
} else if (choose) {
  if (fruitName.includes(choose)) {
    switch (choose) {
      case "Apple":
        alert(
          `Name: Apple
         Vitamin Content: Vitamin C, A, K, B-complex
         Health Benefits: Supports heart health, rich in antioxidants
         Disadvantages: High in natural sugars
         Additional Information: Contains dietary fiber and various phytonutrients`
        );

        break;

      case "Banana":
        alert(
          `Name: Banana
         Vitamin Content: Vitamin C, B6, potassium
         Health Benefits: Good for heart health, provides energy
         Disadvantages: High in carbohydrates
         Additional Information: Excellent source of potassium`
        );
        break;

      case "Orange":
        alert(
          `
      Name: Orange   
      vitaminContent: "Vitamin C, A, B-complex",
      healthBenefits: "Boosts immune system, promotes skin health",
      disadvantages: "High acidity may affect tooth enamel",
      additionalInfo: "Contains flavonoids and folate"  `
        );
        break;

      case "Blueberry":
        alert(
          `Name: Blueberry
         vitaminContent: "Vitamin C, K, antioxidants",
         healthBenefits: "Improves brain function, supports heart health",
         disadvantages: "Can be high in natural sugars",
         additionalInfo: "Rich in anthocyanins, known for anti-inflammatory properties"`
        );
        break;

      case "Avocado":
        alert(
          `Name: Avocado
         vitaminContent: "Vitamin K, E, C, B-complex",
         healthBenefits: "Healthy fats, supports skin and heart health",
         disadvantages: "High in calories, portion control is crucial",
         additionalInfo: "High in monounsaturated fats"`
        );
        break;
      case "Kiwi":
        alert(
          `Name: Kiwi
         vitaminContent: "Vitamin C, K, E",
         healthBenefits: "Immune system support, aids digestion",
         disadvantages: "May cause allergic reactions in some people",
         additionalInfo: "Good source of fiber and antioxidants"`
        );
        break;

      case "Pineapple":
        alert(
          `Name: Pineapple
         vitaminContent: "Vitamin C, B-complex, manganese",
         healthBenefits: "Aids digestion, rich in antioxidants",
         disadvantages: "High in natural sugars",
         additionalInfo: "Contains bromelain, an enzyme with anti-inflammatory properties"`
        );
        break;

      case "Watermelon":
        alert(
          `Name: Watermelon
         vitaminContent: "Vitamin C, A, B6",
         healthBenefits: "Hydrating, supports heart health",
         disadvantages: "High in natural sugars, may cause bloating",
         additionalInfo: "High water content and lycopene"`
        );
        break;

      case "Mango":
        alert(
          `Name: Mango
         vitaminContent: "Vitamin C, A, E, K",
         healthBenefits: "Boosts immune system, supports eye health",
         disadvantages: "High in natural sugars, may cause allergies",
         additionalInfo: "Rich in beta-carotene and vitamin E`
        );
        break;

      case "Grapefruit":
        alert(
          `Name: Grapefruit
         vitaminContent: "Vitamin C, A",
         healthBenefits: "Supports weight loss, rich in antioxidants",
         disadvantages: "Interacts with certain medications",
         additionalInfo: "Contains naringin, which may affect drug metabolism"`
        );
        break;

      default:
        console.log(`Invalid ${choose}  fruit name`);
    }
  } else {
    console.log(`Invalid ${choose} fruit name`);
  }
}


// // read

// console.log(fruitName);

// // add

// // method 1
// fruitName.splice(0,0 , "koyaka")

// console.log(fruitName);

// // method 2
// fruitName.push("grape")

// console.log(fruitName);

// // update

// let updatefruitName = "grape"

// fruitName[0] = updatefruitName;

// console.log(fruitName);

// // delete

// const deleteArray = 'grape'

// const removeEl = fruitName.filter(del => del !== deleteArray)

// console.log(removeEl);

// console.log(fruitName);
