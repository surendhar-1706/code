//#include <GL/glut.h>
//#include <math.h>
//#include <time.h>
//#include <bits/stdc++.h>
//using namespace std; 
//void delay(unsigned int mseconds)
//{
//    clock_t goal = mseconds + clock();
//    while (goal > clock())
//        ;
//}
//void drawline(int x, int y){
//	glBegin(GL_POLYGON);
//		glColor3f(0.5, 0.35, 0.05);
//		glVertex2f(x, y);
//		glVertex2f(x+10, y);
//		glVertex2f(x+10, y+10);
//		glVertex2f(x, y+10);
//	glEnd();
//}
//void rotation(){
//	float theta = 0.0;
//	int px = 100, py = 100;
//	int cx = 50, cy = 50;
//    while (1) {
//        glClear(GL_COLOR_BUFFER_BIT);
//        int xf, yf;
//        theta = theta + 0.05;
//        if (theta >= (2.0 * 3.14159))
//            theta = theta - (2.0 * 3.14159);
//        xf = cx + (int)((float)(px - cx) * cos(theta))
//             - ((float)(py - cy) * sin(theta));
//        yf = cy + (int)((float)(px - cx) * sin(theta))
//             + ((float)(py - cy) * cos(theta));
//        drawline(cx, cy);
//        drawline(xf, yf);
//        glFlush();
//        delay(10);
//    }
//}
//void scaling() {
//	while(true) {
//		for(int x=0,y=0;x<100 && y<100 ;x++,y++)
//		{
//			glClear(GL_COLOR_BUFFER_BIT);
//			glBegin(GL_POLYGON);
//				glColor3f(0.5, 0.35, 0.05);
//				glVertex2f(x,y);
//				glVertex2f(-x,y);
//				glVertex2f(-x,-y);
//				glVertex2f(x,-y);
//			glEnd();
//			glFlush();
//			delay(10);
//		}
//		for(int x=100,y=100;x>0 && y>0 ;x--,y--)
//		{
//			glClear(GL_COLOR_BUFFER_BIT);
//			glBegin(GL_POLYGON);
//				glColor3f(0.5, 0.35, 0.05);
//				glVertex2f(x,y);
//				glVertex2f(-x,y);
//				glVertex2f(-x,-y);
//				glVertex2f(x,-y);
//			glEnd();
//			glFlush();
//			delay(10);
//		}
//	}
//}
//void translate() {
//	while(true){
//		for(int x=-5, y=-5; x<100; x++){
//			glClear(GL_COLOR_BUFFER_BIT);
//			drawline(x, y);	
//			glFlush();
//			delay(10);
//		}
//		for(int x=100, y=-5; y<100; y++){
//			glClear(GL_COLOR_BUFFER_BIT);
//			drawline(x, y);	
//			glFlush();
//			delay(10);
//		}
//		for(int x=100, y=100; x>-5; x--){
//			glClear(GL_COLOR_BUFFER_BIT);
//			drawline(x, y);	
//			glFlush();
//			delay(10);
//		}
//		for(int x=-5, y=100; y>-5; y--){
//			glClear(GL_COLOR_BUFFER_BIT);
//			drawline(x, y);	
//			glFlush();
//			delay(10);
//		}
//	}
//}
//int main(int argc, char** argv) {
//	cout<<"Enter 1. Translation , 2. Rotation , 3. Scaling , 4. Reflection"<<endl;
//	int x;
//	cin>>x;
//	if(x==1){
//	  glutInit(&argc, argv);
//	  glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
//	
//	  glutInitWindowPosition(80, 80);
//	  glutInitWindowSize(600, 600);
//	  glutCreateWindow("TRANSLATE");
//	  
//	  glClearColor(1.0, 1.0, 1.0, 1.0);
//	  glClear(GL_COLOR_BUFFER_BIT);
//	  gluOrtho2D(-250, 250, -250, 250);
//	
//	  glutDisplayFunc(translate);
//	  
//	  glutMainLoop();	
//	}
//  	else if(x==2){
//  	  glutInit(&argc, argv);
//	  glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
//	
//	  glutInitWindowPosition(80, 80);
//	  glutInitWindowSize(600, 600);
//	  glutCreateWindow("ROTATION");
//	  
//	  glClearColor(1.0, 1.0, 1.0, 1.0);
//	  glClear(GL_COLOR_BUFFER_BIT);
//	  gluOrtho2D(-250, 250, -250, 250);
//	
//	  glutDisplayFunc(rotation);
//	  
//	  glutMainLoop();
//	}
//	else if(x==3){
//		glutInit(&argc, argv);
//	  glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
//	
//	  glutInitWindowPosition(80, 80);
//	  glutInitWindowSize(600, 600);
//	  glutCreateWindow("SCALING");
//	  
//	  glClearColor(1.0, 1.0, 1.0, 1.0);
//	  glClear(GL_COLOR_BUFFER_BIT);
//	  gluOrtho2D(-250, 250, -250, 250);
//	
//	  glutDisplayFunc(scaling);
//	  
//	  glutMainLoop();
//	}
//}
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

void mainDisplay() {
	glClear (GL_COLOR_BUFFER_BIT);
	//glScalef(2, 2, 0);
	//glRotatef(50, 2, 2, 0);
	glTranslatef(5, 2, 0);
	
	glBegin(GL_QUADS);
		glVertex2f(4, 2);
		glVertex2f(2, 2);
		glVertex2f(2, 4);
		glVertex2f(4, 4);
	glEnd();
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
