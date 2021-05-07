import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: Home()));

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('First apps'),
        centerTitle: true,
        backgroundColor: Colors.red[600],
      ),
      body: Row(
        children: <Widget>[
          Expanded(child: Image.asset('assets/space1.jpg')),
          Expanded(
            child: Container(
              padding: EdgeInsets.all(20),
              color: Colors.blue,
              child: Text('One'),
            ),
          ),
          Expanded(
            child: Container(
              padding: EdgeInsets.all(20),
              color: Colors.red,
              child: Text('two '),
            ),
          ),
          Expanded(
            child: Container(
              padding: EdgeInsets.all(20),
              color: Colors.amber,
              child: Text('three '),
            ),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Text('Click'),
        backgroundColor: Colors.red[600],
      ),
    );
  }
}
