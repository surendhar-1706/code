//##############################
//##### DDA ######
#include <stdio.h>
#include<graphics.h>
void draw(int x0, int y0, int x1, int y1, int c) {
    int i;
    float x, y,dx,dy,steps;
    dx = (float)(x1 - x0);  
    dy = (float)(y1 - y0);  
    if(dx>=dy)  
        steps = dx;    
    else  
        steps = dy;  
    dx /= steps;  
    dy /= steps;  
    x = x0;  
    y = y0;  
    i = 1;  
    while(i <= steps)  
    {  
        putpixel(x, y, c);  
        x += dx;  
        y += dy;  
        i=i+1;  
    }
}

void main() {
    int gd = DETECT ,gm;
    initgraph(&gd, &gm, "C:\\TC\\BGI");  
    setbkcolor(14);
    draw(0, 100, 400, 200, 12);
    draw(100, 200, 500, 300, 2);
    draw(200, 300, 600, 400, 5);
    getch();  
    closegraph();  
}
//##############################

//##############################
//##### NAME ######
#include <stdio.h>
#include<graphics.h>
void draw(int x0, int y0, int x1, int y1) {
    int i;
    float x, y,dx,dy,steps;
    dx = (float)(x1 - x0);  
    dy = (float)(y1 - y0);  
    if(dx>=dy)  
        steps = dx;    
    else  
        steps = dy;  
    dx /= steps;  
    dy /= steps;  
    x = x0;  
    y = y0;  
    i = 1;  
    while(i <= steps) {  
        putpixel(x, y, 4);  
        x += dx;  
        y += dy;  
        i=i+1;  
    }
}

void main() {
    int gd = DETECT ,gm;
    initgraph(&gd, &gm, "C:\\TC\\BGI");  
    setbkcolor(3);

    //OUTER BORDER
    draw(2, 2, 185, 2);
    draw(2, 2, 2, 33);
    draw(185, 2, 185, 33);
    draw(2, 33, 185, 33);
    
    // E
    draw(10, 10, 10, 30);
    draw(10, 10, 20, 10);
    draw(10, 20, 20, 20);
    draw(10, 30, 20, 30);

    // A
    draw(30, 30, 40, 10);
    draw(35, 20, 45, 20);
    draw(40, 10, 50, 30);

    // S
    draw(60, 10, 70, 10);
    draw(60, 10, 60, 20);
    draw(60, 20, 70, 20);
    draw(70, 20, 70, 30);
    draw(60, 30, 70, 30);

    // H
    draw(80, 10, 80, 30);
    draw(80, 20, 90, 20);
    draw(90, 10, 90, 30);

    // W
    draw(100, 10, 100, 30);
    draw(100, 30, 105, 20);
    draw(105, 20, 110, 30);
    draw(110, 10, 110, 30);

    // A
    draw(120, 30, 130, 10);
    draw(125, 20, 135, 20);
    draw(130, 10, 140, 30);

    // R
    draw(150, 10, 150, 30);
    draw(150, 10, 160, 10);
    draw(160, 10, 160, 20);
    draw(150, 20, 160, 20);
    draw(150, 20, 160, 30);

    // .
    putpixel(165, 30, 4);

    // P
    draw(170, 10, 170, 30);
    draw(170, 10, 180, 10);
    draw(180, 10, 180, 20);
    draw(170, 20, 180, 20);
    getch();  
    closegraph();  
}
//##############################

//##############################
//##### BRESENHAM (CUBE & CUBOID) ######
#include <stdio.h>
#include <conio.h>
#include <graphics.h>

void draw(int x0, int y0, int x1, int y1) {
    int p, i;
    int dx = x1 - x0;
    int dy = y1 - y0;
    int x = x0;
    int y = y0;

    //slope < 1
    if(abs(dx) > abs(dy)) {
        putpixel(x,y,GREEN);    
        p = (2 * abs(dy)) - abs(dx);
        
        for(i = 0; i < abs(dx) ; i++) {
            x = x + 1;
            if(p < 0)
                p = p + (2 * abs(dy));
            else {
                y = y + 1;
                p = p + (2 * abs(dy)) - (2 * abs(dx));
            }
            putpixel(x,y,GREEN);
            delay(10);
        }
    } else {
        //slope >= 1
        putpixel(x,y,GREEN);
        p = (2 * abs(dx)) - abs(dy);
        for(i = 0; i < abs(dy) ; i++) {
            y = y + 1;
            if(p < 0)
                p = p + (2 * abs(dx));
            else {
                x = x + 1;
                p = p + (2 * abs(dx)) - (2 *abs(dy));
            }
            putpixel(x,y,GREEN);
            delay(10);
        }
    }
}

void main() {
    int gd = DETECT ,gm;
    initgraph(&gd, &gm, "C:\\TC\\BGI");  
    setbkcolor(14);
    
    draw(100, 100, 100, 200);
    draw(100, 100, 200, 100);
    draw(200, 100, 200, 200);
    draw(100, 200, 200, 200);
    
    draw(150, 150, 150, 250);
    draw(150, 150, 250, 150);
    draw(250, 150, 250, 250);
    draw(150, 250, 250, 250);
    
    draw(100, 100, 150, 150);
    draw(200, 100, 250, 150);
    draw(200, 200, 250, 250);
    draw(100, 200, 150, 250);
    
    draw(300, 100, 300, 200);
    draw(300, 100, 500, 100);
    draw(500, 100, 500, 200);
    draw(300, 200, 500, 200);
    
    draw(350, 150, 350, 250);
    draw(350, 150, 550, 150);
    draw(550, 150, 550, 250);
    draw(350, 250, 550, 250);
    
    draw(300, 100, 350, 150);
    draw(500, 100, 550, 150);
    draw(500, 200, 550, 250);
    draw(300, 200, 350, 250);
    getch();  
    closegraph(); 
}
//##############################

//##############################
//##### DDA (HOUSE) ######
#include <graphics.h>
#include <conio.h>
#include <stdio.h>

void draw(int x0, int y0, int x1, int y1, int c) {
    float x, y, dx, dy, steps, i;
    dx = (float) (x1 - x0);
    dy = (float) (y1 - y0);
    if(dx >= dy)    steps = dx;
    else            steps = dy;
    dx /= steps;
    dy /= steps;
    x = x0;
    y = y0;
    i = 1;
    while(i <= steps) {
        putpixel(x, y, c);
        x += dx;
        y += dy;
        i++;
        delay(5);
    }
}

void main() {
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "C:\\TC\\BGI");
    setbkcolor(14);

    draw(75, 25, 75, 325, 8);
    draw(75, 25, 525, 25, 8);
    draw(525, 25, 525, 325, 8);
    draw(75, 325, 525, 325, 8);

    draw(100, 105, 100, 300, 8);
    draw(100, 300, 500, 300, 8);
    draw(500, 105, 500, 300, 8);

    draw(100, 105, 305, 58, 4);
    draw(305, 58, 500, 105, 4);
    draw(100, 110, 310, 65, 4);
    draw(310, 65, 500, 110, 4);

    draw(400, 40, 400, 79, 5);
    draw(430, 40, 430, 86, 5);
    draw(400, 40, 430, 40, 5);
    draw(400, 50, 430, 50, 5);

    draw(275, 225, 275, 300, 6);
    draw(325, 225, 325, 300, 6);
    draw(275, 225, 325, 225, 6);

    draw(275, 125, 275, 175, 3);
    draw(325, 125, 325, 175, 3);
    draw(275, 125, 325, 125, 3);
    draw(275, 175, 325, 175, 3);
    draw(300, 125, 300, 175, 3);
    draw(275, 150, 325, 150, 3);

    draw(150, 200, 150, 250, 2);
    draw(200, 200, 200, 250, 2);
    draw(150, 200, 200, 200, 2);
    draw(150, 250, 200, 250, 2);
    draw(175, 200, 175, 250, 2);
    draw(150, 225, 200, 225, 2);

    draw(400, 200, 400, 250, 9);
    draw(450, 200, 450, 250, 9);
    draw(400, 200, 450, 200, 9);
    draw(400, 250, 450, 250, 9);
    draw(425, 200, 425, 250, 9);
    draw(400, 225, 450, 225, 9);

    draw(300, 250, 300, 255, 7);
    draw(320, 250, 320, 255, 7);
    draw(300, 250, 320, 250, 7);
    draw(300, 255, 320, 255, 7);
    draw(317, 250, 317, 255, 7);

    getch();
    closegraph();
}
//##############################

//##############################
//####### TRIANGLE ############
#include <GL/glut.h>

void display() {
  glClear(GL_COLOR_BUFFER_BIT);
  glBegin(GL_POLYGON);
    glColor3f(1, 0, 0); glVertex3f(-0.6, -0.75, 0.5);
    glColor3f(0, 1, 0); glVertex3f(0.6, -0.75, 0);
    glColor3f(0, 0, 1); glVertex3f(0, 0.75, 0);
  glEnd();
  glFlush();
}

int main(int argc, char** argv) {
  glutInit(&argc, argv);
  glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
  glutInitWindowPosition(80, 80);
  glutInitWindowSize(400, 300);
  glutCreateWindow("Triangle");
  glutDisplayFunc(display);
  glutMainLoop();
}
//##############################

// ##############################
// ###### LINE CLIPPING #########
#include<stdio.h>
#include<graphics.h>

// Defining region codes
const int INSIDE = 0; // 0000
const int LEFT = 1;   // 0001
const int RIGHT = 2;  // 0010
const int BOTTOM = 4; // 0100
const int TOP = 8;    // 1000

// Defining x_max, y_max and x_min, y_min for clipping rectangle. Since diagonal points are enough to define a rectangle
const int x_max = 400;
const int y_max = 400;
const int x_min = 100;
const int y_min = 100;

// Draw line
void draw(float x1, float y1, float x2, float y2)
{
    line(x1, y1, x2, y2);
}


// Function to compute region code for a point(x, y)
int computeCode(double x, double y)
{
    // initialized as being inside
    int code = INSIDE;

    if (x < x_min)       // to the left of rectangle
        code |= LEFT;
    else if (x > x_max)  // to the right of rectangle
        code |= RIGHT;
    if (y < y_min)       // below the rectangle
        code |= BOTTOM;
    else if (y > y_max)  // above the rectangle
        code |= TOP;

    return code;
}

// Clear Screen
void myCleardevice()
{
    float h = (float)getwindowheight();
    float w = (float)getwindowwidth();
    cleardevice();   /* clear the screen */
}

// Draw Boundary
void drawBoundary()
{
    draw(x_min,y_min, x_max, y_min);
    draw(x_min, y_min, x_min, y_max);
    draw(x_max, y_min, x_max, y_max);
    draw(x_min,y_max, x_max, y_max);
}


// Implementing Cohen-Sutherland algorithm
// Clipping a line from P1 = (x2, y2) to P2 = (x2, y2)

void cohenSutherlandClip(double x1, double y1,
                         double x2, double y2)
{
    // Compute region codes for P1, P2
    int code1 = computeCode(x1, y1);
    //printf("%d\n", code1);
    int code2 = computeCode(x2, y2);
    //printf("%d\n", code2);

    // Initialize line as outside the rectangular window
    int accept = 0;

    while (1)
    {
        if ((code1 == 0) && (code2 == 0))
        {
            // If both endpoints lie within rectangle
            accept = 1;
            break;
        }
        else if (code1 & code2)
        {
            // If both endpoints are outside rectangle, in same region
            break;
        }
        else
        {
            // Some segment of line lies within the rectangle
            int code_out;
            double x, y;

            // At least one endpoint is outside the rectangle, pick it.
            if (code1 != 0)
                code_out = code1;
            else
                code_out = code2;

            // Find intersection point; using formulas y = y1 + slope * (x - x1),
            // x = x1 + (1 / slope) * (y - y1)
            if (code_out & TOP)
            {
                // point is above the clip rectangle
                x = x1 + (x2 - x1) * (y_max - y1) / (y2 - y1);
                y = y_max;
            }
            else if (code_out & BOTTOM)
            {
                // point is below the rectangle
                x = x1 + (x2 - x1) * (y_min - y1) / (y2 - y1);
                y = y_min;
            }
            else if (code_out & RIGHT)
            {
                // point is to the right of rectangle
                y = y1 + (y2 - y1) * (x_max - x1) / (x2 - x1);
                x = x_max;
            }
            else if (code_out & LEFT)
            {
                // point is to the left of rectangle
                y = y1 + (y2 - y1) * (x_min - x1) / (x2 - x1);
                x = x_min;
            }

            // Now intersection point x,y is found We replace point outside rectangle by intersection point
            if (code_out == code1)
            {
                x1 = x;
                y1 = y;
                code1 = computeCode(x1, y1);
            }
            else
            {
                x2 = x;
                y2 = y;
                code2 = computeCode(x2, y2);
            }
        }
    }
    if (accept)
    {
        printf("Line accepted from %d, %d to %d, %d", &x1, &y1, &x2, &y2);
        // Here the user can add code to display the rectangle
        // along with the accepted (portion of) lines

        myCleardevice();
        drawBoundary();
        draw(x1,y1,x2,y2);

    }
    else
        printf("Line Rejected");
}



// Driver code
int main()
{
    int gd = DETECT, gm;
    int x1, x2, y1, y2, ans;
    // float h, w;
    initgraph (&gd, &gm, "C:\\TC\\BGI");

    drawBoundary();
    x1=0;
    y1=0;
    x2=200;
    y2=220;
    draw(x1,y1,x2,y2);

    printf("Press 1 to clip!\n");
    scanf("%d", &ans);

    if(ans == 1)
        cohenSutherlandClip(x1,y1,x2,y2);

    getch();
    // return 0;
}
// ##############################

// ##############################
// ###### Liang barsky ##########
#include<stdio.h>
#include<dos.h>
#include<conio.h>
#include<graphics.h>
int x1, y1, x2, y2, xmin, ymin, xmax, ymax;
void drawBoundary() {
    rectangle(100, 100, 400, 400);
}
void lb() {

    int xx1, yy1, xx2, yy2, dx, dy, i;

    int p[4], q[4];

    float t1, t2, t[4];

    dx = x2 - x1;
    dy = y2 - y1;
    // Liang Basky Formula
    // P Array
    p[0] = -dx;
    p[1] = dx;
    p[2] = -dy;
    p[3] = dy;

    // Q Array
    q[0] = x1 - xmin;
    q[1] = xmax - x1;
    q[2] = y1 - ymin;
    q[3] = ymax - y1;

    t1 = 0;   //max(0,tx)
    t2 = 1;   //min(1,tx)

    cleardevice();
    drawBoundary();
    for(i=0;i < 4;i++) {
        if(p[i] != 0) {
            t[i] = (float) q[i] / p[i];
            if(p[i] < 0) {
                if(t[i] > t1)
                    t1 = t[i];
            }
            else {
                if(t[i] < t2)
                    t2 = t[i];
            }
        } else {
            if(p[i] == 0 && q[i] < 0)
                printf("\nLine completely outside the window");
        }
    }

    if (t1 < t2) {
        xx1 = x1 + t1 * dx;
        yy1 = y1 + t1 * dy;

        xx2 = x1 + t2 * dx;
        yy2 = y1 + t2 * dy;
        setcolor(WHITE);
        line(xx1, yy1, xx2, yy2);
    } else{
        printf("\nLine lies out of the window");
    }
    system("pause");
}
int main()
{
    
    int gd = DETECT, gm, ans;
    initgraph (&gd, &gm, "C:\\TC\\BGI");
    
    xmin = 100; ymin = 100; xmax = 400; ymax = 400;
    setcolor(RED);
    drawBoundary();
    x1 = 0; y1 = 0; x2 = 200; y2 = 250;
    line(x1,y1,x2,y2);

    printf("Press 1 to Clip");
    scanf("%d", &ans);
    if(ans) {
        lb();
    }
    return 0;
}
// ##############################