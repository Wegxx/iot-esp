import mqtt, { MqttClient } from 'mqtt';

const mqttHost = process.env.MQTT_HOST;
const mqttPort = Number(process.env.MQTT_PORT);
const mqttUsername = process.env.MQTT_USERNAME;
const mqttPassword = process.env.MQTT_PASSWORD;

let mqttClient: MqttClient;

export const connectMqtt = () => {
    mqttClient = mqtt.connect(`mqtt://${mqttHost}:${mqttPort}`, {
        username: mqttUsername,
        password: mqttPassword,
    });
    mqttClient.on('connect', () => {
        console.log('MQTT connected');
    });
    mqttClient.on('error', (err) => {
        console.error('MQTT error', err);
    });
};

export const publishMqtt = (topic: string, payload: string) => {
    if (mqttClient && mqttClient.connected) {
        mqttClient.publish(topic, payload);
    }
};

export const subscribeMqtt = (topic: string, onMessage: (payload: string) => void) => {
    if (mqttClient && mqttClient.connected) {
        mqttClient.subscribe(topic);
        mqttClient.on('message', (t, p) => {
            if (t === topic) {
                onMessage(p.toString());
            }
        });
    }
};
