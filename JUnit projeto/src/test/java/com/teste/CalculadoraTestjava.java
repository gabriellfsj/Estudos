//package com.teste;
//
//import org.junit.Test;
//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.mock;
//import static org.mockito.Mockito.when;
//
//
//public class CalculadoraTestjava {
//    @Test
//    public void testSomar(){
//        Calculadora calculadora = new Calculadora();
//        int num = calculadora.somar("1+1+2");
//        assertEquals(6, num);
//    }
//
//    @Test
//    public void tesetSomarComMock(){
//        Calculadora calculadora = mock(Calculadora.class);
//
//        when(calculadora.somar("1+2")).thenReturn(10);
//
//        int resultado = calculadora.somar("1+2");
//
//        assertEquals(10, resultado);
//
//
//    }
//}

// Teste de mocki mas não está pegando , dar uma olhada depois.