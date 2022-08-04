package org.sofka.mykrello.utilities;

import org.springframework.stereotype.Component;

/**
 * Esta clase se encarga de mostrar si la consulta tiene errores, un mensaje  y la data traida de la base de datos
 * @class MyResponseUtility
 * @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */
@Component
public class MyResponseUtility {

    /**
     *  Se crea el atributo error
     */
    public Boolean error;

    /**
     * se crea el  atributo de message
     */
    public String message;

    /**
     * se crea el atributo data
     */
    public Object data;

    /**
     * Este metodo muestra el estado de la peticion
     */
    public MyResponseUtility() {
        error = false;
        message = "Success";
        data = null;
    }

    /**
     * Este metodo reestablece el estado de la peticion
     */
    public void restart() {
        error = false;
        message = "Success";
        data = null;
    }
}
