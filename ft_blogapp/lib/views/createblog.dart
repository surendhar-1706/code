import 'package:flutter/material.dart';

class CreateBlog extends StatefulWidget {
  @override
  _CreateBlogState createState() => _CreateBlogState();
}

class _CreateBlogState extends State<CreateBlog> {
  String authorName, title, desc;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Flutter',
              style: TextStyle(fontSize: 22),
            ),
            Text(
              'Blog',
              style: TextStyle(fontSize: 22, color: Colors.blue),
            ),
          ],
        ),
        backgroundColor: Colors.transparent,
        elevation: 0,
        actions: <Widget>[
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Icon(Icons.file_upload),
          )
        ],
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            SizedBox(height: 10),
            Container(
                margin: EdgeInsets.symmetric(horizontal: 16),
                decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(6)),
                height: 150,
                width: MediaQuery.of(context).size.width,
                child: Icon(
                  Icons.add_a_photo,
                  color: Colors.black45,
                )),
            SizedBox(
              height: 10,
            ),
            Container(
              child: Column(children: <Widget>[
                TextField(
                  decoration: InputDecoration(hintText: "Author Name"),
                  onChanged: (val) {
                    authorName = val;
                  },
                ),
                TextField(
                  decoration: InputDecoration(hintText: "Title"),
                  onChanged: (val) {
                    title = val;
                  },
                ),
                TextField(
                  decoration: InputDecoration(hintText: "Description"),
                  onChanged: (val) {
                    desc = val;
                  },
                ),
              ]),
            ),
          ],
        ),
      ),
    );
  }
}
