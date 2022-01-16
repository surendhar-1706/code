#include <GL/GLUT.h>
#include <iostream>
using namespace std;

float angle = 55;
int state = 1;
// -5.6
float X = 0;
int stickPosition = 1;

void init() {
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluPerspective(45, 1, 1, 200);
}

void hand(bool sign) {
// sign : 1 -> Positive 0 -> Negative
int x1 = sign ? 1 : -1;
int x2 = sign ? 3 : -3;
float dif = sign ? 0.5 : -0.5;

//Right Hand Front
glVertex3f(x1, -1.7, 1);
glVertex3f(x1, -2.1, 1);
glVertex3f(x2, -2.1, 1);
glVertex3f(x2, -1.7, 1);

//Right Hand Back
glVertex3f(x1, -1.7, 1.5);
glVertex3f(x1, -2.1, 1.5);
glVertex3f(x2, -2.1, 1.5);
glVertex3f(x2, -1.7, 1.5);

//Right Hand Right
glVertex3f(x2, -1.7, 1);
glVertex3f(x2, -2.1, 1);
glVertex3f(x2, -2.1, 1.5);
glVertex3f(x2, -1.7, 1.5);

//Right Hand Left
glVertex3f(x1, -1.7, 1);
glVertex3f(x1, -2.1, 1);
glVertex3f(x1, -2.1, 1.5);
glVertex3f(x1, -1.7, 1.5);

}

void stick() {

if(stickPosition == 1) {
glColor3f(1, 0, 0);
glVertex3f(3, -1.8, 1.5);
glVertex3f(3, -0, 1.5);
glVertex3f(3.5, -0, 1.5);
glVertex3f(3.5, -1.8, 1.5);


glColor3f(0, 1, 0);
glVertex3f(-3, -2.1, 1.5);
glVertex3f(-3, -3.9, 1.5);
glVertex3f(-3.5, -3.9, 1.5);
glVertex3f(-3.5, -2.1, 1.5);
glColor3f(1, 1, 1);
} else {
glColor3f(1, 0, 0);
glVertex3f(-3, -1.8, 1.5);
glVertex3f(-3, -0, 1.5);
glVertex3f(-3.5, -0, 1.5);
glVertex3f(-3.5, -1.8, 1.5);


glColor3f(0, 1, 0);
glVertex3f(3, -2.1, 1.5);
glVertex3f(3, -3.9, 1.5);
glVertex3f(3.5, -3.9, 1.5);
glVertex3f(3.5, -2.1, 1.5);
glColor3f(1, 1, 1);
}
}

void leg(bool pos) {
// Sign: 1 -> Positive 0 ->Negative
float x1 = pos ? 0.2 : -0.2;
float x2 = pos ? 0.6 : -0.6;
//Left leg Front
glVertex3f(x1, -3, 1.5);
glVertex3f(x1, -4.8, 1.5);
glVertex3f(x2, -4.8, 1.5);
glVertex3f(x2, -3, 1.5);

//Left leg Back
glVertex3f(x1, -3, 1);
glVertex3f(x1, -4.8, 1);
glVertex3f(x2, -4.8, 1);
glVertex3f(x2, -3, 1);

//Left leg Left
glVertex3f(x2, -3, 1.5);
glVertex3f(x2, -4.8, 1.5);
glVertex3f(x2, -4.8, 1);
glVertex3f(x2, -3, 1);

//Left leg Right
glVertex3f(x1, -3, 1.5);
glVertex3f(x1, -4.8, 1.5);
glVertex3f(x1, -4.8, 1);
glVertex3f(x1, -3, 1);
}

void robot() {
glTranslatef(X, 1, -15);
glRotatef(angle, 0, 1, 0);
glScalef(0.5, 0.5, 0.5);
glBegin(GL_QUADS);
glColor3f(1, 1, 1);
//Front
glVertex3f(-2, 2, 2);
glVertex3f(-2, 0, 2);
glVertex3f(2, 0, 2);
glVertex3f(2, 2, 2);

//Back
glVertex3f(-2, 2, 0);
glVertex3f(-2, 0, 0);
glVertex3f(2, 0, 0);
glVertex3f(2, 2, 0);

//Left
glVertex3f(-2, 2, 2);
glVertex3f(-2, 0, 2);
glVertex3f(-2, 0, 0);
glVertex3f(-2, 2, 0);

//Right
glVertex3f(2, 2, 2);
glVertex3f(2, 0, 2);
glVertex3f(2, 0, 0);
glVertex3f(2, 2, 0);

//Top
glVertex3f(-2, 2, 2);
glVertex3f(2, 2, 2);
glVertex3f(2, 2, 0);
glVertex3f(-2, 2, 0);

//Neck Front
glVertex3f(-0.5, 0.5, 2);
glVertex3f(-0.5, -1, 2);
glVertex3f(0.5, -1, 2);
glVertex3f(0.5, 0.5, 2);

// Neck Back
glVertex3f(-0.5, 0.5, 0);
glVertex3f(-0.5, -1, 0);
glVertex3f(0.5, -1, 0);
glVertex3f(0.5, 0.5, 0);

//Neck Left
glVertex3f(-0.5, 0.5, 2);
glVertex3f(-0.5, -1, 2);
glVertex3f(-0.5, -1, 0);
glVertex3f(-0.5, 0.5, 0);

//Neck Right
glVertex3f(0.5, 0.5, 2);
glVertex3f(0.5, -1, 2);
glVertex3f(0.5, -1, 0);
glVertex3f(0.5, 0.5, 0);

//Body Front
glVertex3f(-1, -1, 2);
glVertex3f(-1, -3, 2);
glVertex3f(1, -3, 2);
glVertex3f(1, -1, 2);

//Body Back
glVertex3f(-1, -1, 0);
glVertex3f(-1, -3, 0);
glVertex3f(1, -3, 0);
glVertex3f(1, -1, 0);

//Body Left
glVertex3f(-1, -1, 2);
glVertex3f(-1, -3, 2);
glVertex3f(-1, -3, 0);
glVertex3f(-1, -1, 0);

//Body Right
glVertex3f(1, -3, 2);
glVertex3f(1, -1, 2);
glVertex3f(1, -1, 0);
glVertex3f(1, -3, 0);

hand(1);
hand(0);
stick();

leg(1);
leg(0);
//Left Eye
glColor3f(0, 0, 1);
glVertex3f(-0.4, 1.2, 2.2);
glVertex3f(-1, 1.2, 2.2);
glVertex3f(-1, 0.8, 2.2);
glVertex3f(-0.4, 0.8, 2.2);

//Right Eye
glVertex3f(0.4, 1.2, 2.2);
glVertex3f(1, 1.2, 2.2);
glVertex3f(1, 0.8, 2.2);
glVertex3f(0.4, 0.8, 2.2);
glColor3f(1, 1, 1);

glEnd();
}

void draw() {
glClear(GL_COLOR_BUFFER_BIT);
glMatrixMode(GL_MODELVIEW);
glLoadIdentity();
robot();
glutSwapBuffers();
}
 
void update(int val) {
switch(state) {
case 1: {
X += 0.3;
if(X > 4.6) {
state = -1;
angle = -angle;
}
break;
}
case -1: {
X -= 0.3;
if(X < -4.6) {
state = 1;
angle = -angle;
}
break;
}
}
stickPosition = -stickPosition;
glutPostRedisplay();
glutTimerFunc(250, update, 0);
}
 
int main(int argc, char** argv) {
glutInit(&argc, argv);
glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
glutInitWindowSize(600, 600);
glutCreateWindow("Robot");
glutDisplayFunc(draw);
init();
update(0);
glutMainLoop();
return 0;
}

