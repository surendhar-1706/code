import 'package:flutter/material.dart';
import 'package:ft_chatapp/src/main_screen.dart';
import 'src/auth/android_auth_provider.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await AuthProvider().initialize();
  runApp(MyApp());
}
