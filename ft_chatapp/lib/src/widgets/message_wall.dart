import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import 'chat_message_other.dart';
import 'chat_message.dart';

class MessageWall extends StatelessWidget {
  final List<QueryDocumentSnapshot> messages;
  final ValueChanged<String> onDelete;

  const MessageWall({
    Key key,
    this.messages,
    this.onDelete,
  }) : super(key: key);

  bool shouldDisplayAvatar(int idx) {
    if (idx == 0) return true;

    final previousId = messages[idx - 1].get('author_id');

    final authorId = messages[idx].get('author_id');

    return authorId != previousId;
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: messages.length,
      itemBuilder: (context, index) {
        final datas = messages[index].data();
        final user = FirebaseAuth.instance.currentUser;
        final timevalue = messages[index].get('timestamp');
        final authid = messages[index].get('author_id');
        if (user != null && user.uid == authid) {
          return Dismissible(
            onDismissed: (_) {
              onDelete(messages[index].id);
            },
            key: ValueKey(timevalue),
            child: ChatMessage(
              index: index,
              data: datas,
            ),
          );
        }

        return ChatMessageOther(
          index: index,
          data: datas,
          showAvatar: shouldDisplayAvatar(index),
        );
      },
    );
  }
}
