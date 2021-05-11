import 'package:flutter/material.dart';
import './pages/home.dart';
import './pages/loading.dart';
import './pages/choose_location.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      title: 'Word time',
      theme: ThemeData(
        primaryColor: Colors.black,
      ),
      // home: Home(),
      routes: {
        '/': (context) => Loading(),
        '/home': (context) => Home(),
        '/location': (context) => ChooseLocation(),
      },
    );
  }
}
