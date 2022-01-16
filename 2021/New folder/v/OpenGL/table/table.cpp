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

	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.12,0.6);
	glVertex2f(0.12,0.2);
	glVertex2f(0.14,0.2);
	glVertex2f(0.14,0.6);
	glEnd();  

	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.56,0.6);
	glVertex2f(0.56,0.2);
	glVertex2f(0.58,0.2);
	glVertex2f(0.58,0.6);
	glEnd();  
	
	glBegin(GL_POLYGON);
	glColor3f(0.5f, 0.35f, 0.05f);
	glVertex2f(0.2,0.4);
	glVertex2f(0.1,0.6);
	glVertex2f(0.6,0.6);
	glVertex2f(0.7,0.4);
	glEnd();    


	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.22,0.4);
	glVertex2f(0.22,0.1);
	glVertex2f(0.24,0.1);
	glVertex2f(0.24,0.4);
	glEnd();

	glBegin(GL_POLYGON);
	glColor3f(0.1,0.0,0.0);
	glVertex2f(0.66,0.4);
	glVertex2f(0.66,0.1);
	glVertex2f(0.68,0.1);
	glVertex2f(0.68,0.4);
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
     
    glutCreateWindow("Table Drawing");
    initialize();
     
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}

