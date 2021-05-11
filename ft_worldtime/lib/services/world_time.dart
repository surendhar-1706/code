import 'package:http/http.dart';
import 'dart:convert';

class Worldtime {
  String location;
  String time;
  String flag;
  String url;
  Worldtime({this.location, this.flag, this.url});
  Future<void> getData() async {
    try {
      Response response =
          await get(Uri.parse('http://worldtimeapi.org/api/timezone/$url'));
      Map data = jsonDecode(response.body);
      String datetime = data['datetime'];

      String offset1 = data['utc_offset'].substring(1, 3);
      String offset2 = data['utc_offset'].substring(4, 6);

      DateTime now = DateTime.parse(datetime);
      now = now.add(
          Duration(hours: int.parse(offset1), minutes: int.parse(offset2)));
      time = now.toString();
    } catch (e) {
      print('Error caught : $e');
      time = "cant't fetch time because of server load";
    }
  }
}
