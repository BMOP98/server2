import React, { useEffect, useState } from 'react'
const Home = () =>{
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    /*const MisDatos = async () => {
        const resp = await fetch("http://localhost:5000/datos/" + item_valueid);
        const data1 = await resp.json();

        setData(data1);

    }*/

    const cerrar = () =>{
        sessionStorage.setItem("item_rol", "")
        window.location.href = "/"
    }

    useEffect(() => {
        var item_valueid = sessionStorage.getItem("item_key");
        const MisDatos = async () => {
            try {
                const resp = await fetch("http://localhost:5000/datos/" + item_valueid);
                const data1 = await resp.json();
                
                if (!data1.Nombre) {
                    console.log('No se encontraron datos');
                } else {
                    setData(data1);
                }
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
    
        setLoading(true);
        MisDatos();
        setLoading(false);
    }, []);

    return(
        <div>
            <header>
                <button onClick={cerrar}>Cerrar Sesión</button>
            </header>
            <main>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <p style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px', textAlign: 'center'}}>
                        {data.Nombre ? `Hola bienvenido, ${data.Nombre} ${data.Apellido}` : 'Bienvenido'}
                    </p>
                )}
            </main>
        </div>
    )
}

export default Home