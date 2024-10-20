'use client';
import React, {useState, useEffect} from 'react';

export default function Tarea1() {
    const [value, setValue] = useState("");
    const [clase, setClase] = useState("");
    const [caracteres, setCaracteres] = useState(0);

    useEffect(() => {
        const caracteres = value.length;
        setCaracteres(caracteres);
    }, [value]);

    const changeHandler = (e:any) => {
        setValue(e.target.value);

        if (caracteres < 10 ){
            setClase('border background-color-red');
        } else if (caracteres >= 10 && caracteres <= 20){
            setClase('border background-color-orange');
        } else {
            setClase('border background-color-green');
        }
    };

    return (
        <div>
            <section className="container ta1" id="ta1sec">
                <div className="text-start" id="ta1">
                    <h5>Ejercicio en Clase 1 | fecha: 20/10/2024</h5>
                </div>
                <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9">
                    <div className="row h4 pb-1 mb-5 border-bottom border-danger font-size-12 font-family-app">Listado de Usuarios</div>
                    <div className="row g-3 align-items-center">
                        <div className="row col-lg-12 col-md-12 col-sm-12">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Tu texto</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={changeHandler}/>
                                <input disabled type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"value={"Caracteres: "+caracteres}/>
                                <span className={clase}>Longitud</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </section>
        </div>



    );
}