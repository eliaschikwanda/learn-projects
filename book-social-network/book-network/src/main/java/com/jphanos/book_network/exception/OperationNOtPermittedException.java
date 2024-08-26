package com.jphanos.book_network.exception;

// Whenever you create your own exception handle it inside the handler package
public class OperationNOtPermittedException extends RuntimeException {
    public OperationNOtPermittedException(String msg) {
        super(msg); // Call the constructor of the super class with the same message
    }
}
