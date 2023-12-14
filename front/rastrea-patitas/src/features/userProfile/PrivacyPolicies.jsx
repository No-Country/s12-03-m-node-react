/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import pdfFile from '../../docs/PoliticasPrivacidad.pdf';

const PrivacyPolicies = () => {
    const [mostrarDescarga, setMostrarDescarga] = useState(false);

    useEffect(() => {
        const esPantallaPequena = window.innerWidth < 640; 
        setMostrarDescarga(esPantallaPequena);
    }, []);

    const descargarArchivo = () => {
        const linkDeDescarga = document.createElement('a');
        linkDeDescarga.href = pdfFile;
        linkDeDescarga.style.display = 'none';
        linkDeDescarga.setAttribute('download', 'PoliticasPrivacidad.pdf');
        document.body.appendChild(linkDeDescarga);
        linkDeDescarga.click();
        document.body.removeChild(linkDeDescarga);
    };

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            {/* para mostrar el mensaje y el botón de descarga si es una pantalla pequeña */}
            {mostrarDescarga ? (
                <div style={{ textAlign: 'center', marginTop: '20%' }}>
                    <h2>Políticas de Privacidad</h2>
                    <br />
                    <p>¡Este documento no se puede visualizar en esta pantalla!</p>
                    <br />
                    <button className='border border-gray-400 transition-colors duration-300 rounded-md hover:bg-gray-200 w-120 py-3 px-2 text-xs' style={{ color: '#4D4295' }} onClick={descargarArchivo}>
                        Descarga nuestras políticas de privacidad
                    </button>
                </div>
            ) : ( 
                <object
                    data={pdfFile}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                />
            )}
        </div>
    );
};

export default PrivacyPolicies;


