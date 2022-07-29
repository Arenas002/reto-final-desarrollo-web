package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.service.LogService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/log")
public class LogController {

    @Autowired
    private MyResponseUtility response;

    @Autowired
    private LogService logService;



    @GetMapping(path = "/api/v1/log/id")
    public ResponseEntity<MyResponseUtility> getLog(@PathVariable (name = "id")Integer id){
        response.data = logService.findById(id);
         return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
