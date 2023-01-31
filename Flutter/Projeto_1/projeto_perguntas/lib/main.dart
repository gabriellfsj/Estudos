import 'package:flutter/material.dart';
import 'dart:ui';

main() => runApp(PerguntaApp());

class PerguntaApp extends StatelessWidget {
  final perguntaSelecionada = 0;

  void responder() {
    //perguntaSelecionada++;
    print('Pergunta Respondida!');
  }

  @override
  Widget build(BuildContext context) {
    final perguntas = [
      'Como Guts é Conhecido?',
      'Quem é o lider do Bando do Falcão?',
    ];
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Quiz Berserk'),
        ),
        body: Column(
          children: [
            Text(perguntas[perguntaSelecionada]),
            RaisedButton(
              child: Text('Resposta 1'),
              onPressed: responder,
            ),
            RaisedButton(
              child: Text('Resposta 2'),
              onPressed: responder,
            ),
            RaisedButton(
              child: Text('Resposta 3'),
              onPressed: responder,
            ),
          ],
        ),
      ),
    );
  }
}
