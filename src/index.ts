rotulo.innerHTML = "Ingrese un número";

let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  let numero: number = Number(dato.value);

  if (numero === 0) {
    console.log("El número", numero, "no es par ni impar");
  } else if (numero % 2 === 0) {
    console.log("El número", numero, "es par");
  } else {
    console.log("El número", numero, "es impar");
  }
});
