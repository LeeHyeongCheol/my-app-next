import { Header } from "semantic-ui-react";
import Image from 'next/image'
import Gnd from "./Gnd";

export default function Top () {
    return (
        <div>
            <div style={{display:"flex", paddingTop:20}}>
                <div style={{flex:"100px 0 0"}}>
                <Image src="/images/logo.png" alt="logo" width={500} height={500}/>
                </div>
                <Header as="h1" style={{paddingTop:30,paddingLeft:50}}>코딩코딩</Header>   
            </div>
            <Gnd/>
        </div>
    );
}