'use strict';

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.post('/apiai', function(req, res){
    let mensagem = req.body;
    let dado = req.body.queryResult.queryText;
    console.log(dado);
    let session_id = req.body.session_id;
    let resposta = {
      "fulfillmentText": "EITA, eu vim do WeebHook",
      "fulfillmentMessages": [
        // {
        //   "card": {
        //     "title": "card title",
        //     "subtitle": "card text",
        //     "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
        //     "buttons": [
        //       {
        //         "text": "button text",
        //         "postback": "https://assistant.google.com/"
        //       }
        //     ]
        //   }
        // }
      ],
      "source": "example.com",
      "payload": {
        "google": {
          "expectUserResponse": true,
          "richResponse": {
            "items": [
              {
                "simpleResponse": {
                  "textToSpeech": "this is a simple response"
                }
              }
            ]
          }
        },
        "facebook": {
          "text": "EITA, eu vim do WeebHook, agora to no Facebook!"

        },
        "slack": {
          "text": "EITA, eu vim do WeebHook, agora to no Slack.",
        }
      },
      "outputContexts": [],
      "followupEventInput":  {}
    }

    res.status(200).json(resposta);
    
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
