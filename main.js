let a = confirm("Variable A\n\t\tSelecciona Aceptar si deseas el booleano True\n\t\tSelecciona Cancelar si deseas el booleano False");

let cuerpo = document.querySelector("#myNOT");
cuerpo.insertAdjacentHTML("beforeend", ` <tr>
                                            <td>${a}</td>
                                            <td>${!a}</td>
                                        </tr>`);

