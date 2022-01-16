#include<graphics.h>  
#include<conio.h>  
#include<stdio.h>  
int cnt = 0;
void draw(int x0, int y0, int x1, int y1, int c){
    float x, y,dx,dy,steps;
    int i; 
    dx = (float)(x1 - x0);  
    dy = (float)(y1 - y0);  
    if(dx>=dy)  
           {  
        steps = dx;  
    }  
    else  
           {  
        steps = dy;  
    }  
    dx = dx/steps;  
    dy = dy/steps;  
    x = x0;  
    y = y0;  
    i = 1;  
    while(i<= steps)  
    {  
        putpixel(x, y, c);  
        x += dx;  
        y += dy;  
        i=i+1;
        cnt > 8 ? delay(7) : delay(0);
    }  
    cnt++;
}
void main()  
{  
    int gd = DETECT ,gm;  
      
    int x0, x1, y0, y1;  
    initgraph(&gd, &gm, "C:\\TC\\BGI");  
    setbkcolor(LIGHTCYAN);
    
    draw(5, 30, 5, 220, RED);
    draw(5, 220, 445, 220, RED);
    draw(5, 30, 445, 30, RED);
    draw(445, 30, 445, 220, RED);
    
    draw(5, 30, 225, 125, RED);
    draw(225, 125, 445, 30, RED);
    getch();  
    closegraph();  
}  