import React, { useState } from "react";
import {Button, Typography} from "@material-tailwind/react";
import Image from "next/image";
import Feeder from "/resources/Screenshot at Apr 18 22-08-55.png"
import {ISkill} from "@/type";
import Bar from "@/components/Bar";
import Pet from "/resources/petRobot.png"
import type { Dayjs } from 'dayjs';
import { TimePicker } from 'antd';

export default function Home() { 
    const [monTime1, setMonTime1] = useState<Dayjs | null>( null )
    const [monTime2, setMonTime2] = useState<Dayjs | null>( null )
    const [tueTime1, setTueTime1] = useState<Dayjs | null>( null )
    const [tueTime2, setTueTime2] = useState<Dayjs | null>( null )
    const [wedTime1, setWedTime1] = useState<Dayjs | null>( null )
    const [wedTime2, setWedTime2] = useState<Dayjs | null>( null )
    const [thuTime1, setThuTime1] = useState<Dayjs | null>( null )
    const [thuTime2, setThuTime2] = useState<Dayjs | null>( null )
    const [friTime1, setFriTime1] = useState<Dayjs | null>( null )
    const [friTime2, setFriTime2] = useState<Dayjs | null>( null )
    const [satTime1, setSatTime1] = useState<Dayjs | null>( null )
    const [satTime2, setSatTime2] = useState<Dayjs | null>( null )
    const [sunTime1, setSunTime1] = useState<Dayjs | null>( null )
    const [sunTime2, setSunTime2] = useState<Dayjs | null>( null )

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
        level: "40%"
    }

    return (
        <div className="flex flex-col bg-white m-5 md:m-10 rounded-xl p-5 md:p-10">
    <div className="flex flex-row justify-center">
        <h5 className="text-lg md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-cyan-500 text-transparent bg-clip-text">PET FEEDER</h5>
    </div>
        
    <div className="flex flex-col md:flex-row justify-between md:px-40 md:py-6">
        <div className="mb-5 md:mb-0"> 
            <Typography variant="lead" className="text-3xl md:text-6xl text-blue-600 leading-tight">
                Do not
            </Typography>
            <Typography variant="lead" className="text-3xl md:text-6xl">
                forget about
            </Typography>
            <Typography variant="lead" className="text-3xl md:text-6xl">
                your pets
            </Typography>
            <Button className="text-sm md:text-base m-5">Go to Shop</Button>
        </div>
        <div className="w-full md:w-1/3">
            <h6 className="text-base md:text-lg font-bold">Friendship is priceless</h6>
            <p className="text-sm md:text-base leading-relaxed">
                Feeder-Robot is a must-have for all pet owners. There are many smart pet feeders on the market,
                but many lack the sophistication and features of the Feeder-Robot such as battery backups and
                an intelligent food dispensing system. Test our demo below:
            </p>
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        <div className="flex flex-col m-5">
            <Button variant="text"> Monday </Button> 
            <TimePicker className="mb-4" format="HH:mm" value={monTime1} onChange={(e) => setMonTime1(e)} onSelect={(e) => setMonTime1(e)} />
            <TimePicker className="mb-4" format="HH:mm" value={monTime2} onChange={(e) => setMonTime2(e)} onSelect={(e) => setMonTime2(e)} />
        </div>
        <div className="flex flex-col m-5">
            <Button variant="text"> Tuesday </Button> 
            <TimePicker className="mb-4" format="HH:mm" value={tueTime1} onChange={(e) => setTueTime1(e)} onSelect={(e) => setTueTime1(e)} />
            <TimePicker className="mb-4" format="HH:mm" value={tueTime2} onChange={(e) => setTueTime2(e)} onSelect={(e) => setTueTime2(e)} />
        </div>
        <div className="flex flex-col m-5">
            <Button variant="text"> Wednesday </Button> 
            <TimePicker className="mb-4" format="HH:mm" value={wedTime1} onChange={(e) => setWedTime1(e)} onSelect={(e) => setWedTime1(e)} />
            <TimePicker className="mb-4" format="HH:mm" value={wedTime2} onChange={(e) => setWedTime2(e)} onSelect={(e) => setWedTime2(e)} />
        </div>
        <div className="flex flex-col m-5"> 
            <Button variant="text"> Thursday </Button> 
            <TimePicker className="mb-4" format="HH:mm" value={thuTime1} onChange={(e) => setThuTime1(e)} onSelect={(e) => setThuTime1(e)} />
            <TimePicker className="mb-4" format="HH:mm" value={thuTime2} onChange={(e) => setThuTime2(e)} onSelect={(e) => setThuTime2(e)} />
        </div>
        <div className="flex flex-col m-5">
            <Button variant="text"> Friday </Button> 
            <TimePicker className="mb-4" format="HH:mm" value={friTime1} onChange={(e) => setFriTime1(e)} onSelect={(e) => setFriTime1(e)} />
            <TimePicker className="mb-4" format="HH:mm" value={friTime2} onChange={(e) => setFriTime2(e)} onSelect={(e) => setFriTime2(e)} />
        </div>
        <div className="flex flex-col m-5">
            <Button variant="text"> Saturday </Button> 
            <TimePicker className="mb-4" format="HH:mm" value={satTime1} onChange={(e) => setSatTime1(e)} onSelect={(e) => setSatTime1(e)} />
            <TimePicker className="mb-4" format="HH:mm" value={satTime2} onChange={(e) => setSatTime2(e)} onSelect={(e) => setSatTime2(e)} />
        </div>
        <div className="flex flex-col m-5">
            <Button variant="text"> Sunday </Button> 
            <TimePicker className="mb-4" format="HH:mm" value={sunTime1} onChange={(e) => setSunTime1(e)} onSelect={(e) => setSunTime1(e)} />
            <TimePicker className="mb-4" format="HH:mm" value={sunTime2} onChange={(e) => setSunTime2(e)} onSelect={(e) => setSunTime2(e)} />
        </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between md:px-40 md:py-10">
        <div className="flex flex-col md:flex-row items-center md:w-2/3">
            <div className="w-full md:w-1/2 flex flex row">
                <Bar data={level}/>
                <Image className="w-full" src={Feeder} alt="feeder"/>
            </div>
        </div>
        <div className="md:w-1/3">
            <Image className="w-full mt-5 md:mt-0" src={Pet} alt="petRobot"/>
        </div>
    </div>
</div>

    )
}