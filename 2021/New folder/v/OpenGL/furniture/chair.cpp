#include<GL/glut.h>

void display(void)
{
	glClear(GL_COLOR_BUFFER_BIT);

	glBegin(GL_POLYGON);
	glColor3f(0.9,0.9,0.9);
	glVertex2f(0.0,0.0);
	glVertex2f(1.0,0.0);
	glVertex2f(1.0,1.0);
	glVertex2f(0.0,1.0);
	glEnd();

	//backleft leg
	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.22,0.4);
	glVertex2f(0.22,0.15);
	glVertex2f(0.24,0.15);
	glVertex2f(0.24,0.4);
	glEnd();  

	//backright leg
	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.36,0.4);
	glVertex2f(0.36,0.25);
	glVertex2f(0.38,0.25);
	glVertex2f(0.38,0.4);
	glEnd();  
	
	//frontright leg
	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.46,0.4);
	glVertex2f(0.46,0.18);
	glVertex2f(0.48,0.18);
	glVertex2f(0.48,0.4);
	glEnd();
	
	//frontleft leg
	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.32,0.4);
	glVertex2f(0.32,0.15);
	glVertex2f(0.34,0.15);
	glVertex2f(0.34,0.4);
	glEnd();
	
	//balance
	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.2,0.4);
	glVertex2f(0.2,0.7);
	glVertex2f(0.4,0.8);
	glVertex2f(0.4,0.5);
	glEnd();    

	//base
	glBegin(GL_POLYGON);
	glColor3f(0.5f, 0.35f, 0.05f);
	glVertex2f(0.2,0.4);
	glVertex2f(0.4,0.5);
	glVertex2f(0.5,0.4);
	glVertex2f(0.3,0.3);
	glEnd();

	glFlush();
}
void initialize(void) 
{
	glClearColor(0.0,0.0,0.0,0.0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glOrtho(0.0,1.0,0.0,1.0,-1.0,1.0);
}
int main (int argc, char** argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
     
    glutInitWindowSize(1366, 768);
    glutInitWindowPosition(0, 0);
     
    glutCreateWindow("Chair");
    initialize();
     
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}


