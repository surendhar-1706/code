import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'src/page/fingerprint_page.dart';
import 'src/main_screen.dart';
import 'src/auth/stub.dart'
    if (dart.library.io) 'src/auth/android_auth_provider.dart'
    if (dart.library.html) 'src/auth/web_auth_provider.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);

  await AuthProvider().initialize();

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // static const String title = 'Local Auth';
  @override
  Widget build(BuildContext context) => MaterialApp(
        debugShowCheckedModeBanner: false,
        // title: title,
        theme: ThemeData(primarySwatch: Colors.blue),
        home: FingerprintPage(),
      );
}
