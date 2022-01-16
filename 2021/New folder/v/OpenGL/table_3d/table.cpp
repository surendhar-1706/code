#include <GL/GLUT.h>

void init() {
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluPerspective(45, 1, 1, 200);
}

float angle = -30;
int state = 1;
void draw() {
glClear(GL_COLOR_BUFFER_BIT);
glMatrixMode(GL_MODELVIEW);
glLoadIdentity();

//-4 in y
glTranslatef(0, 0, -17.5);
glRotatef(25, 1, 0, 0);
glRotatef(angle, 0, 1, 0);
glBegin(GL_QUADS);

//Left
glColor3f(0.8039, 0.498, 0.196);
glVertex3f(-4, 4, 4);
glVertex3f(-4, 0, 4);
glVertex3f(-4, 0, -2);
glVertex3f(-4, 4, -2);

//Right
glColor3f(0.8039, 0.498, 0.196);
glVertex3f(4, 4, 4);
glVertex3f(4, 0, 4);
glVertex3f(4, 0, -2);
glVertex3f(4, 4, -2);

// Drawer back side
glColor3f(0.8039, 0.498, 0.196);
glVertex3f(2, 4, -2);
glVertex3f(2, 1, -2);
glVertex3f(4, 1, -2);
glVertex3f(4, 4, -2);


// 1st Drawer
glColor3f(1, 0, 0);
glVertex3f(2, 4, 4);
glVertex3f(2, 3, 4);
glVertex3f(4, 3, 4);
glVertex3f(4, 4, 4);

//1st Drawer Left Side
glVertex3f(2, 4, 4);
glVertex3f(2, 3, 4);
glVertex3f(2, 3, -2);
glVertex3f(2, 4, -2);

// 2nd Drawer
//glColor3f(0, 1, 0);
//glVertex3f(2, 3, 4);
//glVertex3f(2, 2, 4);
//glVertex3f(4, 2, 4);
//glVertex3f(4, 3, 4);
//
////2nd Drawer Left Side
//glVertex3f(2, 3, 4);
//glVertex3f(2, 2, 4);
//glVertex3f(2, 2, -2);
//glVertex3f(2, 3, -2);
//
////3rd Drawer
//glColor3f(0, 0, 1);
//glVertex3f(2, 2, 4);
//glVertex3f(2, 1, 4);
//glVertex3f(4, 1, 4);
//glVertex3f(4, 2, 4);
//
////3rd Drawer Left Side
//glVertex3f(2, 2, 4);
//glVertex3f(2, 1, 4);
//glVertex3f(2, 1, -2);
//glVertex3f(2, 2, -2);

//Top
glColor3f(0.588, 0.294, 0);
glVertex3f(-4, 4, 4);
glVertex3f(4, 4, 4);
glVertex3f(4, 4, -2);
glVertex3f(-4, 4, -2);

glEnd();
glutSwapBuffers();
}

void update(int val) {
switch(state) {
case 1: {
angle += 1;
if(angle > 30) state = -1;
break;
}
case -1: {
angle -= 1;
if(angle < -30) state = 1;
break;
}
}
glutPostRedisplay();
glutTimerFunc(30, update, 0);
}

int main(int argc, char** argv) {
glutInit(&argc, argv);
glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
glutInitWindowSize(600, 600);
glutCreateWindow("Study Table");
glutDisplayFunc(draw);
init();
update(0);
glutMainLoop();
return 0;
}
