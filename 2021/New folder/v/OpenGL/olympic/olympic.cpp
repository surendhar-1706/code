#include <stdio.h>
#include <iostream>
#include <math.h>
#include <GL/glut.h>
using namespace std;

void myInit (void) {
	glClearColor(1.0, 1.0, 1.0, 0.0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluOrtho2D(0, 15, -10, 10);
}

void drawCircle(GLfloat x, GLfloat y, GLfloat radius){
	int i;
	int lineAmount = 100; 
	GLfloat twicePi = 2.0f * M_PI;
	glLineWidth(2);
	glBegin(GL_LINE_LOOP);
		for(i = 0; i <= lineAmount;i++) { 
			glVertex2f(
			    x + (radius * cos(i *  twicePi / lineAmount)), 
			    y + (radius* sin(i * twicePi / lineAmount))
			);
		}
	glEnd();
}

void olympics() {
	glColor3f(0, 0, 1); drawCircle(3, 2, 0.5);
	glColor3f(0, 0, 0); drawCircle(4.2, 2, 0.5);
	glColor3f(1, 0, 0); drawCircle(5.4, 2, 0.5);
	glColor3f(1, 1, 0); drawCircle(3.6, 1.5, 0.5);
	glColor3f(0, 1, 0); drawCircle(4.8, 1.5, 0.5);
}

void xReflection() {
	glColor3f(0, 0, 1); drawCircle(3, -1, 0.5);
	glColor3f(0, 0, 0); drawCircle(4.2, -1, 0.5);
	glColor3f(1, 0, 0); drawCircle(5.4, -1, 0.5);
	glColor3f(1, 1, 0); drawCircle(3.6, -0.5, 0.5);
	glColor3f(0, 1, 0); drawCircle(4.8, -0.5, 0.5);
}

void mainDisplay() {
	glClear (GL_COLOR_BUFFER_BIT);
	glScalef(1.25, 1.25, 0);
	olympics();
	glBegin(GL_LINES);
		glColor3f(0, 0, 0);
		glVertex2f(2.5, 0.5);
		glVertex2f(6, 0.5);
	glEnd();
	xReflection();
//	yReflection();
	glFlush ();
}

int main(int argc, char** argv) {	
	glutInit(&argc, argv);
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
	glutInitWindowSize (640, 480);
	glutInitWindowPosition (100, 150);
	glutCreateWindow ("Olympics");
	glutDisplayFunc(mainDisplay);
	myInit ();
	glutMainLoop();

}
