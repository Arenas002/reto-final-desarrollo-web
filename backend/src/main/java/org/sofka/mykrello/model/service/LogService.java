package org.sofka.mykrello.model.service;

import java.util.Optional;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.repository.LogRepository;
import org.sofka.mykrello.model.service.interfaces.LogServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
/**
 * Esta clase es la encarada de realizar las consultas a la base de datos
 *   @class LogService
 *   @author Cristian David Arenas - Julio César Torres
 *   @version 1.0.0
 */

public class LogService implements LogServiceInterface {

    /**
     * inyecta el repositorio log
     */
    @Autowired
    LogRepository logRepository;

    /**
     * este metodo llama el log de la base de datos
     * @param id id mandado para llamar el log
     * @return funcion findById para encontrar el log por id
     */
    @Override
    public Optional<LogDomain> findById(Integer id) {
        return logRepository.findById(id);
    }

    /**
     * metodo que crea el log
     * @param log modelo de log
     * @return retorna null
     */
    @Override
    public LogDomain create(LogDomain log) {

        return null;
    }
}
