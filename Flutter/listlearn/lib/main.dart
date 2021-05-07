import 'package:flutter/material.dart';
import 'quotes.dart';

void main() {
  runApp(MaterialApp(home: Quotelist()));
}

class Quotelist extends StatefulWidget {
  @override
  _QuotelistState createState() => _QuotelistState();
}

class _QuotelistState extends State<Quotelist> {
  List<Quotes> quotes = [
    Quotes(
        text: 'hello world hello world hello world hello world',
        author: 'oscal wilde'),
    Quotes(
        text: 'hello world hello world hello world hello world',
        author: 'oscal wilde'),
    Quotes(
        text: 'hello world hello world hello world hello world',
        author: 'oscal wilde')
  ];
  Widget quoteTemplate(quote) {
    return Quotewidget(quote: quote);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
        title: Text('Awesome quotes'),
        centerTitle: true,
        backgroundColor: Colors.redAccent,
      ),
      body: Column(
        children: quotes.map((quote) {
          return quoteTemplate(quote);
        }).toList(),
      ),
    );
  }
}

class Quotewidget extends StatelessWidget {
  final Quotes quote;
  Quotewidget({this.quote});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.fromLTRB(16, 16, 16.0, 16),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Text(
              quote.text,
              style: TextStyle(
                fontSize: 18.0,
                color: Colors.grey[600],
              ),
            ),
            SizedBox(
              height: 6,
            ),
            Text(quote.author,
                style: TextStyle(
                  fontSize: 14.0,
                  color: Colors.grey[800],
                )),
          ],
        ),
      ),
    );
  }
}
