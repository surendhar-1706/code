#include <iostream>
#include <math.h>
using namespace std;

#ifdef __APPLE__
#include<GLUT/glut.h>
#include<openGL/openGL.h>
#else
#include <GL/glut.h>
#endif

#define PI 3.14
#define UPDATE_TIME 10

class Wheel{
	float x,y;
	float radius;
	float speed;
	float th;
public:
	Wheel();
	Wheel(float a,float b);
	Wheel(float r);
	Wheel(float a,float b,float r);
	void setSpeed(float a);
	float getSpeed();
	void setX(float a);
	void setY(float b);
	void setR(float);
	float getX();
	float getY();
	float getR();
	void draw();
	void updatePosition();
};
Wheel::Wheel(){
	x=-0.6;
	y=0.151;
	radius=0.15;
	speed=0.005;
	th=0;
}
Wheel::Wheel(float a,float b){
	x=a;
	y=b;
	th=0;
}
Wheel::Wheel(float r){
	radius=r;
	th=0;
}
Wheel::Wheel(float a,float b,float r){
	x=a;
	y=b;
	radius=r;
	th=0;
}
void Wheel::setSpeed(float a){
	cout<<a;
	speed=a;
}
float Wheel::getSpeed(){
	return speed;
}
float Wheel::getX(){
	return x;
}
float Wheel::getY(){
	return y;
}
void Wheel::setX(float a){
	x=a;
}
void Wheel::setY(float b){
	y=b;
}
float Wheel::getR(){
	return radius;
}
void Wheel::setR(float r){
	radius=r;
}
void Wheel::draw(){
	float theta=th;
	glBegin(GL_LINE_LOOP);
	glColor3f(1.0,0.0,0.0);
	while(theta<2*PI+th){
		glVertex3f(x,y,0);
		glVertex3f(x+(radius*cos(theta)),y+(radius*sin(theta)),0);
		theta+=0.5;
		glVertex3f(x+(radius*cos(theta)),y+(radius*sin(theta)),0);
		glVertex3f(x,y,0);
	}
	glEnd();
}
void Wheel::updatePosition(){
	if(x>1)
		x=-1;
	x+=speed;
	th-=0.05;
}

Wheel w;
void display(){
	glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
	glLoadIdentity();
	w.draw();
	glutSwapBuffers();
}

void update(int value){
	w.updatePosition();
	glutPostRedisplay();
	glutTimerFunc(UPDATE_TIME, update, value);
}
int main(int argc,char **argv){
	cout<<w.getSpeed();
	glutInit(&argc,argv);
	glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGBA|GLUT_DEPTH);
	glMatrixMode(GL_PROJECTION);
	glutInitWindowSize(600,600);
	glutInitWindowPosition(0,0);
	glutCreateWindow("Wheel!!!");
	glutDisplayFunc(display);
	glutTimerFunc(UPDATE_TIME, update, 0);
	glutMainLoop();
	return 0;
}

