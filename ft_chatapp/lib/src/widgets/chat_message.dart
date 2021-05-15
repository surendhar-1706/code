import 'package:flutter/material.dart';
import 'package:encrypt/encrypt.dart' as encrypt;
import 'package:ft_chatapp/src/test_encrypt/encryption.dart';

class ChatMessage extends StatelessWidget {
  final int index;
  final Map<String, dynamic> data;
  final bool hasPadding;

  const ChatMessage({
    Key key,
    this.index,
    this.data,
    this.hasPadding = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    String encryptedvalue = data['value'];
    final encrypted = encrypt.Encrypted.fromBase16(encryptedvalue);
    String newencrypted = Encryptionalgo.decryptAES(encrypted);
    return Container(
      margin: EdgeInsets.only(
        top: hasPadding == true ? 15 : 5,
        bottom: 5,
        left: 10,
        right: 10,
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            constraints: BoxConstraints(maxWidth: 300),
            decoration: BoxDecoration(
              color: Colors.blueGrey,
              borderRadius: BorderRadius.circular(5),
            ),
            padding: const EdgeInsets.symmetric(
              horizontal: 10,
              vertical: 12,
            ),
            child: Text(
              newencrypted,
              style: TextStyle(color: Colors.white),
            ),
          )
        ],
      ),
    );
  }
}
