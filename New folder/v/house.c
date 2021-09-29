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
        //cnt > 8 ? delay(7) : delay(0);
    }  
    cnt++;
}
void main()  
{  
    int gd = DETECT ,gm;  
      
    int x0, x1, y0, y1;  
    initgraph(&gd, &gm, "C:\\TC\\BGI");  
    setbkcolor(LIGHTCYAN);
    draw(75, 200, 75, 350, RED); //base
    draw(75, 350, 400, 350, RED);
    draw(400, 200, 400, 350, RED);
    
    draw(200, 250, 200, 350, RED); //door
    draw(200, 250, 275, 250, RED);
    draw(275, 250, 275, 350, RED);
    circle(225, 300, 10);
    
    draw(100, 225, 100, 300, RED); //window1
    draw(100, 300, 175, 300, RED);
    draw(100, 225, 175, 225, RED);
    draw(175, 225, 175, 300, RED);
    draw(137, 225, 137, 300, RED);
    draw(137, 225, 137, 300, RED);
    draw(100, 262, 175, 262, RED);
    
    draw(300, 225, 300, 300, RED); //window2
    draw(300, 300, 375, 300, RED);
    draw(300, 225, 375, 225, RED);
    draw(375, 225, 375, 300, RED);
    draw(337, 225, 337, 300, RED);
    draw(300, 262, 375, 262, RED);
    
    draw(200, 125, 200, 200, RED); //window3
    draw(200, 125, 275, 125, RED);
    draw(275, 125, 275, 200, RED);
    draw(200, 200, 275, 200, RED);
    draw(237, 125, 237, 200, RED);
    draw(200, 162, 275, 162, RED);

    draw(50, 225, 237, 50, RED); //roof_l
    draw(50, 200, 50, 225, RED);
    draw(50, 200, 237, 25, RED);
    
    draw(237, 50, 425, 225, RED); //roof_r
    draw(237, 25, 425, 200, RED);
    draw(425, 200, 425, 225, RED);
    
    draw(325, 37, 325, 107, RED); // chimney
    draw(375, 37, 375, 155, RED);
    draw(317, 30, 317, 37, RED);
    draw(317, 37, 385, 37, RED);
    draw(385, 30, 385, 37, RED);
    draw(317, 30, 385, 30, RED);
    
    getch();  
    closegraph();  
}  