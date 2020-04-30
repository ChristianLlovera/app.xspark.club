export const config = obj => {

    const { beforeEach, afterEach, unmountComponentAtNode, document } = obj

    beforeEach(() => {
        // configurar un elemento del DOM como objetivo del renderizado
        obj.container = document.createElement("div");
        // container *debe* estar asociado a document para que los eventos funcionen correctamente.
        document.body.appendChild(obj.container);
    });

    afterEach(() => {
        // limpiar al salir
        unmountComponentAtNode(obj.container);
        obj.container.remove();
        obj.container = null;
    });

}