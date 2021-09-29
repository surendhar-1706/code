#include <stdio.h>
#include <iostream>
#include <math.h>
#include <GL/glut.h>
using namespace std;

void myInit (void) {
	glClearColor(0, 0, 0, 0.0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluOrtho2D(0, 20, 0, 20);
}

void triangle() {
	glBegin(GL_TRIANGLES);
		glColor3f(1, 0.6, 0.007);
		glVertex2f(1, 1);
		glVertex2f(1.5, 2);
		glVertex2f(2, 1);
	glEnd();
	glBegin(GL_TRIANGLES);
		glColor3f(1, 0.0901, 0.266);
		glVertex2f(1.7, 0.5);
		glVertex2f(2.22, 1.5);
		glVertex2f(2.7, 0.5);
	glEnd();
}
void drawTriangles(int lvl) {
	for(float i=1.5; i<=16.5; i+=1.5) {
		glTranslatef(i, lvl, 0);
		triangle();
		glTranslatef(-i, -lvl, 0);
	}
}

void mainDisplay() {
	glClear (GL_COLOR_BUFFER_BIT);
	for(int i=0; i<18; i++) {
		glTranslatef(0, i, 0);
			triangle();
		glTranslatef(0, -i, 0);
		drawTriangles(i);	
	}
	glFlush();
}

int main(int argc, char** argv) {	
	glutInit(&argc, argv);
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
	glutInitWindowSize (640, 480);
	glutInitWindowPosition (100, 150);
	glutCreateWindow ("Pattern");
	glutDisplayFunc(mainDisplay);
	myInit ();
	glutMainLoop();

}
