import { useState } from 'react';
import { MqttClient } from 'mqtt';

type LEDButtonProps = {
    topic: string;
};

export default function LEDButton({ topic }: LEDButtonProps) {
    const [state, setState] = useState<boolean>(false);
    const [client, setClient] = useState<MqttClient | null>(null);
    var mqtt = require('mqtt')

    const handleToggle = () => {
        const newState = !state;
        setState(newState);
        if (client) {
            client.publish(topic, newState ? 'on' : 'off');
        }
    };

    const options = {
        host: '79642a966da549118f1128bb058d42ce.s2.eu.hivemq.cloud',
        port: 8883,
        protocol: 'mqtts',
        username: 'gio.nacimento',
        password: 'Gio133ebu'
    }

    const LED_PIN = 2;

    const connectToMQTT = () => {
        const mqttClient = mqtt.connect(options);
        mqttClient.on('connect', () => {
            mqttClient.subscribe(topic);
            setClient(mqttClient);
            console.log('Connected')
        });
        mqttClient.on('message', (topic: string, message: Buffer) => {
            if (message.toString() === 'on') {
                setState(true);
            } else if (message.toString() === 'off') {
                setState(false);
            }
        });
        mqttClient.on('error', function (error: Error) {
            console.log(error);
        });
    };

    connectToMQTT();

    return (
        <button onClick={handleToggle}>{state ? 'Desligar' : 'Ligar'}</button>
    );
}