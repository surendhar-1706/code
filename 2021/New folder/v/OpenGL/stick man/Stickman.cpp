#include <stdio.h>
#include <iostream>
#include <math.h>
#include <GL/glut.h>
using namespace std;

int state = 1;
int pos = -3;
int lX = 4, lY = 5, rX = 6, rY = 5;

void myInit (void) {
	glClearColor(1.0, 1.0, 1.0, 0.0);
	glColor3f(0, 0, 0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluOrtho2D(0, 20, 0, 20);
}

void drawCircle(float cx, float cy, float r, int num_segments) {
	glBegin(GL_POLYGON);
	glColor3f(0, 1, 1);
	for (int i = 0; i < 360; i++) {
	    float angle_theta = i * 3.142 / 180;
	    glVertex2f(cx + r * cos(angle_theta), cy + r * sin(angle_theta));
	}
	glEnd();
}

void mainDisplay() {
	glClear (GL_COLOR_BUFFER_BIT);
	glTranslatef(pos, 0, 0);
	glBegin(GL_LINES);
	// Left leg
	glVertex2f(5, 5);
	glVertex2f(4, 4);
	
	// Body
	glVertex2f(5, 7);
	glVertex2f(5, 5);
	
	// Left hand
	glVertex2f(5, 6);
	glVertex2f(lX, lY);
//	glVertex2f(3, 6);
	
	//Right leg
	glVertex2f(5, 5);
	glVertex2f(6, 4);
	
	// Right hand		
	glVertex2f(5, 6);
	glVertex2f(rX, rY);
//	glVertex2f(7, 6);
	glEnd();
	// 4 - left, 6 - Right, 9 - Top, 7 - Bottom
	drawCircle(5, 8, 1, 100);	
	glColor3f(0, 0, 0);
	
	glBegin(GL_LINES);
		glVertex2f(4.5, 8.2);
		glVertex2f(4.65, 8.2);
	glEnd();
	
	glBegin(GL_LINES);
		glVertex2f(5.2, 8.2);
		glVertex2f(5.35, 8.2);
	glEnd();
	
	glBegin(GL_LINES);
		glVertex2f(5, 7.6);
		glVertex2f(5, 7.8);
	glEnd();

	glTranslatef(-pos, 0, 0);
	glFlush();
}

void Timer(int val) {
	switch(state) {
		case 1: {
			pos += 1;
			if(pos > 13) {
				state = -1;
				rX -= 1;
				rY -= 1;
			}
			else if(pos > 12) {
				rX += 1;
				rY += 1;
			}
			break;
		}
		case -1: {
			pos -= 1;
			if(pos < -3) {
				lX += 1;
				lY -= 1;
				state = 1;
			} else if(pos < -2) {
				lX -= 1;
				lY += 1;
			} else 
			break;
		}
	}
	glutPostRedisplay();
	glutTimerFunc(250, Timer, 0);
}

int main(int argc, char** argv) {	
	glutInit(&argc, argv);
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
	glutInitWindowSize (640, 480);
	glutInitWindowPosition (100, 150);
	glutCreateWindow ("Stick Man");
	glutDisplayFunc(mainDisplay);
	myInit ();
	Timer(0);
	glutMainLoop();

}
