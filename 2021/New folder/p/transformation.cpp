//#######################################
//#Translation, Rotation & Scaling####
#include <stdio.h>
#include <iostream>
#include <GL/glut.h>
using namespace std;

void myInit (void) {
	glClearColor(1.0, 1.0, 1.0, 0.0);
	glColor3f(0, 0, 0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluOrtho2D(0, 20, 0, 20);
}

void draw() {
	glBegin(GL_QUADS);
		glVertex2f(4, 2);
		glVertex2f(2, 2);
		glVertex2f(2, 4);
		glVertex2f(4, 4);
		
		
	glEnd();

}
void mainDisplay() {
	glClear (GL_COLOR_BUFFER_BIT);
	draw();
	glScalef(2, 2, 0);
	glRotatef(50, 2, 2, 0);
	draw();
	glTranslatef(5, 2, 0);
	draw();
	glFlush ();
}

int main(int argc, char** argv) {	
	glutInit(&argc, argv);
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
	glutInitWindowSize (640, 480);
	glutInitWindowPosition (100, 150);
	glutCreateWindow ("Transformation");
	glutDisplayFunc(mainDisplay);
	myInit ();
	glutMainLoop();

}
//#######################################

//#######################################
//#STICK MAN####
//#include <stdio.h>
//#include <iostream>
//#include <math.h>
//#include <GL/glut.h>
//using namespace std;
//
//int state = 1;
//int pos = -3;
//int lX = 4, lY = 5, rX = 6, rY = 5;
//
//void myInit (void) {
//	glClearColor(1.0, 1.0, 1.0, 0.0);
//	glColor3f(0, 0, 0);
//	glMatrixMode(GL_PROJECTION);
//	glLoadIdentity();
//	gluOrtho2D(0, 20, 0, 20);
//}
//
//void drawCircle(float cx, float cy, float r, int num_segments) {
//	glBegin(GL_POLYGON);
//	glColor3f(0, 1, 1);
//	for (int i = 0; i < 360; i++) {
//	    float angle_theta = i * 3.142 / 180;
//	    glVertex2f(cx + r * cos(angle_theta), cy + r * sin(angle_theta));
//	}
//	glEnd();
//}
//
////void DrawArc(float cx, float cy, float r, float start_angle, float arc_angle, int num_segments) {
////	float theta = arc_angle / float(num_segments - 1);//theta is now calculated from the arc angle instead, the - 1 bit comes from the fact that the arc is open
////	float tangetial_factor = tanf(theta);	
////	float radial_factor = cosf(theta);
////	
////	float x = r * cosf(start_angle);//we now start at the start angle
////	float y = r * sinf(start_angle); 
////	
////	glBegin(GL_LINE_STRIP);//since the arc is not a closed curve, this is a strip now
////	for(int ii = 0; ii < num_segments; ii++)
////	{ 
////		glVertex2f(x + cx, y + cy);
////	
////		float tx = -y; 
////		float ty = x; 
////	
////		x += tx * tangetial_factor; 
////		y += ty * tangetial_factor; 
////	
////		x *= radial_factor; 
////		y *= radial_factor; 
////	} 
////	glEnd(); 
////}
//
//void mainDisplay() {
//	glClear (GL_COLOR_BUFFER_BIT);
//	glTranslatef(pos, 0, 0);
//	glBegin(GL_LINES);
//	// Left leg
//	glVertex2f(5, 5);
//	glVertex2f(4, 4);
//	
//	// Body
//	glVertex2f(5, 7);
//	glVertex2f(5, 5);
//	
//	// Left hand
//	glVertex2f(5, 6);
//	glVertex2f(lX, lY);
//	
//	//Right leg
//	glVertex2f(5, 5);
//	glVertex2f(6, 4);
//	
//	// Right hand		
//	glVertex2f(5, 6);
//	glVertex2f(rX, rY);
//	glEnd();
//	// 4 - left, 6 - Right, 9 - Top, 7 - Bottom
//	drawCircle(5, 8, 1, 100);	
//	glColor3f(0, 0, 0);
//	
//	glBegin(GL_LINES);
//		glVertex2f(4.5, 8.2);
//		glVertex2f(4.65, 8.2);
//	glEnd();
//	
//	glBegin(GL_LINES);
//		glVertex2f(5.2, 8.2);
//		glVertex2f(5.35, 8.2);
//	glEnd();
//	
//	glBegin(GL_LINES);
//		glVertex2f(5, 7.6);
//		glVertex2f(5, 7.8);
//	glEnd();
//
//	glTranslatef(-pos, 0, 0);
//	glFlush();
//}
//
//void Timer(int val) {
//	switch(state) {
//		case 1: {
//			pos += 1;
//			if(pos > 13) {
//				state = -1;
//				rX -= 1;
//				rY -= 1;
//			}
//			else if(pos > 12) {
//				rX += 1;
//				rY += 1;
//			}
//			break;
//		}
//		case -1: {
//			pos -= 1;
//			if(pos < -3) {
//				lX += 1;
//				lY -= 1;
//				state = 1;
//			} else if(pos < -2) {
//				lX -= 1;
//				lY += 1;
//			} else 
//			break;
//		}
//	}
//	glutPostRedisplay();
//	glutTimerFunc(250, Timer, 0);
//}
//
//int main(int argc, char** argv) {	
//	glutInit(&argc, argv);
//	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
//	glutInitWindowSize (640, 480);
//	glutInitWindowPosition (100, 150);
//	glutCreateWindow ("Stick Man");
//	glutDisplayFunc(mainDisplay);
//	myInit ();
//	Timer(0);
//	glutMainLoop();
//
//}
////#######################################
//
//// ###########################
//// ######### OLYMPICS ########
//#include <stdio.h>
//#include <iostream>
//#include <math.h>
//#include <GL/glut.h>
//using namespace std;
//
//void myInit (void) {
//	glClearColor(1.0, 1.0, 1.0, 0.0);
//	glMatrixMode(GL_PROJECTION);
//	glLoadIdentity();
//	gluOrtho2D(-15, 15, -10, 10);
//}
//
//void drawCircle(GLfloat x, GLfloat y, GLfloat radius){
//	int i;
//	int lineAmount = 100; 
//	GLfloat twicePi = 2.0f * M_PI;
//	glLineWidth(2);
//	glBegin(GL_LINE_LOOP);
//		for(i = 0; i <= lineAmount;i++) { 
//			glVertex2f(
//			    x + (radius * cos(i *  twicePi / lineAmount)), 
//			    y + (radius* sin(i * twicePi / lineAmount))
//			);
//		}
//	glEnd();
//}
//
//void olympics() {
//	glColor3f(0, 0, 1); drawCircle(3, 2, 0.5);
//	glColor3f(0, 0, 0); drawCircle(4.2, 2, 0.5);
//	glColor3f(1, 0, 0); drawCircle(5.4, 2, 0.5);
//	glColor3f(1, 1, 0); drawCircle(3.6, 1.5, 0.5);
//	glColor3f(0, 1, 0); drawCircle(4.8, 1.5, 0.5);
//}
//
//void xReflection() {
//	glColor3f(0, 0, 1); drawCircle(3, -1, 0.5);
//	glColor3f(0, 0, 0); drawCircle(4.2, -1, 0.5);
//	glColor3f(1, 0, 0); drawCircle(5.4, -1, 0.5);
//	glColor3f(1, 1, 0); drawCircle(3.6, -0.5, 0.5);
//	glColor3f(0, 1, 0); drawCircle(4.8, -0.5, 0.5);
//}
//
//void yReflection() {
//	glColor3f(0, 0, 1); drawCircle(-1, 2, 0.5);
//	glColor3f(0, 0, 0); drawCircle(-2.2, 2, 0.5);
//	glColor3f(1, 0, 0); drawCircle(-3.4, 2, 0.5);
//	glColor3f(1, 1, 0); drawCircle(-1.6, 1.5, 0.5);
//	glColor3f(0, 1, 0); drawCircle(-2.8, 1.5, 0.5);
//}
//
//void mainDisplay() {
//	glClear (GL_COLOR_BUFFER_BIT);
//	glScalef(1.25, 1.25, 0);
//	olympics();
//	glBegin(GL_LINES);
//		glColor3f(0, 0, 0);
//		glVertex2f(-4, 0.5);
//		glVertex2f(6, 0.5);
//	glEnd();
//	glBegin(GL_LINES);
//		glColor3f(0, 0, 0);
//		glVertex2f(1, 3);
//		glVertex2f(1, -3);
//	glEnd();
//	xReflection();
//	yReflection();
//	glFlush ();
//}
//
//int main(int argc, char** argv) {	
//	glutInit(&argc, argv);
//	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
//	glutInitWindowSize (640, 480);
//	glutInitWindowPosition (100, 150);
//	glutCreateWindow ("Olympics");
//	glutDisplayFunc(mainDisplay);
//	myInit ();
//	glutMainLoop();
//
//}
//// ###########################
//
//// ################################
//// ######## Digital Pattern #######
//#include <stdio.h>
//#include <iostream>
//#include <math.h>
//#include <GL/glut.h>
//using namespace std;
//
//void myInit (void) {
//	glClearColor(0, 0, 0, 0.0);
//	glMatrixMode(GL_PROJECTION);
//	glLoadIdentity();
//	gluOrtho2D(0, 20, 0, 20);
//}
//
//void triangle() {
//	glBegin(GL_TRIANGLES);
//		glColor3f(1, 0.6, 0.007);
//		glVertex2f(1, 1);
//		glVertex2f(1.5, 2);
//		glVertex2f(2, 1);
//	glEnd();
//	glBegin(GL_TRIANGLES);
//		glColor3f(1, 0.0901, 0.266);
//		glVertex2f(1.7, 0.5);
//		glVertex2f(2.22, 1.5);
//		glVertex2f(2.7, 0.5);
//	glEnd();
//}
//void drawTriangles(int lvl) {
//	for(float i=1.5; i<=16.5; i+=1.5) {
//		glTranslatef(i, lvl, 0);
//		triangle();
//		glTranslatef(-i, -lvl, 0);
//	}
//}
//
//void mainDisplay() {
//	glClear (GL_COLOR_BUFFER_BIT);
//	for(int i=0; i<18; i++) {
//		glTranslatef(0, i, 0);
//			triangle();
//		glTranslatef(0, -i, 0);
//		drawTriangles(i);	
//	}
//	glFlush();
//}
//
//int main(int argc, char** argv) {	
//	glutInit(&argc, argv);
//	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
//	glutInitWindowSize (640, 480);
//	glutInitWindowPosition (100, 150);
//	glutCreateWindow ("Pattern");
//	glutDisplayFunc(mainDisplay);
//	myInit ();
//	glutMainLoop();
//
//}
//// ################################
