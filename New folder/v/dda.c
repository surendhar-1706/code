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
    
    draw(7, 32, 7, 222, RED);
    draw(7, 222, 447, 222, RED);
    draw(7, 32, 447, 32, RED);
    draw(447, 32, 447, 222, RED);
    
    draw(25, 50, 50, 200, BLUE);  //v
    draw(75, 50, 50, 200, BLUE);
    
    draw(100, 50, 75, 200, MAGENTA); //a
    draw(100, 50, 125, 200, MAGENTA);
    draw(87, 125, 112, 125, MAGENTA);
    
    draw(150, 50, 150, 200, LIGHTRED); //r
    draw(150, 50, 200, 62, LIGHTRED);
    draw(200, 62, 150, 125, LIGHTRED);
    draw(150, 125, 200, 200, LIGHTRED);
    
    draw(225, 50, 225, 200, YELLOW); //o
    draw(225, 200, 275, 200, YELLOW);
    draw(225, 50, 275, 50, YELLOW);
    draw(275, 50, 275, 200, YELLOW);
    
    draw(300, 50, 300, 200, GREEN); //o
    draw(300, 200, 350, 200, GREEN);
    draw(300, 50, 350, 50, GREEN);
    draw(350, 50, 350, 200, GREEN);
    
    draw(375, 50, 375, 200, LIGHTGRAY); // n
    draw(375, 50, 425, 200, LIGHTGRAY);
    draw(425, 50, 425, 200, LIGHTGRAY);
    
    getch();  
    closegraph();  
}  