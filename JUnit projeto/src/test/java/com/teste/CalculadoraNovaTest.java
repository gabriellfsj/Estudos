package com.teste;
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculadoraNovaTest {

    @Test
    public void deveSomarDoisValores(){
        int valorA = 1;
        int valorB = 2;

        int soma = valorA+valorB;

        assertEquals(3, soma);

    }


}
