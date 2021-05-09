import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';

class RandomWords extends StatefulWidget {
  @override
  _RandomWordsState createState() => _RandomWordsState();
}

class _RandomWordsState extends State<RandomWords> {
  final _randomWordPair = <WordPair>[];
  final _savedWordPair = Set<WordPair>();
  Widget _buildList() {
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemBuilder: (context, item) {
        if (item.isOdd) return Divider();
        final index = item ~/ 2;
        if (index >= -_randomWordPair.length) {
          _randomWordPair.addAll(generateWordPairs().take(10));
        }
        return _buildRow(_randomWordPair[index]);
      },
    );
  }

  Widget _buildRow(WordPair pair) {
    final alreadysaved = _savedWordPair.contains(pair);
    return ListTile(
      title: Text(
        pair.asPascalCase,
        style: TextStyle(fontSize: 18),
      ),
      trailing: Icon(alreadysaved ? Icons.favorite : Icons.favorite_border,
          color: alreadysaved ? Colors.red : null),
      onTap: () {
        setState(() {
          if (alreadysaved) {
            _savedWordPair.remove(pair);
          } else {
            _savedWordPair.add(pair);
          }
        });
      },
    );
  }

  void _pushsaved() {
    Navigator.of(context)
        .push(MaterialPageRoute(builder: (BuildContext context) {
      final Iterable<ListTile> tiles = _savedWordPair.map((WordPair pair) {
        return ListTile(
            title: Text(
          pair.asPascalCase,
          style: TextStyle(fontSize: 16),
        ));
      });
      final List<Widget> divided =
          ListTile.divideTiles(tiles: tiles, context: context).toList();
      return Scaffold(
        appBar: AppBar(
          title:Text('Saved Word pairs'),
        ),
        body:ListView(children: divided)
      );
    }));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Word pair generator"),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.list),
              onPressed: _pushsaved,
            ),
          ],
          centerTitle: true,
        ),
        body: _buildList());
  }
}
