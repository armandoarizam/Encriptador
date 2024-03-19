document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.areaTexto textarea');
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnCopiar = document.querySelector('.btn-copiar');
    const rectangulo = document.querySelector('.rectangulo');
    const muñeco = document.querySelector('.muñeco');
    const titulo = document.querySelector('.rectangulo h2');
    const textoPlaceholder = document.querySelector('.rectangulo p');
    const exitoImg = document.querySelector('.exito-img');
    const encriptadoImg = document.querySelector('.encriptado-img');
    const desencriptadoImg = document.querySelector('.desencriptado-img');

    btnEncriptar.addEventListener('click', function() {
        const textoOriginal = textarea.value.toLowerCase();
        if (textoOriginal.trim() === '') {
            alert('No has ingresado ningún texto para encriptar.');
            return;
        }
        const textoEncriptado = encriptarTexto(textoOriginal);
        rectangulo.style.display = 'block';
        muñeco.style.display = 'none';
        titulo.textContent = 'Texto encriptado con éxito';
        textarea.value = textoEncriptado;
        textoPlaceholder.style.display = 'none';
        btnCopiar.style.display = 'block'; // Mostrar el botón de copiar
        exitoImg.style.display = 'none'; // Ocultar imagen de éxito de desencriptación
        encriptadoImg.style.display = 'block'; // Mostrar imagen encriptado.png
        desencriptadoImg.style.display = 'none'; // Ocultar imagen desencriptado.png
    });

    btnDesencriptar.addEventListener('click', function() {
        const textoEncriptado = textarea.value.toLowerCase();
        if (textoEncriptado.trim() === '') {
            alert('No has ingresado ningún texto para desencriptar.');
            return;
        }
        const textoDesencriptado = desencriptarTexto(textoEncriptado);
        rectangulo.style.display = 'block';
        muñeco.style.display = 'none';
        titulo.textContent = 'Texto desencriptado con éxito';
        textarea.value = textoDesencriptado;
        textoPlaceholder.style.display = 'none';
        btnCopiar.style.display = 'block'; // Mostrar el botón de copiar
        exitoImg.style.display = 'block'; // Mostrar imagen de éxito de desencriptación
        encriptadoImg.style.display = 'none'; // Ocultar imagen encriptado.png
        desencriptadoImg.style.display = 'block'; // Mostrar imagen desencriptado.png
    });

    btnCopiar.addEventListener('click', function() {
        textarea.select();
        document.execCommand('copy');

        // Agregar clase CSS para el efecto visual
        btnCopiar.classList.add('btn-clicked');

        // Eliminar la clase después de un tiempo para revertir el efecto
        setTimeout(function() {
            btnCopiar.classList.remove('btn-clicked');
        }, 300); // Cambia el valor si deseas que el efecto dure más o menos tiempo
    });

    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }
});
