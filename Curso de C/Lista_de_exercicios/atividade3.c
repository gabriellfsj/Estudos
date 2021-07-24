#include <stdio.h>
#include <math.h>

int main() {
    float dado, novoDado;
    printf("Digite um numero \n");
    scanf("%f", &dado);
    novoDado = sqrt(dado)+(dado/2)+pow(dado, dado);  
    printf(" O resultado é: %f", novoDado);
    
 
  return 0;
}
  