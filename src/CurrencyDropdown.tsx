import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const currs = JSON.parse(
  '["USD","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"]'
    );

export function CurrencyDropdown({curr, setCurr}:{curr:string, setCurr:React.Dispatch<React.SetStateAction<number>>}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>{curr}</Button>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control onChange={(e)=>setInputValue((e.target as HTMLInputElement).value)}></Form.Control>
            <br/>
            <div className="d-grid gap-2">
                {currs.map((item:string,i:number)=>{
                    if(!item.includes(inputValue)) return
                    return <Button id={item} style={{color:"black"}} onClick={(e)=>{
                        setCurr(currs.indexOf((e.target as HTMLButtonElement).id))
                        setShow(false)
                    }} key={i} variant="outline-light"> {item} </Button>
                })}
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
