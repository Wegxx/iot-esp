export default function Home() {
    const options = {
        username: 'gio.nacimento',
        password: 'Gio133ebu',
    };

    const mqtt = require('mqtt');

// connect to your cluster, insert your host name and port
    const client = mqtt.connect('wss://79642a966da549118f1128bb058d42ce.s2.eu.hivemq.cloud:8884/mqtt', options);

// prints a received message
    client.on('message', function(topic: any, message: any) {
        console.log(String.fromCharCode.apply(null, message)); // need to convert the byte array to string
    });

// reassurance that the connection worked
    client.on('connect', () => {
        console.log('Connected!');
    });

// prints an error message
    client.on('error', (error: any) => {
        console.log('Error:', error);
    });

// subscribe and publish to the same topic
    client.subscribe('messages');

    const test = (): void =>{
        client.subscribe('messages');
        client.publish('messages', 'Clicking!');
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <h1>Controle de LED</h1>
            <button onClick={test}>Test server</button>
        </div>
    )
}