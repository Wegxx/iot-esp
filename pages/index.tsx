import {Button, Typography} from "@material-tailwind/react";
import Image from "next/image";
import Feeder from "/resources/Screenshot at Apr 18 22-08-55.png"
import {ISkill} from "@/type";
import Bar from "@/components/Bar";
import Pet from "/resources/petRobot.png"

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

    const sendTestMessage = (): void =>{
        client.subscribe('messages');
        client.publish('messages', 'Clicking!');
    }

    const level: ISkill = {
        name: "Ração",
        level: "80%"
    }

    return (
        <div className='flex flex-col bg-white m-10 rounded-xl p-10'>
            <div className={"flex flex-row justify-between"}>
                <Typography variant="h5">
                    Feeder-Robot
                </Typography>
                <Button>Go to Shop</Button>
            </div>
            <div className={"flex flex-row justify-between px-40 py-6"}>
                <div>
                    <Typography variant="lead" className="text-6xl text-blue-600">
                        Do not
                    </Typography>
                    <Typography variant="lead" className="text-6xl">
                        forget about
                    </Typography>
                    <Typography variant="lead" className="text-6xl">
                        your pets
                    </Typography>
                </div>
                <div className="w-1/3">
                    <Typography variant="h6">
                        Friendship is priceless
                    </Typography>
                    <Typography variant="paragraph">
                        Feeder-Robot is a must-have for all pet owners. There are many smart pet feeders on the market,
                        but many lack the sophistication and features of the Feeder-Robot such as battery backups and
                        an intelligent food dispensing system. Test our demo bellow:
                    </Typography>
                </div>
            </div>
            <div className={"flex flex-row justify-between px-40 py-10"}>
                <div className="flex flex-row">
                    <Bar data={level}/>
                    <Image width={300} src={Feeder} alt="feeder"/>
                </div>
                <Image width={500} src={Pet} alt="petRobot"/>
            </div>
        </div>
    )
}