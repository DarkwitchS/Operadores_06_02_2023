let a = confirm("Variable A\n\t\tSelecciona Aceptar si deseas el booleano True\n\t\tSelecciona Cancelar si deseas el booleano False");
let b = confirm("Variable B\n\t\tSelecciona Aceptar si deseas el booleano True\n\t\tSelecciona Cancelar si deseas el booleano False");

let cuerpo = document.querySelector("#myOR");
cuerpo.insertAdjacentHTML("beforeend", ` <tr>
                                            <td>${a}</td>
                                            <td>${b}</td>
                                            <td>${a || b}</td>
                                        </tr>`);

