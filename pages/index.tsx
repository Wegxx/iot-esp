import LEDButton from '../components/LEDButton'
import mqtt, {IClientOptions} from "mqtt";

export default function Home() {
    const options :IClientOptions= {
        host: '79642a966da549118f1128bb058d42ce.s2.eu.hivemq.cloud',
        port: 8883,
        protocol: 'mqtts',
        username: 'gio.nacimento',
        password: 'Gio133ebu'
    }

// connect to your cluster, insert your host name and port
    const client = mqtt.connect(options);

// prints a received message
    client.on('message', function(topic: any, message: any) {
        console.log(String.fromCharCode.apply(null, message)); // need to convert the byte array to string
    });

// reassurance that the connection worked
    client.on('connect', () => {
        console.log('Connected!');
        client.publish('messageTx', 'Hello, this message was received from the app!', (error: any) => {
            if(error){
                console.log(error)
            }
        });
    });

    client.on('disconnect', () => {
        console.log('Disconnect!');
    });

    client.on(' ', () => {
        console.log('Disconnect!');
    });

// prints an error message
    client.on('error', (error: any) => {
        console.log('Error:', error);
    });

// subscribe and publish to the same topic


        const test = (): void =>{
            client.publish('messageTx', 'Hello, this message was received from the app!', (error: any) => {
                if(error){
                    console.log(error)
                }
            });
        }

  return (
      <div className='flex justify-center items-center flex-col'>
        <h1>Controle de LED</h1>
          <button onClick={() => test()}>Test server</button>
      </div>
  )
}
