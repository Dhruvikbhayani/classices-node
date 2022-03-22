#include<stdio.h>
int main(){
    int i,j,sp=10;
    for(i=1;i<7;i++)
    {
        for(j=1;j<=sp;j++){
            printf(" ");
        }
        for(j=1;j<=i;j++){
            printf("%d",j);
        }
        sp--;
        printf("\n");
    }
}