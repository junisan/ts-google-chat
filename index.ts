import {ButtonGroup, Card, GoogleChatSender, Icon, KeyValue, Message, Section, TextButton} from "./src"


const train = new KeyValue({topLabel: 'Train Number', content: '12345A', icon: new Icon('TRAIN')});
const status = new KeyValue({topLabel: 'Status', content:'Running', bottomLabel:'Arrive: 5 minutes', icon: new Icon('VIDEO_PLAY')});
const buttons = new ButtonGroup([
    new TextButton('Open Wallet', 'http://google.es'),
    new TextButton('View Station Map', 'http://google.es')
]);

const section = new Section([train, status, buttons]);
const card = new Card({title: 'Train Company', subTitle: 'info@traincompany.com', sections: [section]});
const message = new Message(card);

const sender = new GoogleChatSender({url: 'https://chat.googleapis.com/v1/spaces/AAAAK4AL5Bg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=3PPfdSFIA_p3ColcvumRTiRnbMftokJhDjz0RJI3sa8%3D'});
sender.send(message);