// ###################
// #### CHAIR ########
#include <GL/glut.h>
void handleResize(int w, int h) {
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluPerspective(45.0, (double)w / (double)h, 1.0, 200.0);
}

float _angle = -90.0f;

void drawScene() {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glMatrixMode(GL_MODELVIEW); 
	glLoadIdentity();
	
	// Adjusts the size of the object
	glTranslatef(0.0f, 0.0f, -20.0f); 
	
	glRotatef(10, 1.0f, 0.0f, 0.0f);
	glRotatef(_angle,0.0f, 1.0f, 0.0f);
	glColor3f(0, 1, 0);
	glBegin(GL_QUADS);
	
	//Front
	glVertex3f(-2.0f, -0.2f, 2.0f);
	glVertex3f(2.0f, -0.2f, 2.0f);
	glVertex3f(2.0f, 0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, 2.0f);
	
	//Right
	glVertex3f(2.0f, -0.2f, -2.0f);
	glVertex3f(2.0f, 0.2f, -2.0f);
	glVertex3f(2.0f, 0.2f, 2.0f);
	glVertex3f(2.0f, -0.2f, 2.0f);
	
	//Back
	glVertex3f(-2.0f, -0.2f, -2.0f);
	glVertex3f(-2.0f, 0.2f, -2.0f);
	glVertex3f(2.0f, 0.2f, -2.0f);
	glVertex3f(2.0f, -0.2f, -2.0f);
	
	//Left
	glVertex3f(-2.0f, -0.2f, -2.0f);
	glVertex3f(-2.0f, -0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, -2.0f);
	
	//top
	glVertex3f(2.0f, 0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, -2.0f);
	glVertex3f(2.0f, 0.2f, -2.0f);
	
	//bottom
	glVertex3f(2.0f, -0.2f, 2.0f);
	glVertex3f(-2.0f, -0.2f, 2.0f);
	glVertex3f(-2.0f, -0.2f, -2.0f);
	glVertex3f(2.0f, -0.2f, -2.0f);
	
	//table front leg
	glColor3f(0,1,1);
	//front
	glVertex3f(1.8f,-0.2f,1.6f);
	glVertex3f(1.4f, -0.2f, 1.6f);
	glVertex3f(1.4f, -3.0f, 1.6f);
	glVertex3f(1.8f, -3.0f, 1.6f);
	
	//back
	glVertex3f(1.8f,-0.2f,1.2f);
	glVertex3f(1.4f, -0.2f, 1.2f);
	glVertex3f(1.4f, -3.0f, 1.2f);
	glVertex3f(1.8f, -3.0f, 1.2f);
	
	//right
	glVertex3f(1.8f,-0.2f,1.6f);
	glVertex3f(1.8f, -0.2f, 1.2f);
	glVertex3f(1.8f, -3.0f, 1.2f);
	glVertex3f(1.8f, -3.0f, 1.6f);
	
	//left
	glVertex3f(1.4f,-0.2f,1.6f);
	glVertex3f(1.4f, -0.2f, 1.2f);
	glVertex3f(1.4f, -3.0f, 1.2f);
	glVertex3f(1.4f, -3.0f, 1.6f);
	
	//back leg
	//front
	glVertex3f(1.8f,-0.2f,-1.2f);
	glVertex3f(1.4f, -0.2f, -1.2f);
	glVertex3f(1.4f, -3.0f, -1.2f);
	glVertex3f(1.8f, -3.0f, -1.2f);
	
	//back
	glVertex3f(1.8f,-0.2f,-1.6f);
	glVertex3f(1.4f, -0.2f, -1.6f);
	glVertex3f(1.4f, -3.0f, -1.6f);
	glVertex3f(1.8f, -3.0f, -1.6f);
	
	//right
	glVertex3f(1.8f,-0.2f,-1.6f);
	glVertex3f(1.8f, -0.2f, -1.2f);
	glVertex3f(1.8f, -3.0f, -1.2f);
	glVertex3f(1.8f, -3.0f, -1.6f);
	
	//left
	glVertex3f(1.4f,-0.2f,-1.6f);
	glVertex3f(1.4f, -0.2f, -1.2f);
	glVertex3f(1.4f, -3.0f, -1.2f);
	glVertex3f(1.4f, -3.0f, -1.6f);
	
	//leg left front
	glVertex3f(-1.8f,-0.2f,1.6f);
	glVertex3f(-1.4f, -0.2f, 1.6f);
	glVertex3f(-1.4f, -3.0f, 1.6f);
	glVertex3f(-1.8f, -3.0f, 1.6f);
	
	//back
	glVertex3f(-1.8f,-0.2f,1.2f);
	glVertex3f(-1.4f, -0.2f, 1.2f);
	glVertex3f(-1.4f, -3.0f, 1.2f);
	glVertex3f(-1.8f, -3.0f, 1.2f);
	
	//right
	glVertex3f(-1.8f,-0.2f,1.6f);
	glVertex3f(-1.8f, -0.2f, 1.2f);
	glVertex3f(-1.8f, -3.0f, 1.2f);
	glVertex3f(-1.8f, -3.0f, 1.6f);
	
	//left
	glVertex3f(-1.4f,-0.2f,1.6f);
	glVertex3f(-1.4f, -0.2f, 1.2f);
	glVertex3f(-1.4f, -3.0f, 1.2f);
	glVertex3f(-1.4f, -3.0f, 1.6f);
	
	//left leg back front
	
	//front
	glVertex3f(-1.8f,-0.2f,-1.2f);
	glVertex3f(-1.4f, -0.2f, -1.2f);
	glVertex3f(-1.4f, -3.0f, -1.2f);
	glVertex3f(-1.8f, -3.0f, -1.2f);
	
	//back
	glVertex3f(-1.8f,-0.2f,-1.6f);
	glVertex3f(-1.4f, -0.2f, -1.6f);
	glVertex3f(-1.4f, -3.0f, -1.6f);
	glVertex3f(-1.8f, -3.0f, -1.6f);
	
	//right
	glVertex3f(-1.8f,-0.2f,-1.6f);
	glVertex3f(-1.8f, -0.2f, -1.2f);
	glVertex3f(-1.8f, -3.0f, -1.2f);
	glVertex3f(-1.8f, -3.0f, -1.6f);
	
	//left	
	glVertex3f(-1.4f,-0.2f,-1.6f);
	glVertex3f(-1.4f, -0.2f, -1.2f);
	glVertex3f(-1.4f, -3.0f, -1.2f);
	glVertex3f(-1.4f, -3.0f, -1.6f);
	
	//chair back
	//front
	glColor3f(1,0,0);
	glVertex3f(-1.8f, 0.2f, -1.8f);
	glVertex3f(1.8f, 0.2f, -1.8f);
	glVertex3f(1.8f, 3.5f, -1.8f);
	glVertex3f(-1.8f, 3.5f, -1.8f);
	
	//back
	glVertex3f(-1.8f, 0.2f, -2.0f);
	glVertex3f(1.8f, 0.2f, -2.0f);
	glVertex3f(1.8f, 3.5f, -2.0f);
	glVertex3f(-1.8f, 3.5f, -2.0f);
	
	glVertex3f(-1.8f, 0.2f, -2.0f);
	glVertex3f(-1.8f, 3.5f, -2.0f);
	glVertex3f(-1.8f, 3.5f, -1.8f);
	glVertex3f(-1.8f, 0.2f, -1.8f);
	
	
	glVertex3f(1.8f, 0.2f, -2.0f);
	glVertex3f(1.8f, 3.5f, -2.0f);
	glVertex3f(1.8f, 3.5f, -1.8f);
	glVertex3f(1.8f, 0.2f, -1.8f);
	
	glVertex3f(-1.8f, 3.5f, -2.0f);
	glVertex3f(-1.8f, 3.5f, -1.8f);
	glVertex3f(1.8f, 3.5f, -1.8f);
	glVertex3f(1.8f, 3.5f, -2.0f);
	glEnd();
	glutSwapBuffers();
}

void update(int value) {
	_angle += 1.0f;
	if (_angle > 360) {
	_angle -= 360;
	}
	
	glutPostRedisplay();
	glutTimerFunc(25, update, 0);
}

int main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
	glutInitWindowSize(600, 600);
	
	glutCreateWindow("Chair");
	glutDisplayFunc(drawScene);
	glutReshapeFunc(handleResize);
	update(0);
	glutMainLoop();
	return 0;
}
// ###################


//###################
//#### TABLE ########
#include <GL/glut.h>
void handleResize(int w, int h) {
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluPerspective(45.0, (double)w / (double)h, 1.0, 200.0);
}

float _angle = -90.0f;

void drawScene() {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glMatrixMode(GL_MODELVIEW); 
	glLoadIdentity();
	
	// Adjusts the size of the object
	glTranslatef(0.0f, 0.0f, -15.0f); 
	
	glRotatef(10, 1.0f, 0.0f, 0.0f);
	glRotatef(_angle,0.0f, 1.0f, 0.0f);
	glColor3f(1, 0.2, 0.2);
	glBegin(GL_QUADS);
	
	//top
	glVertex3f(3.0f, 0.3f, 3.0f);
	glVertex3f(-3.0f, 0.3f, 3.0f);
	glVertex3f(-3.0f, 0.3f, -3.0f);
	glVertex3f(3.0f, 0.3f, -3.0f);
	
	//bottom
	glVertex3f(3.0f, -0.3f, 3.0f);
	glVertex3f(-3.0f, -0.3f, 3.0f);
	glVertex3f(-3.0f, -0.3f, -3.0f);
	glVertex3f(3.0f, -0.3f, -3.0f);
	
	//Front
	glVertex3f(-3.0f, -0.3f, 3.0f);
	glVertex3f(3.0f, -0.3f, 3.0f);
	glVertex3f(3.0f, 0.3f, 3.0f);
	glVertex3f(-3.0f, 0.3f, 3.0f);
	
	//Right
	glVertex3f(3.0f, -0.3f, -3.0f);
	glVertex3f(3.0f, 0.3f, -3.0f);
	glVertex3f(3.0f, 0.3f, 3.0f);
	glVertex3f(3.0f, -0.3f, 3.0f);
	
	//Back
	glVertex3f(-3.0f, -0.3f, -3.0f);
	glVertex3f(-3.0f, 0.3f, -3.0f);
	glVertex3f(3.0f, 0.3f, -3.0f);
	glVertex3f(3.0f, -0.3f, -3.0f);
	
	//Left
	glVertex3f(-3.0f, -0.3f, -3.0f);
	glVertex3f(-3.0f, -0.3f, 3.0f);
	glVertex3f(-3.0f, 0.3f, 3.0f);
	glVertex3f(-3.0f, 0.3f, -3.0f);
	
	// Leg
	glColor3f(0.6, 0.298, 0);
	//front
	glVertex3f(2.0f, -0.3f, 2.5f);
	glVertex3f(1.5f, -0.3f, 2.5f);
	glVertex3f(1.5f, -3.0f, 2.5f);
	glVertex3f(2.0f, -3.0f, 2.5f);
	
	//back
	glVertex3f(2.0f, -0.3f, 2.0f);
	glVertex3f(1.5f, -0.3f, 2.0f);
	glVertex3f(1.5f, -3.0f, 2.0f);
	glVertex3f(2.0f, -3.0f, 2.0f);
	
	//right
	glVertex3f(2.0f, -0.3f, 2.5f);
	glVertex3f(2.0f, -0.3f, 2.0f);
	glVertex3f(2.0f, -3.0f, 2.0f);
	glVertex3f(2.0f, -3.0f, 2.5f);
	
	//left
	glVertex3f(1.5f, -0.3f, 2.5f);
	glVertex3f(1.5f, -0.3f, 2.0f);
	glVertex3f(1.5f, -3.0f, 2.0f);
	glVertex3f(1.5f, -3.0f, 2.5f);
	
	//back leg
	//front
	glVertex3f(2.0f, -0.3f, -2.0f);
	glVertex3f(1.5f, -0.3f, -2.0f);
	glVertex3f(1.5f, -3.0f, -2.0f);
	glVertex3f(2.0f, -3.0f, -2.0f);
	
	//back
	glVertex3f(2.0f, -0.3f, -2.5f);
	glVertex3f(1.5f, -0.3f, -2.5f);
	glVertex3f(1.5f, -3.0f, -2.5f);
	glVertex3f(2.0f, -3.0f, -2.5f);
	
	//right
	glVertex3f(2.0f, -0.3f, -2.5f);
	glVertex3f(2.0f, -0.3f, -2.0f);
	glVertex3f(2.0f, -3.0f, -2.0f);
	glVertex3f(2.0f, -3.0f, -2.5f);
	
	//left
	glVertex3f(1.5f, -0.3f, -2.5f);
	glVertex3f(1.5f, -0.3f, -2.0f);
	glVertex3f(1.5f, -3.0f, -2.0f);
	glVertex3f(1.5f, -3.0f, -2.5f);
	
	//left leg front
	glVertex3f(-2.0f, -0.3f, 2.5f);
	glVertex3f(-1.5f, -0.3f, 2.5f);
	glVertex3f(-1.5f, -3.0f, 2.5f);
	glVertex3f(-2.0f, -3.0f, 2.5f);
	
	//back
	glVertex3f(-2.0f, -0.3f, 2.0f);
	glVertex3f(-1.5f, -0.3f, 2.0f);
	glVertex3f(-1.5f, -3.0f, 2.0f);
	glVertex3f(-2.0f, -3.0f, 2.0f);
	
	//right
	glVertex3f(-2.0f, -0.3f, 2.5f);
	glVertex3f(-2.0f, -0.3f, 2.0f);
	glVertex3f(-2.0f, -3.0f, 2.0f);
	glVertex3f(-2.0f, -3.0f, 2.5f);
	
	//left
	glVertex3f(-1.5f, -0.3f, 2.5f);
	glVertex3f(-1.5f, -0.3f, 2.0f);
	glVertex3f(-1.5f, -3.0f, 2.0f);
	glVertex3f(-1.5f, -3.0f, 2.5f);
	
	//left leg back
	//front
	glVertex3f(-2.0f, -0.3f, -2.0f);
	glVertex3f(-1.5f, -0.3f, -2.0f);
	glVertex3f(-1.5f, -3.0f, -2.0f);
	glVertex3f(-2.0f, -3.0f, -2.0f);
	
	//back
	glVertex3f(-2.0f, -0.3f, -2.5f);
	glVertex3f(-1.5f, -0.3f, -2.5f);
	glVertex3f(-1.5f, -3.0f, -2.5f);
	glVertex3f(-2.0f, -3.0f, -2.5f);
	
	//right
	glVertex3f(-2.0f, -0.3f,-2.5f);
	glVertex3f(-2.0f, -0.3f, -2.0f);
	glVertex3f(-2.0f, -3.0f, -2.0f);
	glVertex3f(-2.0f, -3.0f, -2.5f);
	
	//left	
	glVertex3f(-1.5f, -0.3f, -2.5f);
	glVertex3f(-1.5f, -0.3f, -2.0f);
	glVertex3f(-1.5f, -3.0f, -2.0f);
	glVertex3f(-1.5f, -3.0f, -2.5f);
	
	glEnd();
	glutSwapBuffers();
}

void update(int value) {
	_angle += 1.0f;
	if (_angle > 360) {
	_angle -= 360;
	}
	
	glutPostRedisplay();
	glutTimerFunc(25, update, 0);
}

int main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
	glutInitWindowSize(600, 600);
	
	glutCreateWindow("Table");
	glutDisplayFunc(drawScene);
	glutReshapeFunc(handleResize);
	update(0);
	glutMainLoop();
	return 0;
}
//###################

// ###################
// #### CHAIR & TABLE ########
#include <GL/glut.h>
void handleResize(int w, int h) {
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluPerspective(45.0, (double)w / (double)h, 1.0, 200.0);
}

float _angle = -90.0f;

void drawScene() {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glMatrixMode(GL_MODELVIEW); 
	glLoadIdentity();
	
	// Adjusts the size of the object
	glTranslatef(0.0f, 0.0f, -20.0f); 
	
	glRotatef(10, 1.0f, 0.0f, 0.0f);
	glRotatef(_angle,0.0f, 1.0f, 0.0f);
	glColor3f(0, 1, 0);
	glBegin(GL_QUADS);
	
	//Front
	glVertex3f(-2.0f, -0.2f, 2.0f);
	glVertex3f(2.0f, -0.2f, 2.0f);
	glVertex3f(2.0f, 0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, 2.0f);
	
	//Right
	glVertex3f(2.0f, -0.2f, -2.0f);
	glVertex3f(2.0f, 0.2f, -2.0f);
	glVertex3f(2.0f, 0.2f, 2.0f);
	glVertex3f(2.0f, -0.2f, 2.0f);
	
	//Back
	glVertex3f(-2.0f, -0.2f, -2.0f);
	glVertex3f(-2.0f, 0.2f, -2.0f);
	glVertex3f(2.0f, 0.2f, -2.0f);
	glVertex3f(2.0f, -0.2f, -2.0f);
	
	//Left
	glVertex3f(-2.0f, -0.2f, -2.0f);
	glVertex3f(-2.0f, -0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, -2.0f);
	
	//top
	glVertex3f(2.0f, 0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, 2.0f);
	glVertex3f(-2.0f, 0.2f, -2.0f);
	glVertex3f(2.0f, 0.2f, -2.0f);
	
	//bottom
	glVertex3f(2.0f, -0.2f, 2.0f);
	glVertex3f(-2.0f, -0.2f, 2.0f);
	glVertex3f(-2.0f, -0.2f, -2.0f);
	glVertex3f(2.0f, -0.2f, -2.0f);
	
	//front leg
	glColor3f(0,1,1);
	//front
	glVertex3f(1.8f,-0.2f,1.6f);
	glVertex3f(1.4f, -0.2f, 1.6f);
	glVertex3f(1.4f, -3.0f, 1.6f);
	glVertex3f(1.8f, -3.0f, 1.6f);
	
	//back
	glVertex3f(1.8f,-0.2f,1.2f);
	glVertex3f(1.4f, -0.2f, 1.2f);
	glVertex3f(1.4f, -3.0f, 1.2f);
	glVertex3f(1.8f, -3.0f, 1.2f);
	
	//right
	glVertex3f(1.8f,-0.2f,1.6f);
	glVertex3f(1.8f, -0.2f, 1.2f);
	glVertex3f(1.8f, -3.0f, 1.2f);
	glVertex3f(1.8f, -3.0f, 1.6f);
	
	//left
	glVertex3f(1.4f,-0.2f,1.6f);
	glVertex3f(1.4f, -0.2f, 1.2f);
	glVertex3f(1.4f, -3.0f, 1.2f);
	glVertex3f(1.4f, -3.0f, 1.6f);
	
	//back leg
	//front
	glVertex3f(1.8f,-0.2f,-1.2f);
	glVertex3f(1.4f, -0.2f, -1.2f);
	glVertex3f(1.4f, -3.0f, -1.2f);
	glVertex3f(1.8f, -3.0f, -1.2f);
	
	//back
	glVertex3f(1.8f,-0.2f,-1.6f);
	glVertex3f(1.4f, -0.2f, -1.6f);
	glVertex3f(1.4f, -3.0f, -1.6f);
	glVertex3f(1.8f, -3.0f, -1.6f);
	
	//right
	glVertex3f(1.8f,-0.2f,-1.6f);
	glVertex3f(1.8f, -0.2f, -1.2f);
	glVertex3f(1.8f, -3.0f, -1.2f);
	glVertex3f(1.8f, -3.0f, -1.6f);
	
	//left
	glVertex3f(1.4f,-0.2f,-1.6f);
	glVertex3f(1.4f, -0.2f, -1.2f);
	glVertex3f(1.4f, -3.0f, -1.2f);
	glVertex3f(1.4f, -3.0f, -1.6f);
	
	//leg left front
	glVertex3f(-1.8f,-0.2f,1.6f);
	glVertex3f(-1.4f, -0.2f, 1.6f);
	glVertex3f(-1.4f, -3.0f, 1.6f);
	glVertex3f(-1.8f, -3.0f, 1.6f);
	
	//back
	glVertex3f(-1.8f,-0.2f,1.2f);
	glVertex3f(-1.4f, -0.2f, 1.2f);
	glVertex3f(-1.4f, -3.0f, 1.2f);
	glVertex3f(-1.8f, -3.0f, 1.2f);
	
	//right
	glVertex3f(-1.8f,-0.2f,1.6f);
	glVertex3f(-1.8f, -0.2f, 1.2f);
	glVertex3f(-1.8f, -3.0f, 1.2f);
	glVertex3f(-1.8f, -3.0f, 1.6f);
	
	//left
	glVertex3f(-1.4f,-0.2f,1.6f);
	glVertex3f(-1.4f, -0.2f, 1.2f);
	glVertex3f(-1.4f, -3.0f, 1.2f);
	glVertex3f(-1.4f, -3.0f, 1.6f);
	
	//left leg back front
	//front
	glVertex3f(-1.8f,-0.2f,-1.2f);
	glVertex3f(-1.4f, -0.2f, -1.2f);
	glVertex3f(-1.4f, -3.0f, -1.2f);
	glVertex3f(-1.8f, -3.0f, -1.2f);
	
	//back
	glVertex3f(-1.8f,-0.2f,-1.6f);
	glVertex3f(-1.4f, -0.2f, -1.6f);
	glVertex3f(-1.4f, -3.0f, -1.6f);
	glVertex3f(-1.8f, -3.0f, -1.6f);
	
	//right
	glVertex3f(-1.8f,-0.2f,-1.6f);
	glVertex3f(-1.8f, -0.2f, -1.2f);
	glVertex3f(-1.8f, -3.0f, -1.2f);
	glVertex3f(-1.8f, -3.0f, -1.6f);
	
	//left	
	glVertex3f(-1.4f,-0.2f,-1.6f);
	glVertex3f(-1.4f, -0.2f, -1.2f);
	glVertex3f(-1.4f, -3.0f, -1.2f);
	glVertex3f(-1.4f, -3.0f, -1.6f);
	
	//chair back
	//front
	glColor3f(1,1,0);
	glVertex3f(-1.8f, 0.2f, -1.8f);
	glVertex3f(1.8f, 0.2f, -1.8f);
	glVertex3f(1.8f, 3.5f, -1.8f);
	glVertex3f(-1.8f, 3.5f, -1.8f);
	
	//back
	glVertex3f(-1.8f, 0.2f, -2.0f);
	glVertex3f(1.8f, 0.2f, -2.0f);
	glVertex3f(1.8f, 3.5f, -2.0f);
	glVertex3f(-1.8f, 3.5f, -2.0f);
	
	glVertex3f(-1.8f, 0.2f, -2.0f);
	glVertex3f(-1.8f, 3.5f, -2.0f);
	glVertex3f(-1.8f, 3.5f, -1.8f);
	glVertex3f(-1.8f, 0.2f, -1.8f);
	
	
	glVertex3f(1.8f, 0.2f, -2.0f);
	glVertex3f(1.8f, 3.5f, -2.0f);
	glVertex3f(1.8f, 3.5f, -1.8f);
	glVertex3f(1.8f, 0.2f, -1.8f);
	
	glVertex3f(-1.8f, 3.5f, -2.0f);
	glVertex3f(-1.8f, 3.5f, -1.8f);
	glVertex3f(1.8f, 3.5f, -1.8f);
	glVertex3f(1.8f, 3.5f, -2.0f);
	
	//Table
	glColor3f(1, 0, 0);
	//top
	glVertex3f(3.0f, 0.9f, 6.0f);
	glVertex3f(-3.0f, 0.9f, 6.0f);
	glVertex3f(-3.0f, 0.9f, 3.0f);
	glVertex3f(3.0f, 0.9f, 3.0f);
	
	//bottom
	glVertex3f(3.0f, 0.3f, 6.0f);
	glVertex3f(-3.0f, 0.3f, 6.0f);
	glVertex3f(-3.0f, 0.3f, 3.0f);
	glVertex3f(3.0f, 0.3f, 3.0f);
	
	//Front
	glVertex3f(-3.0f, 0.3f, 6.0f);
	glVertex3f(3.0f, 0.3f, 6.0f);
	glVertex3f(3.0f, 0.9f, 6.0f);
	glVertex3f(-3.0f, 0.9f, 6.0f);
	
	//Right
	glVertex3f(3.0f, 0.3f, 3.0f);
	glVertex3f(3.0f, 0.9f, 3.0f);
	glVertex3f(3.0f, 0.9f, 6.0f);
	glVertex3f(3.0f, 0.3f, 6.0f);
	
	//Back
	glVertex3f(-3.0f, 0.3f, 3.0f);
	glVertex3f(-3.0f, 0.9f, 3.0f);
	glVertex3f(3.0f, 0.9f, 3.0f);
	glVertex3f(3.0f, 0.3f, 3.0f);
	
	//Left
	glVertex3f(-3.0f, 0.3f, 3.0f);
	glVertex3f(-3.0f, 0.3f, 6.0f);
	glVertex3f(-3.0f, 0.9f, 6.0f);
	glVertex3f(-3.0f, 0.9f, 3.0f);
	
	// Leg
	glColor3f(0.6, 0.298, 0);
	//front
	glVertex3f(2.0f, 0.3f, 5.5f);
	glVertex3f(1.5f, 0.3f, 5.5f);
	glVertex3f(1.5f, -3.3f, 5.5f);
	glVertex3f(2.0f, -3.3f, 5.5f);
	
	//back
	glVertex3f(2.0f, 0.3f, 5.0f);
	glVertex3f(1.5f, 0.3f, 5.0f);
	glVertex3f(1.5f, -3.3f, 5.0f);
	glVertex3f(2.0f, -3.3f, 5.0f);
	
	//right
	glVertex3f(2.0f, 0.3f, 5.5f);
	glVertex3f(2.0f, 0.3f, 5.0f);
	glVertex3f(2.0f, -3.3f, 5.0f);
	glVertex3f(2.0f, -3.3f, 5.5f);
	
	//left
	glVertex3f(1.5f, 0.3f, 5.5f);
	glVertex3f(1.5f, 0.3f, 5.0f);
	glVertex3f(1.5f, -3.3f, 5.0f);
	glVertex3f(1.5f, -3.3f, 5.5f);
	
	//back leg
	//front
	glVertex3f(2.0f, 0.3f, 3.5f);
	glVertex3f(1.5f, 0.3f, 3.5f);
	glVertex3f(1.5f, -3.3f, 3.5f);
	glVertex3f(2.0f, -3.3f, 3.5f);
	
	//back
	glVertex3f(2.0f, 0.3f, 4.0f);
	glVertex3f(1.5f, 0.3f, 4.0f);
	glVertex3f(1.5f, -3.3f, 4.0f);
	glVertex3f(2.0f, -3.3f, 4.0f);
	
	//right
	glVertex3f(2.0f, 0.3f, 4.0f);
	glVertex3f(2.0f, 0.3f, 3.5f);
	glVertex3f(2.0f, -3.3f, 3.5f);
	glVertex3f(2.0f, -3.3f, 4.0f);
	
	//left
	glVertex3f(1.5f, 0.3f, 4.0f);
	glVertex3f(1.5f, 0.3f, 3.5f);
	glVertex3f(1.5f, -3.3f, 4.0f);
	glVertex3f(1.5f, -3.3f, 3.5f);
	
	//left leg front
	glVertex3f(-2.0f, 0.3f, 5.5f);
	glVertex3f(-1.5f, 0.3f, 5.5f);
	glVertex3f(-1.5f, -3.3f, 5.5f);
	glVertex3f(-2.0f, -3.3f, 5.5f);
	
	//back
	glVertex3f(-2.0f, 0.3f, 5.0f);
	glVertex3f(-1.5f, 0.3f, 5.0f);
	glVertex3f(-1.5f, -3.3f, 5.0f);
	glVertex3f(-2.0f, -3.3f, 5.0f);
	
	//right
	glVertex3f(-2.0f, 0.3f, 5.5f);
	glVertex3f(-2.0f, 0.3f, 5.0f);
	glVertex3f(-2.0f, -3.3f, 5.0f);
	glVertex3f(-2.0f, -3.3f, 5.5f);
	
	//left
	glVertex3f(-1.5f, 0.3f, 5.5f);
	glVertex3f(-1.5f, 0.3f, 5.0f);
	glVertex3f(-1.5f, -3.3f, 5.0f);
	glVertex3f(-1.5f, -3.3f, 5.5f);
	
	//left leg back
	//front
	glVertex3f(-2.0f, 0.3f, 3.5f);
	glVertex3f(-1.5f, 0.3f, 3.5f);
	glVertex3f(-1.5f, -3.3f, 3.5f);
	glVertex3f(-2.0f, -3.3f, 3.5f);
	
	//back
	glVertex3f(-2.0f, 0.3f, 4.0f);
	glVertex3f(-1.5f, 0.3f, 4.0f);
	glVertex3f(-1.5f, -3.3f, 4.0f);
	glVertex3f(-2.0f, -3.3f, 4.0f);
	
	//right
	glVertex3f(-2.0f, 0.3f, 4.0f);
	glVertex3f(-2.0f, 0.3f, 3.5f);
	glVertex3f(-2.0f, -3.3f, 3.5f);
	glVertex3f(-2.0f, -3.3f, 4.0f);

	//left	
	glVertex3f(-1.5f, 0.3f, 4.0f);
	glVertex3f(-1.5f, 0.3f, 3.5f);
	glVertex3f(-1.5f, -3.3f, 3.5f);
	glVertex3f(-1.5f, -3.3f, 4.0f);
	
	glEnd();
	glutSwapBuffers();
}

void update(int value) {
	_angle += 1.0f;
	if (_angle > 360) {
		_angle -= 360;
	}
	glutPostRedisplay();
	glutTimerFunc(25, update, 0);
}

int main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
	glutInitWindowSize(600, 600);
	glutCreateWindow("Furniture");
	glutDisplayFunc(drawScene);
	glutReshapeFunc(handleResize);
	update(0);
	glutMainLoop();
	return 0;
} 

//##############################
//##### WHEEL WITH SPOKES ######
#include <GL/glut.h>
#include <math.h>

GLfloat x = 0.6, y = 0.1, r = 0.3, th = 0;
void display(){
	glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
	glClearColor(0.25, 0.25, 0.25, 0);
	glLoadIdentity();
	
	float theta=th;
	glBegin(GL_LINE_LOOP);
	while(theta < 2 * 3.14 + th){
		glVertex3f(x, y, 0);
		glColor3f(1, 1, 0);
		glVertex3f(x + ( r * cos(theta)), y + ( r * sin(theta)), 0);
		theta+=0.5;
		glColor3f(0, 1, 0);
		glVertex3f(x + ( r * cos(theta)), y + ( r * sin(theta)), 0);
		glVertex3f(x, y, 0);
	}
	glEnd();
	glutSwapBuffers();
}

void update(int value){
	if(x>1)	x = -1;
	x += 0.007;
	th -= 0.05;
	glutPostRedisplay();
	glutTimerFunc(30, update, 0);
	glutPostRedisplay();
}
int main(int argc,char **argv){
	glutInit(&argc,argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA);
	glMatrixMode(GL_PROJECTION);
	glutInitWindowSize(600,600);
	glutInitWindowPosition(0,0);
	glutCreateWindow("Wheel With Spokes");
	glutDisplayFunc(display);
	update(0);
	glutMainLoop();
	return 0;
}
//##############################

//##############################
//###### CLOCK ##########
#include <gl/glut.h>
#include <math.h>
struct Point {
	GLint x;
	GLint y;
};

void dda(Point p1, Point p2) {
	GLfloat dx = p2.x - p1.x;
	GLfloat dy = p2.y - p1.y;

	GLfloat x1 = p1.x;
	GLfloat y1 = p1.y;

	GLfloat step = 0;

	if(abs(dx) > abs(dy)) {
		step = abs(dx);
	} else {
		step = abs(dy);
	}

	GLfloat xInc = dx/step;
	GLfloat yInc = dy/step;

	for(float i = 1; i <= step; i++) {
		glVertex2i(x1, y1);
		x1 += xInc;
		y1 += yInc;
	}
}

void init() {
	glClearColor(1.0, 1.0, 1.0, 0.0);
	glColor3f(0.0f, 0.0f, 0.0f);
	glPointSize(1.0f);
	gluOrtho2D(0.0f, 640.0f, 0.0f, 480.0f);
}

void circle(Point pC, GLfloat radius) {
	GLfloat step = 1/radius;
	GLfloat x, y;

	for(GLfloat theta = 0; theta <= 360; theta += step) {
		x = pC.x + (radius * cos(theta));
		y = pC.y + (radius * sin(theta));
		glVertex2i(x, y);
	}
}

Point pc = {200, 200};
GLint r = 150;

GLint hr = 60;
GLint mr = 90;
GLint sr = 130;

double hd = 0;
double md = 0;
double sd = 0;

void draw (void) {
	Point ph, pm, ps;

	ph.y = pc.y + (hr * sin(hd));
	ph.x = pc.x + (hr * cos(hd));

	pm.y = pc.y + (mr * sin(md));
	pm.x = pc.x + (mr * cos(md));

	ps.y = pc.y + (sr * sin(sd));
	ps.x = pc.x + (sr * cos(sd));

	glClear(GL_COLOR_BUFFER_BIT);
	glBegin(GL_POINTS);
	glColor3f(0.5, 0.5, 0);
	circle(pc, r);
	glColor3f(1, 0, 0.0);
	dda(pc, ph);

	glColor3f(0.0, 1.0, 0.0);
	dda(pc, pm);

	glColor3f(0.0, 0.0, 1.0);
	dda(pc, ps);

	glEnd();
	glFlush();

	md -= 0.001;
	sd -= 0.07;
	hd -= 0.0002;
}

void Timer(int value) {
	glutTimerFunc(33, Timer, 0);
	glutPostRedisplay();
}

int main(int argc, char **argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_SINGLE|GLUT_RGB);
	glutInitWindowPosition(200, 200);
	glutInitWindowSize(640, 480);
	glutCreateWindow("Square");
	glutDisplayFunc(draw);
	init();
	Timer(0);
	glutMainLoop();
	return 0;
}
//##############################

//##############################
//##### CIRCLE ######
#include <GL/glut.h>
#include <cmath>

void drawCircle(){
	GLfloat dx, dy, theta = 0;
	GLfloat x = 0, y = 0, r = 0.6;
	int cnt;
	glClear(GL_COLOR_BUFFER_BIT);
	for (cnt = 1 ; cnt <= 10000 ; cnt++) {
		theta = theta + 0.001;
		dx = x + r * cos(theta);
		dy = y + r * sin(theta);
		glBegin(GL_POINTS);
		glVertex2f(dx, dy);
		glEnd();
	}
	glFlush();
}

void Initial() {
	glClearColor(0, 0.2, 0.15, 0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
}

int main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_RGB);
	glutInitWindowPosition(80, 80);
	glutInitWindowSize(500, 500);
	glutCreateWindow("Circle");
	Initial();
	glutDisplayFunc(drawCircle);
	glutMainLoop();
}
//##############################

//##############################
//##### ELLIPSE ######
#include <GL/glut.h>
#include <cmath>

void drawEllipse(){
	GLfloat dx, dy, theta = 0;
	GLfloat x = 0, y = 0, rx = 0.8, ry = 0.4;
	int cnt;
	glColor3f(1, 0.5, 0);
	glClear(GL_COLOR_BUFFER_BIT);
	for (cnt = 1 ; cnt <= 10000 ; cnt++) {
		theta = theta + 0.001;
		dx = x + rx * cos(theta);
		dy = y + ry * sin(theta);
		glBegin(GL_POINTS);
		glVertex2f(dx, dy);
		glEnd();
	}
	glFlush();
}

void Initial() {
	glClearColor(0, 0.2, 0.15, 0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
}

int main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_RGB);
	glutInitWindowPosition(80, 80);
	glutInitWindowSize(500, 500);
	glutCreateWindow("Ellipse");
	Initial();
	glutDisplayFunc(drawEllipse);
	glutMainLoop();
}
//##############################

//##############################
//########## CHESS #############
#include <stdio.h>
#include <iostream>
#include <GL/glut.h>
using namespace std;

int pntX1, pntY1, r;

void plot(int x, int y) {
	glBegin(GL_POINTS);
	glVertex2i(x+pntX1, y+pntY1);
	glEnd();
}


void myInit (void) {
	glClearColor(1.0, 1.0, 1.0, 0.0);
	glColor3f(0, 0, 0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluOrtho2D(0, 20, 0, 20);
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
}

void midPointCircleAlgo(int a, int b, int c) {
	pntX1 = a; pntY1 = b; r = c;
	int x = 0;
	int y = r;
	float decision = 5/4 - r;
	plot(x, y);

	while (y > x) {
		if (decision < 0) {
			x++; 
			decision += 2*x+1;
		}
		else {
			y--;
			x++;
			decision += 2*(x-y)+1;
		}
		plot(x, y);
		plot(x, -y);
		plot(-x, y);
		plot(-x, -y);
		plot(y, x);
		plot(-y, x);
		plot(y, -x);
		plot(-y, -x);
	}
}

void draw() {
	glBegin(GL_QUADS);
		glVertex2f(2, 4);
		glVertex2f(2, 2);
		glVertex2f(4, 2);
		glVertex2f(4, 4);
	glEnd();
}

void drawLine() {
	glBegin(GL_LINES);
		glVertex2f(2, 6);
		glVertex2f(2, 4);
	glEnd();
}

void drawSquare() {
	glBegin(GL_QUADS);
		glVertex2f(4, 6);
		glVertex2f(4, 4);
		glVertex2f(6, 4);
		glVertex2f(6, 6);
	glEnd();
}

void drawVerticalLine() {
	glBegin(GL_LINES);
		glVertex2f(4, 2);
		glVertex2f(6, 2);
	glEnd();
}

void board(void) {
//	glColor3f (0.0, 0.0, 0.0);
//	glPointSize(2.0);
//	midPointCircleAlgo(250, 250, 200);
	
	draw();
	glTranslatef(4, 0, 0);
	draw();
	glTranslatef(-4, 0, 0);

	glTranslatef(4, 4, 0);
	draw();
	glTranslatef(-4, -4, 0);

	draw();

	glTranslatef(0, 4, 0);
	draw();
	glTranslatef(0, -4, 0);
	
	glLineWidth(2.0);

	drawLine();

	glTranslatef(2, 0, 0);
	drawLine();
	glTranslatef(-2, 0, 0);

	glTranslatef(4, 0, 0);
	drawLine();
	glTranslatef(-4, 0, 0);

	glTranslatef(6, 0, 0);
	drawLine();
	glTranslatef(-6, 0, 0);
	
	drawSquare();

	drawVerticalLine();

	glTranslatef(0, 6, 0);
	drawVerticalLine();
	glTranslatef(0, -6, 0);
}

void drawRomanNumerals() {
		// Roman Numerals
	// Shifting Axis
	glTranslatef(2, 18, 0);
	
	// I
	glBegin(GL_LINES);
		glVertex2f(0, 1);
		glVertex2f(0, 0);
	glEnd();
	
	// II
	glBegin(GL_LINES);
		glVertex2f(1, 1);
		glVertex2f(1, 0);
	glEnd();
	glBegin(GL_LINES);
		glVertex2f(1.2, 1);
		glVertex2f(1.2, 0);
	glEnd();
	
	// III
	glBegin(GL_LINES);
		glVertex2f(2, 1);
		glVertex2f(2, 0);
	glEnd();
	glBegin(GL_LINES);
		glVertex2f(2.2, 1);
		glVertex2f(2.2, 0);
	glEnd();
	glBegin(GL_LINES);
		glVertex2f(2.4, 1);
		glVertex2f(2.4, 0);
	glEnd();
	
	//IV
	glBegin(GL_LINES);
		glVertex2f(3, 1);
		glVertex2f(3, 0);
		glVertex2f(3.2, 1);
		glVertex2f(3.4, 0);
		glVertex2f(3.6, 1);
		glVertex2f(3.4, 0);
	glEnd();
	
	//V
	glBegin(GL_LINES);
		glVertex2f(4.0, 1);
		glVertex2f(4.2, 0);
		glVertex2f(4.4, 1);
		glVertex2f(4.2, 0);
	glEnd();
	
	//VI
	glBegin(GL_LINES);
		glVertex2f(5.0, 1);
		glVertex2f(5.2, 0);
		glVertex2f(5.4, 1);
		glVertex2f(5.2, 0);
		glVertex2f(5.6, 1);
		glVertex2f(5.6, 0);
	glEnd();
	
	//VII
	glBegin(GL_LINES);
		glVertex2f(6.2, 1);
		glVertex2f(6.4, 0);
		glVertex2f(6.6, 1);
		glVertex2f(6.4, 0);
		glVertex2f(6.75, 1);
		glVertex2f(6.75, 0);
		glVertex2f(6.9, 1);
		glVertex2f(6.9, 0);
	glEnd();
	
	//VIII
	glBegin(GL_LINES);
		glVertex2f(8.0, 1);
		glVertex2f(8.2, 0);
		glVertex2f(8.4, 1);
		glVertex2f(8.2, 0);
		glVertex2f(8.55, 1);
		glVertex2f(8.55, 0);
		glVertex2f(8.7, 1);
		glVertex2f(8.7, 0);
		glVertex2f(8.85, 1);
		glVertex2f(8.85, 0);
	glEnd();
	
	//IX
	glBegin(GL_LINES);
		glVertex2f(9.7, 1);
		glVertex2f(9.7, 0);
		glVertex2f(9.85, 1);
		glVertex2f(10.05, 0);
		glVertex2f(9.85, 0);
		glVertex2f(10.05, 1);
	glEnd();
	
	//X
	glBegin(GL_LINES);
		glVertex2f(10.55, 1);
		glVertex2f(10.75, 0);
		glVertex2f(10.55, 0);
		glVertex2f(10.75, 1);
	glEnd();
	
	//XI
	glBegin(GL_LINES);
		glVertex2f(11.3, 1);
		glVertex2f(11.5, 0);
		glVertex2f(11.3, 0);
		glVertex2f(11.5, 1);
		glVertex2f(11.65, 1);
		glVertex2f(11.65, 0);
	glEnd();
	
	//XI
	glBegin(GL_LINES);
		glVertex2f(12.15, 1);
		glVertex2f(12.35, 0);
		glVertex2f(12.15, 0);
		glVertex2f(12.35, 1);
		glVertex2f(12.5, 1);
		glVertex2f(12.5, 0);
		glVertex2f(12.65, 1);
		glVertex2f(12.65, 0);
	glEnd();
	
	glTranslatef(-2, -18, 0);
}

void mainDisplay() {
	glClear (GL_COLOR_BUFFER_BIT);
	board();
	
	glTranslatef(8, 0, 0);
	board();
	glTranslatef(-8, 0, 0);
	
	glTranslatef(0, 8, 0);
	board();
	glTranslatef(0, -8, 0);
	
	glTranslatef(8, 8, 0);
	board();
	glTranslatef(-8, -8, 0);
	
	glTranslatef(4, 0, 0);
	drawVerticalLine();
	glTranslatef(-4, 0, 0);
	

	glTranslatef(4, 0, 0);
	drawSquare();
	glTranslatef(-4, 0, 0);
		
	glTranslatef(4, 4, 0);
	drawSquare();
	glTranslatef(-4, -4, 0);	

	glTranslatef(4, 8, 0);
	drawSquare();
	glTranslatef(-4, -8, 0);
	
	glTranslatef(4, 14, 0);
	drawVerticalLine();
	glTranslatef(-4, -14, 0);
	
	glTranslatef(0, 4, 0);
	drawLine();
	glTranslatef(0, -4, 0);
	
	glTranslatef(0, 4, 0);
	drawSquare();
	glTranslatef(0, -4, 0);
	
	glTranslatef(8, 4, 0);
	drawSquare();
	glTranslatef(-8, -4, 0);
	
	glTranslatef(14, 4, 0);
	drawLine();
	glTranslatef(-14, -4, 0);
	
	drawRomanNumerals();
	glFlush ();
}

int main(int argc, char** argv) {	
	glutInit(&argc, argv);
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
	glutInitWindowSize (640, 480);
	glutInitWindowPosition (100, 150);
	glutCreateWindow ("Chess Board");
	glutDisplayFunc(mainDisplay);
	myInit ();
	glutMainLoop();

}
//##############################

#include <GL/glut.h>
using namespace std;

void init() {
	glClearColor( 1, 1, 1, 0);
    glClear(GL_COLOR_BUFFER_BIT);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glOrtho(-10.0, 10.0, -10.0, 10.0, -10.0, 10.0);
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
	gluLookAt(1,1,1,0,0,0, 0, 1, 0);
}
void draw() {
	glBegin(GL_QUADS);
		//Front
		glVertex3f(0, 2, 1);
		glVertex3f(0, -2, 1);
		glVertex3f(2, 2, 1);
		glVertex3f(2, -2, 1);
	glEnd();
	glutSwapBuffers();
}

int main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);
	glutInitWindowSize(600, 600);
	glutCreateWindow("3D");
	glutDisplayFunc(draw);
	init();
	glutMainLoop();
	return 0;
}

// ###############################
// STICK MAN USING CIRCLE AND ARC
#include <stdio.h>
#include <iostream>
#include <math.h>
#include <GL/glut.h>
using namespace std;

void myInit (void) {
	glClearColor(1.0, 1.0, 1.0, 0.0);
        glColor3f(0.0f, 0.0f, 0.0f);
        glPointSize(4.0);
        glMatrixMode(GL_PROJECTION);
        glLoadIdentity();
        gluOrtho2D(-100, 100, -100, 100);
}

void drawCircle(GLfloat x, GLfloat y, GLfloat r) {
	glBegin(GL_LINE_LOOP);
    for (int i = 0; i < 360; i++) {
		float angle_theta = i * 3.142 / 180;
		glVertex2f(x + r * cos(angle_theta), y + r * sin(angle_theta));
	}
	glEnd();
}
void drawArc(GLfloat x, GLfloat y, GLfloat r){
	glBegin(GL_LINE_LOOP);
    for (int i = 0; i < 360; i++) {
		float angle_theta = i * 3.142 / 360;
		glVertex2f(x + r * cos(angle_theta), y + r * sin(angle_theta));
	}
	glEnd();
}

void mainDisplay() {
	glClear (GL_COLOR_BUFFER_BIT);
	drawCircle(14, 15, 10);
	drawArc(24, 24, 5);
	drawArc(4, 24, 5);
	
	glBegin(GL_LINES);
		glVertex2f(14, 4);
		glVertex2f(14, -10);
		
		glVertex2f(14, -10);
		glVertex2f(8, -20);
		
		glVertex2f(14, -10);
		glVertex2f(20, -20);
		
		glVertex2f(14, -3);
		glVertex2f(20, -13);
		
		glVertex2f(14, -3);
		glVertex2f(8, -13);
		
		glVertex2f(10, 18);
		glVertex2f(12, 18);
		
		glVertex2f(16, 18);
		glVertex2f(18, 18);
		
		glVertex2f(14, 16);
		glVertex2f(14, 14);
	glEnd();
//	glTranslatef(0, -2, 0);
	glRotatef(180, -1, 0, 0);
	drawArc(14, -12, 2);
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
// ###############################