import 'package:flutter/material.dart';
import 'package:ft_worldtime/services/world_time.dart';

class Loading extends StatefulWidget {
  @override
  _LoadingState createState() => _LoadingState();
}

class _LoadingState extends State<Loading> {
  String time = 'Loading...';
  void setupWorldTime() async {
    Worldtime instance =
        Worldtime(location: 'Berlin', flag: 'germany.png', url: 'Asia/Kolkata');
    await instance.getData();
    Navigator.pushReplacementNamed(context, '/home',arguments: {
      'location':instance.location,'flag':instance.flag,'time':instance.time
    });
    print(instance.time);
    setState(() {
      time = instance.time;
    });
  }

  @override
  void initState() {
    super.initState();
    setupWorldTime();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
      padding: EdgeInsets.all(50),
      child: Text('Loading'),
    ));
  }
}
